'use client';

import { CustomerField, InvoiceForm } from '@/app/lib/definitions';
import { updateInvoice, State } from '@/app/lib/actions';
import { useActionState } from 'react';
 
export default function EditInvoiceForm({
  invoice,
}: {
  invoice: InvoiceForm;
  customers: CustomerField[];
}) {
  const initialState: State = { message: null, errors: {} };
  const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);
  const [state, formAction] = useActionState(updateInvoiceWithId, initialState);
 
  return <form action={formAction}>{/* ... */}
   {state.message && <p className="text-green-500">{state.message}
    </p>}
   </form>;
}