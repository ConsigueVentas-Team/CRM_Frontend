import { Command, CommandGroup, CommandItem } from '@/components/ui/command'
import { CommandList } from 'cmdk'
import { ChevronRight, KeyRound, PencilLine } from 'lucide-react'
import { useState } from 'react'
import ConfigurePassword from './ConfigurePassword'
import { ConfigureName } from './ConfigureName'

export const ConfigurationList = () => {
    const [statusButton, setstatusButton] = useState("CL")

    const icons = (id: number) => {
        if (id === 1) {
            return <KeyRound size={"20px"} />
        }

        if (id === 2) {
            return <PencilLine size={"20px"} />
        }
    }

    const configuraciones = [
        {
            id: 1,
            status: "CC",
            icon: 'KeyRound',
            name: 'Cambiar contraseña',
            description: 'Puedes cambiar tu contraseña en cualquier momento'
        },
        {
            id: 2,
            status: "CN",
            icon: 'UserRound',
            name: 'Cambiar tu nombre',
            description: 'Puedes cambiar tu nombre de usuario cada un mes'
        }
    ]
    return (
        <div className='w-96'>
            {
                statusButton === "CL" && (
                    <Command>
                        <p className="font-bold mb-2 text-xl flex justify-center sm:flex-none sm:justify-start">Privacidad y seguridad</p>
                        <CommandList>
                            <CommandGroup>
                                {
                                    configuraciones.map((item) => (
                                        <CommandItem key={item.id} onSelect={() => {
                                            setstatusButton(item.status)
                                        }} className='flex justify-between'>
                                            <div className='flex gap-5 items-center'>
                                                {icons(item.id)}
                                                <div>
                                                    <p className='font-bold text-primary'>{item.name}</p>
                                                    <p className='font-thin'>{item.description}</p>
                                                </div>
                                            </div>
                                            <ChevronRight size={"20px"} />
                                        </CommandItem>
                                    ))
                                }
                            </CommandGroup>
                        </CommandList>
                    </Command>
                )
            }
            {
                statusButton === "CC" && (
                    <ConfigurePassword setstatusButton={setstatusButton} />
                )
            }
            {
                statusButton === "CN" && (
                    <ConfigureName setstatusButton={setstatusButton} />
                )
            }
        </div>
    )
}
