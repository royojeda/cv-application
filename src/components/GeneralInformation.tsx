import React from "react";
import GeneralInformationDisplay from "./GeneralInformationDisplay";
import GeneralInformationForm from "./GeneralInformationForm";

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

  handleUpdate = (
    formData: Readonly<{
      [abc: string]: string;
    }>
  ) => {
    this.setState({ ...formData, isEditing: false });
  };

  render() {
    const { name, emailAddress, phoneNumber, address, isEditing } = this.state;
    return (
      <>
        {isEditing ? (
          <GeneralInformationForm
            name={name}
            emailAddress={emailAddress}
            phoneNumber={phoneNumber}
            address={address}
            onUpdate={this.handleUpdate}
          />
        ) : (
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
