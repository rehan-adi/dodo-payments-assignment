import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import express from "express";
import rateLimit from "express-rate-limit";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan("dev"));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json());

const limiter = rateLimit({
  windowMs: 2 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

app.post("/api/v1/echo", async (req, res) => {
  try {
    const { message } = req.body;

    await new Promise((r) => setTimeout(r, 2000));

    res.status(200).json({ status: "ok", echo: message });
  } catch (err: any) {
    console.error("Error in /echo route", err.message);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: err.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
