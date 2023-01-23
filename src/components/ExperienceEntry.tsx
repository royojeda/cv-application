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

export default class ExperienceEntry extends React.Component<ExperienceEntryProps> {
  render() {
    const { company, position, startMonth, endMonth, details } =
      this.props.entry;

    return (
      <div className="flex flex-col gap-1">
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
