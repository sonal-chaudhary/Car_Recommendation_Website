import express from "express";
import Car from "../models/carModel.js";

const router = express.Router();

// GET all cars OR search by brand/model
router.get("/", async (req, res) => {
  try {
    const query = req.query.q;
    let cars;

    if (query) {
      const regex = new RegExp(query, "i"); // case-insensitive search
      cars = await Car.find({
        $or: [
          { "basicInfo.brand": regex },
          { "basicInfo.model": regex },
          { "basicInfo.name": regex },
        ],
      }).limit(20).lean();
    } else {
      cars = await Car.find().limit(100).lean();
    }

    res.json(cars);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// GET single car by id
router.get("/:id", async (req, res) => {
  try {
    const car = await Car.findOne({ "basicInfo.id": req.params.id }).lean();
    if (!car) return res.status(404).json({ error: "Not found" });
    res.json(car);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// POST to add (useful for importing)
router.post("/", async (req, res) => {
  try {
    const payload = req.body; // expect full car object (like your JSON)
    // Upsert by basicInfo.id (if present)
    const carId = payload?.basicInfo?.id;
    if (carId) {
      const doc = await Car.findOneAndUpdate({ "basicInfo.id": carId }, payload, { upsert: true, new: true, setDefaultsOnInsert: true });
      return res.json(doc);
    }
    const doc = await Car.create(payload);
    res.json(doc);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
