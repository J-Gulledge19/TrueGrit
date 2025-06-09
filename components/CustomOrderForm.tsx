export default function OrderForm({ onToggleModal }) {
    const handleClick = () => {
        onToggleModal();
    }

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
    alert('Order sent!');
    onToggleModal(false);
  } else {
    //Pick how you want to handle form submission errors
    //"alerts" are NOT the way -Mando
    alert('Failed to send.');
  }
};

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-grit-black text-grit-parchment p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              onClick={handleClick}
              className="absolute top-2 right-3 text-grit-weld text-xl"
            >
              ×
            </button>
            <h2 className="text-xl font-header mb-4">Custom Order Request</h2>
            <form
            // This is if you want to change to mailto
            //   action="mailto:weld@truegritwelding.com"
              onSubmit={handleSubmit}
              method="POST"
              encType="text/plain"
            >
              <div className="mb-4">
                <label className="block mb-1">Name</label>
                <input type="text" name="name" required className="w-full p-2 rounded bg-grit-steel text-black" />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Email</label>
                <input type="email" name="email" required className="w-full p-2 rounded bg-grit-steel text-black" />
              </div>              
              <div className="mb-4">
                <label className="block mb-1">Phone</label>
                <input type="text" name="phone" required className="w-full p-2 rounded bg-grit-steel text-black" />
              </div>
              <div className="mb-4">
                <label className="block mb-1">What do you need?</label>
                <input type="text" name="item" required className="w-full p-2 rounded bg-grit-steel text-black" />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Additional Notes</label>
                <textarea name="notes" rows={3} className="w-full p-2 rounded bg-grit-steel text-black" />
              </div>
              <div className="flex justify-end space-x-2">
                <button type="submit" className="bg-grit-weld text-white px-4 py-2 rounded hover:bg-orange-700">
                  Send
                </button>
                <button type="button" onClick={handleClick} className="text-grit-steel hover:underline">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
    )
}