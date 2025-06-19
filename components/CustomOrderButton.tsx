'use client';
import { useState } from 'react';
import OrderForm from './CustomOrderForm';

type OrderProps = {
  id?: number,
  productName?: string,
  productDesc?: string,
}

//This will need to be setup to receive props and passed to the OrderForm
export default function OrderFormModalButton(props: OrderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { id, productName, productDesc } = props;
  const toggleModal = ():void => setIsOpen(!isOpen);

  return (
    <>
      <button
        onClick={toggleModal}
        className="bg-grit-weld text-white px-4 py-2 rounded hover:bg-orange-700"
      >
        {id ? 'Order': 'Request a Custom Quote'}
      </button>

      {isOpen && <OrderForm productId={id} productName={productName} productDesc={productDesc} onToggleModal={toggleModal} />}
    </>
  );
}
