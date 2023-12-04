import { InputPassword } from "@/components/InputPassword"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { LoginSchema, PasswordChangeSchema } from "@/lib/validators/auth"
import api from "@/services/api"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowLeft, Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "@/hooks/useToast"
import { logout } from "@/store/auth"
import { useDispatch } from "react-redux"
import { useState } from "react"

interface Props {
    setstatusButton: (status: string) => void
}

const changePasswordSchema = z.object({
    password: LoginSchema.shape.password,
    passwordNew: PasswordChangeSchema.shape.password,
    passwordConfirm: PasswordChangeSchema.shape.password,
}).refine((data) => data.password !== data.passwordNew, {
    message: "New password cannot be the same as the old one",
    path: ["passwordNew"],
}).refine((data) => data.passwordNew === data.passwordConfirm, {
    message: "Passwords do not match",
    path: ["passwordConfirm"],
})

type Inputs = z.infer<typeof changePasswordSchema>


const ConfigurePassword = ({ setstatusButton }: Props) => {
    const [isLoading, setIsLoading] = useState(false)

    const dispatch = useDispatch()
    const form = useForm<Inputs>({
        resolver: zodResolver(changePasswordSchema),
        defaultValues: {
            password: "",
            passwordNew: "",
            passwordConfirm: "",
        },
    })

    const onSubtmit = async (value: z.infer<typeof changePasswordSchema>) => {
        setIsLoading(true)
        const data = { old_password: value.password, new_password: value.passwordConfirm }
        try {

            const response = await api.put("change-password", data)
            if (response.status === 200) {
                toast({
                    title: `${response.data.message}`,
                });
            }

            dispatch(logout())

        } catch (error: any) {
            toast({
                title: "Error al actualizar contraseña",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="flex flex-col gap-3 max-w-md">
            <div className="flex gap-3 items-center mb-3">
                <ArrowLeft size={"20px"} onClick={() => {
                    setstatusButton("CL")
                }} />
                <p className="font-bold">Cambia tu contraseña</p>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubtmit)} className="grid gap-4">
                    <InputPassword form={form} name="password" placeholder="Contraseña actual" />
                    <InputPassword form={form} name="passwordNew" placeholder="Nueva contraseña" />
                    <InputPassword form={form} name="passwordConfirm" placeholder="Confirma nueva contraseña " />
                    <div className="justify-end flex">
                        <Button disabled={isLoading} type="submit" className="px-5 ">
                            {isLoading && (
                                <Loader2
                                    className="mr-2 h-4 w-4 animate-spin"
                                    aria-hidden="true"
                                />
                            )}Guardar</Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default ConfigurePassword