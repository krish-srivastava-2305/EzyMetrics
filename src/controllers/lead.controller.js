import Lead from "../models/lead.model.js";
import { dummyLeads } from "../dummyData/leads.dummy.js";
import { leadTransform } from "../services/etl.services.js";

export const fetchLeads = async (req, res) => {
  try {
    // const Leads = await Lead.find();
    const leads = dummyLeads.getLeads();
    return res.status(200).json(leads);
  } catch (error) {
    return res.status(500).json({
      message: `Some error occured in fetching Leads: ${error.message}`,
    });
  }
};

// this controller function transforms the fetched leads
export const etlService = async (req, res) => {
  try {
    const leads = dummyLeads.getLeads();
    const transformedLeads = leadTransform(leads);
    return res.status(200).json(transformedLeads);
  } catch (error) {
    return res.status(500).json({
      message: `Some error occured in transforming Leads: ${error.message}`,
    });
  }
};
