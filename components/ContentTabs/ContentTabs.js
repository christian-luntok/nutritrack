import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const TabHeaderData = [
    {
        id: "social-media",
        title: "Social Media",
        icon: "foundation:social-linkedin"
    },
    { id: "advertising", title: "Advertising", icon: "uil:facebook" },
    { id: "articles", title: "Articles", icon: "ooui:articles-rtl" },
    { id: "websites", title: "Websites", icon: "fa-brands:wordpress" }
];

const TabContentData = [
    {
        id: "social-media",
        title: "Crush Social Media with Articoole's Content Generation",
        content:
            "Articoole empowers you to effortlessly create captivating social media posts that drive engagement and traffic to your profiles.",
        image: "/placeholder2.png",
        features: [
            {
                id: uuid(),
                content:
                    "Enhance your social media presence with captivating content that resonates with your audience."
            },
            {
                id: uuid(),
                content:
                    "Boost engagement and drive traffic to your social media profiles with optimized captions and hashtags."
            },
            {
                id: uuid(),
                content:
                    "Save time and effort with Articoole's efficient content generation features, freeing up your creative potential to focus on other important aspects of your business."
            }
        ]
    },
    {
        id: "advertising",
        title: "Supercharge Your Ads with Articoole",
        content:
            "Want to create ads that stand out and drive results? With Articoole you can easily craft compelling and persuasive ad copy that converts. From attention-grabbing headlines to persuasive calls-to-action, Articoole has you covered.",
        image: "/placeholder2.png",
        features: [
            {
                id: uuid(),
                content:
                    "Save time and effort with AI-generated copywriting that takes minutes instead of hours"
            },
            {
                id: uuid(),
                content:
                    "Boost your advertising success with highly effective and engaging copy"
            },
            {
                id: uuid(),
                content:
                    "Drive more conversions and results for your advertising campaigns, with copy that speaks directly to your audience"
            },
            {
                id: uuid(),
                content:
                    "Experiment with different ad copy ideas and approaches, with unlimited creative prompts at your fingertips"
            }
        ]
    },
    {
        id: "articles",
        title: "Power Up Your Website Content with Articoole's Generated Articles",
        content:
            "Want to take your website content to the next level? With Articoole's AI-generated articles, you can access a vast library of topics and niches, and generate high-quality articles that engage your audience, improve your website's SEO, and establish your expertise in your industry. Here are some of the benefits:",
        image: "/placeholder2.png",
        features: [
            {
                id: uuid(),
                content:
                    "Save time and effort by generating articles in minutes"
            },
            {
                id: uuid(),
                content:
                    "Boost your website's search engine ranking and attract more traffic"
            },
            {
                id: uuid(),
                content:
                    "Stand out as an industry expert with informative and engaging content"
            }
        ]
    },
    {
        id: "websites",
        title: "Get Your Website Content Done in a Snap with Articoole",
        content:
            "Want to create website content that actually connects with your audience and tells your brand's story? Say no more! With Articoole's AI-powered content generation, you can effortlessly produce landing page copy, about us sections, and product descriptions that truly reflect your brand's unique value proposition and help you drive more conversions.",
        image: "/placeholder2.png",
        features: [
            {
                id: uuid(),
                content:
                    "With Articoole, you can generate high-quality content in minutes, freeing up your time to focus on other important tasks."
            },
            {
                id: uuid(),
                content:
                    "Create compelling and effective landing page copy that converts visitors into customers."
            },
            {
                id: uuid(),
                content:
                    "Establish your brand's voice and personality across all pages of your website, creating a consistent and memorable experience for your audience."
            }
        ]
    }
];

export const ContentTabs = () => {
    const [activeTab, setActiveTab] = useState(TabHeaderData[0].id);

    const handleTabClick = (id) => {
        setActiveTab(id);
    };

    return (
        <SectionContainer className="content-tabs--container mx-auto mt-8 text-center">
            <div className="content-tabs--menu grid grid-cols-2 gap-y-3 md:gap-y-0 md:inline-flex gap-x-1 justify-center p-[4px] md:bg-black/5 rounded-full">
                {TabHeaderData.map((tabData) => (
                    <a
                        key={tabData.id}
                        className={`inline-flex align-center justify-center md:justify-start cursor-pointer font-medium py-2 px-4 rounded-full transition-all ${
                            activeTab === tabData.id
                                ? "md:bg-white opacity-100"
                                : "md:bg-transparent opacity-50"
                        } `}
                        onClick={() => handleTabClick(tabData.id)}
                    >
                        <Icon icon={tabData.icon} className="h-6 w-6 mr-1" />
                        {tabData.title}
                    </a>
                ))}
            </div>
            <div className="content-tabs--content mt-8">
                {TabContentData.map((tabData) => (
                    <div
                        key={tabData.id}
                        className={`content-tabs--content-container ${
                            activeTab === tabData.id ? "grid" : "hidden"
                        } grid-cols-1 lg:grid-cols-2 gap-x-8 p-8 bg-white rounded-2xl drop-shadow-xl w-full offset-y-0 offset-x-8 blur-16`}
                    >
                        <div className="content text-left my-auto">
                            <h3 className="h4 md:h3 font-semibold">
                                {tabData.title}
                            </h3>
                            <p>{tabData.content}</p>
                            <ul className="list-items space-y-3">
                                {tabData.features.map((featureItem) => (
                                    <li
                                        key={featureItem.id}
                                        className="inline-grid grid-flow-col-dense"
                                        id={featureItem.id}
                                    >
                                        <Icon
                                            icon="ph:seal-check-bold"
                                            className="w-6 h-6 text-secondary-500 mr-2"
                                        />
                                        <p>{featureItem.content}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-8 lg:mt-0">
                            <Image
                                src="/placeholder2.png"
                                width={500}
                                height={500}
                                alt="Social Media Banner"
                                objectFit="cover"
                                className="mx-auto w-full"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </SectionContainer>
    );
};
