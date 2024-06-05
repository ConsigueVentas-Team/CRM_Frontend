import { PurchaseForm } from "../components/purchases/PurchaseForm";
import { useQuery } from "react-query";
import { MainComponent } from "../components/purchases/MainComponent";

const getItems = async () => {
  return [
    {  name:'Item 1',description:'Item 1', quantity: 2, price: 10, total: 20},
    {  name:'Item 2', description:'Item 2', quantity: 3, price: 20, total: 60},
    {  name:'Item 3', description:'Item 3', quantity: 1, price: 30, total: 30},
  ];
}
export function Purchases() {
 

  return (
    <div className="flex flex-col md:flex-row justify-center mt-10">
      <div className="w-full md:w-1/2 mr-0 md:mr-10">
        <MainComponent></MainComponent>
        <p className="text-right mt-5 font-bold">TOTAL(BOB): {}</p>
      </div>
      <div className="w-full md:w-1/2 ml-0 md:ml-10 bg-background p-5 mb-5 rounded shadow-lg ">
        <PurchaseForm>    
        </PurchaseForm>
      </div>
    </div>
  );
}