import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";

export default function ListboxComponent({ value, onChangeHandler, items }) {
  return (
    <Listbox value={value} onChange={onChangeHandler}>
      <ListboxButton
        className={`bg-gray-700 appearance-none outline-0 rounded-lg text-white text-start w-20 px-3 !py-0`}
      >
        {value}
      </ListboxButton>
      <ListboxOptions
        anchor="bottom"
        transition
        className="w-[var(--button-width)] bg-gray-700 rounded-lg text-white focus:outline-none transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 z-50"
      >
        {items?.map((item, index) => (
          <ListboxOption
            key={index}
            value={item}
            className="group flex items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-gray-600 cursor-pointer"
          >
            <div className="text-sm/6 text-white">{item}</div>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
}
