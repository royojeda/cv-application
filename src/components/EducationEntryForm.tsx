import React, { useState } from "react";

interface EducationEntryFormProps {
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

interface EducationEntryFormState {
  [abc: string]: string;
}

const EducationEntryForm = (props: EducationEntryFormProps) => {
  let initialState;
  if (props.entry) {
    initialState = {
      school: props.entry.school,
      degree: props.entry.degree,
      endMonth: props.entry.endMonth,
    };
  } else {
    initialState = {
      school: "",
      degree: "",
      endMonth: "",
    };
  }
  const [state, setState] = useState<EducationEntryFormState>(initialState);

  const handleCancel: React.MouseEventHandler = () => {
    props.onCancel();
  };

  const handleInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit: React.FormEventHandler = (event) => {
    event.preventDefault();
    const { school, degree, endMonth } = state;
    props.onSubmit({ school, degree, endMonth });
  };

  const { school, degree, endMonth } = state;

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
            name="school"
            value={school}
            placeholder="School"
            onChange={handleInputChange}
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
            onChange={handleInputChange}
            required
            className="w-1/2 border px-2"
          />
        </div>
        <div className="flex w-2/5 border border-transparent">
          <input
            type="month"
            name="endMonth"
            value={endMonth}
            onChange={handleInputChange}
            required
            className="w-full border"
          />
        </div>
      </div>
    </form>
  );
};

export default EducationEntryForm;
