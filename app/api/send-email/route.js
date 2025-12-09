import { NextResponse } from "next/server";
import mongoose from "mongoose";

// -----------------------------
// 🔗 MongoDB CONNECTION
// -----------------------------
const MONGODB_URI = process.env.MONGODB_URI;

async function connectDB() {
  if (mongoose.connection.readyState === 1) return;

  if (!MONGODB_URI) {
    throw new Error("Please define MONGODB_URI in .env.local");
  }

  await mongoose.connect(MONGODB_URI, {
    dbName: "digitalsynk",
  });
}

// -----------------------------
// 🗂️ Schema + Model
// -----------------------------
const EmailSchema = new mongoose.Schema(
  {
    type: String,
    name: String,
    email: String,
    phone: String,
    service: String,
    preferredDate: String,
    message: String,
  },
  { timestamps: true }
);

const Email = mongoose.models.Email || mongoose.model("Email", EmailSchema);

// -----------------------------
// 📨 POST → Save Form Data
// -----------------------------
export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();
    const { type, name, email, phone, service, preferredDate, message } = body;

    const saved = await Email.create({
      type,
      name,
      email,
      phone,
      service,
      preferredDate,
      message,
    });

    return NextResponse.json({
      success: true,
      message: "Data saved successfully",
      data: saved,
    });
  } catch (error) {
    console.error("POST ERROR:", error);
    return NextResponse.json(
      { success: false, message: "Failed to save data" },
      { status: 500 }
    );
  }
}

// -----------------------------
// 📥 GET → Fetch All Saved Data
// -----------------------------
export async function GET() {
  try {
    await connectDB();

    const emails = await Email.find().sort({ createdAt: -1 });
    


    return NextResponse.json({
      success: true,
      data: emails,
    });
  } catch (error) {
    console.error("GET ERROR:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
