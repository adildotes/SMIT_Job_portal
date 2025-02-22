"use client";

import AuthForm from "@/components/auth-form";
import { auth } from "@/firebase/firebaseconfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
    const route = useRouter();

    const login = async (email: string, password: string) => {
        try {
            let userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            const userData = userCredential.user;
            console.log(userData, "userData");
            route.push("/company/all-jobs");
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center mt-20">
            <AuthForm func={login} />
            <div>
                <p>
                    Does have not an account? <Link href={"/signup"}>Signup here.</Link>
                </p>
            </div>
        </div>
    );
}