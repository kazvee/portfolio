import React from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, videoUrl, title }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      <div
        className="relative bg-[#482B56] rounded-lg w-full max-w-4xl h-auto max-h-[80vh] p-4 flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby={title}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 id={title} className="text-white font-semibold">
            📺 Demo Video | {title}
          </h2>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-10 h-10 border rounded-full border-purple-500 bg-pink-200 hover:border-pink-500 hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            aria-label="Close modal"
          >
            <span className="text-xl">✖️</span>
          </button>
        </div>

        <div className="flex-grow p-2 border border-pink-500 rounded-lg">
          <video
            controls
            autoPlay
            muted
            className="w-full h-auto max-h-[60vh] object-contain rounded-lg"
            src={videoUrl}
          />
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
