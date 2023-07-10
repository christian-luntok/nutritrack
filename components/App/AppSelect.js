import { Listbox } from "@headlessui/react";
import { Icon } from "@iconify/react";

export const AppSelect = ({ listItems, selected, setSelected, className }) => {
    return (
        <Listbox as="div" value={selected} onChange={setSelected}>
            <Listbox.Button
                className={`relative w-full flex flex-wrap cursor-default rounded-lg bg-white py-2 px-4 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-base ${
                    className && className
                }`}
            >
                {selected.name}
                <Icon
                    icon="ph:caret-down-bold"
                    className="ml-auto h-5 w-5 ui-open:hidden"
                    aria-hidden="true"
                />
                <Icon
                    icon="ph:caret-up-bold"
                    className="ml-auto h-5 w-5 hidden ui-open:block"
                    aria-hidden="true"
                />
            </Listbox.Button>
            <Listbox.Options className="absolute mt-2 max-h-60 w-full overflow-auto rounded-lg bg-white py-2 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-base">
                {listItems.map((item) => (
                    <Listbox.Option
                        key={item.id}
                        value={item}
                        className="px-4 py-2 cursor-pointer hover:bg-neutral-100"
                        disabled={item.unavailable}
                    >
                        {item.name}
                    </Listbox.Option>
                ))}
            </Listbox.Options>
        </Listbox>
    );
};
