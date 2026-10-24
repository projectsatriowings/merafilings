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
  FileCheck2,
} from "lucide-react";

const STRATEGIC_ADVANTAGES = [
  {
    title: "Unrestricted Domestic Market Access",
    desc: "Unlike restrictive liaison or representative offices that cannot engage in commercial trading, an Indian Subsidiary operates as a full-fledged domestic corporate entity entitled to bill clients in Indian Rupees (INR), sign local enterprise contracts, and conduct manufacturing or trading.",
    badge: "Full Commercial Rights",
    icon: Building2,
  },
  {
    title: "Optimized Operating Cost Structure",
    desc: "Establish software engineering centers, global capability centers (GCCs), business process hubs, and manufacturing facilities at a fraction of Western European or US operational costs, with highly competitive real estate and engineering compensation.",
    badge: "Cost Efficiency",
    icon: DollarSign,
  },
  {
    title: "Government Incentives & 100% FDI Automatic Route",
    desc: "Under current consolidated FDI policy, 100% Foreign Direct Investment is permitted under the Automatic Route across most industries (IT, SaaS, manufacturing, consulting, wholesale trading) without requiring prior Reserve Bank of India (RBI) or ministerial clearance.",
    badge: "100% Automatic FDI",
    icon: Award,
  },
  {
    title: "Limited Liability Shield for Overseas Parent",
    desc: "As an independent juristic person incorporated under Section 2(87) of the Companies Act, 2013, the subsidiary's operational risks, contractual disputes, and statutory liabilities are strictly quarantined from the balance sheet of the overseas parent corporation.",
    badge: "Parent Asset Ringfence",
    icon: ShieldCheck,
  },
];

const SUBSIDIARY_SETUP_STEPS = [
  {
    step: "01",
    title: "Structure Formulation: Wholly Owned Subsidiary (WOS)",
    desc: "Decide between a Wholly Owned Subsidiary (where the foreign parent holds 99.9% equity and 1 nominee shareholder holds 0.1% for statutory minimum 2-member compliance) or an Indian Joint Venture (JV) partnership with domestic promoters.",
  },
  {
    step: "02",
    title: "Apostille & Consular Legalization of Parent Charter",
    desc: "The overseas parent company's Certificate of Incorporation, Charter/Bylaws, Board Resolution authorizing the Indian setup, and Power of Attorney (POA) must be apostilled in Hague Convention signatory countries or legalized by the Indian Embassy/Consulate.",
  },
  {
    step: "03",
    title: "Name Reservation (RUN / SPICe+ Part A)",
    desc: "Reserve the corporate name using the parent brand identity (e.g., '[Parent Name] India Private Limited'). Submit parent company board resolution and trademark authorization letter under Rule 8A of Companies Incorporation Rules.",
  },
  {
    step: "04",
    title: "Procure Digital Signatures (DSC) & Appoint Resident Director",
    desc: "Procure Class 3 Digital Signatures for proposed foreign and Indian directors. Under Section 149(3) of the Companies Act, at least one director on the board must be a resident of India (present in India for >= 182 days in the previous financial year).",
  },
  {
    step: "05",
    title: "File Integrated SPICe+ with Central Registration Centre (CRC)",
    desc: "Submit Form SPICe+ Part B, specialized electronic Memorandum of Association (Form INC-33), electronic Articles of Association (Form INC-34), and AGILE-PRO-S to secure Certificate of Incorporation, CIN, PAN, TAN, and corporate bank account.",
  },
  {
    step: "06",
    title: "Inward FDI Remittance & RBI FIRMS Portal (Form FC-GPR)",
    desc: "Wire equity subscription capital through normal banking channels into the Indian company's current account. Within 30 days of share allotment, file Form FC-GPR (Foreign Currency - Gross Provisional Return) on the RBI Single Master Form (SMF) FIRMS portal.",
  },
  {
    step: "07",
    title: "File Commencement of Business (INC-20A)",
    desc: "File Form INC-20A with the MCA within 180 days of incorporation, enclosing bank statement evidence confirming receipt of subscription money from overseas promoters to start commercial billing.",
  },
];

const COMPLIANCE_PILLARS = [
  {
    head: "Transfer Pricing (Section 92E)",
    details: "All cross-border transactions between the Indian subsidiary and the foreign parent (management fees, royalties, software licensing) must adhere to Arm's Length Pricing (ALP) rules and be certified annually by a Chartered Accountant in Form 3CEB.",
  },
  {
    head: "Profit & Dividend Repatriation",
    details: "Dividends declared by the Indian subsidiary can be freely repatriated to the foreign parent after withholding tax (TDS) under Section 195. Double Taxation Avoidance Agreements (DTAA) typically reduce withholding tax rates to 5%–15%.",
  },
  {
    head: "Annual Foreign Liabilities & Assets (FLA)",
    details: "Every company that has received foreign direct investment (FDI) must file the mandatory annual FLA Return with the Reserve Bank of India by July 15th through the RBI FLAIR online portal.",
  },
  {
    head: "Statutory MCA & Tax Returns",
    details: "Annual ROC filings (Form AOC-4 for financial balance sheets, Form MGT-7 for annual shareholder return), statutory financial audits, and corporate income tax return (ITR-6) must be maintained each fiscal year.",
  },
];

const FAQS = [
  {
    q: "What defines an Indian Subsidiary under the Companies Act, 2013?",
    a: "Under Section 2(87) of the Companies Act, 2013, an Indian company is deemed a subsidiary of a foreign corporation if the overseas parent controls the composition of the Board of Directors or holds/controls more than 50% of the total voting power (either directly or through other subsidiaries).",
  },
  {
    q: "Is an Indian resident director mandatory for an Indian Subsidiary?",
    a: "Yes. Section 149(3) of the Companies Act mandates that every company in India must have at least one director who has stayed in India for a total period of not less than 182 days during the financial year. Foreign directors can be appointed alongside the resident director.",
  },
  {
    q: "Can a foreign parent company own 100% of an Indian Subsidiary?",
    a: "Yes. In eligible sectors under the 100% Automatic FDI route, the overseas corporation can incorporate a Wholly Owned Subsidiary (WOS). To satisfy the statutory minimum requirement of 2 shareholders, 99.9% of shares are held by the parent entity and 0.1% is held by an individual nominee on behalf of the parent.",
  },
  {
    q: "What is Form FC-GPR and when must it be submitted to the RBI?",
    a: "Form FC-GPR (Foreign Currency-Gross Provisional Return) is the statutory reporting document required by the Reserve Bank of India under FEMA regulations whenever an Indian entity issues capital shares to a foreign investor against inward FDI remittances. It must be filed on the RBI FIRMS portal within 30 days of share allotment.",
  },
  {
    q: "How does Merrafilings assist international companies establishing subsidiaries?",
    a: "Merrafilings provides turnkey corporate secretarial and cross-border advisory: drafting bilingual board resolutions, coordinating consular apostille requirements, serving as resident director facilitators, filing SPICe+ with the MCA, managing RBI FIRMS FC-GPR compliance, and opening corporate bank accounts in India.",
  },
];

export default function IndianSubsidiarySetupComprehensiveGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <CompanyGuideLayout
      currentSlug="indian-subsidiary-setup-comprehensive-guide"
      title="Indian Subsidiary Made Easy: A Comprehensive Guide for Business Expansion"
      breadcrumbLabel="Indian Subsidiary Setup Guide"
      metaPublishedDate="October 2026"
      readingTime="12 min read"
      authorName="Merrafilings Cross-Border Corporate Desk"
    >
      {/* Lead Paragraph */}
      <div className="text-[15px] sm:text-base text-slate-800 leading-relaxed font-normal space-y-4">
        <p>
          Expanding commercial footprints into India has evolved into an essential strategic imperative for global technology leaders, European manufacturers, American enterprises, and Asian conglomerates. Establishing an <strong className="font-semibold text-slate-950">Indian Subsidiary Company</strong> enables foreign corporations to tap into the world&apos;s most expansive consumer market, recruit premier engineering talent, and secure full domestic contracting rights while insulating the parent company&apos;s overseas balance sheet.
        </p>
        <p>
          Governed under Section 2(87) of the <strong className="font-semibold text-slate-950">Companies Act, 2013</strong> and monitored by the <strong className="font-semibold text-slate-950">Reserve Bank of India (RBI)</strong> under Foreign Exchange Management Act (FEMA) guidelines, an Indian subsidiary combines domestic private limited agility with international capital structures. This comprehensive handbook provides overseas executives, general counsels, and founders with a lucid, statutory roadmap for establishing and maintaining an Indian subsidiary seamlessly.
        </p>
      </div>

      {/* Section 1: Strategic Advantages */}
      <section className="pt-4 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              01
            </span>
            Compelling Drivers for Establishing an Indian Subsidiary
          </h2>
          <p className="text-sm text-slate-600 mt-1.5 font-normal">
            Understand why multinational corporations prioritize subsidiary incorporation over liaison or branch offices:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {STRATEGIC_ADVANTAGES.map((adv, idx) => {
            const Icon = adv.icon;
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
                    {adv.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {adv.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
                  {adv.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 2: Step-by-Step Setup */}
      <section className="pt-6 space-y-6 border-t border-slate-100">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              02
            </span>
            Chronological Statutory Execution Pathway
          </h2>
          <p className="text-sm text-slate-600 mt-1.5 font-normal">
            Step-by-step procedure from foreign document apostille to RBI FIRMS capital reporting:
          </p>
        </div>

        <div className="space-y-3.5">
          {SUBSIDIARY_SETUP_STEPS.map((s, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-xl border border-slate-200/80 bg-white hover:border-emerald-300 hover:shadow-xs transition-all flex items-start gap-4"
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

      {/* Section 3: Cross-Border Compliance Pillars */}
      <section className="pt-6 space-y-5 border-t border-slate-100">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              03
            </span>
            Key Cross-Border Regulatory &amp; Tax Frameworks
          </h2>
          <p className="text-sm text-slate-600 mt-1.5 font-normal">
            Critical statutory regimes governing transactions between foreign parent entities and Indian subsidiaries:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {COMPLIANCE_PILLARS.map((c, i) => (
            <div
              key={i}
              className="p-5 rounded-xl border border-slate-200/90 bg-[#FAF9F7]/70 space-y-1.5"
            >
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{c.head}</span>
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
                {c.details}
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
            Authoritative answers on establishing and operating a foreign subsidiary in India:
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
