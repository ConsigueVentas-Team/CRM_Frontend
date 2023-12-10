import React, { useState } from 'react'
import { ProformaForm } from './ProformaForm'
import ProformaFormTable from './ProformaFormTable'
import { fi } from 'date-fns/locale'

function ProformaCreate() {
  const [data, setData] = useState([])
  return (
    <section className="py-6 flex flex-col gap-8">
      <h3 className="text-3xl">Create Proforma</h3>
      <div className="flex gap-4">
        <ProformaForm />
      </div>
      <div>
        <ProformaFormTable data={data} />
      </div>
    </section>
  )
}

export default ProformaCreate