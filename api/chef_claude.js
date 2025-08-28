export default async function handler(req, res) {
  try {
    const recipe = req.query.recipe; // React frontend will send ?city=London
    const API_KEY = process.env.CHEF_CLAUDE_KEY; // pulled from Vercel env vars

    // Call the real API with your private key
    const response = await fetch(`https://api.example.com/weather?q=${recipe}&appid=${API_KEY}`);
    const data = await response.json();

    res.status(200).json(data); // Send result back to frontend
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
}

//  THE BLOCK OF CODE ABOVE SHOULD BE ACTIVATED/UNCOMMENTED TO MAKE THE WEB APP RUN AS 
//EXPECTED WHEN DEPLOYED LOCALLY i.e npm run dev




// import { InferenceClient } from '@huggingface/inference'

// const SYSTEM_PROMPT = `
// You are an assistant that receives a list of ingredients that a user has and suggests a recipe they 
// could make with some or all of those ingredients. You don't need to use every ingredient they 
// mention in your recipe. The recipe can include additional ingredients they didn't mention, but try 
// not to include too many extra ingredients. Format your response in markdown to make it easier 
// to render to a web page
// `

// export default async function handler(req, res) {
//   try {
//     const { ingredients } = req.body; // Get ingredients from POST request body
//     const API_KEY = process.env.CHEF_CLAUDE_KEY; // No VITE_ prefix needed here
    
//     const hf = new InferenceClient(API_KEY);
    
//     const response = await hf.chatCompletion({
//       model: "mistralai/Mistral-7B-Instruct-v0.3",
//       messages: [
//         { role: "system", content: SYSTEM_PROMPT },
//         { role: "user", content: `I have ${ingredients}. Please give me a recipe you'd recommend I make!` },
//       ],
//       max_tokens: 1024,
//     });

//     res.status(200).json({ recipe: response.choices[0].message.content });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Could not generate recipe" });
//   }
// }



// import { HfInference } from '@huggingface/inference'

// const SYSTEM_PROMPT = `
// You are an assistant that receives a list of ingredients that a user has and suggests a recipe they 
// could make with some or all of those ingredients. You don't need to use every ingredient they 
// mention in your recipe. The recipe can include additional ingredients they didn't mention, but try 
// not to include too many extra ingredients. Format your response in markdown to make it easier 
// to render to a web page
// `

// export default async function handler(req, res) {
//   try {
//     const { ingredients } = req.body;
//     const API_KEY = process.env.CHEF_CLAUDE_KEY;
    
//     const hf = new HfInference(API_KEY);
    
//     const response = await hf.chatCompletion({
//       model: "mistralai/Mistral-7B-Instruct-v0.3",
//       messages: [
//         { role: "system", content: SYSTEM_PROMPT },
//         { role: "user", content: `I have ${ingredients}. Please give me a recipe you'd recommend I make!` },
//       ],
//       max_tokens: 1024,
//     });

//     res.status(200).json({ recipe: response.choices[0].message.content });
//   } catch (error) {
//     console.error("Full error object:", error);
//     res.status(500).json({ 
//       error: "Could not generate recipe", 
//       details: error.message,
//       errorType: error.constructor.name
//     });
//   }
// }



