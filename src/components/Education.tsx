import React from "react";
import EducationEntry from "./EducationEntry";
import EducationEntryForm from "./EducationEntryForm";

interface EducationState {
  entries: {
    id: number;
    school: string;
    degree: string;
    endMonth: string;
  }[];
  nextId: number;
  deletingId: number | null;
  editingId: number | null;
  isHovered: boolean;
  isCreating: boolean;
}

export default class Education extends React.Component<
  Record<string, never>,
  EducationState
> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      entries: [
        {
          id: 1,
          school: "University of Asgard",
          degree: "God of wisdom",
          endMonth: "2023-01",
        },
      ],
      nextId: 2,
      deletingId: null,
      editingId: null,
      isHovered: false,
      isCreating: false,
    };
  }

  handleDelete = (id: number) => {
    this.setState({ deletingId: id });
  };

  handleDeleteConfirm = () => {
    this.setState((state) => {
      return {
        entries: state.entries.filter(
          (entry) => entry.id !== this.state.deletingId
        ),
        deletingId: null,
        editingId: null,
        isHovered: false,
        isCreating: false,
      };
    });
  };

  handleDeleteCancel = () => {
    this.setState({ deletingId: null });
  };

  handleKeyDown: React.KeyboardEventHandler = (event) => {
    if (event.key === "Escape") {
      this.handleDeleteCancel();
    }
  };

  handleEdit = (id: number) => {
    this.setState({ editingId: id });
  };

  handleEditCancel = () => {
    this.setState({ editingId: null });
  };

  handleUpdate = (formData: {
    school: string;
    degree: string;
    endMonth: string;
  }) => {
    this.setState((state) => {
      const updatedEntries = state.entries.map((entry) => {
        if (entry.id === state.editingId) {
          entry = { ...formData, id: state.editingId };
        }
        return entry;
      });
      return {
        entries: updatedEntries,
        editingId: null,
      };
    });
  };

  handleMouseEnter: React.MouseEventHandler = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave: React.MouseEventHandler = () => {
    this.setState({ isHovered: false });
  };

  handleNew: React.MouseEventHandler = () => {
    this.setState({ isCreating: true });
  };

  handleCreate = (formData: {
    school: string;
    degree: string;
    endMonth: string;
  }) => {
    this.setState((state) => {
      return {
        entries: [{ ...formData, id: state.nextId }, ...state.entries],
        nextId: state.nextId + 1,
        isCreating: false,
      };
    });
  };

  handleNewCancel = () => {
    this.setState({ isCreating: false });
  };

  render() {
    const { entries, deletingId, editingId, isHovered, isCreating } =
      this.state;

    return (
      <div className="flex flex-col gap-1">
        <div
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          className="relative border border-transparent px-4 py-2 hover:border-gray-200 hover:shadow-md"
        >
          <div className="border-y border-gray-700 text-center text-lg font-medium">
            EDUCATION
          </div>
          {isHovered && (
            <button
              onClick={this.handleNew}
              className="absolute -top-[1px] -right-[1px] w-[4.5rem] border bg-white px-3 py-1 shadow-md transition hover:bg-gray-700 hover:text-white active:bg-gray-800"
            >
              Add
            </button>
          )}
        </div>
        <div className="flex flex-col gap-1">
          {isCreating && (
            <EducationEntryForm
              onSubmit={this.handleCreate}
              onCancel={this.handleNewCancel}
            />
          )}
          {entries.map((entry) => {
            return (
              <React.Fragment key={entry.id}>
                {editingId === entry.id ? (
                  <EducationEntryForm
                    entry={entry}
                    onSubmit={this.handleUpdate}
                    onCancel={this.handleEditCancel}
                  />
                ) : (
                  <EducationEntry
                    entry={entry}
                    onEdit={this.handleEdit}
                    onDelete={this.handleDelete}
                  />
                )}
              </React.Fragment>
            );
          })}
          {deletingId && (
            <div className="fixed top-0 left-0 flex h-screen w-screen items-center justify-center bg-gray-50/95">
              <div className="flex flex-col items-end gap-4 border bg-white p-4 shadow-md">
                <div className="">
                  Are you sure you want to delete this education entry?
                </div>
                <div className="flex w-[9.5rem] gap-2 font-medium">
                  <button
                    onClick={this.handleDeleteCancel}
                    className="w-1/2 py-1 px-3 underline decoration-transparent decoration-2 underline-offset-2 transition hover:decoration-gray-700 active:decoration-gray-800"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={this.handleDeleteConfirm}
                    onKeyDown={this.handleKeyDown}
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
  }
}
