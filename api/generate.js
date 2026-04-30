export default async function handler(req, res) {
  const tunnelURL = "https://memo-ai.loca.lt/api/generate"; // Senin güncel tunnel adresin

  try {
    const response = await fetch(tunnelURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "bypass-tunnel-reminder": "true"
      },
      body: JSON.stringify(req.body)
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Ollama'ya bağlanılamadı: " + error.message });
  }
}
