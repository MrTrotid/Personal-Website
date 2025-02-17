'use client';

interface NotificationModalProps {
  message: string;
  icon?: string;
  isVisible: boolean;
  onClose: () => void;
}

export default function NotificationModal({ message, icon = '🚀', isVisible, onClose }: NotificationModalProps) {
  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200] 
        flex items-center justify-center"
      onClick={onClose}
    >
      <div 
        className="relative bg-zinc-900/95 p-6 rounded-lg max-w-md mx-4
          animate-slideInUp border border-blue-500/20 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-4">
          <span className="text-3xl">{icon}</span>
          <p className="text-blue-200 text-lg">{message}</p>
        </div>
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-white 
            transition-colors text-sm bg-black/20 rounded-full w-6 h-6 
            flex items-center justify-center"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
