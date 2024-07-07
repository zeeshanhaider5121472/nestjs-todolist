interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  modalOpen,
  setModalOpen,
  children,
}) => {
  return (
    <div
      id="my_modal_3"
      className={`modal z-10 ${modalOpen ? "modal-open" : ""}`}
    >
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button
            onClick={() => setModalOpen(false)}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-4 bg-slate-800 text-white"
          >
            ✕
          </button>
        </form>
        {children}
      </div>
    </div>
  );
};
