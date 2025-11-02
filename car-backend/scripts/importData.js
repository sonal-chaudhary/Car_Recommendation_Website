import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import Car from "../models/carModel.js";

dotenv.config();

try {
  // ✅ Connect to MongoDB
  await mongoose.connect(process.env.MONGO_URI);
  console.log("✅ MongoDB Connected for import");

  // ✅ Ensure proper directory path
  const __dirname = path.resolve();
  const dataPath = path.join(process.cwd(), "data");

  // ✅ Check if folder exists
  if (!fs.existsSync(dataPath)) {
    console.error("❌ Data folder not found:", dataPath);
    process.exit(1);
  }

  // ✅ Get all subfolders (Audi, BMW, etc.)
  const brands = fs.readdirSync(dataPath);

  for (const brand of brands) {
    const brandPath = path.join(dataPath, brand);

    // skip if not a folder
    if (!fs.lstatSync(brandPath).isDirectory()) continue;

    const files = fs.readdirSync(brandPath);

    for (const file of files) {
      if (!file.endsWith(".json")) continue;

      const filePath = path.join(brandPath, file);
      const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

      if (jsonData.car) {
        await Car.create(jsonData.car);
        console.log(`🚗 Imported: ${jsonData.car.basicInfo.name}`);
      }
    }
  }

  console.log("🎉 All car data imported successfully!");
  process.exit();
} catch (err) {
  console.error("❌ Error importing data:", err.message);
  process.exit(1);
}
