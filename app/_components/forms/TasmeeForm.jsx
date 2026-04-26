"use client";

import axios from "axios";
import EntryForm from "./EntryForm";
import toast from "react-hot-toast";

const inputFields = [
  {
    heading: "Juz",
    type: "number",
    name: "juz",
    required: true,
  },
  {
    heading: " Total pages",
    type: "number",
    name: "pages",
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

function TasmeeForm() {

  async function handleTasmeeSubmit(data) {
    const cleanedData = {
      ...data,
      juz: Number(data.juz),
      pages: Number(data.pages),
      tambeeh: Number(data.tambeeh),
      talqeen: Number(data.talqeen),
      marks: Number(data.marks),
    };

    try{
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/entry/tasmee`,
        cleanedData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        },
      );
      if(res.data.ok) {
        toast.success('tasmee entered');
      }
    }catch(err){
      if(err.response.data.status === 'limit') return toast.error('you can only enter 4 juz tasmee per date');
      toast.error('something went wrong');
      
    }
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
