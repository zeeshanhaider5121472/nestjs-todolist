"use client";

import { useState } from "react";
import { Modal } from "./Modal";

export const AddTask = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-neutral w-full"
      >
        Add New Todo +
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
};
