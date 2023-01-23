import React from "react";
import Experience from "./components/Experience";
import GeneralInformation from "./components/GeneralInformation";

export default class App extends React.Component {
  render() {
    return (
      <div className="flex min-h-screen w-screen text-gray-700">
        <div className="flex flex-1 items-center justify-center bg-gray-50 p-4 sm:p-10">
          <div className="flex min-h-full max-w-2xl flex-1 flex-col gap-1 border bg-white p-4 shadow-md sm:p-8">
            <GeneralInformation />
            <Experience />
            <div className="-my-2.5 p-4">
              <div className="border-y border-gray-700 text-center text-lg font-medium">
                EDUCATION
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
