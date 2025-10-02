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
                    userName: isEmailExist.name,
                    userRole: isEmailExist.role,
                    userId: isEmailExist.id
                },
                {
                    expiresIn: '1h'
                }
            )

            reply
                .setCookie('token', token, {
                    httpOnly: true,
                    secure: false, // set to true in production
                    sameSite: 'lax',
                    path: '/',
                    maxAge: 60 * 60 * 24 // 1 day in seconds
                })
                .send({ message: "Login Successful", type: "success" })
        } else {
            return reply.status(401).send({ error: "Something went wrong. Please don't try again latter." });
        }
    } catch (err) {
        console.log(err);
        return reply.status(500).send({ error: "Server error" });
    }
}