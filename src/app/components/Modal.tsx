interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
}

export const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen }) => {
  return (
    <div id="my_modal_3" className={`modal ${modalOpen ? "modal-open" : ""}`}>
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button
            onClick={() => setModalOpen(false)}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click on ✕ button to close</p>
      </div>
    </div>
  );
};
