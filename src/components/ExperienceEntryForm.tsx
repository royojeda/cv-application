import React, { useState } from "react";

interface ExperienceEntryFormProps {
  entry?: {
    id: number;
    company: string;
    position: string;
    startMonth: string;
    endMonth: string;
    details: string;
  };
  onSubmit: (formdata: {
    company: string;
    position: string;
    startMonth: string;
    endMonth: string;
    details: string;
  }) => void;
  onCancel: () => void;
}

interface ExperienceEntryFormState {
  [abc: string]: string;
}

const ExperienceEntryForm = (props: ExperienceEntryFormProps) => {
  let initialState;
  if (props.entry) {
    initialState = {
      company: props.entry.company,
      position: props.entry.position,
      startMonth: props.entry.startMonth,
      endMonth: props.entry.endMonth,
      details: props.entry.details,
    };
  } else {
    initialState = {
      company: "",
      position: "",
      startMonth: "",
      endMonth: "",
      details: "",
    };
  }

  const [state, setState] = useState<ExperienceEntryFormState>(initialState);

  const handleCancel: React.MouseEventHandler = () => {
    props.onCancel();
  };

  const handleInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit: React.FormEventHandler = (event) => {
    event.preventDefault();
    const { company, position, startMonth, endMonth, details } = state;
    props.onSubmit({ company, position, startMonth, endMonth, details });
  };

  const { company, position, startMonth, endMonth, details } = state;

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex flex-col gap-1 border border-gray-200 px-4 py-2 shadow-md"
    >
      <div className="absolute inset-y-[-1px] -right-40 flex items-center">
        <div className="flex justify-center bg-white shadow-md">
          <button
            type="submit"
            className="w-1/2 border py-1 px-3 shadow transition hover:bg-gray-700 hover:text-white active:bg-gray-800"
          >
            {props.entry ? "Update" : "Create"}
          </button>
          <button
            type="button"
            onClick={handleCancel}
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
            name="company"
            value={company}
            placeholder="Company"
            onChange={handleInputChange}
            required
            autoFocus
            className="w-1/2 border px-2"
          />
          <pre>, </pre>
          <input
            type="text"
            name="position"
            value={position}
            placeholder="Position"
            onChange={handleInputChange}
            required
            className="w-1/2 border px-2"
          />
        </div>
        <div className="flex w-2/5 border border-transparent">
          <input
            type="month"
            name="startMonth"
            value={startMonth}
            onChange={handleInputChange}
            required
            className="w-1/2 border"
          />
          <pre> — </pre>
          <input
            type="month"
            name="endMonth"
            value={endMonth}
            onChange={handleInputChange}
            required
            className="w-1/2 border"
          />
        </div>
      </div>
      <textarea
        name="details"
        value={details}
        placeholder="Details"
        onChange={handleInputChange}
        required
        className="w-full resize-none border px-2"
      />
    </form>
  );
};

export default ExperienceEntryForm;
