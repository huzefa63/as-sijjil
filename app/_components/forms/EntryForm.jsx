'use client';

import { useForm } from "react-hook-form";
import { LuLoaderCircle } from "react-icons/lu";

function EntryForm({formHeading,inputFields,submitHandler,isSubmitting }) {
    const {register,handleSubmit,formState:{errors}} = useForm();
    return (
      <form
        className="bg-(--layer) w-full shadow-sm rounded-md border border-(--highlightBorder) pt-4 pb-8 px-5"
        onSubmit={handleSubmit(submitHandler)}
      >
        <header className="font-semibold text-xl tracking-wide text-center">
          {formHeading}
        </header>

        <div className="grid grid-cols-2 gap-x-10 gap-y-5 mt-5 w-full">
          {inputFields.map((el, i) => {
            return (
              <div key={el.heading}>
                <div className="w-full space-y-1">
                  <p className="text-gray-700">{el.heading}</p>
                  {/* {(el.type === "date" ||
                    el.type === "text" ||
                    el.type === "number") &&  */}
                  {el.type !== "select" && (
                    <input
                      {...register(el.name, {
                        required: "this field is required",
                      })}
                      type={el.type}
                      required={el.required}
                      name={el.name}
                      className="bg-(--background) shadow-sm focus:outline-none focus:border-amber-500 transition-all duration-500 ease-in-out border border-amber-300 rounded-sm px-2 py-1 w-full"
                    />
                  )}
                  {el.type === "select" && (
                    <select
                      {...register(el.name, {
                        required: "this field is required",
                      })}
                      required={el.required}
                      name={el.name}
                      className="bg-(--background) shadow-sm focus:outline-none focus:border-amber-500 transition-all duration-500 ease-in-out border border-amber-300 rounded-sm px-2 py-1 w-full"
                    >
                      {el.options.map((el, i) => (
                        <option key={el} value={el}>
                          {el}
                        </option>
                      ))}
                    </select>
                  )}
                </div>{" "}
              </div>
            );
          })}
        </div>
        <button disabled={isSubmitting} className="relative mt-5 bg-amber-800 hover:cursor-pointer hover:bg-amber-900 transition-all duration-300 ease-in-out shadow-sm text-white px-2 py-2 rounded-sm text-xs tracking-wide ">
          {/* <button className="mt-5 bg-[#A82323] text-white px-2 py-2 rounded-sm text-xs tracking-wide "> */}
          <span className={`${isSubmitting && 'opacity-0'}`}>Submit</span>
          <LuLoaderCircle className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg ${isSubmitting ? 'opacity-100':'opacity-0'} animate-spin`}/>
        </button>
      </form>
    );
}

export default EntryForm
