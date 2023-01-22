import React from "react";

export default class Experience extends React.Component {
  render() {
    return (
      <div className="flex flex-col gap-1">
        <div className="border-y border-gray-700 text-center text-lg font-medium">
          EXPERIENCE
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-end justify-between gap-4">
            <div className="flex">
              <div className="font-medium">Some Big Company</div>
              <pre>, </pre>
              <div className="italic">Software Engineer</div>
            </div>
            <div className="flex">
              <div>April 2022</div>
              <pre> — </pre>
              <div>January 2023</div>
            </div>
          </div>
          <ul className="list-disc pl-8">
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
              possimus aliquam amet, ipsum in placeat sint? Nobis obcaecati sint
              aliquid.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              distinctio assumenda, nemo quis necessitatibus tempora commodi
              porro debitis cum itaque?
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
