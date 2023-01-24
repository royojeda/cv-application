import React, { MouseEvent } from "react";
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

export default class GeneralInformationDisplay extends React.Component<
  GeneralInformationDisplayProps,
  GeneralInformationDisplayState
> {
  constructor(props: GeneralInformationDisplayProps) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  handleMouseEnter = (event: MouseEvent) => {
    event.currentTarget.classList.replace(
      "border-transparent",
      "border-gray-200"
    );
    event.currentTarget.classList.add("shadow-md");
    event.currentTarget.classList.remove("transition", "duration-200");
    this.setState({ isHovered: true });
  };

  handleMouseLeave = (event: MouseEvent) => {
    event.currentTarget.classList.replace(
      "border-gray-200",
      "border-transparent"
    );
    event.currentTarget.classList.remove("shadow-md");
    event.currentTarget.classList.add("transition", "duration-200");
    this.setState({ isHovered: false });
  };

  render() {
    const { name, emailAddress, phoneNumber, address, onEdit } = this.props;

    return (
      <div
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        className="relative -my-2.5 mt-0 flex flex-col items-center gap-4 border border-transparent p-4"
      >
        {this.state.isHovered && (
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
  }
}
