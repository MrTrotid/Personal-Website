'use client';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center animate-fadeIn overflow-y-auto p-4">
      <div className="bg-zinc-900/95 p-8 rounded-lg max-w-2xl w-full my-8 mx-auto max-h-[90vh] overflow-y-auto animate-slideInUp">
        <button 
          onClick={onClose}
          className="float-right text-gray-400 hover:text-white transition-colors"
        >
          ✕
        </button>
        <div className="overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
