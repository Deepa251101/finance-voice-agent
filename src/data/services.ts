export type ServiceCategory = { slug: string; title: string; summary: string; icon: string; services: string[] };

export const serviceCategories: ServiceCategory[] = [
  { slug: "asset-finance", title: "Asset Finance", summary: "Financing options for vehicles, equipment, and other business assets.", icon: "↗", services: ["Car Finance", "Commercial Vehicle Finance", "Construction Equipment Finance", "Farm Equipment Finance", "Diesel Finance", "Tyre Finance", "Insurance Finance", "Leasing Solutions"] },
  { slug: "business-sme-finance", title: "Business & SME Finance", summary: "Funding solutions shaped around business and commercial requirements.", icon: "▦", services: ["SME Loans", "Commercial Funding", "Business Finance", "Customized Financial Solutions"] },
  { slug: "deposits-investments", title: "Deposits & Investments", summary: "Ways to explore deposit, investment, and wealth management services.", icon: "◷", services: ["Fixed Deposits", "Mutual Funds", "Wealth Management", "Investment Solutions"] },
  { slug: "insurance-solutions", title: "Insurance Solutions", summary: "Insurance and credit protection options for different needs.", icon: "◇", services: ["Life Insurance", "General Insurance", "Credit Protect", "NBFC Finance and Credit Protect Solutions"] },
];
