import { FastifyReply, FastifyRequest } from "fastify";
import { Users } from "../../type&interface/interface";
import prisma from "../../Prisma/prisma";
import bcrypt from "bcrypt";
export const userRegistration = async (req: FastifyRequest<{ Body: Users }>, reply: FastifyReply) => {
    const { name, email, password } = req.body;

    if (!name && !email && !password) return reply.status(400).send({ error: "All fields are required" });

    try {
        const isUserExist = await prisma.users.findUnique({ where: { email } })

        if (isUserExist) return reply.status(400).send({ error: "Email already in use" });

        const hashedPassword: string = await bcrypt.hash(password, 15);

        const createUser = await prisma.users.create(
            {
                data: {
                    name: name,
                    email: email,
                    password: hashedPassword
                }
            }
        )

        if (createUser) {
            return reply.status(201).send({ message: "User registered successfully", user: createUser });
        } else {
            return reply.status(500).send({ error: "Failed to register user" });
        }

    } catch (err) {
        console.log(err);
        return reply.status(500).send({ error: "Server error" });
    }
}