import { Router } from "express";
import { createDashboard, findDashboard } from "../controller/dashboardController.js";
const router = Router()

router.post("/", createDashboard)
router.get("/", findDashboard)

export default router;