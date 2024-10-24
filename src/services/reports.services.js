import PDFDocument from "pdfkit";
import { createObjectCsvWriter } from "csv-writer";
import Lead from "../models/leads.model";
import Campaign from "../models/campaigns.model";

const generateCampaignReport = async (campaignId) => {
  const campaign = await Campaign.findById(campaignId);
  if (!campaign) {
    throw new Error("Campaign not found");
  }

  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream(`campaign-report-${campaignId}.pdf`));
  doc.fontSize(25).text(campaign.name);
  doc.fontSize(15).text(`Type: ${campaign.type}`);
  doc.fontSize(15).text(`Budget: ${campaign.budget}`);
  doc.fontSize(15).text(`Start Date: ${campaign.startDate}`);
  doc.fontSize(15).text(`End Date: ${campaign.endDate}`);
  doc.fontSize(15).text(`Status: ${campaign.status}`);
  doc.fontSize(15).text(`Impressions: ${campaign.metrics.impressions}`);
  doc.fontSize(15).text(`Clicks: ${campaign.metrics.clicks}`);
  doc.fontSize(15).text(`Conversions: ${campaign.metrics.conversions}`);
  doc.end();
};

const generateLeadsReport = async (leadId) => {
  const leads = await Lead.findById(leadId);
  if (!leads) {
    throw new Error("Leads not found");
  }

  const csvWriter = createObjectCsvWriter({
    path: `leads-report-${leadId}.csv`,
    header: [
      { id: "name", title: "Name" },
      { id: "email", title: "Email" },
      { id: "phone", title: "Phone" },
      { id: "status", title: "Status" },
    ],
  });

  csvWriter.writeRecords(leads);
};

export default {
  generateCampaignReport,
  generateLeadsReport,
};
