'use client';
import axios from "axios";
import EntryForm from "./EntryForm";

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
    { heading: "Date", type: "date", name: "date", required: true },
  ];
  async function handleJadeedFormSubmit(data) {
    console.log(data);
    try{
      const req = await axios.post('http://localhost:4000/entry/jadeed',data);
    }catch(err){
      console.log(err)
    }
  }
    return (
      
      <EntryForm formHeading={'Jadeed Form'} inputFields={inputFields} submitHandler={handleJadeedFormSubmit}/>
    );
}

export default JadeedForm
