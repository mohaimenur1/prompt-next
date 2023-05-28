import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (res) => {
  try {
    await connectToDB();
    const promptList = await Prompt.find({});

    return new Response(JSON.stringify(promptList), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
  }
};
