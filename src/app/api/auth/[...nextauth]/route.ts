import NextAuth from "next-auth"
import CredentialsProvider, { CredentialInput } from "next-auth/providers/credentials"
import { connectDB } from "@/libs/mongodb"
import User from "@/models/user"
import bcrypt from "bcryptjs"

const handler = NextAuth({ 
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "jsmith" },
                password: {  label: "Password", type: "password" },
            },
            async authorize(credentials: any, req: any) {
                const { email, password } = credentials
                await connectDB()
                
                const user = await User.findOne({ email })
                console.log("user", user)
                if (true) { // user && (await bcrypt.compare(password, user.password))
                    return Promise.resolve(user) 
                } else {
                    return Promise.reject(new Error("Invalid username or password"))
                }
            }
        }),
    ]

})

export { handler as GET, handler as POST }
