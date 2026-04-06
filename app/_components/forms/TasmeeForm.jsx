"use client";

import EntryForm from "./EntryForm";

function TasmeeForm() {
  const inputFields = [
    {
      heading: "Juz",
      type: "number",
      name: "juz",
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

  function handleTasmeeSubmit(data) {
    const cleanedData = {
      ...data,
      juz: Number(data.juz),
      tambeeh: Number(data.tambeeh),
      talqeen: Number(data.talqeen),
      marks: Number(data.marks),
    };

    console.log(cleanedData);
  }

  return (
    <EntryForm
      formHeading={"Tasmee Entry"}
      inputFields={inputFields}
      submitHandler={handleTasmeeSubmit}
    />
  );
}

export default TasmeeForm;
