import React, { useState } from "react";
import UserInfoInput from "./UserInfoInput";

interface GeneralInformationFormProps {
  name: string;
  emailAddress: string;
  phoneNumber: string;
  address: string;
  onSubmit: (formData: Readonly<GeneralInformationFormState>) => void;
  onCancel: () => void;
}

interface GeneralInformationFormState {
  [abc: string]: string;
}

const GeneralInformationForm = (props: GeneralInformationFormProps) => {
  const [state, setState] = useState<GeneralInformationFormState>({
    name: props.name,
    emailAddress: props.emailAddress,
    phoneNumber: props.phoneNumber,
    address: props.address,
  });

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit: React.FormEventHandler = (event) => {
    event.preventDefault();
    props.onSubmit(state);
  };

  const { name, emailAddress, phoneNumber, address } = state;

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex flex-col items-center gap-4 border px-4 py-2 shadow-md"
    >
      <div className="absolute inset-y-[-1px] -right-40 flex items-center">
        <div className="flex justify-center bg-white shadow-md">
          <button
            type="submit"
            className="w-1/2 border py-1 px-3 shadow transition hover:bg-gray-700 hover:text-white active:bg-gray-800"
          >
            Update
          </button>
          <button
            type="button"
            onClick={props.onCancel}
            className="w-1/2 border py-1 px-3 shadow transition hover:bg-gray-700 hover:text-white active:bg-gray-800"
          >
            Cancel
          </button>
        </div>
      </div>
      <input
        name="name"
        value={name}
        onChange={handleInputChange}
        autoFocus
        required
        className="w-full text-center text-4xl font-medium"
      />
      <div className="flex w-full flex-col items-center justify-center gap-4 xs:flex-row">
        <UserInfoInput
          type="emailAddress"
          content={emailAddress}
          onChange={handleInputChange}
        />
        <UserInfoInput
          type="phoneNumber"
          content={phoneNumber}
          onChange={handleInputChange}
        />
        <UserInfoInput
          type="address"
          content={address}
          onChange={handleInputChange}
        />
      </div>
    </form>
  );
};

export default GeneralInformationForm;
