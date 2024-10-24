export const leadTransform = (leadData) => {
  return leadData.map((lead) => ({
    id: lead._id,
    fullName: lead.name,
    contactInfo: lead.email,
    acquisitionSource: lead.source,
    status: lead.status,
    daysInPipeline: Math.floor(
      (Date.now() - lead.createdAt) / (1000 * 60 * 60 * 24)
    ),
  }));
};

export const campaignTransform = (campaignData) => {
  return rawCampaigns.map((campaign) => ({
    id: campaign._id,
    campaignName: campaign.name,
    type: campaign.type,
    roi:
      campaign.metrics.conversions > 0
        ? (campaign.metrics.conversions * 100 - campaign.budget) /
          campaign.budget
        : 0,
    conversionRate:
      campaign.metrics.clicks > 0
        ? (campaign.metrics.conversions / campaign.metrics.clicks) * 100
        : 0,
  }));
};
