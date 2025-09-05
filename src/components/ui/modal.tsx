import { useEffect, type FC, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface ModalProps {
  onClose: () => void;
  isOpen: boolean;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ onClose, isOpen, children }) => {
  const rootModal = document.getElementById("modal-root");
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !rootModal) {
    return;
  }

  return createPortal(
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/25"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white w-full max-w-md rounded p-4 min-h-[200px]"
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-gray-400 "
        >
          <X size={24} />
        </button>
        {children}
      </div>
    </div>,
    rootModal
  );
};
