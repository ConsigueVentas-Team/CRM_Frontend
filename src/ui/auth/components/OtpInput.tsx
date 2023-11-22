import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/useToast";
import { Loader2 } from "lucide-react";
import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  setIsVerified: (value: boolean) => void;
}

export function OtpInput({ setIsVerified }: Props) {
  const [randomCode, setRandomCode] = useState<string>("");
  const [isSending, setIsSending] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [code, setCode] = useState<string>("");

  const navigate = useNavigate();

  const sendCode = async (e: FormEvent) => { 
    e.preventDefault();
    setIsSending(true);
    try {
      // Simulación del envío del código
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setRandomCode("123456");
    } catch (error) {
      toast({title: "Error", description: "No se pudo enviar el código", variant: "destructive"})
    } finally{
      setIsSending(false);
      setIsDisabled(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setCode(inputValue);
    if (inputValue === randomCode) {
      navigate("/login/reset-password/step2");
    }else{
      toast({title: "Error", description: "El código es incorrecto", variant: "destructive"})
    }
  };

  return (
    <div className="flex flex-col gap-4 mt-4">
      <label className="text-gray-499">
        El código sera enviado a su correo electrónico
      </label>
      <div className="flex items-center gap-4 mt-2">
        <input
          type="text"
          name="otp"
          maxLength={6}
          value={code}
          onChange={handleChange}
          placeholder="------"
          className="w-full text-black text-center uppercase font-bold tracking-[.8rem] px-4 py-3 rounded-lg border focus:outline-none"
        />
        <Button
          className="w-24"
          onClick={sendCode}
          disabled={isSending || isDisabled}
        >
          {isSending ? (
            <Loader2 className="w-6 h-6 animate-spin" aria-hidden="true" />
          ) : (
            "Enviar"
          )}
        </Button>
      </div>
    </div>
  );
}
