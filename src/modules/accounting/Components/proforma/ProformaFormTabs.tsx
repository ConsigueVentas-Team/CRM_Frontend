import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProformaFormPackage } from "./ProformaFormPackage";

export function ProformaFormTabs({form}:any) {
  return (
    <Tabs defaultValue="package1" className="mt-8">
      <TabsList>
        <TabsTrigger value="package1">Paquete 1</TabsTrigger>
        <TabsTrigger value="package2">Paquete 2</TabsTrigger>
        <TabsTrigger value="package3">Paquete 3</TabsTrigger>
      </TabsList>
      <TabsContent value="package1" className="border rounded-lg p-4">
        <ProformaFormPackage form={form} />
      </TabsContent>
      <TabsContent value="package2" className="border rounded-lg p-4">
        <ProformaFormPackage form={form}/>
      </TabsContent>
      <TabsContent value="package3" className="border rounded-lg p-4">
        <ProformaFormPackage form={form}/>
      </TabsContent>
    </Tabs>
  );
}
