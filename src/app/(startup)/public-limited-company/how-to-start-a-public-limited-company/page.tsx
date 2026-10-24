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
  Search,
  PenTool,
  CheckSquare,
  FileCheck2,
  Rocket,
  UserCheck,
} from "lucide-react";

const ROADMAP_STEPS = [
  {
    step: "Step 01",
    title: "Market Research & Commercial Feasibility Study",
    desc: "A public limited company requires large-scale capital commitments. Commencing with thorough industry analysis, competitive benchmarking, SWOT assessment, and multi-year financial modeling ensures the viability of the scalable enterprise model before entering statutory commitments.",
    takeaway: "Establishes institutional investment rationale and sustainable revenue projections.",
    icon: Search,
  },
  {
    step: "Step 02",
    title: "Formulate an Investor-Grade Business Plan",
    desc: "Craft an exhaustive corporate roadmap outlining the organizational structure, products/services, target addressable market (TAM), go-to-market strategies, and capital allocation frameworks. This document is crucial for securing early institutional sponsors and anchor investors.",
    takeaway: "Outlines capital expenditure plans, operational milestones, and debt-to-equity ratios.",
    icon: FileText,
  },
  {
    step: "Step 03",
    title: "Obtain Class 3 DSC & DIN for Directors",
    desc: "Acquire Class 3 Digital Signature Certificates (DSC) with encryption tokens for all 7+ founding subscribers and minimum 3 proposed directors. Director Identification Numbers (DIN) are either pre-existing or allotted simultaneously through the integrated SPICe+ Part B form.",
    takeaway: "Enables secure digital signing on the Ministry of Corporate Affairs (MCA V3) portal.",
    icon: PenTool,
  },
  {
    step: "Step 04",
    title: "Reserve Corporate Name via SPICe+ Part A",
    desc: "Submit a unique name reservation request via SPICe+ Part A (Reserve Unique Name) on the MCA portal. The proposed name must adhere to Rule 8 of the Companies (Incorporation) Rules, reflect main corporate objects, and conclude with the mandatory statutory suffix 'Limited'.",
    takeaway: "MCA validates that the name does not conflict with existing trademarks or companies.",
    icon: Landmark,
  },
  {
    step: "Step 05",
    title: "Draft Electronic MoA (INC-33) & AoA (INC-34)",
    desc: "Draft the electronic Memorandum of Association (defining core and ancillary corporate objects and authorized capital) and electronic Articles of Association (establishing internal bylaws, free share transfer clauses, board convening powers, and dividend declaration rules).",
    takeaway: "Statutory charters establishing the legal capacity and internal regulations of the corporation.",
    icon: Layers,
  },
  {
    step: "Step 06",
    title: "File Integrated SPICe+ Part B Incorporation Form",
    desc: "Upload SPICe+ Part B along with linked forms AGILE-PRO-S (EPFO, ESIC, Professional Tax, Bank Account opening, Shops & Establishment), INC-9 (Declarations by Subscribers and Directors), and DIR-2 (Consent to act as Director).",
    takeaway: "ROC issues the Certificate of Incorporation (COI) along with corporate CIN, PAN, and TAN.",
    icon: CheckSquare,
  },
  {
    step: "Step 07",
    title: "Post-Incorporation Filings & Bank Capital Deposit",
    desc: "Open the scheduled corporate current bank account, deposit the subscribed share capital by each founding shareholder, and file Form INC-20A (Declaration for Commencement of Business) within 180 days of incorporation.",
    takeaway: "Failure to file INC-20A prevents the company from commencing business or exercising borrowing powers.",
    icon: FileCheck2,
  },
  {
    step: "Step 08",
    title: "Mandatory Demat ISIN Admission via NSDL / CDSL",
    desc: "Under Rule 9A of the Companies (Prospectus and Allotment of Securities) Rules, every public company must admit its equity shares with national depositories (NSDL / CDSL) and obtain an International Securities Identification Number (ISIN) for 100% paperless demat holding.",
    takeaway: "Prerequisite for any future private placement, bonus issue, or rights allotment.",
    icon: Coins,
  },
  {
    step: "Step 09",
    title: "IPO Preparation & Public Stock Exchange Listing",
    desc: "Entities aiming for retail equity mobilization engage SEBI-registered Merchant Bankers, statutory auditors, and legal counsel to prepare the Draft Red Herring Prospectus (DRHP), comply with SEBI ICDR guidelines, and float an Initial Public Offering on BSE / NSE bourses.",
    takeaway: "Provides secondary market liquidity, broad retail ownership, and high public enterprise valuation.",
    icon: Rocket,
  },
];

const FAQS = [
  {
    q: "What are the baseline minimum requirements to start a Public Limited Company in India?",
    a: "To incorporate a Public Limited Company, you require at least 7 shareholders (subscribers), at least 3 directors (with at least 1 resident Indian citizen), a registered commercial office address in India, Digital Signature Certificates (DSC) for signatories, and 'Limited' as the suffix in the company name.",
  },
  {
    q: "How long does the entire incorporation process take with Merrafilings?",
    a: "Under standard MCA processing times, name approval takes 1-2 business days, document drafting and DSC verification take 1-2 days, and SPICe+ Part B ROC scrutiny takes 3-5 business days. The complete Certificate of Incorporation is typically delivered within 7 to 10 working days.",
  },
  {
    q: "Is there any statutory minimum paid-up capital requirement to register a public company?",
    a: "Under the Companies (Amendment) Act 2015, the previously mandated minimum paid-up capital of ₹5 Lakhs was abolished. A public company can now be incorporated with any nominal authorized and paid-up capital (such as ₹1 Lakh or ₹5 Lakhs), though practical operational capital should align with business scope.",
  },
  {
    q: "What is Form INC-20A and why is it mandatory for a new Public Limited Company?",
    a: "Form INC-20A is the statutory 'Declaration for Commencement of Business' that every company incorporated in India must file within 180 days of incorporation. It proves that subscribers have paid the full value of the shares agreed to be taken by them into the company's bank account, certified by a practicing CA/CS.",
  },
  {
    q: "Can a foreign national or NRI be a director in an Indian Public Limited Company?",
    a: "Yes. Foreign nationals and NRIs can be appointed as directors provided they obtain a valid Director Identification Number (DIN) and Class 3 DSC. However, under Section 149(3) of the Companies Act 2013, at least one director on the board must be a resident of India (who has stayed in India for not less than 182 days in the financial year).",
  },
];

export default function HowToStartPublicLimitedCompanyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <PublicLimitedGuideLayout
      currentSlug="how-to-start-a-public-limited-company"
      title="How to Start a Public Limited Company: Step-by-Step Guide"
      breadcrumbLabel="How to Start a Public Limited Company: Step-by-Step Guide"
      metaPublishedDate="Oct 20, 2026"
      readingTime="10 min read"
      authorName="Merrafilings Corporate Advisory Editorial Team"
    >
      <div className="space-y-10 text-slate-700">
        {/* Intro Banner */}
        <div className="bg-gradient-to-r from-teal-50 via-sky-50 to-emerald-50 border border-teal-100 rounded-2xl p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-md">
              <Rocket className="w-6 h-6" />
            </div>
            <div>
              <span className="inline-block text-[11px] font-bold tracking-wider uppercase text-teal-800 bg-teal-200/60 px-2.5 py-0.5 rounded-full mb-2">
                Incorporation Blueprint & MCA V3 Procedures
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                Step-by-Step Incorporation Walkthrough for Indian Enterprises
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                Founding a <strong>Public Limited Company (PLC)</strong> in India requires navigating rigorous corporate governance guidelines, statutory filings with the Ministry of Corporate Affairs (MCA), and depository setup. This guide offers a comprehensive, step-by-step master roadmap to take your enterprise from concept validation to Certificate of Incorporation, commencement of business, and preparation for capital market entry.
              </p>
            </div>
          </div>
        </div>

        {/* Section 1: Pre-Requisites Summary */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm">
              01
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Statutory Pre-Requisites for Public Company Formation
            </h2>
          </div>
          <div className="h-0.5 w-full bg-slate-100" />
          <p className="text-sm sm:text-base leading-relaxed">
            Prior to initiating digital filings on the MCA portal, ensure your founding group satisfies all mandatory threshold criteria prescribed under the Companies Act 2013:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
              <Users2 className="w-6 h-6 text-teal-600 mb-2" />
              <h4 className="font-bold text-slate-900 text-sm">7+ Shareholders</h4>
              <p className="text-xs text-slate-600 mt-1">Minimum 7 individual or institutional subscribers with no upper limit.</p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
              <Landmark className="w-6 h-6 text-teal-600 mb-2" />
              <h4 className="font-bold text-slate-900 text-sm">3+ Directors</h4>
              <p className="text-xs text-slate-600 mt-1">Minimum 3 directors, including at least 1 resident Indian citizen.</p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
              <Coins className="w-6 h-6 text-teal-600 mb-2" />
              <h4 className="font-bold text-slate-900 text-sm">Capital Structure</h4>
              <p className="text-xs text-slate-600 mt-1">Flexible authorized capital tailored to business scale (no statutory minimum).</p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
              <Building2 className="w-6 h-6 text-teal-600 mb-2" />
              <h4 className="font-bold text-slate-900 text-sm">Registered Office</h4>
              <p className="text-xs text-slate-600 mt-1">Commercial or residential address with ownership proof and utility bill.</p>
            </div>
          </div>
        </section>

        {/* Section 2: Complete 9-Step Roadmap */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm">
              02
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              The 9-Step Incorporation & Launch Process
            </h2>
          </div>
          <div className="h-0.5 w-full bg-slate-100" />
          <div className="space-y-5">
            {ROADMAP_STEPS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-teal-300 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <span className="text-xs font-mono font-bold text-teal-600 bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
                          {item.step}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                        {item.desc}
                      </p>
                      <div className="inline-flex items-center gap-2 text-xs text-teal-800 bg-teal-50/80 px-3 py-1.5 rounded-lg border border-teal-100">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>
                          <strong>Key Takeaway:</strong> {item.takeaway}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 3: Post-Incorporation Compliance Checklist */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm">
              03
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Mandatory Post-Incorporation Legal Filings
            </h2>
          </div>
          <div className="h-0.5 w-full bg-slate-100" />
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold">
                <tr>
                  <th className="p-3 sm:p-4">Statutory Event</th>
                  <th className="p-3 sm:p-4">Form / Requirement</th>
                  <th className="p-3 sm:p-4">Statutory Deadline</th>
                  <th className="p-3 sm:p-4">Consequence of Default</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 sm:p-4 font-semibold text-slate-900">First Board Meeting</td>
                  <td className="p-3 sm:p-4">Section 173(1) Minutes</td>
                  <td className="p-3 sm:p-4">Within 30 days of incorporation</td>
                  <td className="p-3 sm:p-4 text-red-600">Director monetary fines</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 sm:p-4 font-semibold text-slate-900">Auditor Appointment</td>
                  <td className="p-3 sm:p-4">Form ADT-1 (First Statutory Auditor)</td>
                  <td className="p-3 sm:p-4">Within 30 days of incorporation</td>
                  <td className="p-3 sm:p-4 text-red-600">ROC penalties per day of delay</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 sm:p-4 font-semibold text-slate-900">Commencement of Business</td>
                  <td className="p-3 sm:p-4">Form INC-20A + Bank Verification</td>
                  <td className="p-3 sm:p-4">Within 180 days of incorporation</td>
                  <td className="p-3 sm:p-4 text-red-600">Company strike-off & ₹50,000+ penalty</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 sm:p-4 font-semibold text-slate-900">Depository Admission (Demat)</td>
                  <td className="p-3 sm:p-4">ISIN Allotment via NSDL / CDSL</td>
                  <td className="p-3 sm:p-4">Prior to any further share allotment</td>
                  <td className="p-3 sm:p-4 text-red-600">Inability to transfer or issue shares</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 sm:p-4 font-semibold text-slate-900">Annual Return & Accounts</td>
                  <td className="p-3 sm:p-4">AOC-4 (Financials) & MGT-7 (Annual Return)</td>
                  <td className="p-3 sm:p-4">Within 30 / 60 days of AGM</td>
                  <td className="p-3 sm:p-4 text-red-600">₹100/day penalty & director debarment</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA Box */}
        <div className="rounded-2xl border border-teal-200 bg-gradient-to-br from-teal-50 via-white to-emerald-50 p-6 sm:p-8 text-center space-y-4 shadow-sm">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            Let Merrafilings Handle Your Public Company Incorporation
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Our specialized corporate law and secretarial team manages the entire process from name clearance, DIN/DSC, SPICe+ Part B drafting to bank account integration and ISIN Demat allocation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/public-limited-company"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-medium text-sm transition-all shadow-md hover:shadow-lg"
            >
              Start Public Company Registration <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/public-limited-company/guide"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-teal-700 hover:border-teal-300 font-medium text-sm transition-all"
            >
              Read Comprehensive Guide
            </Link>
          </div>
        </div>

        {/* Section 4: FAQs */}
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
