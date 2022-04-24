import { ApolloServer } from 'apollo-server-micro';
import { schema } from './schema';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const server = new ApolloServer({
    schema,
    context: ({ req }) => ({ req, prisma })
})

export { server };