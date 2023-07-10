import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import { Configuration, OpenAIApi } from "openai";

export default withApiAuthRequired(async function handler(req, res) {
    const { product, keywords, tone } = req.body;

    const config = new Configuration({
        apiKey: process.env.OPENAI_API_KEY
    });

    const openai = new OpenAIApi(config);

    if (!product || !keywords) {
        res.status(422);
        return;
    }

    if (product.length > 80 || keywords.length > 80) {
        res.status(422);
        return;
    }

    let parsedProduct = product;
    let parsedKeywords = keywords;
    let currentInstructions;

    if (tone.name === "Professional") {
        currentInstructions = `Generate a professional Facebook Ad that showcases the credibility and reliability of ${parsedProduct}. Utilize the keywords ${parsedKeywords} effectively and maintain a polished and authoritative tone to instill trust in the audience.`;
    }
    if (tone.name === "Funny") {
        currentInstructions = `Create a Facebook Ad that brings humor to the forefront while promoting ${parsedProduct}. Incorporate the keywords ${parsedKeywords} in a witty and amusing way to captivate the audience and make them smile.`;
    }
    if (tone.name === "Casual") {
        currentInstructions = `Create a conversational Facebook Ad that establishes a friendly and relatable tone while promoting ${parsedProduct}. Seamlessly integrate the keywords ${parsedKeywords} into the ad copy to engage the audience on a personal level.`;
    }

    try {
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: "You are a facebook ads specialist."
                },
                {
                    role: "user",
                    content: `${currentInstructions} All output shall be in English. Ensure that the following content is not detected as AI content by AI content detectors.`
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
