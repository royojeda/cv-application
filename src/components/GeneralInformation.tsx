import React from "react";
import GeneralInformationDisplay from "./GeneralInformationDisplay";

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

  handleEdit = () => {
    this.setState({ isEditing: true });
  };

  render() {
    const { name, emailAddress, phoneNumber, address, isEditing } = this.state;
    return (
      <>
        {isEditing ? null : (
          <GeneralInformationDisplay
            name={name}
            emailAddress={emailAddress}
            phoneNumber={phoneNumber}
            address={address}
            onEdit={this.handleEdit}
          />
        )}
      </>
    );
  }
}
