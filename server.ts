import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import cors from "cors";
import mongoose from "mongoose";
import { ContactModel } from "./src/models/Contact";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://sangyegyasto_db_user:prakash@123@cluster0.rchklmk.mongodb.net/";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Connect to MongoDB
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }

  app.use(cors());
  app.use(express.json());

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "Portfolio Backend is running" });
  });

  app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;
    console.log("Contact form submission:", { name, email, message });
    
    try {
      const newContact = new ContactModel({ name, email, message });
      await newContact.save();
      res.json({ success: true, message: "Message received and saved! I'll get back to you soon." });
    } catch (error) {
      console.error("Error saving contact message:", error);
      res.status(500).json({ success: false, message: "Failed to save message. Please try again later." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
