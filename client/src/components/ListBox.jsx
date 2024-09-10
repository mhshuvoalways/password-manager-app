import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";

export default function ListboxComponent({
  value,
  categoryHandler,
  allCategory,
  className
}) {
  return (
    <Listbox value={value} onChange={categoryHandler}>
      <ListboxButton className={`bg-gray-700 appearance-none outline-0 px-3 py-2 rounded-lg text-white w-full text-start ${className}`}>
        {value}
      </ListboxButton>
      <ListboxOptions
        anchor="bottom"
        transition
        className="w-[var(--button-width)] bg-gray-700 rounded-lg text-white focus:outline-none transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 z-50"
      >
        {allCategory?.map((item, index) => (
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
