import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { v4 as uuid } from "uuid";

const ColumnData = [
    {
        id: uuid(),
        title: "Emily J.",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "NutriPlan has revolutionized my meal planning and nutrition journey. With its intuitive Notion template, I can effortlessly plan my meals, track my nutrition, and stay on top of my health goals. It's truly a game-changer!"
    },
    {
        id: uuid(),
        title: "Jason F.",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "I've tried various meal planning tools, but NutriPlan stands out from the rest. The customizable layouts and seamless recipe integration make it a breeze to create delicious and healthy meals. It's become an essential part of my wellness routine."
    },
    {
        id: uuid(),
        title: "Miguel J.",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "NutriPlan has made meal planning and tracking nutrition so much easier and enjoyable. The comprehensive features and user-friendly interface have helped me stay on track with my health goals. I highly recommend it to anyone looking for a convenient and effective solution."
    },
    {
        id: uuid(),
        title: "Kim L.",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "I can't imagine my nutrition journey without NutriPlan. It has simplified the way I plan my meals and track my progress. The ability to customize layouts and easily integrate recipes has made healthy eating a breeze. It's been a true lifesaver!"
    }
];

export const Columns = () => {
    return (
        <SectionContainer className="benefits-lists grid gap-x-8 gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16">
            {ColumnData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="benefits-list--item text-[#737373] text-left"
                >
                    <Icon icon={item.icon} className="mb-4 w-10 h-10 my-2" />
                    <h3 className="text-xl mb-2 font-medium text-black">
                        {item.title}
                    </h3>
                    <p>{item.content}</p>
                    <o className="flex">
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                    </o>
                </div>
            ))}
        </SectionContainer>
    );
};
