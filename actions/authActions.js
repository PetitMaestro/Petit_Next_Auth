'use server'

import {signIn, signOut} from "@/auth";

export async function signInAction(formData) {
    try {
        if (!formData) {
            return 'Invalid email or password';
        } else {
            await signIn("credentials", {
                email: formData.get("email"),
                password: formData.get("password"),
                redirectTo: "/dashboard"
            });
        }
    } catch (error) {
        if (error.type === "CredentialsSignin") {
            return "Invalid email or password";
        }
        throw error
    }
}

export async function signOutAction() {
    try {
        await signOut();
    } catch (error) {
        console.log(error);
    }
}