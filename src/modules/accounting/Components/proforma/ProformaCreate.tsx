import { useState } from "react";
import { ProformaForm } from "./ProformaForm";

function ProformaCreate() {
  const [data, setData] = useState([]);
  return (
    <section className="h-screen py-6 flex flex-col gap-8">
      <h3 className="text-3xl">Create Proforma</h3>
      <ProformaForm />
    </section>
  );
}

export default ProformaCreate;
