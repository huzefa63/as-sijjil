"use client";

import EntryForm from "./EntryForm";

function JuzhaaliForm() {
  const inputFields = [
    {
      heading: "Start (page/juz)",
      type: "number",
      name: "start",
      required: true,
    },
    {
      heading: "End (page/juz)",
      type: "number",
      name: "end",
      required: true,
    },
    {
      heading: "Tambeeh",
      type: "number",
      name: "tambeeh",
      required: true,
    },
    {
      heading: "Talqeen",
      type: "number",
      name: "talqeen",
      required: true,
    },
    {
      heading: "Marks",
      type: "number",
      name: "marks",
      required: true,
    },
    {
      heading: "Date",
      type: "date",
      name: "date",
      required: true,
    },
  ];

  function handleJuzhaaliSubmit(data) {
    const cleanedData = {
      ...data,
      start: Number(data.start),
      end: Number(data.end),
      tambeeh: Number(data.tambeeh),
      talqeen: Number(data.talqeen),
      marks: Number(data.marks),
    };

    console.log(cleanedData);
  }

  return (
    <EntryForm
      formHeading={"Juzhaali Entry"}
      inputFields={inputFields}
      submitHandler={handleJuzhaaliSubmit}
    />
  );
}

export default JuzhaaliForm;
