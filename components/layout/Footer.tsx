import React from "react";
import FooterSocialFollow from "./FooterSocialFollow";
import FooterQuickLink from "./FooterQuickLink";
import FooterTestimonials from "./FooterTestimonials";

const investmentTopics = [
  "Investment Plans",
  "Fixed Deposit Calculator",
  "Tax-Saving Fixed Deposit",
  "Child Investment Plans",
  "Best Investment Plans",
  "Annuity Plans",
  "Section 10(10D)",
  "Investment Plans for NRI",
];

const insuranceTopics = [
  "Postal Life Insurance Scheme",
  "Life Insurance Types",
  "Life Insurance Claim Settlement Ratio",
  "Term Insurance Vs Life Insurance",
  "Best Life Insurance Companies",
  "Life Insurance Plans",
  "Life Insurance Tax Benefits",
  "Life Insurance Premium Calculator",
];

const healthInsuranceTopics = [
  "Health Insurance Plans",
  "Best Health Insurance Companies",
  "Mediclaim Policy",
  "Health Insurance Claim Settlement Ratio",
  "Critical Health Insurance",
  "Health Insurance Premium Calculator",
  "Family Health Insurance",
  "Senior Citizens Health Insurance",
];

const carInsuranceTopics = [
  "Car Insurance Renewal",
  "Car Insurance Calculator",
  "Zero Depreciation Car Insurance",
  "IDV Calculator",
  "Own Damage Car Insurance",
  "Car Insurance Claim Settlement",
  "Best Car Insurance Companies",
];

const companyTopics = [
  "Contact Us",
  "Feedback",
  "Fraud identification",
  "Disclaimer",
  "Annual Reports/Annual Returns",
  "Solicitation Process",
  "ID Alumni Page",
  "Corporate Social Responsibility",
];

const policyTopics = [
  "Privacy Policy",
  "Grievance Redressal",
  "Fraud Detection",
  "Shipping Policy",
  "Terms of Use",
  "Cancellation & Refund",
  "E-Insurance Account",
];

const generalCategories = [
  "Car Insurance",
  "Bike Insurance",
  "Health Insurance",
  "Life Insurance",
  "Term Insurance",
  "Investment",
  "Business",
  "Travel Insurance",
  "Tax Saving Schemes",
];

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="px-16 py-6 border-y border-gray-400">
        <div className="flex py-6 ">
          <div className="w-3/12">
            <FooterSocialFollow />
          </div>
          <div className="w-6/12 flex gap-6 justify-evenly">
            <FooterQuickLink title="Products" links={generalCategories} />
            <FooterQuickLink title="Polciy" links={policyTopics} />
            <FooterQuickLink title="General" links={companyTopics} />
          </div>
          <div className="w-3/12">
            <FooterTestimonials />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 px-16 py-6">
        <FooterQuickLink title="Car Insurance" links={carInsuranceTopics} />
        <FooterQuickLink
          title="Health Insurance"
          links={healthInsuranceTopics}
        />
        <FooterQuickLink title="Life Insurance" links={insuranceTopics} />
        <FooterQuickLink title="Investment Plans" links={investmentTopics} />
      </div>
    </footer>
  );
};

export default Footer;
