import { Campaign } from "../models/campaign.model";
import { dummyCampaigns } from "../dummyData/campaigns.dummy";

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
