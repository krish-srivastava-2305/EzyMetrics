import nodemailer from "nodemailer";

class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
  }

  // Test email configuration
  async verifyConnection() {
    try {
      await this.transporter.verify();
      console.log("Email service is ready");
      return true;
    } catch (error) {
      console.error("Email service error:", error);
      return false;
    }
  }

  // Send a basic email
  async sendEmail(to, subject, text, html) {
    try {
      const mailOptions = {
        from: process.env.EMAIL,
        to,
        subject,
        text,
        html: html || text,
      };

      const info = await this.transporter.sendMail(mailOptions);
      console.log("Email sent:", info.messageId);
      return info;
    } catch (error) {
      console.error("Send email error:", error);
      throw error;
    }
  }

  // Send alert email
  async sendAlert(to, alertType, data) {
    const alertTemplates = {
      leadConversion: {
        subject: "New Lead Conversion Alert",
        text: `A new lead "${data.leadName}" has been converted!`,
        html: `
          <h2>Lead Conversion Alert</h2>
          <p>A new lead has been converted:</p>
          <ul>
            <li>Name: ${data.leadName}</li>
            <li>Email: ${data.email}</li>
            <li>Conversion Date: ${new Date().toLocaleDateString()}</li>
          </ul>
        `,
      },
      campaignPerformance: {
        subject: "Campaign Performance Alert",
        text: `Campaign "${data.campaignName}" has reached its target!`,
        html: `
          <h2>Campaign Performance Alert</h2>
          <p>Campaign has reached its target:</p>
          <ul>
            <li>Campaign: ${data.campaignName}</li>
            <li>Conversions: ${data.conversions}</li>
            <li>Target: ${data.target}</li>
          </ul>
        `,
      },
    };

    const template = alertTemplates[alertType];
    if (!template) {
      throw new Error(`Invalid alert type: ${alertType}`);
    }

    return this.sendEmail(to, template.subject, template.text, template.html);
  }

  // Send report email with attachment
  async sendReport(to, reportData, attachments) {
    const mailOptions = {
      from: process.env.EMAIL,
      to,
      subject: "Your EzyMetrics Report",
      html: `
        <h2>EzyMetrics Report</h2>
        <p>Please find your requested report attached.</p>
        <p>Report Summary:</p>
        <ul>
          <li>Total Leads: ${reportData.totalLeads}</li>
          <li>Conversion Rate: ${reportData.conversionRate}%</li>
          <li>Period: ${reportData.period}</li>
        </ul>
      `,
      attachments: attachments,
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log("Report email sent:", info.messageId);
      return info;
    } catch (error) {
      console.error("Send report error:", error);
      throw error;
    }
  }
}

// Create and export a single instance
const emailService = new EmailService();

export { emailService };
