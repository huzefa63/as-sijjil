import SignInForm from "../_components/authForm/SignInForm";

export default function Page() {
  return (
    <div className="flex h-full items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-semibold">Sign In</h1>
        <SignInForm />
      </div>
    </div>
  );
}
