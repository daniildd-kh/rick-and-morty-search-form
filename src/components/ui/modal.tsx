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
        className="relative w-full max-w-md p-6 min-h-[300px] border-black border-2 bg-blue text-text shadow-md"
      >
        <button onClick={onClose} className="absolute right-1 top-1 text-text cursor-pointer">
          <X size={24} />
        </button>
        <div className="rounded-md bg-white border-2 w-full min-h-[300px] h-full p-2">
          {children}
        </div>
      </div>
    </div>,
    rootModal
  );
};
