import JadeedForm from "../_components/forms/JadeedForm";
import JuzhaaliForm from "../_components/forms/JuzhaaliForm";
import MurajaatForm from "../_components/forms/MurajaatForm";
import TasmeeForm from "../_components/forms/TasmeeForm";

export default function Page() {
  return (
    <div className="flex flex-col items-center px-3 py-5 space-y-15">
      <header className="font-semibold text-xl text-center w-[90%] tracking-wide">
        Upload your records by completing the fields below
      </header>

      {/* jadeed form */}

     <JadeedForm />

      {/* murajaat form */}

      <MurajaatForm />

      {/* juzhaali form */}

      <JuzhaaliForm />

      {/* tasmee form */}

      <TasmeeForm />
    </div>
  );
}
