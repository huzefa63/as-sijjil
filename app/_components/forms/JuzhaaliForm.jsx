"use client";

import axios from "axios";
import EntryForm from "./EntryForm";
import toast from "react-hot-toast";

function JuzhaaliForm() {
  const inputFields = [
    {
      heading: "Start (page/juz)",
      type: "number",
      name: "startPage",
      required: true,
    },
    {
      heading: "End (page/juz)",
      type: "number",
      name: "endPage",
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

  async function handleJuzhaaliSubmit(data) {
    
    const cleanedData = {
      ...data,
      startPage: Number(data.startPage),
      endPage: Number(data.endPage),
      tambeeh: Number(data.tambeeh),
      talqeen: Number(data.talqeen),
      marks: Number(data.marks),
    };
    // console.log(cleanedData)
    try{
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/entry/juzhaali`,
        cleanedData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        },
      );
      if(res.data.ok) {
        toast.success('juzhaali entered');
      }
    }catch(err){
      if(err.response.data.status === 'exists') return toast.error('juzhaali already entered on this date');
    }
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
