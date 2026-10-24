"use client";

import React, { useState } from "react";
import Link from "next/link";
import CompanyGuideLayout from "@/components/CompanyGuideLayout";
import {
  ShieldCheck,
  Building2,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Clock,
  Sparkles,
  Award,
  TrendingUp,
  Scale,
  Zap,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  BadgePercent,
  Receipt,
  FileCheck2,
  Briefcase,
  Users2,
  DollarSign,
  Landmark,
  Layers,
  Globe2,
} from "lucide-react";

const REGISTRATION_BENEFITS = [
  {
    title: "Legal Protection & Limited Liability",
    desc: "Registration formally segregates your personal assets from corporate liabilities. Under the corporate veil doctrine of the Companies Act, 2013, shareholders are not personal guarantors for corporate debts, protecting personal properties, savings, and assets from business losses or creditor claims.",
    icon: ShieldCheck,
    color: "emerald",
    badge: "Asset Shield",
    bg: "bg-emerald-50/70 border-emerald-200/80 hover:border-emerald-400 hover:shadow-emerald-500/10",
    iconBox: "bg-emerald-100 text-emerald-700",
  },
  {
    title: "Institutional Credibility & Trust",
    desc: "B2B enterprise clients, government procurement portals (GeM), vendor networks, and multinational corporations mandate working exclusively with registered corporate entities. A valid Corporate Identity Number (CIN) establishes verifiable standing on the Ministry of Corporate Affairs (MCA) database.",
    icon: Award,
    color: "blue",
    badge: "Market Trust",
    bg: "bg-blue-50/70 border-blue-200/80 hover:border-blue-400 hover:shadow-blue-500/10",
    iconBox: "bg-blue-100 text-blue-700",
  },
  {
    title: "Exclusive Brand & Name Protection",
    desc: "Registering your company name through the MCA RUN (Reserve Unique Name) or SPICe+ Part A ensures no other enterprise can incorporate with the same or deceptively similar name across India. Coupled with trademark registration, it secures your intangible intellectual property.",
    icon: Sparkles,
    color: "purple",
    badge: "National Exclusivity",
    bg: "bg-purple-50/70 border-purple-200/80 hover:border-purple-400 hover:shadow-purple-500/10",
    iconBox: "bg-purple-100 text-purple-700",
  },
  {
    title: "Seamless Access to Capital & Equity Funding",
    desc: "Registered corporate entities—especially Private Limited Companies—can issue equity shares, convertible preference shares, and debentures. Venture capital funds, angel syndicates, and commercial banks require registered corporate structures before disbursing term sheets or credit facilities.",
    icon: DollarSign,
    color: "teal",
    badge: "Investor Ready",
    bg: "bg-teal-50/70 border-teal-200/80 hover:border-teal-400 hover:shadow-teal-500/10",
    iconBox: "bg-teal-100 text-teal-700",
  },
  {
    title: "Perpetual Succession & Business Continuity",
    desc: "A registered company exists as a distinct legal 'person' independent of its promoters. Retirement, death, insolvency, or exit of directors or shareholders does not interrupt the company's existence, contracts, property ownership, or bank accounts.",
    icon: TrendingUp,
    color: "indigo",
    badge: "Enduring Existence",
    bg: "bg-indigo-50/70 border-indigo-200/80 hover:border-indigo-400 hover:shadow-indigo-500/10",
    iconBox: "bg-indigo-100 text-indigo-700",
  },
  {
    title: "Statutory & Tax Compliance Advantages",
    desc: "Registered entities enjoy lower corporate tax brackets (22% base rate under Section 115BAA), eligibility for Startup India DPIIT 3-year tax holidays under Section 80-IAC, input tax credit (ITC) under GST, and structured deduction of business operating expenses.",
    icon: Receipt,
    color: "rose",
    badge: "Fiscal Benefits",
    bg: "bg-rose-50/70 border-rose-200/80 hover:border-rose-400 hover:shadow-rose-500/10",
    iconBox: "bg-rose-100 text-rose-700",
  },
];

const REGISTRATION_STEPS = [
  {
    step: "01",
    title: "Select the Optimal Corporate Structure",
    desc: "Evaluate your business scale, founder count, capital requirements, and liability comfort. Options include Private Limited Company (best for scalable startups raising VC funds), Limited Liability Partnership (ideal for professional services & consulting), One Person Company (for solo entrepreneurs), or Public Limited Company (for public listings).",
  },
  {
    step: "02",
    title: "Name Availability Search & Reservation (RUN / SPICe+ Part A)",
    desc: "Conduct a comprehensive trademark and MCA database search to verify that your proposed entity name is distinct, adheres to Name Availability Guidelines (Rule 8 of Companies Incorporation Rules), and avoids generic or prohibited terms. Reserve the name online via MCA SPICe+ Part A.",
  },
  {
    step: "03",
    title: "Obtain Class 3 Digital Signatures (DSC) & Director Identification Numbers (DIN)",
    desc: "Directors and authorized signatories must obtain Class 3 Digital Signature Certificates with cryptographic USB tokens for signing e-forms. DINs are automatically allotted via MCA SPICe+ Part B for up to 3 proposed directors without requiring separate DIR-3 filings.",
  },
  {
    step: "04",
    title: "Draft Constitutional Documents (e-MOA & e-AOA)",
    desc: "Draft the electronic Memorandum of Association (Form INC-33) defining the company's primary corporate charter and object clauses, alongside the electronic Articles of Association (Form INC-34) governing internal management, voting rights, and share transfer rules.",
  },
  {
    step: "05",
    title: "Submit SPICe+ Integrated Filing to Registrar of Companies (ROC)",
    desc: "File Form SPICe+ Part B with registered office proof (utility bill <2 months old and owner NOC), director declarations (INC-9), PAN & TAN generation, EPFO/ESIC registrations, and AGILE-PRO-S for mandatory corporate bank account opening and GSTIN allotment.",
  },
  {
    step: "06",
    title: "Certificate of Incorporation (COI) Issuance & Commencement (INC-20A)",
    desc: "Upon verification by the Central Registration Centre (CRC), the ROC issues the digitally signed Certificate of Incorporation with permanent CIN, PAN, and TAN. File Form INC-20A within 180 days to confirm subscription money deposit and obtain commencement of business approval.",
  },
];

const COMMON_MISTAKES = [
  {
    title: "Incomplete or Mismatched Documentation",
    desc: "Submitting identity or address proofs where names, father's names, or dates of birth do not match official PAN and Aadhaar records leads to instant ROC rejection or resubmission notices (re-sub).",
  },
  {
    title: "Failing to Register Trademarks Early",
    desc: "MCA company name approval does NOT grant automatic trademark protection. Operating without a Class-specific registered trademark leaves your brand vulnerable to infringement and passing-off litigation.",
  },
  {
    title: "Underestimating Statutory Post-Incorporation Filings",
    desc: "Failing to file Form INC-20A within 180 days attracts ₹50,000 company penalty and ₹1,000/day director fine. Non-appointment of statutory auditor via Form ADT-1 within 30 days triggers further non-compliance notices.",
  },
  {
    title: "Ignoring State-Specific Local Laws",
    desc: "Neglecting mandatory municipal Trade Licenses, Shops & Commercial Establishment Acts, or state Professional Tax (PT) registrations can lead to local municipal penalties and operational shutdowns.",
  },
];

const FAQS = [
  {
    q: "What is business registration, and why is it mandatory?",
    a: "Business registration is the statutory legal procedure of formalizing an enterprise with competent government authorities—principally the Ministry of Corporate Affairs (MCA) under the Companies Act, 2013, or Registrar of Firms. It grants the business a recognized, separate legal identity (CIN), limited liability shield, the power to contract in its own name, and legal standing to enforce agreements in court.",
  },
  {
    q: "Do I need to register my small business or startup in India?",
    a: "Yes. Operating as an unregistered entity leaves owners personally and jointly liable for all commercial debts and damages. Registration is mandatory to open a corporate bank account, obtain a GSTIN, apply for Startup India DPIIT recognition, secure patents/trademarks, and access institutional credit or government grants.",
  },
  {
    q: "How long does business registration take through Merrafilings?",
    a: "With complete documents, the standard MCA SPICe+ incorporation timeline takes approximately 3 to 7 working days. This covers name reservation, Class-3 DSC issuance, e-MOA/e-AOA drafting, Central Registration Centre (CRC) scrutiny, and digital Certificate of Incorporation issuance.",
  },
  {
    q: "What documents are required to register a Private Limited Company?",
    a: "Founders must provide: (1) PAN Card for Indian nationals or apostilled Passport for foreign nationals; (2) Identity proof (Voter ID, Passport, or Driving License); (3) Address proof (Bank Statement or Electricity Bill < 2 months old); (4) Passport-size photograph; (5) Registered office proof (Electricity/Water bill + Owner NOC + Rental Agreement); and (6) Director mobile numbers linked with Aadhaar.",
  },
  {
    q: "Can I register a company online without visiting a government office?",
    a: "Yes, 100%. Under the Ministry of Corporate Affairs MCA V3 portal and SPICe+ integrated system, the entire incorporation process is conducted electronically. Merrafilings prepares all filings, handles digital signature verification, and delivers your Certificate of Incorporation directly via email.",
  },
  {
    q: "What is the difference between a Private Limited Company and an LLP?",
    a: "A Private Limited Company is governed by the Companies Act, 2013, has share capital, allows ESOPs, and is the mandatory structure for venture capital investment. A Limited Liability Partnership (LLP) is governed by the LLP Act, 2008, has partner capital contributions, lower annual ROC compliance burden, and no dividend distribution tax, making it popular for professional service firms.",
  },
];

export default function UnderstandingBusinessRegistrationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <CompanyGuideLayout
      currentSlug="understanding-business-registration-essentials-benefits"
      title="Understanding Business Registration: Essentials and Benefits"
      breadcrumbLabel="Business Registration Essentials & Benefits"
      metaPublishedDate="October 2026"
      readingTime="9 min read"
      authorName="Merrafilings Corporate Secretarial Desk"
    >
      {/* Lead Paragraph */}
      <div className="text-[15px] sm:text-base text-slate-800 leading-relaxed font-normal space-y-4">
        <p>
          <strong className="font-semibold text-slate-950">Business registration</strong> represents the foundational milestone for every entrepreneur, startup founder, and enterprise seeking to formalize operations in India. Beyond fulfilling statutory mandates under the <strong className="font-semibold text-slate-950">Companies Act, 2013</strong>, formal registration transforms an idea into a distinct legal institution, unlocking investor trust, safeguarding personal family assets, and providing uninhibited access to national commercial markets.
        </p>
        <p>
          Whether incorporating a high-growth technology startup, establishing an industrial manufacturing unit, or setting up a cross-border foreign subsidiary, navigating the regulatory pathway with strategic precision ensures uninterrupted compliance, zero government re-submissions, and scalable capital readiness. This comprehensive handbook explores the indispensable pillars, procedural workflows, and strategic advantages of business registration in India.
        </p>
      </div>

      {/* Section 1: Core Benefits Grid */}
      <section className="pt-4 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              01
            </span>
            Strategic Benefits of Formal Business Registration
          </h2>
          <p className="text-sm text-slate-600 mt-1.5 font-normal">
            Discover why over 2 Lakh successful enterprises in India choose formal corporate incorporation over unstructured proprietor setups:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {REGISTRATION_BENEFITS.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className={`p-5 rounded-2xl border transition-all duration-200 ${b.bg}`}
              >
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${b.iconBox}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-white/80 border border-slate-200/80 text-[11px] font-semibold text-slate-700 tracking-wide">
                    {b.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {b.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 2: Step-by-Step Procedure */}
      <section className="pt-6 space-y-6 border-t border-slate-100">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              02
            </span>
            Step-by-Step Execution Roadmap for Business Incorporation
          </h2>
          <p className="text-sm text-slate-600 mt-1.5 font-normal">
            Follow the standardized Ministry of Corporate Affairs (MCA) SPICe+ integrated workflow for seamless registration:
          </p>
        </div>

        <div className="space-y-3.5">
          {REGISTRATION_STEPS.map((s, i) => (
            <div
              key={i}
              className="p-4 sm:p-5 rounded-xl border border-slate-200/80 bg-white hover:border-emerald-300 hover:shadow-xs transition-all flex items-start gap-4"
            >
              <div className="w-9 h-9 rounded-xl bg-slate-900 text-emerald-400 font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
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

      {/* Section 3: Entity Comparison Matrix */}
      <section className="pt-6 space-y-5 border-t border-slate-100">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              03
            </span>
            Entity Structure Comparison Matrix
          </h2>
          <p className="text-sm text-slate-600 mt-1.5 font-normal">
            Compare essential legal parameters before selecting your business entity type in India:
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs">
          <table className="w-full text-left text-[12.5px] font-normal text-slate-900">
            <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Parameter</th>
                <th className="py-3 px-4 text-[#00A86B]">Private Limited</th>
                <th className="py-3 px-4">LLP</th>
                <th className="py-3 px-4">One Person Company</th>
                <th className="py-3 px-4">Sole Proprietorship</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-[#EDF8F3] transition-colors">
                <td className="py-3 px-4 font-medium text-slate-900">Governing Statute</td>
                <td className="py-3 px-4 font-semibold text-[#00A86B]">Companies Act, 2013</td>
                <td className="py-3 px-4">LLP Act, 2008</td>
                <td className="py-3 px-4">Companies Act, 2013</td>
                <td className="py-3 px-4 text-slate-500">Uncodified Common Law</td>
              </tr>
              <tr className="hover:bg-[#EDF8F3] transition-colors">
                <td className="py-3 px-4 font-medium text-slate-900">Liability Shield</td>
                <td className="py-3 px-4 font-semibold text-[#00A86B]">Limited to share capital</td>
                <td className="py-3 px-4">Limited to contribution</td>
                <td className="py-3 px-4">Limited to share capital</td>
                <td className="py-3 px-4 text-red-600 font-semibold">Unlimited Personal Risk</td>
              </tr>
              <tr className="hover:bg-[#EDF8F3] transition-colors">
                <td className="py-3 px-4 font-medium text-slate-900">External VC Funding</td>
                <td className="py-3 px-4 font-semibold text-[#00A86B]">Highly Preferred (Equity/ESOP)</td>
                <td className="py-3 px-4 text-slate-500">Complex / Rarely Used</td>
                <td className="py-3 px-4 text-slate-500">Not Eligible</td>
                <td className="py-3 px-4 text-red-600 font-semibold">Not Allowed</td>
              </tr>
              <tr className="hover:bg-[#EDF8F3] transition-colors">
                <td className="py-3 px-4 font-medium text-slate-900">Minimum Promoters</td>
                <td className="py-3 px-4 font-semibold text-[#00A86B]">2 Members, 2 Directors</td>
                <td className="py-3 px-4">2 Designated Partners</td>
                <td className="py-3 px-4">1 Member + 1 Nominee</td>
                <td className="py-3 px-4">1 Individual</td>
              </tr>
              <tr className="hover:bg-[#EDF8F3] transition-colors">
                <td className="py-3 px-4 font-medium text-slate-900">Statutory Audit</td>
                <td className="py-3 px-4 font-semibold text-[#00A86B]">Mandatory Every Year</td>
                <td className="py-3 px-4">Only if turnover &gt;₹40L</td>
                <td className="py-3 px-4">Mandatory Every Year</td>
                <td className="py-3 px-4">Only if tax audit limits met</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4: Common Pitfalls to Avoid */}
      <section className="pt-6 space-y-5 border-t border-slate-100">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              04
            </span>
            Crucial Pitfalls to Avoid During Registration
          </h2>
          <p className="text-sm text-slate-600 mt-1.5 font-normal">
            Eliminate processing delays, penalty fines, and corporate re-submissions by steering clear of these common founder oversights:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {COMMON_MISTAKES.map((m, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-xl border border-red-100 bg-red-50/40 space-y-1.5"
            >
              <div className="flex items-center gap-2 text-red-800 font-bold text-sm">
                <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
                <span>{m.title}</span>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Pan-India Expansion Opportunities */}
      <section className="pt-6 space-y-4 border-t border-slate-100">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              05
            </span>
            Pan-India Commercial Expansion Corridors
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed font-normal">
            A centralized Private Limited Company incorporated through the MCA grants unrestricted domestic operating authority across all 28 states and 8 union territories. Whether setting up technology engineering hubs in Bengaluru and Hyderabad, trading centers in Mumbai and Chennai, or manufacturing units in Gujarat and Tamil Nadu, your corporate charter seamlessly supports multi-location GST registrations, regional trade licenses, and industrial park allocations.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
          <span className="font-medium text-slate-800">
            Need multi-state GST or regional trade license coordination?
          </span>
          <Link
            href="/company-registration"
            className="text-[#00B074] hover:underline font-semibold inline-flex items-center gap-1"
          >
            Explore Corporate Secretarial Packages &rarr;
          </Link>
        </div>
      </section>

      {/* Section 6: Interactive FAQs */}
      <section className="pt-6 space-y-4 border-t border-slate-100">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              06
            </span>
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600 mt-1 font-normal">
            Clear answers to common questions regarding business formation and statutory MCA compliance:
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
    </CompanyGuideLayout>
  );
}
