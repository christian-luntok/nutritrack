import { RadioGroup } from "@headlessui/react";

export const AppRadio = ({ listItems, selected, setSelected, className }) => {
    return (
        <RadioGroup
            value={selected}
            className="flex flex-wrap gap-2"
            onChange={setSelected}
        >
            {listItems.map((item) => (
                /* Use the `active` state to conditionally style the active option. */
                /* Use the `checked` state to conditionally style the checked option. */
                <RadioGroup.Option key={item} value={item}>
                    {({ active, checked }) => (
                        <li
                            className={` cursor-pointer rounded-lg inline-flex items-center justify-center border border-neutral-200 py-2 px-4 hover:bg-neutral-100 ${
                                active ? "bg-neutral-100" : ""
                            } ${checked ? "bg-neutral-100" : ""}`}
                        >
                            {item}
                        </li>
                    )}
                </RadioGroup.Option>
            ))}
        </RadioGroup>
    );
};
