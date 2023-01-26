import React from "react";
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
}

export default class Experience extends React.Component<
  Record<string, never>,
  ExperienceState
> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      entries: [
        {
          id: 1,
          company: "Some Big Company 1",
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
          id: 3,
          company: "Some Big Company 3",
          position: "Backend Engineer",
          startMonth: "2022-04",
          endMonth: "2023-01",
          details:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas culpa et inventore omnis quisquam rem in corporis harum autem? Deserunt!",
        },
        {
          id: 4,
          company: "Some Big Company 4",
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
    company: string;
    position: string;
    startMonth: string;
    endMonth: string;
    details: string;
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

  render() {
    const { entries, deletingId, editingId } = this.state;

    return (
      <div className="flex flex-col gap-1">
        <div className="border border-transparent px-4 py-2 hover:border-gray-200 hover:shadow-md">
          <div className="border-y border-gray-700 text-center text-lg font-medium">
            EXPERIENCE
          </div>
        </div>
        <div className="flex flex-col gap-1">
          {entries.map((entry) => {
            return (
              <React.Fragment key={entry.id}>
                {editingId === entry.id ? (
                  <ExperienceEntryForm
                    entry={entry}
                    onSubmit={this.handleUpdate}
                    onCancel={this.handleEditCancel}
                  />
                ) : (
                  <ExperienceEntry
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
                  Are you sure you want to delete this experience entry?
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
