"use client";

import React, { useState } from "react";
import Link from "next/link";
import PublicLimitedGuideLayout from "@/components/PublicLimitedGuideLayout";
import {
  Building2,
  ShieldCheck,
  TrendingUp,
  Award,
  Sparkles,
  Receipt,
  Scale,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Landmark,
  Users2,
  Globe2,
  Coins,
  FileText,
  Layers,
  Briefcase,
  Cpu,
  Leaf,
  BarChart3,
  RefreshCw,
  GitBranch,
} from "lucide-react";

const PILLARS = [
  {
    icon: Coins,
    title: "Capital Accumulation Power",
    desc: "Uncapped equity capitalization capability through public subscription, institutional placements, rights issues, and depository receipts.",
  },
  {
    icon: Users2,
    title: "Unlimited Public Shareholding",
    desc: "Requires a minimum of 7 members with absolutely no statutory ceiling, democratizing investor participation across retail and institutional funds.",
  },
  {
    icon: ShieldCheck,
    title: "Insulated Limited Liability",
    desc: "Shareholders are shielded from corporate creditors. Personal liabilities are strictly restricted to unpaid subscription money on subscribed shares.",
  },
  {
    icon: Landmark,
    title: "Supervised Board of Directors",
    desc: "Mandatory minimum of 3 directors ensuring strategic vision, committee supervision (Audit, Nomination & Remuneration), and regulatory compliance.",
  },
];

const ADVANTAGES_LIST = [
  {
    title: "Direct Capital Market Access",
    desc: "Issue equity shares, convertible debentures, and preference capital directly to institutional funds, mutual funds, and retail investors through SEBI-governed IPOs.",
  },
  {
    title: "Heightened Corporate Reputation",
    desc: "Public status confers prestige, high institutional trust, and sovereign creditworthiness, resulting in lower borrowing rates from consortium lenders and banking institutions.",
  },
  {
    title: "Heightened Market Visibility & Analyst Coverage",
    desc: "Public corporations command regular business media coverage, institutional research analyst tracking, and transparent price discovery on BSE and NSE bourses.",
  },
  {
    title: "Instant Liquidity & Premier ESOP Attraction",
    desc: "Listed shares offer instantaneous trading liquidity, providing frictionless entry and exit for early founders, private equity investors, and employees holding stock options.",
  },
];

const COMPLIANCE_PILLARS = [
  {
    title: "Mandatory Periodic Disclosures",
    desc: "Filing audited financial statements (Form AOC-4), annual returns (Form MGT-7), secretarial audit reports (Form MR-3 under Section 204), and director disclosures.",
  },
  {
    title: "Rigorous Corporate Governance Code",
    desc: "Strict adherence to board committee formulations (Audit Committee, Nomination and Remuneration Committee under Section 177 & 178) and independent director quotas.",
  },
  {
    title: "Annual General Meetings & E-Voting",
    desc: "Conducting annual general meetings (AGM) within 6 months of financial year closure and offering electronic voting (e-voting) facilities to all registered members.",
  },
];

const CONVERSION_STEPS = [
  {
    num: "01",
    title: "Board Evaluation & Strategic Decision",
    desc: "Convene a board meeting to approve the proposal for conversion of the Private Limited Company into a Public Limited Company, settle altered MoA & AoA drafts, and fix the date for an Extraordinary General Meeting (EGM).",
  },
  {
    num: "02",
    title: "Special Resolution in EGM",
    desc: "Pass a Special Resolution under Section 14 of the Companies Act 2013 by a 75% majority of shareholders approving the corporate conversion and the deletion of restrictive private clauses in the Articles of Association.",
  },
  {
    num: "03",
    title: "Scale Members and Board Quorum",
    desc: "Ensure the company meets statutory public company thresholds by increasing the total number of shareholders to at least 7 members and appointing at least 3 directors on the board.",
  },
  {
    num: "04",
    title: "ROC Filing via Form MGT-14 & Form INC-27",
    desc: "File Form MGT-14 within 30 days of passing the Special Resolution, followed by Form INC-27 (Application for conversion of private company into public company) with the Registrar of Companies along with altered MoA, AoA, and financial statements.",
  },
  {
    num: "05",
    title: "Certificate of Incorporation & Demat Setup",
    desc: "The ROC verifies statutory documentation and issues a fresh Certificate of Incorporation reflecting the removal of the word 'Private'. The company then secures ISIN connectivity with NSDL/CDSL for mandatory share dematerialization.",
  },
];

const FAQS = [
  {
    q: "Can an existing Private Limited Company convert into a Public Limited Company?",
    a: "Yes. Under Section 14 of the Companies Act 2013, an existing Private Limited company can convert into a Public Limited company by passing a Special Resolution in an EGM, altering its MoA and AoA to eliminate restrictive private clauses, expanding to 7 members and 3 directors, and filing Form INC-27 with the ROC.",
  },
  {
    q: "What is the difference between an Unlisted Public Company and a Listed Public Company?",
    a: "An unlisted public company has incorporated under the Companies Act 2013 with 7+ members and 3+ directors, but its shares are not traded on recognized stock exchanges. A listed public company has floated an IPO, issued a prospectus, complied with SEBI LODR Regulations, and listed its shares on stock exchanges such as BSE or NSE.",
  },
  {
    q: "What are the rules regarding Secretarial Audit for a Public Company?",
    a: "Under Section 204 of the Companies Act 2013, every public company having a paid-up share capital of ₹50 Crore or more, or a turnover of ₹250 Crore or more, must annex a Secretarial Audit Report (Form MR-3) issued by an independent Practicing Company Secretary (PCS) with its Board Report.",
  },
  {
    q: "Are public companies required to spend on Corporate Social Responsibility (CSR)?",
    a: "Yes, if they meet any of the three thresholds under Section 135: net worth of ₹500 Crore or more, turnover of ₹1,000 Crore or more, or net profit of ₹5 Crore or more during the immediately preceding financial year. They must spend at least 2% of their average net profits over the prior 3 years on CSR activities.",
  },
  {
    q: "How does Merrafilings assist with ongoing annual and secretarial compliances?",
    a: "Merrafilings provides end-to-end corporate advisory, including ROC filings (AOC-4, MGT-7, DIR-12), drafting board meeting and AGM minutes, secretarial audits, statutory register maintenance, and SEBI compliance facilitation.",
  },
];

export default function PublicLimitedGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <PublicLimitedGuideLayout
      currentSlug="guide"
      title="Understanding Public Limited Companies: A Comprehensive Guide"
      breadcrumbLabel="Understanding Public Limited Companies: A Comprehensive Guide"
      metaPublishedDate="Oct 20, 2026"
      readingTime="11 min read"
      authorName="Merrafilings Corporate Advisory Editorial Team"
    >
      <div className="space-y-10 text-slate-700">
        {/* Intro Banner */}
        <div className="bg-gradient-to-r from-teal-50 via-sky-50 to-emerald-50 border border-teal-100 rounded-2xl p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-md">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <span className="inline-block text-[11px] font-bold tracking-wider uppercase text-teal-800 bg-teal-200/60 px-2.5 py-0.5 rounded-full mb-2">
                Enterprise Blueprint & Governance Architecture
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                The Complete Handbook to Public Corporate Governance in India
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                Operating as a <strong>Public Limited Company (PLC)</strong> represents the pinnacle of corporate expansion in India. It empowers enterprises to mobilize multi-crore public capital, command elevated institutional credibility, and issue liquid equity shares. This comprehensive guide dissects core legal features, statutory advantages, governance obligations, and the complete statutory roadmap for converting private entities into public corporations under the <strong>Companies Act 2013</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Section 1: Structural Foundations */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm">
              01
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Structural Pillars of a Public Limited Company
            </h2>
          </div>
          <div className="h-0.5 w-full bg-slate-100" />
          <p className="text-sm sm:text-base leading-relaxed">
            Under Section 2(71) of the Companies Act 2013, a public company is defined as a company that is not a private company, has a minimum of 7 members, and places no restrictions on the transferability of its shares. The entity operates on four foundational pillars:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-slate-200 bg-white hover:border-teal-300 transition-all shadow-sm group"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 2: Advantages */}
        <section className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm">
              02
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Commercial & Strategic Advantages of PLC Status
            </h2>
          </div>
          <div className="h-0.5 w-full bg-slate-100" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ADVANTAGES_LIST.map((adv, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-teal-200 transition-all"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-xs shrink-0">
                    ✓
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    {adv.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Governance & Regulatory Compliance */}
        <section className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm">
              03
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Obligations & Statutory Regulatory Frameworks
            </h2>
          </div>
          <div className="h-0.5 w-full bg-slate-100" />
          <p className="text-sm sm:text-base text-slate-600">
            Because a public company safeguards public and institutional funds, the Ministry of Corporate Affairs (MCA) imposes heightened statutory responsibilities:
          </p>
          <div className="space-y-4">
            {COMPLIANCE_PILLARS.map((comp, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-teal-200 transition-all shadow-sm"
              >
                <div className="flex items-center gap-3 mb-1.5">
                  <Scale className="w-5 h-5 text-teal-600 shrink-0" />
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    {comp.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                  {comp.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Transition from Private to Public Limited */}
        <section className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm">
              04
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              How to Transition from a Private to a Public Limited Company
            </h2>
          </div>
          <div className="h-0.5 w-full bg-slate-100" />
          <p className="text-sm sm:text-base text-slate-600">
            For scaling private companies preparing for an IPO or institutional capital, conversion under Section 14 involves five systematic milestones:
          </p>
          <div className="relative border-l-2 border-teal-200 pl-6 ml-3 space-y-6">
            {CONVERSION_STEPS.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] top-0.5 w-6 h-6 rounded-full bg-teal-600 text-white text-xs font-bold flex items-center justify-center ring-4 ring-white shadow">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Recent Trends & Digital Reforms */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm">
              05
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Recent Developments, ESG & Demat Mandates
            </h2>
          </div>
          <div className="h-0.5 w-full bg-slate-100" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-2">
              <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center">
                <Cpu className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Digital Transformation</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                MCA21 V3 implementation, electronic corporate seals, and automated audit trail software compliance ensure foolproof accounting transparency.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Leaf className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">ESG & BRSR Mandate</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Heightened emphasis on Business Responsibility and Sustainability Reporting (BRSR) to satisfy institutional ESG mandates and climate disclosures.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-2">
              <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
                <GitBranch className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">M&A and Cross-Border Listing</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Streamlined NCLT merger approvals, fast-track schemes, and direct listings on international exchanges via GIFT City IFSC.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Box */}
        <div className="rounded-2xl border border-teal-200 bg-gradient-to-br from-teal-50 via-white to-emerald-50 p-6 sm:p-8 text-center space-y-4 shadow-sm">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            Consult Merrafilings Corporate Advisory for Public Company Structuring
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Whether incorporating a fresh Public Limited Company or converting an existing Private Limited entity, our veteran Corporate Secretaries and Chartered Accountants handle complete regulatory compliance.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/public-limited-company"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-medium text-sm transition-all shadow-md hover:shadow-lg"
            >
              Incorporate Public Limited Company <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/public-limited-company/how-to-start-a-public-limited-company"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-teal-700 hover:border-teal-300 font-medium text-sm transition-all"
            >
              View Step-by-Step Setup Guide
            </Link>
          </div>
        </div>

        {/* Section 6: FAQs */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-teal-600" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="h-0.5 w-full bg-slate-100" />
          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 bg-white overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 hover:bg-slate-50/60 transition-colors"
                  >
                    <span className="text-sm sm:text-base">{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-teal-600" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-100 bg-slate-50/40 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </PublicLimitedGuideLayout>
  );
}
