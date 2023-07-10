import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import { Configuration, OpenAIApi } from "openai";

export default withApiAuthRequired(async function handler(req, res) {
    const { sumtype, content } = req.body;
    const config = new Configuration({
        apiKey: process.env.OPENAI_API_KEY
    });
    const openai = new OpenAIApi(config);

    let parsedJSON;
    let currentInstructions;

    if (sumtype.name === "Paragraph") {
        currentInstructions =
            "Develop a well-structured paragraph summary that encapsulates the essence of the text and its underlying arguments";
    }

    if (sumtype.name === "Bullet Points") {
        currentInstructions =
            "Generate a concise bullet point summary that highlights the main takeaways, crucial data points, and notable aspects of the text";
    }

    console.log(
        "Type: " +
            sumtype.name +
            " Instructions: " +
            currentInstructions +
            " " +
            currentInstructions +
            " " +
            "Content:" +
            content
    );

    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: "You are a content summarizer."
            },
            {
                role: "user",
                content: `${currentInstructions} then generate a conclusion that summarizes the key takeaways from the text and offers a broader perspective on the points discussed. All output shall be in English. Ensure that the following content is not detected as AI content by AI content detectors. Add new information to some paragraphs or delete from some paragraphs to make it unique. Ensure that the rewritten text doesn't go over 800 characters. The block of text to be summarized is ${content}`
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
