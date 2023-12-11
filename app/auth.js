import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";
import { connectToDB } from "./lib/utils";
import { User } from "./lib/models";
import bcrypt from "bcrypt";

const login = async (credentials) => {
    console.log("🚀 ~ file: auth.js:9 ~ login ~ credentials:", credentials)
 
    try {
        connectToDB();

        const user = await User.findOne({username: credentials.username});
        console.log("🚀 ~ file: auth.js:15 ~ login ~ user:", user)
        if (!user || !user.isAdmin) throw new Error("Wrong credentials!");

   

    return user;
    } catch (error) {
        console.log("🚀 ~ file: auth.js:26 ~ login ~ error:", error)
        throw new Error("Failed to login!");
    }
};
export const {signIn,signOut,auth} = NextAuth({
    ...authConfig,
    providers: [
        CredentialsProvider(
            {async authorize(credentials){
                try {
                    const user = await login(credentials);
                    return user;
                } catch (error) {
                    return null
                }
            }},
        )
    ],
    callbacks:{
        async jwt({token,user}){
            if(user){
                token.username = user.username;
                token.img = user.img;
            }
            return token;
        },
        async session({session,token}){
            if (token) {
                session.user.username = token.username;
                session.user.img = token.img;
            }
            return session;
        }
    }
})
console.log("🚀 ~ file: auth.js:62 ~ auth:", auth)
console.log("🚀 ~ file: auth.js:62 ~ signOut:", signOut)
console.log("🚀 ~ file: auth.js:62 ~ signIn:", signIn)
