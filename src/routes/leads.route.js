import { Router } from "express";
import { etlService, fetchLeads } from "../controllers/lead.controller.js";

const router = Router();

// GET /api/leads
router.get("/getLeads", fetchLeads);
router.get("/leadReport", etlService);

export default router;
