// src/queries/getWorkPermit.ts
export async function getWorkPermit() {
  return {
    visaStatus: "Citizen", // ✅ must be a string
    expiryDate: new Date("2099-12-31"), // ✅ must be Date type
    summary: "Eligible to work in India without restrictions.",
    additionalInfo: "Open to opportunities abroad with sponsorship.",
  };
}
