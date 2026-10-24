"use client";

import React, { useState } from "react";
import Link from "next/link";
import CompanyGuideLayout from "@/components/CompanyGuideLayout";
import {
  Globe2,
  Building2,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  FileText,
  DollarSign,
  TrendingUp,
  Scale,
  Sparkles,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Landmark,
  Layers,
  Award,
  Zap,
  Briefcase,
  Users2,
  Lock,
} from "lucide-react";

const SUBSIDIARY_BENEFITS = [
  {
    title: "Direct Domestic Market Penetration",
    desc: "A registered Indian subsidiary possesses full juristic capacity to sign enterprise contracts, execute domestic retail and wholesale commerce, invoice in Indian Rupees (INR), and maintain local payment gateways and merchant accounts.",
    badge: "Full Domestic Rights",
  },
  {
    title: "Total Legal & Liability Ringfencing",
    desc: "The subsidiary constitutes a separate corporate legal entity. The overseas parent corporation’s liability is strictly capped at its paid-up share capital contribution, shielding international assets from local litigation or debtor claims.",
    badge: "Liability Shield",
  },
  {
    title: "Double Taxation Relief (DTAA Networks)",
    desc: "Leverage extensive Double Taxation Avoidance Agreements (DTAAs) signed by India with over 85 nations worldwide, lowering withholding taxes on royalty payments, fees for technical services (FTS), and cross-border dividend repatriations.",
    badge: "Tax Treaty Benefits",
  },
  {
    title: "Local Brand Equity & Tender Eligibility",
    desc: "Participate directly in government tenders (GeM portal), public procurement quotas, and enterprise vendor ecosystems that mandate a domestic Indian entity with verified GSTIN and Corporate Identity Number (CIN).",
    badge: "Enterprise Eligibility",
  },
];

const SEVEN_EXECUTION_STAGES = [
  {
    num: "01",
    title: "Conduct Market Analysis & Feasibility Evaluation",
    desc: "Evaluate competitive landscape, pricing dynamics, regional supply chain access, and state-level regulatory policies to align products and services with local Indian market demands.",
  },
  {
    num: "02",
    title: "Select Optimal Legal Form: WOS vs. Joint Venture",
    desc: "Determine whether to incorporate a Wholly Owned Subsidiary (WOS, 99.9% + 1 nominee shareholder for absolute managerial control) or a Joint Venture (JV) partnership with an established domestic Indian business partner.",
  },
  {
    num: "03",
    title: "MCA SPICe+ Incorporation & Director Appointments",
    desc: "Apostille parent corporate records, obtain Class-3 DSCs, appoint at least one resident Indian director (Section 149(3) Companies Act), and file Form SPICe+ Part B with electronic charter documents (INC-33 & INC-34) to receive your Certificate of Incorporation.",
  },
  {
    num: "04",
    title: "Tax Registration: PAN, TAN & Goods and Services Tax (GST)",
    desc: "Acquire mandatory tax identifiers: Permanent Account Number (PAN), Tax Deduction Account Number (TAN), and multi-state GSTIN registrations for seamless input tax credit (ITC) flow and commercial compliance.",
  },
  {
    num: "05",
    title: "Establish INR Corporate Banking & Complete RBI FIRMS Reporting",
    desc: "Open a commercial bank current account with a designated Authorized Dealer (AD Category-I) bank in India. Remit initial FDI subscription capital and file Form FC-GPR on the RBI FIRMS portal within 30 days of share allotment.",
  },
  {
    num: "06",
    title: "Establish Physical Office & Execute Employment Compliances",
    desc: "Lease commercial premises (or secure registered virtual office facilities), draft compliant employment contracts adhering to state Shops and Establishments Acts, and register for EPFO and ESIC employee welfare systems.",
  },
  {
    num: "07",
    title: "Institute IT Security, IP Protection & DPDP Act Governance",
    desc: "Secure corporate trademarks under the Trade Marks Act, 1999, and establish internal data governance frameworks compliant with the Digital Personal Data Protection Act (DPDP Act, 2023) and RBI data localization directives.",
  },
];

const OVERCOMING_CHALLENGES = [
  {
    challenge: "Complex Cross-Border Documentation",
    solution: "Navigating Hague Convention apostille certifications, foreign consular notarization, and bilingual board resolutions is streamlined by Merrafilings’ corporate secretarial team with pre-approved MCA formats.",
  },
  {
    challenge: "Resident Director Statutory Mandate",
    solution: "Section 149(3) requires at least one resident director. Merrafilings provides professional Resident Director facilitation and nominee governance to ensure 100% legal compliance.",
  },
  {
    challenge: "RBI FEMA & Foreign Inward Capital Reporting",
    solution: "Failure to file Form FC-GPR within 30 days attracts compounding penalties. Our chartered accountants handle FIRC reconciliation, valuation certificates, and FIRMS portal filings seamlessly.",
  },
  {
    challenge: "Multi-State Indirect Tax & Transfer Pricing",
    solution: "We establish arm's length transfer pricing documentation (Form 3CEB), manage centralized multi-state GST filing, and ensure structured dividend repatriation under applicable DTAA provisions.",
  },
];

const FAQS = [
  {
    q: "What is the difference between an Indian Subsidiary, Branch Office, and Liaison Office?",
    a: "An Indian Subsidiary is an independent domestic private limited company with full trading rights and ringfenced liability. A Branch Office is an extension of the foreign company with restricted commercial scope. A Liaison Office is strictly limited to exploratory representation and market research and is prohibited from earning any revenue in India.",
  },
  {
    q: "How are dividends repatriated from an Indian Subsidiary back to the foreign parent?",
    a: "Dividends declared by an Indian subsidiary can be freely repatriated in foreign currency through authorized dealer banks after withholding tax (TDS) under Section 195. Tax treaty benefits (DTAA) typically cap withholding tax at 5% to 15%. Form 15CA and a Chartered Accountant certificate in Form 15CB must be filed before executing the remittance.",
  },
  {
    q: "Can an Indian Subsidiary own commercial real estate in India?",
    a: "Yes. An Indian Subsidiary, being a domestic Indian entity, is permitted to purchase or lease immovable commercial property in India for carrying out its business activities, subject to FEMA regulations.",
  },
  {
    q: "What are the transfer pricing requirements for an Indian Subsidiary?",
    a: "Any cross-border financial, managerial, or intellectual property transaction between the Indian subsidiary and its foreign parent (or associated enterprises) must adhere to Arm's Length Pricing (ALP) principles. The subsidiary must maintain a detailed Transfer Pricing Study and file an annual Accountant's Report in Form 3CEB under Section 92E of the Income Tax Act.",
  },
  {
    q: "How long does it take to establish an Indian Subsidiary from abroad?",
    a: "Once all apostilled foreign charter documents and board resolutions are received in India, the incorporation and banking setup typically takes between 10 to 15 business days. RBI FIRMS capital reporting (FC-GPR) is subsequently filed within 30 days of equity allotment.",
  },
];

export default function EstablishingAnIndianSubsidiaryGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <CompanyGuideLayout
      currentSlug="establishing-an-indian-subsidiary-guide"
      title="Establishing an Indian Subsidiary: Your Complete Guide"
      breadcrumbLabel="Establishing an Indian Subsidiary"
      metaPublishedDate="October 2026"
      readingTime="12 min read"
      authorName="Merrafilings Cross-Border Corporate Desk"
    >
      {/* Lead Paragraph */}
      <div className="text-[15px] sm:text-base text-slate-800 leading-relaxed font-normal space-y-4">
        <p>
          Setting up an <strong className="font-semibold text-slate-950">Indian Subsidiary</strong> is the proven, gold-standard corporate route for international companies, multinational technology enterprises, and overseas founders seeking to enter India&apos;s trillion-dollar economy. By establishing an independent domestic corporate presence under the <strong className="font-semibold text-slate-950">Companies Act, 2013</strong>, global businesses can access local customer markets, recruit elite engineering teams, and execute commercial contracts with complete legal security.
        </p>
        <p>
          Unlike restrictive liaison or project offices, a subsidiary gives international corporations unrestricted commercial flexibility, domestic currency invoicing, and strong legal asset protection. This master guide outlines every essential dimension of establishing an Indian subsidiary—from cross-border corporate structuring and foreign document apostille to RBI capital inflow reporting and transfer pricing compliance.
        </p>
      </div>

      {/* Section 1: Core Benefits */}
      <section className="pt-4 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              01
            </span>
            Strategic Advantages of Establishing an Indian Subsidiary
          </h2>
          <p className="text-sm text-slate-600 mt-1.5 font-normal">
            Why leading global corporations incorporate an Indian subsidiary for cross-border expansion:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SUBSIDIARY_BENEFITS.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-slate-200/90 bg-white hover:border-emerald-300 hover:shadow-xs transition-all space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/70">
                  {item.badge}
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 pt-1">
                {item.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: 7-Stage Process */}
      <section className="pt-6 space-y-6 border-t border-slate-100">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              02
            </span>
            The 7-Stage Execution Pathway to Setting Up a Subsidiary
          </h2>
          <p className="text-sm text-slate-600 mt-1.5 font-normal">
            A comprehensive, chronological breakdown of the corporate setup and regulatory approval lifecycle:
          </p>
        </div>

        <div className="space-y-3.5">
          {SEVEN_EXECUTION_STAGES.map((s, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-slate-200/80 bg-white hover:border-emerald-300 hover:shadow-xs transition-all flex items-start gap-4"
            >
              <div className="w-9 h-9 rounded-xl bg-slate-900 text-emerald-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                {s.num}
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

      {/* Section 3: Overcoming Cross-Border Challenges */}
      <section className="pt-6 space-y-5 border-t border-slate-100">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              03
            </span>
            Common Cross-Border Challenges &amp; Strategic Solutions
          </h2>
          <p className="text-sm text-slate-600 mt-1.5 font-normal">
            How Merrafilings eliminates friction points in overseas corporate expansion:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {OVERCOMING_CHALLENGES.map((ch, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-slate-200/90 bg-[#FAF9F7]/70 space-y-2"
            >
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
                <span>{ch.challenge}</span>
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
                {ch.solution}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: FAQs */}
      <section className="pt-6 space-y-4 border-t border-slate-100">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              04
            </span>
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600 mt-1 font-normal">
            Clear, statutory guidance on establishing and scaling an Indian subsidiary:
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
