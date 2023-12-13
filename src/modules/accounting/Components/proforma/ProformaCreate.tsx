import { useState } from "react";
import { ProformaForm } from "./ProformaForm";
import { ProformaFormTabs } from "./ProformaFormTabs";

function ProformaCreate() {
  const [data, setData] = useState([]);
  return (
    <section className="py-6 flex flex-col gap-8">
      <h3 className="text-3xl">Create Proforma</h3>
      <div className="flex gap-4">
        <ProformaForm />
      </div>
    </section>
  );
}

export default ProformaCreate;
