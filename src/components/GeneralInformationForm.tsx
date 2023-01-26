import React from "react";
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

export default class GeneralInformationForm extends React.Component<
  GeneralInformationFormProps,
  GeneralInformationFormState
> {
  constructor(props: GeneralInformationFormProps) {
    super(props);
    this.state = {
      name: props.name,
      emailAddress: props.emailAddress,
      phoneNumber: props.phoneNumber,
      address: props.address,
    };
  }

  handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  handleSubmit: React.FormEventHandler = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    const { name, emailAddress, phoneNumber, address } = this.state;

    return (
      <form
        onSubmit={this.handleSubmit}
        className="relative flex flex-col items-center gap-4 border border-transparent px-4 py-2"
      >
        <div className="absolute -right-32 -top-[1px] -bottom-[1px] flex flex-col justify-center gap-2 border bg-white p-4 shadow-md">
          <button
            type="submit"
            className="border py-1 px-3 shadow transition hover:bg-gray-700 hover:text-white active:bg-gray-800"
          >
            Update
          </button>
          <button
            type="button"
            onClick={this.props.onCancel}
            className="border py-1 px-3 shadow transition hover:bg-gray-700 hover:text-white active:bg-gray-800"
          >
            Cancel
          </button>
        </div>
        <input
          name="name"
          value={name}
          onChange={this.handleInputChange}
          autoFocus
          required
          className="w-full text-center text-4xl font-medium"
        />
        <div className="flex w-full flex-col items-center justify-center gap-4 xs:flex-row">
          <UserInfoInput
            type="emailAddress"
            content={emailAddress}
            onChange={this.handleInputChange}
          />
          <UserInfoInput
            type="phoneNumber"
            content={phoneNumber}
            onChange={this.handleInputChange}
          />
          <UserInfoInput
            type="address"
            content={address}
            onChange={this.handleInputChange}
          />
        </div>
      </form>
    );
  }
}
