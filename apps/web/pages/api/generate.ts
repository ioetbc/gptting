import {Configuration, OpenAIApi} from "openai";

export type ChatGPTAgent = "user" | "system";

export interface ChatGPTMessage {
  role: ChatGPTAgent;
  content: string;
}

export interface OpenAIStreamPayload {
  model: string;
  prompt: string;
  temperature: number;
  max_tokens: number;
  top_p: number;
  frequency_penalty: number;
  presence_penalty: number;
}

if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing env var from OpenAI");
}

const config = new Configuration({
  apiKey: "",
});
const openai = new OpenAIApi(config);

export default async function handler(req, res) {
  const {prompt} = req.body;

  if (!prompt) {
    throw new Error("Missing prompt");
  }

  const response = await openai
    .createCompletion({
      model: "text-davinci-003",
      prompt,
      temperature: 0,
      max_tokens: 200,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    })
    .then((response) => {
      console.log("response.data.choices", response.data.choices);
      return response.data.choices[0].text;
    })
    .catch(async (error: Error) => {
      console.log("hmmmmm", error);

      // if (400)
      throw new Error(`Failed to call OpenAI ${error.message}`);
    });

  console.log("response", response);

  res.status(200).json(response);
}
