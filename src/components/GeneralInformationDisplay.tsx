import React, { useState } from "react";
import UserInfo from "./UserInfo";

interface GeneralInformationDisplayProps {
  name: string;
  emailAddress: string;
  phoneNumber: string;
  address: string;
  onEdit: () => void;
}

interface GeneralInformationDisplayState {
  isHovered: boolean;
}

const GeneralInformationDisplay = (props: GeneralInformationDisplayProps) => {
  const [state, setState] = useState<GeneralInformationDisplayState>({
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

  const { name, emailAddress, phoneNumber, address, onEdit } = props;

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col items-center gap-4 border border-transparent px-4 py-2"
    >
      {state.isHovered && (
        <button
          onClick={onEdit}
          className="absolute -right-[1px] -top-[1px] w-[4.5rem] border bg-white py-1 px-3 font-medium shadow transition hover:bg-gray-700 hover:text-white active:bg-gray-800"
        >
          Edit
        </button>
      )}
      <div className="max-w-full break-words text-center text-4xl font-medium">
        {name}
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-4 xs:flex-row">
        <UserInfo type="emailAddress" content={emailAddress} />
        <UserInfo type="phoneNumber" content={phoneNumber} />
        <UserInfo type="address" content={address} />
      </div>
    </div>
  );
};

export default GeneralInformationDisplay;
