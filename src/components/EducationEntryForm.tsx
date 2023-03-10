import React from "react";

interface ExperienceEntryFormProps {
  entry?: {
    id: number;
    school: string;
    degree: string;
    endMonth: string;
  };
  onSubmit: (formdata: {
    school: string;
    degree: string;
    endMonth: string;
  }) => void;
  onCancel: () => void;
}

interface ExperienceEntryFormState {
  [abc: string]: string;
}

export default class ExperienceEntryForm extends React.Component<
  ExperienceEntryFormProps,
  ExperienceEntryFormState
> {
  constructor(props: ExperienceEntryFormProps) {
    super(props);
    if (props.entry) {
      this.state = {
        school: props.entry.school,
        degree: props.entry.degree,
        endMonth: props.entry.endMonth,
      };
    } else {
      this.state = {
        school: "",
        degree: "",
        endMonth: "",
      };
    }
  }

  handleCancel: React.MouseEventHandler = () => {
    this.props.onCancel();
  };

  handleInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  handleSubmit: React.FormEventHandler = (event) => {
    event.preventDefault();
    const { school, degree, endMonth } = this.state;
    this.props.onSubmit({ school, degree, endMonth });
  };

  render() {
    const { school, degree, endMonth } = this.state;

    return (
      <form
        onSubmit={this.handleSubmit}
        className="relative flex flex-col gap-1 border border-gray-200 px-4 py-2 shadow-md"
      >
        <div className="absolute inset-y-[-1px] -right-40 flex items-center">
          <div className="flex justify-center bg-white shadow-md">
            <button
              type="submit"
              className="w-1/2 border py-1 px-3 shadow transition hover:bg-gray-700 hover:text-white active:bg-gray-800"
            >
              {this.props.entry ? "Update" : "Create"}
            </button>
            <button
              type="button"
              onClick={this.handleCancel}
              className="w-1/2 border py-1 px-3 shadow transition hover:bg-gray-700 hover:text-white active:bg-gray-800"
            >
              Cancel
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="flex">
            <input
              type="text"
              name="school"
              value={school}
              placeholder="School"
              onChange={this.handleInputChange}
              required
              autoFocus
              className="w-1/2 border px-2"
            />
            <pre>, </pre>
            <input
              type="text"
              name="degree"
              value={degree}
              placeholder="Degree"
              onChange={this.handleInputChange}
              required
              className="w-1/2 border px-2"
            />
          </div>
          <div className="flex w-2/5 border border-transparent">
            <input
              type="month"
              name="endMonth"
              value={endMonth}
              onChange={this.handleInputChange}
              required
              className="w-full border"
            />
          </div>
        </div>
      </form>
    );
  }
}
