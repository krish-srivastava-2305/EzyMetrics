// here we initialize a class with dummy data and a method to get the data and export an object/instance of this class
class Leads {
  static leads = [
    {
      id: 1,
      name: "Karan Jain",
      email: "kjo12@gmail.com",
      status: "new",
      campaignId: 1,
      source: "Google",
    },
    {
      id: 2,
      name: "Sahil Kumar",
      email: "sk23@mail.com",
      status: "qualified",
      campaignId: 2,
      source: "Facebook",
    },
    {
      id: 3,
      name: "Rahul Singh",
      email: "rahusings@gmail.com",
      status: "contacted",
      campaignId: 3,
      source: "Twitter",
    },
    {
      id: 4,
      name: "Rajesh Kumar",
      email: "raju3@gmail,com",
      status: "converted",
      campaignId: 4,
      source: "LinkedIn",
    },
  ];

  static getLeads() {
    return this.leads;
  }
}

export const dummyLeads = new Leads();
