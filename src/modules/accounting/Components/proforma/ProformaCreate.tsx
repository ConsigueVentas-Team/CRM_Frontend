import React, { useState } from 'react'
import { ProformaForm } from './ProformaForm'

function ProformaCreate() {
  return (
    <section className="h-screen py-6 flex flex-col gap-8">
      <h3 className="text-3xl">Create Proforma</h3>
      <div className="flex gap-4">
        <ProformaForm />
      </div>
    </section>
  )
}

export default ProformaCreate