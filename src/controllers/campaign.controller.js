import { Campaign } from "../models/campaign.model";
import { dummyCampaigns } from "../dummyData/campaigns.dummy";
import { campaignTransform } from "../services/etl.services";

// this controller function fetches all campaigns from the database or dummy data
export const fetchCampaigns = async (req, res) => {
  try {
    // const campaigns = await Campaign.find(); // use this to get all campaigns from the database

    const campaigns = dummyCampaigns.getCampaigns(); // use this to get all campaigns from the dummy data
    return res.status(200).json(campaigns);
  } catch (error) {
    return res.status(500).json({
      message: `Some error occured in fetching Campaigns: ${error.message}`,
    });
  }
};

// this controller function transforms the fetched campaigns
export const etlService = async (req, res) => {
  try {
    const campaigns = dummyCampaigns.getCampaigns();
    const transformedCampaigns = campaignTransform(campaigns);
    return res.status(200).json(transformedCampaigns);
  } catch (error) {
    return res.status(500).json({
      message: `Some error occured in transforming Campaigns: ${error.message}`,
    });
  }
};
