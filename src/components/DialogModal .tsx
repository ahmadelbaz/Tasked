import { useEffect, useRef, type ReactNode } from "react";

interface DialogModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const DialogModal = ({ isOpen, onClose, children }: DialogModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modalElement = dialogRef.current;
    if (!modalElement) return;

    if (isOpen) {
      // showModal() displays the dialog as a modal, making the rest of the page inert
      modalElement.showModal();
    } else {
      modalElement.close();
    }
  }, [isOpen]);

  return (
    <dialog ref={dialogRef} onCancel={onClose} className="dialog-modal">
      <p className="export-txt">Export</p>
      <p className="export-txt">Export</p>
    </dialog>
  );
};

export default DialogModal;
