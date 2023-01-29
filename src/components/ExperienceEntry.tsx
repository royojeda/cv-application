import React, { useState } from "react";

interface ExperienceEntryProps {
  entry: {
    id: number;
    company: string;
    position: string;
    startMonth: string;
    endMonth: string;
    details: string;
  };
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

interface ExperienceEntryState {
  isHovered: boolean;
}

const ExperienceEntry = (props: ExperienceEntryProps) => {
  const [state, setState] = useState<ExperienceEntryState>({
    isHovered: false,
  });

  const handleMouseEnter: React.MouseEventHandler = (event) => {
    event.currentTarget.classList.replace(
      "border-transparent",
      "border-gray-200"
    );
    event.currentTarget.classList.add("shadow-md");
    event.currentTarget.classList.remove("transition", "duration-200");
    setState({ isHovered: true });
  };

  const handleMouseLeave: React.MouseEventHandler = (event) => {
    event.currentTarget.classList.replace(
      "border-gray-200",
      "border-transparent"
    );
    event.currentTarget.classList.remove("shadow-md");
    event.currentTarget.classList.add("transition", "duration-200");
    setState({ isHovered: false });
  };

  const handleDelete: React.MouseEventHandler = () => {
    props.onDelete(props.entry.id);
  };

  const handleEdit: React.MouseEventHandler = () => {
    props.onEdit(props.entry.id);
  };

  const { company, position, startMonth, endMonth, details } = props.entry;
  const { isHovered } = state;

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col gap-1 border border-transparent px-4 py-2 hover:border-gray-200 hover:shadow-md"
    >
      {isHovered && (
        <div className="absolute -right-[1px] -top-[1px] w-36 bg-white font-medium shadow">
          <button
            type="button"
            onClick={handleEdit}
            className="w-1/2 border py-1 px-3 transition hover:bg-gray-700 hover:text-white active:bg-gray-800"
          >
            Edit
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="w-1/2 border py-1 px-3 transition hover:bg-gray-700 hover:text-white active:bg-gray-800"
          >
            Delete
          </button>
        </div>
      )}
      <div className="flex items-center justify-between gap-4">
        <div className="flex">
          <div className="border border-transparent font-medium">{company}</div>
          <pre>, </pre>
          <div className="italic">{position}</div>
        </div>
        <div className="flex border border-transparent">
          <div className="py-0.5">
            {new Intl.DateTimeFormat("en-US", {
              month: "long",
              year: "numeric",
            }).format(new Date(startMonth))}
          </div>
          <pre> — </pre>
          <div className="py-0.5">
            {new Intl.DateTimeFormat("en-US", {
              month: "long",
              year: "numeric",
            }).format(new Date(endMonth))}
          </div>
        </div>
      </div>
      <ul className="list-disc pl-8">
        <li className="border border-transparent">{details}</li>
      </ul>
    </div>
  );
};

export default ExperienceEntry;