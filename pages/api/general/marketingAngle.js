import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import { Configuration, OpenAIApi } from "openai";

export default withApiAuthRequired(async function handler(req, res) {
    const { product, content, tone } = req.body;
    const config = new Configuration({
        apiKey: process.env.OPENAI_API_KEY
    });
    const openai = new OpenAIApi(config);

    let parsedProduct = product;
    let parsedDetails = content;
    let currentTone;

    console.log(parsedProduct, parsedDetails, tone.name);
    if (tone.name === "Professional") {
        currentTone = "Use professional voice and tone.";
    }
    if (tone.name === "Funny") {
        currentTone = "Use a humorous voice and tone.";
    }
    if (tone.name === "Casual") {
        currentTone = "Use conversational voice and tone.";
    }

    try {
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: "You are a marketing specialist."
                },
                {
                    role: "user",
                    content: `Generate 2 different sections of marketing angles, each angle should have 2 very short angles that are persuasive and compelling from a company or product called ${parsedProduct}, the details about their product or service is ${parsedDetails}. All output shall be in English. Ensure that the following content is not detected as AI content by AI content detectors. ${currentTone}

                The return format should only be a valid JSON (with no \n or \t in the ouput) in the following format:
                {
                    "title": Title here,
                    "marketing_angles": [
                        "angle_title": Angle goes here,
                        "persuasivePoints": [
                            ...list of marketing angles here
                        ],
                },`
                }
            ],
            max_tokens: 3000,
            temperature: 0.5
        });

        if (
            response &&
            response.data &&
            response.data.choices &&
            response.data.choices.length > 0
        ) {
            const responseData = response.data.choices[0]?.message.content;
            res.status(200).json({
                content: responseData
            });
        } else {
            res.status(500).json({
                message:
                    "Failed to process the request. Please try again later."
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Failed to process the request. Please try again later.",
            data: error.message,
            toast: false
        });
    }
});
