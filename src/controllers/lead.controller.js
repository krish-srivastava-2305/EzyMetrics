import Lead from "../models/lead.model.js";
import { dummyLeads } from "../dummyData/leads.dummy.js";

export const fetchLeads = async (req, res) => {
  try {
    // const Leads = await Lead.find();
    const leads = dummyLeads.getLeads();
    return res.status(200).json(leads);
  } catch (error) {
    return res
      .status(500)
      .json({
        message: `Some error occured in fetching Leads: ${error.message}`,
      });
  }
};
