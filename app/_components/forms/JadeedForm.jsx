'use client';
import axios from "axios";
import EntryForm from "./EntryForm";
import toast from "react-hot-toast";

function JadeedForm() {
  const inputFields = [
    {
      heading: "Surah",
      type: "select",
      options: ["surah", "al-fatihah", "an-nas", "al-falaq"],
      name: "surah",
      required: true,
    },
    { heading: "Ayah", type: "number", name: "ayah", required: true },
    { heading: "lines", type: "number", name: "lines", required: true },
    { heading: "Date", type: "date", name: "date", required: true },
  ];
  async function handleJadeedFormSubmit(data) {
    // console.log({...data,jwt:localStorage.getItem('jwt')});
    try{
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/entry/jadeed`,
        { ...data },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        },
      );
      if(res.data.ok) return toast.success('jadeed updated');
    }catch(err){
      console.log('something wrong')
      console.log(err)
    }
  }
    return (
      
      <EntryForm formHeading={'Jadeed Form'} inputFields={inputFields} submitHandler={handleJadeedFormSubmit}/>
    );
}

export default JadeedForm
