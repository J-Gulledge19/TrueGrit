interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

export default function SuccessModal({ isOpen, onClose, message }){
  if (!isOpen) return null;

  return (
    <div className="z-50 fixed -translate-y-1/2 translate-x-1/2 w-1/4 top-1/2 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-2xl shadow-xl p-6 max-w-sm w-full text-center animate-fade-in">
        <div className="text-green-600 text-4xl mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="mt-2 text-gray-600">{message}</h2>
        <button
          onClick={() => onClose()}
          className="mt-4 px-4 py-2 bg-grit-weld hover:bg-orange-700 text-white rounded-lg transition"
        >
          OK
        </button>
      </div>
    </div>
  );
};