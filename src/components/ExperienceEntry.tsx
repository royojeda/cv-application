import React from "react";

interface ExperienceEntryProps {
  entry: {
    company: string;
    position: string;
    startMonth: string;
    endMonth: string;
    details: string;
  };
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

  render() {
    const { company, position, startMonth, endMonth, details } =
      this.props.entry;
    const { isHovered } = this.state;

    return (
      <div
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        className="relative -my-2.5 flex flex-col gap-1 border border-transparent p-4 hover:border-gray-200 hover:shadow-md"
      >
        {isHovered && (
          <div className="absolute -right-[1px] -top-[1px] w-36 bg-white font-medium shadow-md">
            <button
              type="button"
              className="w-1/2 border py-1 px-3 transition hover:bg-gray-700 hover:text-white active:bg-gray-800"
            >
              Edit
            </button>
            <button
              type="button"
              className="w-1/2 border py-1 px-3 transition hover:bg-gray-700 hover:text-white active:bg-gray-800"
            >
              Delete
            </button>
          </div>
        )}
        <div className="flex items-end justify-between gap-4">
          <div className="flex">
            <div className="font-medium">{company}</div>
            <pre>, </pre>
            <div className="italic">{position}</div>
          </div>
          <div className="flex">
            <div>
              {new Intl.DateTimeFormat("en-US", {
                month: "long",
                year: "numeric",
              }).format(new Date(startMonth))}
            </div>
            <pre> — </pre>
            <div>
              {new Intl.DateTimeFormat("en-US", {
                month: "long",
                year: "numeric",
              }).format(new Date(endMonth))}
            </div>
          </div>
        </div>
        <ul className="list-disc pl-8">
          <li>{details}</li>
        </ul>
      </div>
    );
  }
}
