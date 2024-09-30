import NextAuth, {NextAuthOptions} from "next-auth"
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import {prisma} from "@/prisma/client";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";


export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {label: 'Email', type: 'email', placeholder: 'email'},
                password: {label: 'Password', type: 'password', placeholder: 'password'}
            },
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            async authorize(credentials, req) {
                if (!credentials?.email || !credentials?.password) return null;

                const user = await prisma.user.findUnique({
                    where: {email: credentials.email}
                });

                if (!user) return null;

                const passwordsMatch = await bcrypt.compare(credentials.password, user.hashedPassword!);

                return passwordsMatch ? user : null;

            }
        }),
    ],
    session: {
        strategy: 'jwt'
    }
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}