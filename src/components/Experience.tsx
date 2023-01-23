import React from "react";
import ExperienceEntry from "./ExperienceEntry";

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
          company: "Some Big Company",
          position: "Backend Engineer",
          startMonth: "2022-04",
          endMonth: "2023-01",
          details:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas culpa et inventore omnis quisquam rem in corporis harum autem? Deserunt!",
        },
        {
          id: 2,
          company: "Some Big Company",
          position: "Backend Engineer",
          startMonth: "2022-04",
          endMonth: "2023-01",
          details:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas culpa et inventore omnis quisquam rem in corporis harum autem? Deserunt!",
        },
        {
          id: 3,
          company: "Some Big Company",
          position: "Backend Engineer",
          startMonth: "2022-04",
          endMonth: "2023-01",
          details:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas culpa et inventore omnis quisquam rem in corporis harum autem? Deserunt!",
        },
        {
          id: 4,
          company: "Some Big Company",
          position: "Backend Engineer",
          startMonth: "2022-04",
          endMonth: "2023-01",
          details:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas culpa et inventore omnis quisquam rem in corporis harum autem? Deserunt!",
        },
      ],
      nextId: 5,
    };
  }

  render() {
    const { entries } = this.state;

    return (
      <div className="flex flex-col gap-1">
        <div className="-my-2.5 border border-transparent p-4 hover:border-gray-200 hover:shadow-md">
          <div className="border-y border-gray-700 text-center text-lg font-medium">
            EXPERIENCE
          </div>
        </div>
        <div className="flex flex-col gap-1">
          {entries.map((entry) => {
            return <ExperienceEntry key={entry.id} entry={entry} />;
          })}
        </div>
      </div>
    );
  }
}
