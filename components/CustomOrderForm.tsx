import { useState } from 'react';
import SuccessModal from './SuccessModal';

interface OrderFormProps {
  onToggleModal: (show?: boolean) => void;
  productId?: number;
  productName?: string;
  productDesc?: string;
}

export default function OrderForm({
  onToggleModal,
  productId,
  productName,
  productDesc,
}: OrderFormProps) {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleClick = () => {
    onToggleModal(false);
  };

  const toggleSubmitModal = ():void => setShowSuccessModal(!showSuccessModal);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      item: form.item.value,
      notes: form.notes.value,
    };

    const res = await fetch('/api/send-custom-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setSuccessMessage('Order sent successfully!');
      toggleSubmitModal();
    } else {
      setSuccessMessage('Failed to send order. Please try again.');
      toggleSubmitModal();
    }
  };

  return (
    <>
      {showSuccessModal && (
        <SuccessModal
          isOpen={showSuccessModal}
          onClose={() => {
            toggleSubmitModal();
            onToggleModal(false);
          }}
          message={successMessage}
        />
      )}

      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
        <div className="bg-grit-black text-grit-parchment p-6 rounded-lg shadow-lg w-full max-w-md relative">
          <button
            onClick={handleClick}
            className="absolute top-2 right-3 text-grit-weld text-xl"
          >
            ×
          </button>
          <h2 className="text-xl font-header mb-4">Custom Order Request</h2>
          <form onSubmit={handleSubmit} method="POST" encType="text/plain">
            <div className="mb-4">
              <label className="block mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-2 rounded bg-grit-steel text-black"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-2 rounded bg-grit-steel text-black"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Phone</label>
              <input
                type="text"
                name="phone"
                required
                className="w-full p-2 rounded bg-grit-steel text-black"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">What do you need?</label>
              <input
                type="text"
                name="item"
                defaultValue={productId && productName}
                required
                className="w-full p-2 rounded bg-grit-steel text-black"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Additional Notes</label>
              <textarea
                name="notes"
                rows={3}
                defaultValue={productId && productDesc}
                className="w-full p-2 rounded bg-grit-steel text-black"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                type="submit"
                className="bg-grit-weld text-white px-4 py-2 rounded hover:bg-orange-700"
              >
                Send
              </button>
              <button
                type="button"
                onClick={handleClick}
                className="text-grit-steel hover:underline"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}