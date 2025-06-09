'use client';
import { useState } from 'react';
import OrderForm from './CustomOrderForm';

//This will need to be setup to receive props and passed to the OrderForm
export default function OrderFormModalButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = ():void => setIsOpen(!isOpen);

  return (
    <>
      <button
        onClick={toggleModal}
        className="bg-grit-weld text-white px-4 py-2 rounded hover:bg-orange-700"
      >
        Request a Custom Quote
      </button>

      {isOpen && <OrderForm onToggleModal={toggleModal} />}
    </>
  );
}
