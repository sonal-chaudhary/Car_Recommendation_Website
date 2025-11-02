import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
  basicInfo: {
    id: { type: String, index: true },
    name: String,
    brand: String,
    variant: String,
    fuelType: String,
    transmission: String,
    engineCC: String,
    seatingCapacity: Number,
    price: Object
  },
  features: Object,
  availability: Object,
  partPrices: Object,
  images: [String]
}, { timestamps: true });

const Car = mongoose.model("Car", CarSchema);
export default Car;
