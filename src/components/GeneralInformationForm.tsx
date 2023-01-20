import React from "react";

interface GeneralInformationFormProps {
  name: string;
  emailAddress: string;
  phoneNumber: string;
  address: string;
  onUpdate: (formData: Readonly<GeneralInformationFormState>) => void;
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

  handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.onUpdate(this.state);
  };

  render() {
    const { name, emailAddress, phoneNumber, address } = this.state;

    return (
      <form
        onSubmit={this.handleSubmit}
        className="general-information relative flex flex-col items-center gap-4 border border-white p-4"
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
          className="w-2/3 text-center text-4xl font-medium"
        />
        <div className="flex w-full flex-col items-center justify-center gap-4 xs:flex-row">
          <div className="flex items-center justify-center gap-0.5 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <input
              type="text"
              name="emailAddress"
              value={emailAddress}
              onChange={this.handleInputChange}
              required
              className="w-full break-words border px-2"
            />
          </div>
          <div className="flex items-center justify-center gap-0.5 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            <input
              type="text"
              name="phoneNumber"
              value={phoneNumber}
              onChange={this.handleInputChange}
              required
              className="w-full break-words border px-2"
            />
          </div>
          <div className="flex items-center justify-center gap-0.5 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <input
              type="text"
              name="address"
              value={address}
              onChange={this.handleInputChange}
              required
              className="w-full break-words border px-2"
            />
          </div>
        </div>
      </form>
    );
  }
}
