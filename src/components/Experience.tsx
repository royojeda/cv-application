import React from "react";
import ExperienceEntry from "./ExperienceEntry";

export default class Experience extends React.Component {
  render() {
    return (
      <div className="flex flex-col gap-1">
        <div className="border-y border-gray-700 text-center text-lg font-medium">
          EXPERIENCE
        </div>
        <ExperienceEntry />
      </div>
    );
  }
}
