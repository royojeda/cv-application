import React from "react";
import GeneralInformation from "./components/GeneralInformation";

export default class App extends React.Component {
  render() {
    return (
      <div className="flex min-h-screen w-screen text-gray-700">
        <div className="flex flex-1 items-center justify-center p-4 sm:p-10">
          <div className="flex min-h-full max-w-2xl flex-1 flex-col gap-6 border border-gray-700 p-4 shadow-md sm:p-10">
            <GeneralInformation />
            <div>Experience</div>
            <div>Education</div>
          </div>
        </div>
      </div>
    );
  }
}
