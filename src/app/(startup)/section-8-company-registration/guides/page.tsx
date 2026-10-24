"use client";

import React, { useState } from "react";
import Link from "next/link";
import Section8GuideLayout from "@/components/Section8GuideLayout";
import {
  HeartHandshake,
  ShieldCheck,
  Building2,
  Award,
  Sparkles,
  Receipt,
  Scale,
  DollarSign,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Landmark,
  FileText,
  Users2,
  Globe2,
} from "lucide-react";

const PILLARS_OF_DISTINCTION = [
  {
    title: "100% Social Purpose Reinvestment",
    desc: "Unlike commercial Private Limited entities focused on shareholder value maximization, a Section 8 Company mandates that all revenue, donations, operating surpluses, and profits are strictly reinvested towards furthering its charitable objectives.",
    badge: "Non-Profit Mandate",
    icon: HeartHandshake,
  },
  {
    title: "Absolute Dividend Prohibition",
    desc: "Section 8(1)(b) of the Companies Act, 2013 strictly prohibits the distribution of any dividend, bonus, or profit share to its members or directors. This eliminates conflicts of interest and instills supreme confidence in philanthropists and corporate donors.",
    badge: "Zero Dividend Payout",
    icon: ShieldCheck,
  },
  {
    title: "Central Government Statutory License",
    desc: "The entity operates under a prestigious, verified License granted by the Central Government (MCA) under Form INC-16. This certifies that the organization is officially recognized as a genuine non-profit social institution across India.",
    badge: "INC-16 License",
    icon: Award,
  },
  {
    title: "Exemption from 'Limited' Suffix",
    desc: "Section 8 companies are legally privileged to exclude the words 'Limited' or 'Private Limited' from their official corporate name, adopting dignified nomenclature such as Foundation, Forum, Association, Council, or Institute.",
    badge: "Name Privilege",
    icon: Sparkles,
  },
];

const ADVANTAGES_GRID = [
  {
    title: "Zero Minimum Capital Requirement",
    desc: "No mandatory authorized or paid-up capital threshold under current MCA norms. Founders can incorporate with nominal capital (e.g. ₹1,000) and channel all available capital directly toward grassroots programs.",
    badge: "Low Barrier",
  },
  {
    title: "Highest Institutional & Donor Credibility",
    desc: "Overseas philanthropic foundations, United Nations bodies, central ministries, and corporate CSR committees mandate working with Section 8 companies over informal trusts due to MCA transparency and public ROC audit disclosures.",
    badge: "Global Trust",
  },
  {
    title: "12A & 80G Tax Exemption Eligibility",
    desc: "Eligible for registration under Sections 12AB (100% tax exemption on non-profit income and donations) and 80G (granting a 50% tax deduction to donors) of the Income Tax Act, 1961, dramatically boosting fundraising.",
    badge: "Fiscal Shield",
  },
  {
    title: "CSR Funding & FCRA Eligibility",
    desc: "Eligible to file Form CSR-1 with the MCA to receive corporate CSR grants under Section 135 of the Companies Act, 2013, and apply for Foreign Contribution Regulation Act (FCRA) licenses for international donations.",
    badge: "Institutional Capital",
  },
];

const REGISTRATION_STEPS = [
  {
    step: "01",
    title: "Obtain Class 3 Digital Signatures (DSC)",
    desc: "Procure Class 3 Digital Signature Certificates with cryptographic USB tokens for all proposed directors and founders for signing e-filing forms on the MCA V3 portal.",
  },
  {
    step: "02",
    title: "Director Identification Numbers (DIN)",
    desc: "Apply for Director Identification Numbers (DIN) integrated directly within the MCA SPICe+ Part B incorporation form for up to three proposed directors.",
  },
  {
    step: "03",
    title: "Reserve Name via MCA SPICe+ Part A",
    desc: "Reserve a unique name reflecting your social mission. Must contain non-profit keywords such as Foundation, Federation, Association, Forum, Council, or Academy, complying with Rule 8 of Companies Incorporation Rules.",
  },
  {
    step: "04",
    title: "Draft Non-Profit Constitutional Charters (e-MOA & e-AOA)",
    desc: "Draft the electronic Memorandum of Association (Form INC-33) detailing non-profit objects (arts, science, education, charity, environment) and electronic Articles of Association (Form INC-34) regulating member governance.",
  },
  {
    step: "05",
    title: "Obtain Central Government Section 8 License (INC-12 / INC-16)",
    desc: "Submit Form INC-12 with estimated three-year financial projections, asset statements, and director declarations. The Registrar of Companies verifies and issues the Section 8 License in Form INC-16.",
  },
  {
    step: "06",
    title: "File SPICe+ Part B for Final Incorporation",
    desc: "Submit Form SPICe+ Part B, AGILE-PRO-S (for PAN, TAN, and bank account), registered office proof, and owner NOC to receive the Certificate of Incorporation with a permanent Corporate Identity Number (CIN).",
  },
];

const FAQS = [
  {
    q: "What is the primary statutory purpose of a Section 8 Company?",
    a: "Under Section 8(1) of the Companies Act, 2013, a Section 8 company is established to promote commerce, art, science, sports, education, research, social welfare, religion, charity, protection of the environment, or any other beneficial objective. It must apply all profits and income to promote these objects and is strictly prohibited from paying dividends to members.",
  },
  {
    q: "How does a Section 8 Company compare to a Public Charitable Trust or Society?",
    a: "A Section 8 Company offers national operating jurisdiction, limited liability protection, standardized corporate governance, and strict ROC public disclosure, making it far more trusted by corporate CSR funds and international donors. In contrast, trusts and societies are governed by archaic state-level laws with less transparency and limited protection.",
  },
  {
    q: "Can a Section 8 Company generate profits or commercial revenue?",
    a: "Yes. Section 8 companies are legally permitted to generate revenue, earn operating surpluses, and charge fees for services, educational programs, or publications. However, 100% of the surplus must be retained within the organization to advance its social mission and can never be distributed to founders or members.",
  },
  {
    q: "Is a Section 8 Company eligible to receive Corporate Social Responsibility (CSR) funds?",
    a: "Yes. Section 8 companies are the preferred implementation partners for corporate India. After incorporation, the entity must register with the MCA via Form CSR-1 to obtain a unique CSR Registration Number, making it legally eligible to receive CSR grants under Section 135 of the Companies Act, 2013.",
  },
  {
    q: "Can founders or directors receive a salary from a Section 8 Company?",
    a: "Directors and key managerial personnel can receive reasonable compensation, remuneration, or reimbursement for actual professional services rendered (e.g., serving as CEO, Managing Director, or project lead), provided it is approved by the Board, documented in the Articles of Association, and compliant with Section 197 guidelines.",
  },
];

export default function Section8GuidesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Section8GuideLayout
      currentSlug="guides"
      title="Understanding the Section 8 Company Structure"
      breadcrumbLabel="Section 8 Company Structure"
      metaPublishedDate="October 2026"
      readingTime="10 min read"
      authorName="Merrafilings Non-Profit Advisory Desk"
    >
      {/* Lead Paragraph */}
      <div className="text-[15px] sm:text-base text-slate-800 leading-relaxed font-normal space-y-4">
        <p>
          A <strong className="font-semibold text-slate-950">Section 8 Company</strong> stands as India&apos;s most prestigious, credible, and legally robust organizational structure for social entrepreneurs, altruistic leaders, non-governmental organizations (NGOs), and corporate foundations. Formed under Section 8 of the <strong className="font-semibold text-slate-950">Companies Act, 2013</strong>, this entity marries corporate governance rigor with an unyielding commitment to public welfare.
        </p>
        <p>
          Unlike conventional non-profit models such as public charitable trusts or regional registered societies, a Section 8 company operates under the direct regulatory oversight of the Ministry of Corporate Affairs (MCA). This nationwide legal stature instills unwavering credibility in the eyes of institutional donors, foreign grant-making bodies, and corporate CSR committees. This comprehensive handbook demystifies the structural architecture, statutory benefits, and incorporation workflow of Section 8 companies in India.
        </p>
      </div>

      {/* Section 1: Distinction Pillars */}
      <section className="pt-4 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              01
            </span>
            What Sets a Section 8 Company Apart?
          </h2>
          <p className="text-sm text-slate-600 mt-1.5 font-normal">
            Core statutory principles that distinguish Section 8 corporations from all other legal entities:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PILLARS_OF_DISTINCTION.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-slate-200/90 bg-white hover:border-emerald-300 hover:shadow-xs transition-all space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-[11px] font-bold text-slate-800 border border-slate-200">
                    {p.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 2: Core Advantages */}
      <section className="pt-6 space-y-6 border-t border-slate-100">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              02
            </span>
            Key Strategic Benefits of Establishing a Section 8 Company
          </h2>
          <p className="text-sm text-slate-600 mt-1.5 font-normal">
            Compelling operational, legal, and fiscal advantages for founders and non-profit leaders:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ADVANTAGES_GRID.map((adv, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-slate-200/90 bg-[#FAF9F7]/70 space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/70">
                  {adv.badge}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                {adv.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
                {adv.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Registration Steps */}
      <section className="pt-6 space-y-6 border-t border-slate-100">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              03
            </span>
            Chronological Registration Workflow under MCA SPICe+
          </h2>
          <p className="text-sm text-slate-600 mt-1.5 font-normal">
            A step-by-step statutory execution procedure from digital signature issuance to government license grant:
          </p>
        </div>

        <div className="space-y-3.5">
          {REGISTRATION_STEPS.map((s, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-slate-200/80 bg-white hover:border-emerald-300 hover:shadow-xs transition-all flex items-start gap-4"
            >
              <div className="w-9 h-9 rounded-xl bg-slate-900 text-emerald-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                {s.step}
              </div>
              <div className="space-y-1 flex-1">
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Comparative Matrix */}
      <section className="pt-6 space-y-5 border-t border-slate-100">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              04
            </span>
            Non-Profit Structure Comparison: Section 8 vs. Trust vs. Society
          </h2>
          <p className="text-sm text-slate-600 mt-1.5 font-normal">
            Head-to-head comparison of non-profit legal vehicles in India:
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs">
          <table className="w-full text-left text-[12.5px] font-normal text-slate-900">
            <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Key Parameter</th>
                <th className="py-3 px-4 text-[#00A86B]">Section 8 Company</th>
                <th className="py-3 px-4">Public Charitable Trust</th>
                <th className="py-3 px-4">Registered Society</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-[#EDF8F3] transition-colors">
                <td className="py-3 px-4 font-medium text-slate-900">Governing Act</td>
                <td className="py-3 px-4 font-semibold text-[#00A86B]">Companies Act, 2013 (Central)</td>
                <td className="py-3 px-4">Indian Trusts Act, 1882 / State Acts</td>
                <td className="py-3 px-4">Societies Registration Act, 1860</td>
              </tr>
              <tr className="hover:bg-[#EDF8F3] transition-colors">
                <td className="py-3 px-4 font-medium text-slate-900">Operating Jurisdiction</td>
                <td className="py-3 px-4 font-semibold text-[#00A86B]">All-India Pan-National</td>
                <td className="py-3 px-4 text-slate-600">State / Regional Dependent</td>
                <td className="py-3 px-4 text-slate-600">State Specific</td>
              </tr>
              <tr className="hover:bg-[#EDF8F3] transition-colors">
                <td className="py-3 px-4 font-medium text-slate-900">Institutional Credibility</td>
                <td className="py-3 px-4 font-semibold text-[#00A86B]">Supreme (High MCA scrutiny)</td>
                <td className="py-3 px-4 text-slate-600">Moderate</td>
                <td className="py-3 px-4 text-slate-600">Moderate</td>
              </tr>
              <tr className="hover:bg-[#EDF8F3] transition-colors">
                <td className="py-3 px-4 font-medium text-slate-900">CSR Grant Eligibility</td>
                <td className="py-3 px-4 font-semibold text-[#00A86B]">Highest Priority (Form CSR-1)</td>
                <td className="py-3 px-4 text-slate-600">Requires 3-year track record</td>
                <td className="py-3 px-4 text-slate-600">Requires 3-year track record</td>
              </tr>
              <tr className="hover:bg-[#EDF8F3] transition-colors">
                <td className="py-3 px-4 font-medium text-slate-900">Statutory Transparency</td>
                <td className="py-3 px-4 font-semibold text-[#00A86B]">Public ROC portal audit trail</td>
                <td className="py-3 px-4 text-slate-600">Private internal governance</td>
                <td className="py-3 px-4 text-slate-600">State Registrar oversight</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 5: FAQs */}
      <section className="pt-6 space-y-4 border-t border-slate-100">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              05
            </span>
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600 mt-1 font-normal">
            Essential answers on establishing and operating a Section 8 Company in India:
          </p>
        </div>

        <div className="space-y-3 pt-2">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200/90 rounded-xl overflow-hidden transition-all bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full py-3.5 px-4 sm:px-5 text-left flex items-center justify-between gap-3 text-sm sm:text-base font-semibold text-slate-900 hover:text-emerald-700 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-emerald-600" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 text-xs sm:text-[13.5px] text-slate-700 leading-relaxed font-normal border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </Section8GuideLayout>
  );
}
