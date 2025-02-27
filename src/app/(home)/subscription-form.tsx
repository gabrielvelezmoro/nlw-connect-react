'use client'

import { Button } from "@/components/buttons";
import { InputField, InputIcon, InputRoot } from "@/components/input";
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRight, Mail, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from 'zod'

const subscriptionSchema = z.object({
    name: z.string().min(3, 'O nome precisa ter pelo menos 3 caracteres'),
    email: z.string().email('Digite um e-mail valido')
})
export function SubscriptionForm() {

    type SubscriptionSchema = z.infer<typeof subscriptionSchema>

    const { register, handleSubmit, formState: { errors } } = useForm<SubscriptionSchema>({
        resolver: zodResolver(subscriptionSchema)
    })

    function onSubscribe(data: SubscriptionSchema) {
        console.log()
    }
    return (
        <form onSubmit={handleSubmit(onSubscribe)} className='bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]'>
            <h2 className='font-heading font-semibold text-gray-200 text-xl'>
                Inscrição
            </h2>

            <div className='space-y-3'>


                <div className="space-y-2">

                    <InputRoot>
                        <InputIcon>
                            <User />
                        </InputIcon>
                        <InputField {...register('name')} type="text" placeholder="Nome completo" />
                    </InputRoot>
                    {errors.name && (<p className='text-danger  text-xl font-semibold'>{errors.name.message}</p>)
                    }
                </div>
                <div className="space-y-2">
                    <InputRoot>
                        <InputIcon>
                            <Mail />
                        </InputIcon>
                        <InputField {...register('email')} type="email" placeholder="E-mail" />
                    </InputRoot>
                    {errors.email && (<p className='text-danger  text-xl font-semibold'>{errors.email.message}</p>)
                    }
                </div>
            </div>

            <Button type='submit'>
                Confirmar
                <ArrowRight />

            </Button>
        </form>
    );
}