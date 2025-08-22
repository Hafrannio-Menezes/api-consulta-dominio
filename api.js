import express from "express";
import fetch from "node-fetch";

const app = express();

app.use((_req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/v1/whois", async (req, res) => {
  const domain = String(req.query.domain || "").trim().toLowerCase();
  if (!domain) return res.status(400).json({ error: "Parâmetro 'domain' é obrigatório" });

  try {
    const rdapURL = `https://rdap.registro.br/domain/${encodeURIComponent(domain)}`;
    const rdapRes = await fetch(rdapURL, { headers: { "Accept": "application/rdap+json" } });

    if (!rdapRes.ok) {
      const text = await rdapRes.text();
      return res.status(rdapRes.status).json({ error: "RDAP error", details: text });
    }

    const data = await rdapRes.json();

    res.setHeader("Cache-Control", "public, max-age=300");
    return res.json({
      domain,
      source: "rdap.registro.br",
      data,
    });
  } catch (err) {
    return res.status(500).json({ error: "Falha ao consultar RDAP", details: err?.message });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API on http://localhost:${port}`));
