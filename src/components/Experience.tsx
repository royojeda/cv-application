import React, { useState } from "react";
import ExperienceEntry from "./ExperienceEntry";
import ExperienceEntryForm from "./ExperienceEntryForm";

interface ExperienceState {
  entries: {
    id: number;
    company: string;
    position: string;
    startMonth: string;
    endMonth: string;
    details: string;
  }[];
  nextId: number;
  deletingId: number | null;
  editingId: number | null;
  isHovered: boolean;
  isCreating: boolean;
}

const Experience = () => {
  const [state, setState] = useState<ExperienceState>({
    entries: [
      {
        id: 4,
        company: "Some Big Company 4",
        position: "Backend Engineer",
        startMonth: "2022-04",
        endMonth: "2023-01",
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas culpa et inventore omnis quisquam rem in corporis harum autem? Deserunt!",
      },
      {
        id: 3,
        company: "Some Big Company 3",
        position: "Backend Engineer",
        startMonth: "2022-04",
        endMonth: "2023-01",
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas culpa et inventore omnis quisquam rem in corporis harum autem? Deserunt!",
      },
      {
        id: 2,
        company: "Some Big Company 2",
        position: "Backend Engineer",
        startMonth: "2022-04",
        endMonth: "2023-01",
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas culpa et inventore omnis quisquam rem in corporis harum autem? Deserunt!",
      },
      {
        id: 1,
        company: "Some Big Company 1",
        position: "Backend Engineer",
        startMonth: "2022-04",
        endMonth: "2023-01",
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas culpa et inventore omnis quisquam rem in corporis harum autem? Deserunt!",
      },
    ],
    nextId: 5,
    deletingId: null,
    editingId: null,
    isHovered: false,
    isCreating: false,
  });

  const handleDelete = (id: number) => {
    setState({ ...state, deletingId: id });
  };

  const handleDeleteConfirm = () => {
    setState({
      ...state,
      entries: state.entries.filter((entry) => entry.id !== state.deletingId),
      deletingId: null,
    });
  };

  const handleDeleteCancel = () => {
    setState({ ...state, deletingId: null });
  };

  const handleKeyDown: React.KeyboardEventHandler = (event) => {
    if (event.key === "Escape") {
      handleDeleteCancel();
    }
  };

  const handleEdit = (id: number) => {
    setState({ ...state, editingId: id });
  };

  const handleEditCancel = () => {
    setState({ ...state, editingId: null });
  };

  const handleUpdate = (formData: {
    company: string;
    position: string;
    startMonth: string;
    endMonth: string;
    details: string;
  }) => {
    const updatedEntries = state.entries.map((entry) => {
      if (entry.id === state.editingId) {
        entry = { ...formData, id: state.editingId };
      }
      return entry;
    });
    setState({ ...state, entries: updatedEntries, editingId: null });
  };

  const handleMouseEnter: React.MouseEventHandler = () => {
    setState({ ...state, isHovered: true });
  };

  const handleMouseLeave: React.MouseEventHandler = () => {
    setState({ ...state, isHovered: false });
  };

  const handleNew: React.MouseEventHandler = () => {
    setState({ ...state, isCreating: true });
  };

  const handleCreate = (formData: {
    company: string;
    position: string;
    startMonth: string;
    endMonth: string;
    details: string;
  }) => {
    setState({
      ...state,
      entries: [{ ...formData, id: state.nextId }, ...state.entries],
      nextId: state.nextId + 1,
      isCreating: false,
    });
  };

  const handleNewCancel = () => {
    setState({ ...state, isCreating: false });
  };

  const { entries, deletingId, editingId, isHovered, isCreating } = state;

  return (
    <div className="flex flex-col gap-1">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative border border-transparent px-4 py-2 hover:border-gray-200 hover:shadow-md"
      >
        <div className="border-y border-gray-700 text-center text-lg font-medium">
          EXPERIENCE
        </div>
        {isHovered && (
          <button
            onClick={handleNew}
            className="absolute -top-[1px] -right-[1px] w-[4.5rem] border bg-white px-3 py-1 shadow-md transition hover:bg-gray-700 hover:text-white active:bg-gray-800"
          >
            Add
          </button>
        )}
      </div>
      <div className="flex flex-col gap-1">
        {isCreating && (
          <ExperienceEntryForm
            onSubmit={handleCreate}
            onCancel={handleNewCancel}
          />
        )}
        {entries.map((entry) => {
          return (
            <React.Fragment key={entry.id}>
              {editingId === entry.id ? (
                <ExperienceEntryForm
                  entry={entry}
                  onSubmit={handleUpdate}
                  onCancel={handleEditCancel}
                />
              ) : (
                <ExperienceEntry
                  entry={entry}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              )}
            </React.Fragment>
          );
        })}
        {deletingId && (
          <div className="fixed top-0 left-0 flex h-screen w-screen items-center justify-center bg-gray-50/95">
            <div className="flex flex-col items-end gap-4 border bg-white p-4 shadow-md">
              <div className="">
                Are you sure you want to delete this experience entry?
              </div>
              <div className="flex w-[9.5rem] gap-2 font-medium">
                <button
                  onClick={handleDeleteCancel}
                  className="w-1/2 py-1 px-3 underline decoration-transparent decoration-2 underline-offset-2 transition hover:decoration-gray-700 active:decoration-gray-800"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteConfirm}
                  onKeyDown={handleKeyDown}
                  autoFocus
                  className="w-1/2 border py-1 px-3 shadow transition hover:bg-gray-700 hover:text-white active:bg-gray-800"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
