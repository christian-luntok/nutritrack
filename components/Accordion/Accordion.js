import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import clsx from "clsx";

const accordionData = [
    {
        id: uuid(),
        title: "What is Notion?",
        isOpen: true,
        content:
            "Notion is a free all-in-one productivity tool that allows you to create, organize, and collaborate on various types of content. It's a versatile platform that can be used for tasks such as note-taking, project management, and even meal planning, as showcased in this template."
    },
    {
        id: uuid(),
        title: "Who is this template for?",
        isOpen: false,
        content:
            "This website template is designed for anyone who wants to enhance their online presence and create a professional website. Whether you're a freelancer, small business owner, or creative professional, this template offers an easy-to-use solution for showcasing your work, services, or portfolio."
    },
    {
        id: uuid(),
        title: "Do I need to pay for this?",
        isOpen: false,
        content: "No, this is free"
    },
    {
        id: uuid(),
        title: "What will I get when I buy this template?",
        isOpen: false,
        content:
            "When you purchase this website template, you will receive the necessary files and assets to set up your own professional website. This includes pre-designed layouts, sections, and features tailored to your specific needs. You'll have a solid foundation to showcase your content, highlight your services, and engage with your audience effectively."
    },
    {
        id: uuid(),
        title: "Where can I ask more questions about this template?",
        isOpen: false,
        content:
            "If you have any further questions or need assistance regarding this template, please feel free to reach out to me on my website - Christian Luntok (https://cjluntok.com/)"
    }
];

const accordionItemType = {
    top: "rounded-t-lg",
    default: "border rounded-none border-t-0",
    bottom: "border border-t-0 rounded-b-lg"
};

export const Accordion = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const accordionClickHandle = (id) => {
        setActiveAccordion(id === activeAccordion ? null : id);
    };

    return (
        <SectionContainer className="accordion--container my-16 drop-shadow-xl max-w-3xl mx-auto offset-y-0 offset-x-8">
            {accordionData.map((accordionItem, index) => (
                <div
                    key={accordionItem.id}
                    id={accordionItem.id}
                    className={clsx(
                        "accordion-item--container border border-neutral-200 bg-white overflow-hidden",
                        {
                            [accordionItemType.top]: index === 0,
                            [accordionItemType.default]:
                                index > 0 && index < accordionData.length - 1,
                            [accordionItemType.bottom]:
                                index === accordionData.length - 1
                        }
                    )}
                >
                    <h2 className="accordion-item--heading mb-0">
                        <button
                            className="group relative flex w-full font-semibold items-center rounded-t-lg border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition"
                            type="button"
                            aria-expanded={accordionItem.isOpen}
                            onClick={() =>
                                accordionClickHandle(accordionItem.id)
                            }
                        >
                            {accordionItem.title}
                            <Icon
                                icon="material-symbols:keyboard-arrow-up-rounded"
                                className="ml-auto h-8 w-8 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out motion-reduce:transition-none"
                            />
                        </button>
                    </h2>
                    <div
                        className={clsx(
                            "accordion-item--content py-4 px-5 text-base",
                            {
                                hidden: activeAccordion !== accordionItem.id, // Use hidden class to animate height to 0
                                "!visibility block":
                                    activeAccordion === accordionItem.id // Use block class to show content again
                            }
                        )}
                    >
                        <p>{accordionItem.content}</p>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};
