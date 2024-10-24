import { Router } from "express";
import {
  etlService,
  fetchCampaigns,
} from "../controllers/campaign.controller.js";

const router = Router();

// GET /api/campaigns
router.get("/getCampaigns", fetchCampaigns);
router.get("/campaignReport", etlService);

export default router;
