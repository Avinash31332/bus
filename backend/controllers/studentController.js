import Student from "../models/student.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/auth.utils.js";

export const loginStudent = async (req, res) => {
  const { email, password } = req.body;

  try {
    const student = await Student.findOne({ email });
    if (!student) return res.status(404).json({ message: "Student not found" });

    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid password" });

    const token = generateToken(student._id, "student");

    //cookie set
    res
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      })
      .status(200)
      .json({ student });
  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
};
