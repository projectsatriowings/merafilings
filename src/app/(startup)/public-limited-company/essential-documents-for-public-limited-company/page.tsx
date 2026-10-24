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
  FileCheck,
  FolderLock,
  Stamp,
  UserCheck,
  Home,
  BookOpen,
} from "lucide-react";

const INCORPORATION_DOCS = [
  {
    icon: FileText,
    title: "Electronic Memorandum of Association (e-MoA - INC-33)",
    desc: "Defines the constitution and charter of the company, stating its authorized share capital, registered office state, and fundamental objects (main objects and matters incidental to their furtherance).",
  },
  {
    icon: Layers,
    title: "Electronic Articles of Association (e-AoA - INC-34)",
    desc: "Prescribes the internal governance bylaws, rules for voting, share issuance, debenture creation, transfer of shares without restrictions, board meeting quorums, and dividend distributions.",
  },
  {
    icon: Stamp,
    title: "Class 3 Digital Signature Certificates (DSC)",
    desc: "Statutory cryptographic USB tokens required for digital signing of SPICe+ forms on the MCA portal by all 7+ subscribers and proposed directors.",
  },
  {
    icon: UserCheck,
    title: "Director Consent Letters (Form DIR-2)",
    desc: "Formal signed consent from all proposed directors declaring their willingness to act as directors of the company under Section 152(5) of the Companies Act 2013.",
  },
  {
    icon: ShieldCheck,
    title: "Declaration by Subscribers & Directors (Form INC-9)",
    desc: "Statutory affidavit declaring that none of the proposed directors or subscribers have been convicted of any offense related to corporate formation or mismanagement.",
  },
  {
    icon: FileCheck,
    title: "Integrated SPICe+ Part B & AGILE-PRO-S",
    desc: "Single-window digital application executing simultaneous ROC incorporation, DIN allotment, PAN, TAN, EPFO, ESIC, Professional Tax, and mandatory Corporate Current Bank Account opening.",
  },
];

const KYC_CHECKLIST = [
  {
    category: "Indian Directors & Shareholders (Min 7)",
    docs: [
      "Permanent Account Number (PAN) Card (Mandatory).",
      "Identity Proof: Aadhaar Card / Voter ID / Valid Indian Passport / Driving License.",
      "Residential Address Proof: Bank account statement / Electricity bill / Mobile postpaid bill (strictly not older than 2 months with full matching name).",
      "Recent passport-sized digital photograph.",
    ],
  },
  {
    category: "Foreign Directors & NRI Subscribers",
    docs: [
      "Valid National Passport (Apostilled or Consularized in home country).",
      "Foreign Address Proof: Driving license / Bank statement / Government residence card (Apostilled).",
      "Board Resolution and Certificate of Incorporation (if subscriber is a foreign body corporate).",
      "Overseas DIN & Indian Class 3 DSC token with video verification.",
    ],
  },
  {
    category: "Registered Commercial Office Proof",
    docs: [
      "Latest Electricity Bill / Water Bill / Gas Bill / Property Tax receipt (< 2 months old).",
      "Notarized Rent or Lease Agreement executed in the company's or promoter's name.",
      "No Objection Certificate (NOC) signed by the legal property owner allowing corporate operations.",
    ],
  },
];

const OPERATIONAL_DOCS = [
  {
    icon: BookOpen,
    title: "Shareholders' Agreement (SHA) & Charters",
    desc: "Comprehensive agreement outlining minority shareholder rights, board representation, anti-dilution rights, tag-along/drag-along provisions, and dispute resolution mechanisms.",
  },
  {
    icon: FolderLock,
    title: "Statutory Secretarial Registers",
    desc: "Mandatory registers under Companies Act 2013: Register of Members (MGT-1), Register of Directors & KMP, Register of Charges (CHG-7), and Register of Significant Beneficial Owners (BEN-3).",
  },
  {
    icon: Landmark,
    title: "Board & Committee Minutes Books",
    desc: "Numbered and bound minutes of all board meetings, Audit Committee meetings, and Annual General Meetings (AGM) compliant with Secretarial Standards (SS-1 and SS-2).",
  },
  {
    icon: Receipt,
    title: "Financial Statements & Statutory Audit Reports",
    desc: "Audited Balance Sheet, Profit & Loss Account, Cash Flow Statement, Directors' Report, and Independent Auditor's Report filed annually via MCA Form AOC-4 and MGT-7.",
  },
];

const FAQS = [
  {
    q: "How many subscribers' documents are required for a Public Limited Company?",
    a: "Under Section 3(1)(a) of the Companies Act 2013, a Public Limited Company requires at least 7 distinct individual or corporate subscribers. Each subscriber must provide self-attested PAN, identity proof, recent address proof (< 2 months old), and a Class 3 Digital Signature Certificate.",
  },
  {
    q: "Can the registered office of a Public Limited Company be at a residential property?",
    a: "Yes. Under MCA guidelines, a company's registered office can initially be located at a residential property (such as the residence of one of the founding directors), provided a utility bill (< 2 months old) and an NOC from the owner are provided.",
  },
  {
    q: "What is Form DIR-2 and is it mandatory for all directors?",
    a: "Form DIR-2 is the formal consent letter submitted by each proposed director affirming their willingness to act as a director under Section 152(5) of the Companies Act 2013. It includes disclosure of any interests in other firms or bodies corporate.",
  },
  {
    q: "What additional documents are required if an existing company is a subscriber?",
    a: "If an existing domestic or foreign company is subscribing to shares, you must provide its Certificate of Incorporation, Memorandum and Articles of Association, a certified Board Resolution authorizing the share subscription, and KYC of the authorized signatory.",
  },
  {
    q: "How does Merrafilings assist with document validation and MCA filing?",
    a: "Merrafilings reviews all promoter KYC, drafts compliant e-MoA and e-AoA, prepares DIR-2/INC-9 affidavits, verifies utility bills against land records, arranges DSC tokens, and submits the integrated SPICe+ dossier for swift ROC approval.",
  },
];

export default function EssentialDocumentsPublicLimitedPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <PublicLimitedGuideLayout
      currentSlug="essential-documents-for-public-limited-company"
      title="Essential Documents Required for Public Limited Company Registration"
      breadcrumbLabel="Essential Documents Required for Public Limited Company"
      metaPublishedDate="Oct 20, 2026"
      readingTime="8 min read"
      authorName="Merrafilings Corporate Advisory Editorial Team"
    >
      <div className="space-y-10 text-slate-700">
        {/* Intro Banner */}
        <div className="bg-gradient-to-r from-teal-50 via-sky-50 to-emerald-50 border border-teal-100 rounded-2xl p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-md">
              <FolderLock className="w-6 h-6" />
            </div>
            <div>
              <span className="inline-block text-[11px] font-bold tracking-wider uppercase text-teal-800 bg-teal-200/60 px-2.5 py-0.5 rounded-full mb-2">
                Statutory Documentation & Compliance Dossier
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                Complete Checklist of Required Documents under MCA V3
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                Incorporating a <strong>Public Limited Company (PLC)</strong> in India demands rigorous adherence to statutory paperwork. As public companies mobilize institutional capital and offer unrestricted public shareholding, the <strong>Ministry of Corporate Affairs (MCA)</strong> mandates comprehensive verification of all 7+ subscribers, 3+ directors, and the corporate registered office. This guide details every legal document required for effortless incorporation and lifelong governance.
              </p>
            </div>
          </div>
        </div>

        {/* Section 1: Why Documents Matter */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm">
              01
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Why Document Accuracy Is Crucial for Public Limited Companies
            </h2>
          </div>
          <div className="h-0.5 w-full bg-slate-100" />
          <p className="text-sm sm:text-base leading-relaxed">
            Unlike private firms, a Public Limited Company is subject to institutional due diligence, credit rating agency scrutiny, bank consortium audits, and public investor inspection. Comprehensive legal documentation serves three vital functions:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-1.5">
              <ShieldCheck className="w-5 h-5 text-teal-600" />
              <h4 className="font-bold text-slate-900 text-sm">Zero ROC Rejection Risk</h4>
              <p className="text-xs text-slate-600">Eliminates resubmission notices under MCA V3 rules by matching applicant details across central databases.</p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-1.5">
              <Coins className="w-5 h-5 text-teal-600" />
              <h4 className="font-bold text-slate-900 text-sm">Institutional Investment Ready</h4>
              <p className="text-xs text-slate-600">Satisfies VC/PE and bank consortium compliance audits for venture debt and equity rounds.</p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-1.5">
              <Scale className="w-5 h-5 text-teal-600" />
              <h4 className="font-bold text-slate-900 text-sm">Dispute Immunity</h4>
              <p className="text-xs text-slate-600">Robust e-AoA and shareholder pacts prevent deadlock and clarify voting powers from Day 1.</p>
            </div>
          </div>
        </section>

        {/* Section 2: Core Incorporation Documents */}
        <section className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm">
              02
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Mandatory Incorporation Filings & Statutory Forms
            </h2>
          </div>
          <div className="h-0.5 w-full bg-slate-100" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {INCORPORATION_DOCS.map((doc, idx) => {
              const Icon = doc.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-teal-300 transition-all group"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                        {doc.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {doc.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 3: Detailed KYC Checklist */}
        <section className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm">
              03
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              KYC Documentation for Shareholders, Directors & Registered Office
            </h2>
          </div>
          <div className="h-0.5 w-full bg-slate-100" />
          <div className="space-y-4">
            {KYC_CHECKLIST.map((checklist, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm"
              >
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-teal-100 text-teal-700 text-xs font-bold flex items-center justify-center">
                    {idx + 1}
                  </span>
                  {checklist.category}
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  {checklist.docs.map((docItem, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{docItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Operational & Post-Incorporation Documents */}
        <section className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm">
              04
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Operational & Ongoing Secretarial Documentation
            </h2>
          </div>
          <div className="h-0.5 w-full bg-slate-100" />
          <p className="text-sm sm:text-base text-slate-600">
            Following official ROC incorporation, a Public Limited Company must assemble and maintain key operational governance records:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {OPERATIONAL_DOCS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-teal-200 transition-all shadow-sm"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Box */}
        <div className="rounded-2xl border border-teal-200 bg-gradient-to-br from-teal-50 via-white to-emerald-50 p-6 sm:p-8 text-center space-y-4 shadow-sm">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            Ready to Assemble Your Public Limited Company Dossier?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Our experienced Corporate Secretaries review your documentation within 2 hours, draft customized e-MoA & e-AoA charters, and coordinate digital signature approvals across India.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/public-limited-company"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-medium text-sm transition-all shadow-md hover:shadow-lg"
            >
              Start Public Company Registration <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/public-limited-company/how-to-start-a-public-limited-company"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-teal-700 hover:border-teal-300 font-medium text-sm transition-all"
            >
              View Step-by-Step Guide
            </Link>
          </div>
        </div>

        {/* Section 5: FAQs */}
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
