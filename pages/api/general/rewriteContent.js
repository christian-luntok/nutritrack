import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import { Configuration, OpenAIApi } from "openai";

export default withApiAuthRequired(async function handler(req, res) {
    const { instructions, content, tone } = req.body;
    const config = new Configuration({
        apiKey: process.env.OPENAI_API_KEY
    });
    const openai = new OpenAIApi(config);

    let parsedJSON;
    let currentInstructions;

    // Improve
    if (instructions === "Improve" && tone.name === "Professional") {
        currentInstructions =
            "Your task is to enhance the clarity and precision of the following paragraph/s while maintaining a professional tone. Use professional voice and tone.";
    }

    if (instructions === "Improve" && tone.name === "Funny") {
        currentInstructions =
            "Your task is to rewrite the following block of text in a funny and lighthearted manner without losing its meaning. Use a humorous voice and tone, include jokes, and write with irony when appropriate.";
    }

    if (instructions === "Improve" && tone.name === "Casual") {
        currentInstructions =
            "Your task is to add some flair and personality to the following block of text to make it sound more casual and friendly. Use conversational voice and tone. Imagine you're talking to a friend and use natural language and phrasing.";
    }

    // Simplify
    if (instructions === "Simplify" && tone.name === "Professional") {
        currentInstructions =
            "Your task is to simplify the language and streamline the message of the following paragraph/s to make it more accessible to a professional audience. Use professional voice and tone.";
    }

    if (instructions === "Simplify" && tone.name === "Funny") {
        currentInstructions =
            "Your task is to take the following paragraph and simplify it with a touch of humor to make it more entertaining and easy to grasp. Use a humorous voice and tone, include jokes, and write with irony when appropriate.";
    }

    if (instructions === "Simplify" && tone.name === "Casual") {
        currentInstructions =
            "Your task is to make the following paragraph more straightforward and easy to understand while keeping a casual and friendly tone. Use conversational voice and tone. Imagine you're talking to a friend and use natural language and phrasing.";
    }

    // Shorten
    if (instructions === "Shorten" && tone.name === "Professional") {
        currentInstructions =
            "Your task is to condense the following paragraph/s without losing any essential information or compromising the professional tone. Use professional voice and tone.";
    }

    if (instructions === "Shorten" && tone.name === "Funny") {
        currentInstructions =
            "Your task is to playfully reduce the wordiness of the following paragraph to make it shorter and funnier.";
    }

    if (instructions === "Shorten" && tone.name === "Casual") {
        currentInstructions =
            "Your task is to trim the unnecessary details from the following paragraph to make it more concise and casual in tone. Use conversational voice and tone. Imagine you're talking to a friend and use natural language and phrasing.";
    }

    // Rephrase
    if (instructions === "Rephrase" && tone.name === "Professional") {
        currentInstructions =
            "Your task is to rewrite the following block of text using different wording and sentence structure while maintaining a professional tone. Use professional voice and tone.";
    }

    if (instructions === "Rephrase" && tone.name === "Funny") {
        currentInstructions =
            "Your task is to give a funny twist to the following paragraph by rephrasing it in a humorous and entertaining way. Use a humorous voice and tone, include jokes, and write with irony when appropriate.";
    }

    if (instructions === "Rephrase" && tone.name === "Casual") {
        currentInstructions =
            "Your task is to rephrase the following sentence to sound more relaxed and informal while still conveying the original meaning. Use conversational voice and tone. Imagine you're talking to a friend and use natural language and phrasing.";
    }

    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: "You are a content re-writer."
            },
            {
                role: "user",
                content: `${currentInstructions}. All output shall be in English. Ensure that the following content is not detected as AI content by AI content detectors. Ensure that the rewritten text doesn't go over 800 characters. The block of text to be re-written is ${content}`
            }
        ],
        max_tokens: 1500,
        temperature: 0.5
    });

    try {
        parsedJSON = response.data.choices[0]?.message.content;
    } catch (e) {
        res.status(500).json({
            message: "The response could not be parsed into JSON.",
            data: response.data.choices[0]?.message.content
        });
        return;
    }

    res.status(200).json({ content: parsedJSON });
});
