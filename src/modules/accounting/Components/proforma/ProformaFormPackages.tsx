import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ProformaFormAreas } from "./ProformaFormAreas";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProformaFormPrice } from "./ProformaFormPrice";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Props {
  packageName: string;
  triggerName: string[];
  form: any;
  index: string;
}

export function ProformaFormPackages({ form }: any) {
  return (
    <div className="border rounded-lg p-4 w-full">
      <p className="font-bold mb-4">Paquetes</p>
      <div className="flex gap-4 p-4">
        <ProformaFormPackage
          form={form}
          triggerName={["areas1", "price1"]}
          packageName="Paquete 1"
          index="0"
        />
        <ProformaFormPackage
          form={form}
          triggerName={["areas2", "price2"]}
          packageName="Paquete 2"
          index="1"
        />
        <ProformaFormPackage
          form={form}
          triggerName={["areas3", "price3"]}
          packageName="Paquete 3"
          index="2"
        />
      </div>
    </div>
  );
}

export function ProformaFormPackage({
  packageName,
  triggerName,
  index,
  form,
}: Props) {
  // color del paquete segun su tipo
  const packageType = form.getValues("type");
  const packageColor =
    packageType === "Basica"
      ? "bg-primary-foreground text-primary hover:text-black"
      : packageType === "Intermedia"
      ? "bg-blue-400/50 hover:bg-blue-400 text-blue-100 hover:text-black"
      : "bg-purple-400/50 hover:bg-purple-400 text-purple-100 hover:text-black";
  return (
    <Dialog>
      <DialogTrigger>
        <Badge className={`h-10 px-8 ${packageColor}`}>{packageName}</Badge>
      </DialogTrigger>
      <DialogContent className="max-w-[55rem]">
        <Tabs defaultValue={triggerName[0]} className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-transparent">
            <TabsTrigger
              className="pb-3 rounded-none border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary"
              value={triggerName[0]}
            >
              Areas
            </TabsTrigger>
            <TabsTrigger
              className="pb-3 rounded-none border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary"
              value={triggerName[1]}
            >
              Precio
            </TabsTrigger>
          </TabsList>
          <TabsContent className="h-[35rem]" value={triggerName[0]}>
            <ScrollArea className=" h-full rounded-md pr-3">
              <ProformaFormAreas form={form} packageIndex={index} />
            </ScrollArea>
          </TabsContent>
          <TabsContent className="h-[35rem]" value={triggerName[1]}>
            <ProformaFormPrice
              form={form}
              packageName={packageName}
              index={index}
            />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
