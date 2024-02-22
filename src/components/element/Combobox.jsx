import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

function MyCombobox({ handle, arr, label }) {
  const [selected, setSelected] = useState(arr[0]);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? arr
      : arr.filter((item) => {
          return item.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""));
        });

  const changeHandle = (value) => {
    setSelected(value);
    handle(value.name);
  };

  return (
    <div className="w-full relative z-[99999]">
      <Combobox value={selected} onChange={changeHandle}>
        <div className="relative ">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-box text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm p-2 border">
            <Combobox.Input
              className="w-full bg-box outline-none relative border-none py-2 pl-3 pr-10 p-5 border text-sm leading-5 text-gray-900 focus:ring-0"
              displayValue={(person) => person.name}
              onChange={(event) => {
                setQuery(event.target.value);
                handle(event.target.value);
              }}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-textgray100"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute z-[999999] bg-white mt-1 max-h-60 w-full overflow-auto rounded-2xl  bg-box py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {filteredPeople.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none px-4 py-2 text-textgray100">
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map((person) => (
                  <Combobox.Option
                    key={person.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 z-[999999]   ${
                        active
                          ? "bg-teal-600 z-[999999] text-white"
                          : "text-textgray400"
                      }`
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate z-[999999] ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {person.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 z-[999999] left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          >
                            <CheckIcon
                              className="h-5 w-5 z-50"
                              aria-hidden="true"
                            />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
      <span
        className={`absolute left-3 font-bold
             text-textSecond_300 top-[-10px] text-[0.80rem] font-bold"
         
          bg-background_box pl-2 pr-2`}
      >
        {label}
      </span>
      {!!query && (
        <span
          className={`absolute left-3 font-bold InputComponentSpan  
          
          text-textgray500 top-[15.5px] m-0"
          bg-box pl-2 pr-2`}
        >
          Choose a {label.toLowerCase()}
        </span>
      )}
    </div>
  );
}

export default MyCombobox;
