import { MdDragIndicator } from "react-icons/md";

const LoaderModal = () => {
  return (
    // Simple Loader Modal component
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center z-50">
      <div className="bg-white p-5 rounded-lg ">
        <div className="loading loading-spinner loading-lg"></div>
        <p className="mt-2">Updating Tasks...</p>
      </div>
    </div>
  );
};

export default LoaderModal;
