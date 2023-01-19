import React, { SyntheticEvent } from "react";
import UserInfo from "./UserInfo";

interface GeneralInformationState {
  name: string;
  emailAddress: string;
  phoneNumber: string;
  address: string;
  isEditing: boolean;
}

export default class GeneralInformation extends React.Component<
  Record<string, never>,
  GeneralInformationState
> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      name: "John Doe",
      emailAddress: "johndoe@email.com",
      phoneNumber: "123 456 7890",
      address: "221b Baker Street, London",
      isEditing: false,
    };
  }

  handleMouseEnter = (event: SyntheticEvent) => {
    event.currentTarget.classList.replace("border-white", "border-gray-200");
    event.currentTarget.classList.add("shadow-md");
    event.currentTarget.classList.remove("transition", "duration-200");
    this.setState({ isEditing: true });
  };

  handleMouseLeave = (event: SyntheticEvent) => {
    event.currentTarget.classList.replace("border-gray-200", "border-white");
    event.currentTarget.classList.remove("shadow-md");
    event.currentTarget.classList.add("transition", "duration-200");
    this.setState({ isEditing: false });
  };

  render() {
    const { name, emailAddress, phoneNumber, address, isEditing } = this.state;
    return (
      <div
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        className="general-information relative flex flex-col items-center gap-4 border border-white p-4"
      >
        {isEditing && (
          <button className="absolute right-4 top-4 border py-1 px-3 shadow transition hover:bg-gray-700 hover:text-white active:bg-gray-800">
            Edit
          </button>
        )}
        <div className="text-center text-4xl font-medium">{name}</div>
        <div className="flex w-full flex-col items-center justify-center gap-4 xs:flex-row">
          <UserInfo type="emailAddress" content={emailAddress} />
          <UserInfo type="phoneNumber" content={phoneNumber} />
          <UserInfo type="address" content={address} />
        </div>
      </div>
    );
  }
}
