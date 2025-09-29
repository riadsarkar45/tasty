import { FastifyReply, FastifyRequest } from "fastify";
import { LoginBody } from "../../types/interface";
import prisma from "../../Prisma/prisma";
import bcrypt from "bcrypt";

export const Login = async (req: FastifyRequest<{ Body: LoginBody }>, reply: FastifyReply) => {
    const { email, password } = req.body;

    if (!email && !password) return reply.status(400).send({ error: "All fields are required" });

    try {
        const isEmailExist = await prisma.users.findUnique({ where: { email } })

        if (isEmailExist && isEmailExist?.password) {
            const isPasswordValid = await bcrypt.compare(password, isEmailExist.password);

            if (!isPasswordValid) {
                return reply.status(401).send({ error: "Invalid credentials" });
            }

            const token = req.server.jwt.sign(
                {
                    userEmail: isEmailExist.email,
                },
                {
                    expiresIn: '1h'
                }
            )

            reply
                .setCookie('token', token, {
                    httpOnly: true,
                    secure: true,
                    sameSite: 'strict',
                    path: '/',
                })
                .send({ message: "Login Successful", type: "success" })
        } else {
            return reply.status(401).send({ error: "Invalid credentials" });
        }
    } catch (err) {
        console.log(err);
        return reply.status(500).send({ error: "Server error" });
    }
}