import { IoCloudUploadSharp } from "react-icons/io5";
import JadeedForm from "../_components/forms/JadeedForm";
import JuzhaaliForm from "../_components/forms/JuzhaaliForm";
import MurajaatForm from "../_components/forms/MurajaatForm";
import TasmeeForm from "../_components/forms/TasmeeForm";

export default function Page() {
  return (
    <div className="flex flex-col items-center px-3 py-5 ">
      <header className="flex font-semibold text-xl text-center w-[90%] tracking-wide mb-5 text-amber-900">
        <IoCloudUploadSharp className="text-4xl" />
        <span className="wrap-break-word">Upload your records by completing the fields below</span>
      </header>

      <div className="space-y-5">
        {/* jadeed form */}

        <JadeedForm />

        {/* murajaat form */}

        <MurajaatForm />

        {/* juzhaali form */}

        <JuzhaaliForm />

        {/* tasmee form */}

        <TasmeeForm />
      </div>
    </div>
  );
}
