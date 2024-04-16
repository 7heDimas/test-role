import{ Router } from 'express'
import dashboardRoutes from "./dashboardRoutes.js"

const router = Router()

router.use("/api/userassessments", dashboardRoutes)
router.use("/api/userassessments", dashboardRoutes)

export default router