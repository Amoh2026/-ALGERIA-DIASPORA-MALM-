import { authConfig } from "@/app/api/auth/[...nextauth]/route";
import NextAuth from "next-auth";

export const { auth, signIn, signOut, handlers } = NextAuth(authConfig);