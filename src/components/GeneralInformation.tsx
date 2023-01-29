import { useState } from "react";
import GeneralInformationDisplay from "./GeneralInformationDisplay";
import GeneralInformationForm from "./GeneralInformationForm";

interface GeneralInformationState {
  name: string;
  emailAddress: string;
  phoneNumber: string;
  address: string;
  isEditing: boolean;
}

const GeneralInformation = () => {
  const [state, setState] = useState<GeneralInformationState>({
    name: "John Doe",
    emailAddress: "johndoe@email.com",
    phoneNumber: "123 456 7890",
    address: "221b Baker Street, London",
    isEditing: false,
  });

  const handleEdit = () => {
    setState({ ...state, isEditing: true });
  };

  const handleUpdate = (
    formData: Readonly<{
      [abc: string]: string;
    }>
  ) => {
    setState({ ...state, ...formData, isEditing: false });
  };

  const handleCancel = () => {
    setState({ ...state, isEditing: false });
  };

  const { name, emailAddress, phoneNumber, address, isEditing } = state;

  return (
    <>
      {isEditing ? (
        <GeneralInformationForm
          name={name}
          emailAddress={emailAddress}
          phoneNumber={phoneNumber}
          address={address}
          onSubmit={handleUpdate}
          onCancel={handleCancel}
        />
      ) : (
        <GeneralInformationDisplay
          name={name}
          emailAddress={emailAddress}
          phoneNumber={phoneNumber}
          address={address}
          onEdit={handleEdit}
        />
      )}
    </>
  );
};

export default GeneralInformation;
