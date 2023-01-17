import React from "react";
import UserInfo from "./UserInfo";

export default class GeneralInformation extends React.Component<
  Record<string, never>,
  { name: string; emailAddress: string; phoneNumber: string; address: string }
> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      name: "John Doe",
      emailAddress: "johndoe@email.com",
      phoneNumber: "123 456 7890",
      address: "221b Baker Street, London",
    };
  }

  render() {
    const { name, emailAddress, phoneNumber, address } = this.state;
    return (
      <div className="general-information relative flex flex-col items-center gap-4">
        <button className="absolute right-0">Edit</button>
        <div className="text-center text-4xl font-medium">{name}</div>
        <div className="flex w-full flex-col items-center justify-center gap-4 xs:flex-row">
          <UserInfo contentType="email" content={emailAddress} />
          <UserInfo contentType="phone" content={phoneNumber} />
          <UserInfo contentType="address" content={address} />
        </div>
      </div>
    );
  }
}
