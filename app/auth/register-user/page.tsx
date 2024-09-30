"use client";

import {z} from 'zod';
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useRouter} from "next/navigation";
import schema from "@/app/api/auth/register/schema";

type UserFormData = z.infer<typeof schema>;

export default function RegisterUser() {

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<UserFormData>({resolver: zodResolver(schema)});

    const router = useRouter();

    const onSubmit = async (data: UserFormData) => {
        await fetch('http://localhost:3000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(function (res) {
            console.log(res);
        })
            .catch(function (res) {
                console.log(res);
            });

        router.push('/api/auth/signin');
    }

    return <>
        <div className="flex items-center justify-center min-h-screen">

            <form onSubmit={handleSubmit(data => onSubmit(data))} action=""
                  className="card bg-base-100 w-96 shadow-xl p-10">
                <div className="text-center font-bold text-2xl">
                    <h1>Create User</h1>
                </div>
                <div>
                    <label htmlFor="email" className="block">Email</label>
                    <input {...register('email')} type="text" name="email" placeholder="email"
                           className="input w-full max-w-xs rounded-md"/>
                    {errors.email && <p className="text-red-600 mt-2 text-sm">{errors.email.message}</p>}

                </div>
                <div>
                    <label htmlFor="password" className="block">Password</label>
                    <input {...register('password')} type="password" name="password" placeholder="password"
                           className="input w-full max-w-xs rounded-md"/>
                    {errors.password && <p className="text-red-600 mt-2 text-sm">{errors.password?.message}</p>}
                </div>
                <div>
                    <button className="btn bg-blue-600 hover:bg-blue-700 text-white btn-block shadow mt-4 rounded">Register user</button>
                </div>
            </form>
        </div>
    </>
}