import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

import leadRoutes from "./routes/leads.route.js";
import campaignRoutes from "./routes/campaigns.route.js";

app.use("/api/leads", leadRoutes);
app.use("/api/campaigns", campaignRoutes);

export { app };
