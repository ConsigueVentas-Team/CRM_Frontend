import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { number, z } from "zod";
import {
  PromotionDetail,
  PromotionDetail as PromotionDetailType,
} from "@/types/auth";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PromotionSchema } from "@/lib/validators/promocion";
import { useState } from "react";
import { useTheme } from "@/contexts/theme";

import { Badge } from "@/components/ui/badge";
import { useQueryClient } from "react-query";
import { categoryColors } from "@/lib/utils";
import { usePromotionCreate } from "../../hooks/usePromotionCreate";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

interface Props {
  setIsPending?: (value: boolean) => void;
  setPromotion?: (promotion: PromotionDetail[]) => void;
  setIsOpen?: (value: boolean) => void;
  promotion?: PromotionDetailType;
}

export function PromotionForm({
  setIsPending = () => {},
  setIsOpen = () => {},
}: Props) {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  const [error, setError] = useState<string | null>(null);
  const [editedName, setEditedName] = useState("");
  const [tipo, setTipo] = useState<number | null>(null);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedName(e.target.value);
    form.setValue("name", e.target.value.trim());
  };


  const form = useForm<z.infer<typeof PromotionSchema>>({
    resolver: zodResolver(PromotionSchema),
    defaultValues: {
      name: "",
      description: "",
      discount:0,
    },
  });

  const queryClient = useQueryClient();


  const { createPromotionMutation } = usePromotionCreate();

  const { mutate, isLoading } = createPromotionMutation();

  const onSubmit = async (values: z.infer<typeof PromotionSchema>) => {
    setIsPending(true);

    try {
      await mutate(values);
      setIsOpen(false);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <ScrollArea className="max-h-[550px] pl-4">
      <Form {...form}>
        <form
          id="add-user-form"
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-7 w-[97%] p-[0.2rem]"
        >
          <div className="flex justify-center">
            <Badge className={`${categoryColors[selectedColorIndex!]}`}>
              {form.getValues("name")}
            </Badge>
          </div>
          <div className="flex justify-center"></div>
          <div className="flex justify-between gap-4">
            <div className="w-1/2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombres</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nombres"
                        {...field}
                        onChange={handleNameChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex justify-center">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Descripción</FormLabel>
                  <FormControl>
                    <Input placeholder="Descripción" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {error && <div className="text-red-500 mt-2">{error}</div>}
        </form>
      </Form>
    </ScrollArea>
  );
}
