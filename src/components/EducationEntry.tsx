import React from "react";

interface ExperienceEntryProps {
  entry: {
    id: number;
    school: string;
    degree: string;
    endMonth: string;
  };
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

interface ExperienceEntryState {
  isHovered: boolean;
}

export default class ExperienceEntry extends React.Component<
  ExperienceEntryProps,
  ExperienceEntryState
> {
  constructor(props: ExperienceEntryProps) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  handleMouseEnter: React.MouseEventHandler = (event) => {
    event.currentTarget.classList.replace(
      "border-transparent",
      "border-gray-200"
    );
    event.currentTarget.classList.add("shadow-md");
    event.currentTarget.classList.remove("transition", "duration-200");
    this.setState({ isHovered: true });
  };

  handleMouseLeave: React.MouseEventHandler = (event) => {
    event.currentTarget.classList.replace(
      "border-gray-200",
      "border-transparent"
    );
    event.currentTarget.classList.remove("shadow-md");
    event.currentTarget.classList.add("transition", "duration-200");
    this.setState({ isHovered: false });
  };

  handleDelete: React.MouseEventHandler = () => {
    this.props.onDelete(this.props.entry.id);
  };

  handleEdit: React.MouseEventHandler = () => {
    this.props.onEdit(this.props.entry.id);
  };

  render() {
    const { school, degree, endMonth } = this.props.entry;
    const { isHovered } = this.state;

    return (
      <div
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        className="relative flex flex-col gap-1 border border-transparent px-4 py-2 hover:border-gray-200 hover:shadow-md"
      >
        {isHovered && (
          <div className="absolute -right-[1px] -top-[1px] w-36 bg-white font-medium shadow">
            <button
              type="button"
              onClick={this.handleEdit}
              className="w-1/2 border py-1 px-3 transition hover:bg-gray-700 hover:text-white active:bg-gray-800"
            >
              Edit
            </button>
            <button
              type="button"
              onClick={this.handleDelete}
              className="w-1/2 border py-1 px-3 transition hover:bg-gray-700 hover:text-white active:bg-gray-800"
            >
              Delete
            </button>
          </div>
        )}
        <div className="flex items-end justify-between gap-4">
          <div className="flex">
            <div className="border border-transparent font-medium">
              {school}
            </div>
            <pre>, </pre>
            <div className="italic">{degree}</div>
          </div>
          <div className="flex border border-transparent">
            <div className="py-0.5">
              {new Intl.DateTimeFormat("en-US", {
                month: "long",
                year: "numeric",
              }).format(new Date(endMonth))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
