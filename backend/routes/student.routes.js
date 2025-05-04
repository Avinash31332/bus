import express from "express";
import { protect } from "../middleware/auth.middleware.js";
import {
  allStudents,
  createStudent,
} from "../controllers/admin.controllers.js";
import { loginStudent } from "../controllers/studentController.js";

const router = express.Router();

//login
router.post("/login", loginStudent);

export default router;
