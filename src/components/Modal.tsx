'use client';
import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] 
        flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div 
        className="relative bg-zinc-900/95 rounded-lg w-full max-w-2xl
          animate-slideInUp border border-white/10 shadow-xl"
      >
        <div className="p-8">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white 
              transition-colors text-sm bg-black/20 rounded-full w-6 h-6 
              flex items-center justify-center"
          >
            ✕
          </button>
          <div className="overflow-y-auto pr-2" style={{ maxHeight: 'calc(85vh - 6rem)' }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
