interface TaskProps {
  // task: TableTasks;
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
  children: React.ReactNode;
}

const Modaledit: React.FC<TaskProps> = ({
  modalOpen,
  setModalOpen,
  children,
}) => {
  return (
    <div id="my_modal_4" className={`modal ${modalOpen ? "modal-open" : ""}`}>
      <div className="modal-box">
        <form method="dialog">
          <button
            onClick={() => setModalOpen(false)}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 mt-4 bg-slate-800 text-white"
          >
            ✕
          </button>
        </form>
        {children}
        {/* <p className="py-4">{task.Description}</p> */}
      </div>
    </div>
  );
};

export default Modaledit;
