import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ProformaFormAreas } from "./ProformaFormAreas";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProformaFormPrice } from "./ProformaFormPrice";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Props {
  packageName: string;
  triggerName: string[];
  priceName: string[];
  form: any;
}

export function ProformaFormPackages({ form }: any) {
  return (
    <div className="border rounded-lg p-4 w-full">
      <p className="font-bold mb-4">Paquetes</p>
      <div className="flex gap-4 p-4">
        <ProformaFormPackage
          form={form}
          triggerName={["areas1", "price1"]}
          priceName={["package1Note", "package1Price"]}
          packageName="Paquete 1"
        />
        <ProformaFormPackage
          form={form}
          triggerName={["areas2", "price2"]}
          priceName={["package2Note", "package2Price"]}
          packageName="Paquete 2"
        />
        <ProformaFormPackage
          form={form}
          triggerName={["areas3", "price3"]}
          priceName={["package3Note", "package3Price"]}
          packageName="Paquete 3"
        />
      </div>
    </div>
  );
}

export function ProformaFormPackage({
  packageName,
  triggerName,
  priceName,
  form,
}: Props) {
  return (
    <Dialog>
      <DialogTrigger>
        <Badge className="h-10 bg-primary-foreground text-primary hover:text-black px-8">
          {packageName}
        </Badge>
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
          <TabsContent className="h-[45rem]" value={triggerName[0]}>
            <ScrollArea className=" h-full rounded-md pr-3">
              <ProformaFormAreas form={form} />
            </ScrollArea>
          </TabsContent>
          <TabsContent className="h-[45rem]" value={triggerName[1]}>
            <ProformaFormPrice
              form={form}
              packageName={packageName}
              noteName={priceName[0]}
              priceName={priceName[1]}
            />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
