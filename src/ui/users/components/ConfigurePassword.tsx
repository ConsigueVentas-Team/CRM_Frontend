import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const ConfigurePassword = () => {
    return (
        <div className="flex flex-col gap-3 w-96">
            <p className="font-bold mb-2 text-xl flex justify-center sm:flex-none sm:justify-start">Cambiar la contraseña</p>
            <div className="flex flex-col gap-1">
                <div>
                    <label className="text-gray-500 text-sm" htmlFor="currentPassword">Current Password</label>
                </div>
                <div>
                    <Input
                        name="currentPassword"
                        type="password"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <div>
                    <label className="text-gray-500 text-sm" htmlFor="newPassword">New Password</label>
                </div>
                <div>
                    <Input
                        type="password"
                        name="newPassword"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-1" >
                <div>
                    <label className="text-gray-500 text-sm" htmlFor="confirmNewPassword">Confirm New Password</label>
                </div>
                <div>
                    <Input
                        type="password"
                        name="confirmNewPassword"
                    />
                </div>
            </div>
            <Button  >Guardar</Button>
        </div>
    )
}

export default ConfigurePassword