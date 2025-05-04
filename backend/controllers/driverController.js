import Driver from "../models/driver.model.js";
import { generateToken } from "../utils/auth.utils.js";
import bcrypt from "bcryptjs";

export const loginDriver = async (req, res) => {
  const { phone, password } = req.body;

  try {
    const driver = await Driver.findOne({ phone });
    if (!driver) return res.status(404).json({ message: "Driver not found" });

    const isMatch = await bcrypt.compare(password, driver.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid password" });

    const token = generateToken(driver._id, "driver");

    //cookie set
    res
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      })
      .status(200)
      .json({ driver });
  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
};
