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