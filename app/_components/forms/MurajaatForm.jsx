"use client";

import toast from "react-hot-toast";
import EntryForm from "./EntryForm";
import axios from "axios";

function MurajaatForm() {
  const inputFields = [
    { heading: "Juz", type: "number", name: "juz", required: true },

    {
      heading: "Surah",
      type: "select",
      options: ["surah", "al-fatihah", "an-nas", "al-falaq"],
      name: "surah",
      required: true,
    },

    { heading: "Question 1", type: "number", name: "q1", required: true },
    { heading: "Question 2", type: "number", name: "q2", required: true },
    { heading: "Tambeeh", type: "number", name: "tambeeh", required: true },
    { heading: "Talqeen", type: "number", name: "talqeen", required: true },
    { heading: "Marks", type: "number", name: "marks", required: true },
    { heading: "Date", type: "date", name: "date", required: true },
  ];

  async function handleMurajaatSubmit(data) {
    try {
      const cleanedData = {
        date:data.date,
        juz: Number(data.juz),
        que1: Number(data.q1),
        que2: Number(data.q2),
        tambeeh: Number(data.tambeeh),
        talqeen: Number(data.talqeen),
        marks: Number(data.marks),
      };

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/entry/murajaah`,
        cleanedData,
        {headers:{
          Authorization:`Bearer ${localStorage.getItem('jwt')}`
        }}
      );
      toast.success('murajaah entry updated');
      
    } catch (err) {
      console.error(err);
    }
    console.log(data);
  }

  return (
    <EntryForm
      formHeading={"Muraja'at Entry"}
      inputFields={inputFields}
      submitHandler={handleMurajaatSubmit}
    />
  );
}

export default MurajaatForm;