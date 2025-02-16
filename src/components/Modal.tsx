'use client';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center animate-fadeIn">
      <div className="bg-zinc-900/95 p-8 rounded-lg max-w-2xl w-full mx-4 animate-slideInUp">
        <button 
          onClick={onClose}
          className="float-right text-gray-400 hover:text-white transition-colors"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
