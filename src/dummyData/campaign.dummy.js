class Campaign {
  static Campaign = [
    {
      id: "1",
      name: "Campaign 1",
      type: "email",
      budget: 1000,
      startDate: "2021-01-01",
      endDate: "2021-12-31",
      metrics: {
        impressions: 1000,
        clicks: 100,
        conversions: 10,
      },
      status: "active",
    },
    {
      id: "2",
      name: "Campaign 2",
      type: "social",
      budget: 2000,
      startDate: "2021-01-01",
      endDate: "2021-12-31",
      metrics: {
        impressions: 2000,
        clicks: 200,
        conversions: 20,
      },
      status: "active",
    },
    {
      id: "3",
      name: "Campaign 3",
      type: "ppc",
      budget: 3000,
      startDate: "2021-01-01",
      endDate: "2021-12-31",
      metrics: {
        impressions: 3000,
        clicks: 300,
        conversions: 30,
      },
      status: "active",
    },
    {
      id: "4",
      name: "Campaign 4",
      type: "email",
      budget: 4000,
      startDate: "2021-01-01",
      endDate: "2021-12-31",
      metrics: {
        impressions: 4000,
        clicks: 400,
        conversions: 40,
      },
      status: "active",
    },
  ];

  static getCampaigns() {
    return this.Campaign;
  }
}

export default new Campaign();
