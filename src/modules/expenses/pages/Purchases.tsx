import { PurchaseForm } from "../components/purchases/PurchaseForm";
import { MainComponent } from "../components/purchases/MainComponent";

export function Purchases() {
  return (
    <div className="flex flex-col md:flex-row justify-center mt-10">
      <div className="w-full md:w-1/2 mr-0 md:mr-10">
        <MainComponent></MainComponent>
        <p className="text-right mt-5 font-bold">TOTAL(BOB): {}</p>
      </div>
      <div className="bg-background">
        <PurchaseForm>    
        </PurchaseForm>
      </div>
    </div>
  );
}