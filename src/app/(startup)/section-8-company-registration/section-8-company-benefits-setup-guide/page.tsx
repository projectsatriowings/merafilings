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
  Layers,
  FileCheck2,
} from "lucide-react";

const CHARITABLE_DOMAINS = [
  {
    title: "Education, Research & Skill Training",
    desc: "Founding schools, universities, technical training institutes, ed-tech non-profit platforms, and scientific research initiatives targeting underserved youth.",
    badge: "Education & STEM",
  },
  {
    title: "Healthcare, Medicine & Relief",
    desc: "Establishing community clinics, rural mobile medical dispensaries, subsidized diagnostic centers, mental health advocacy, and emergency relief programs.",
    badge: "Public Health",
  },
  {
    title: "Environmental Protection & Conservation",
    desc: "Pioneering climate change mitigation, renewable energy adoption, afforestation drives, wildlife habitat preservation, and zero-waste urban sustainability.",
    badge: "Eco Sustainability",
  },
  {
    title: "Social Welfare, Women & Child Development",
    desc: "Promoting poverty eradication, micro-enterprise empowerment for rural women, child welfare, elder care homes, and support for persons with disabilities.",
    badge: "Social Justice",
  },
];

const STATUTORY_BENEFITS = [
  {
    title: "Section 12AB 100% Tax Immunity",
    desc: "Income derived from voluntary contributions, donor grants, and institutional sponsorships is 100% exempt from corporate income tax under Section 11 and Section 12AB of the Income Tax Act, 1961.",
    tag: "Direct Tax Exemption",
  },
  {
    title: "Section 80G Donor Deductions",
    desc: "Registration under Section 80G enables individual and corporate donors to claim a 50% tax deduction on donations, dramatically incentivizing high-net-worth individuals and corporate donors to fund your programs.",
    tag: "Fundraising Accelerator",
  },
  {
    title: "Limited Liability Ringfence",
    desc: "Unlike traditional trustees who can be held personally liable for trust debts or negligence, Section 8 members and directors enjoy complete limited liability shielding their personal properties and assets.",
    tag: "Risk Containment",
  },
  {
    title: "Perpetual Corporate Continuity",
    desc: "The company maintains an unbroken, continuous legal existence under the Companies Act. Changing trustees, retiring directors, or resigning members does not disrupt property titles, contracts, or bank accounts.",
    tag: "Institutional Legacy",
  },
];

const COMPLIANCE_CALENDAR = [
  {
    filing: "Statutory Financial Audit",
    timeline: "Within 6 months of FY close",
    authority: "Statutory Auditor (CA)",
    desc: "Independent examination of books of account, income & expenditure accounts, and balance sheet pursuant to Section 139.",
  },
  {
    filing: "Annual Financial Filing (Form AOC-4)",
    timeline: "Within 30 days of AGM (typically Oct 29)",
    authority: "Ministry of Corporate Affairs (ROC)",
    desc: "Submission of audited financial statements, directors' report, auditor's report, and CSR disclosure to the ROC.",
  },
  {
    filing: "Annual Return (Form MGT-7 / MGT-7A)",
    timeline: "Within 60 days of AGM (typically Nov 29)",
    authority: "Ministry of Corporate Affairs (ROC)",
    desc: "Complete disclosure of members, board meetings, directorship changes, and governance compliance.",
  },
  {
    filing: "Income Tax Return (Form ITR-7)",
    timeline: "October 31st each year",
    authority: "Income Tax Department",
    desc: "Mandatory annual tax return for entities claiming exemption under Section 11/12AB, accompanied by Audit Report in Form 10B/10BB.",
  },
  {
    filing: "Director Annual e-KYC (DIR-3 KYC)",
    timeline: "September 30th each year",
    authority: "Ministry of Corporate Affairs (MCA)",
    desc: "Annual electronic verification of mobile and email credentials for all directors holding active DINs.",
  },
];

const FAQS = [
  {
    q: "What is the difference between Section 8 Company and traditional NGO?",
    a: "An NGO is an umbrella term that includes Trusts, Societies, and Section 8 Companies. A Section 8 Company is the most advanced, transparent, and federally regulated form of NGO in India, incorporated under the central Companies Act, 2013 with nationwide jurisdiction, limited liability, and high donor credibility.",
  },
  {
    q: "Can a Section 8 Company own immovable property in India?",
    a: "Yes. Being an independent juristic person with a separate legal personality, a Section 8 Company has full legal authority to purchase, own, hold, lease, and sell movable and immovable property in its own corporate name.",
  },
  {
    q: "How many members and directors are needed to incorporate a Section 8 Company?",
    a: "A minimum of two directors and two members (shareholders) are required to incorporate a Private Section 8 Company. Directors can also be members. At least one director must be an Indian resident.",
  },
  {
    q: "Are Section 8 companies exempt from stamp duty on incorporation?",
    a: "Yes. In most Indian states, Section 8 companies enjoy substantial concessions or complete exemptions on the payment of stamp duty on their constitutional documents (Memorandum and Articles of Association).",
  },
  {
    q: "How does a Section 8 Company obtain CSR funding under Section 135?",
    a: "To access corporate CSR budgets, a Section 8 company must: (1) Hold a valid Certificate of Incorporation; (2) Possess active 12A and 80G registrations; (3) Demonstrate an established 3-year track record in social activities; and (4) Register with the MCA by filing Form CSR-1 to obtain a unique CSR Registration Number.",
  },
];

export default function Section8CompanyBenefitsSetupGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Section8GuideLayout
      currentSlug="section-8-company-benefits-setup-guide"
      title="Understanding Section 8 Company: Structure, Benefits, and Setup"
      breadcrumbLabel="Structure, Benefits & Setup"
      metaPublishedDate="October 2026"
      readingTime="11 min read"
      authorName="Merrafilings Non-Profit Advisory Desk"
    >
      {/* Lead Paragraph */}
      <div className="text-[15px] sm:text-base text-slate-800 leading-relaxed font-normal space-y-4">
        <p>
          While traditional commercial enterprise revolves around generating private wealth, visionary leaders and philanthropists increasingly channel their energies toward social impact, educational equity, healthcare democratization, and environmental conservation. For such transformative ventures, the <strong className="font-semibold text-slate-950">Section 8 Company</strong> provides the ultimate corporate vehicle under Indian jurisprudence.
        </p>
        <p>
          Established under the <strong className="font-semibold text-slate-950">Companies Act, 2013</strong>, a Section 8 company pairs the institutional credibility of a corporate body with the pure altruism of a non-profit mission. This master handbook provides social entrepreneurs, corporate foundation trustees, and NGO directors with a clear understanding of Section 8 architecture, statutory benefits, setup workflows, and mandatory annual compliance frameworks.
        </p>
      </div>

      {/* Section 1: Charitable Scope */}
      <section className="pt-4 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              01
            </span>
            Permissible Charitable Domains under Section 8(1)
          </h2>
          <p className="text-sm text-slate-600 mt-1.5 font-normal">
            Activities recognized by the Ministry of Corporate Affairs for Section 8 licensing:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CHARITABLE_DOMAINS.map((dom, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-slate-200/90 bg-white hover:border-emerald-300 hover:shadow-xs transition-all space-y-2.5"
            >
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold uppercase tracking-wider border border-emerald-200/70">
                {dom.badge}
              </span>
              <h3 className="text-base font-bold text-slate-900">
                {dom.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
                {dom.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Statutory Benefits */}
      <section className="pt-6 space-y-6 border-t border-slate-100">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              02
            </span>
            Key Statutory &amp; Institutional Advantages
          </h2>
          <p className="text-sm text-slate-600 mt-1.5 font-normal">
            Why visionary founders choose Section 8 companies over archaic trust setups:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {STATUTORY_BENEFITS.map((ben, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-slate-200/90 bg-[#FAF9F7]/70 space-y-1.5"
            >
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                {ben.tag}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                {ben.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
                {ben.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Annual Compliance Calendar */}
      <section className="pt-6 space-y-5 border-t border-slate-100">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              03
            </span>
            Mandatory Annual Compliance Framework
          </h2>
          <p className="text-sm text-slate-600 mt-1.5 font-normal">
            Statutory filings required to maintain flawless corporate standing with the ROC and Income Tax Department:
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs">
          <table className="w-full text-left text-[12.5px] font-normal text-slate-900">
            <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Compliance Event</th>
                <th className="py-3 px-4 text-[#00A86B]">Prescribed Deadline</th>
                <th className="py-3 px-4">Authority / Form</th>
                <th className="py-3 px-4">Legal Scope &amp; Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {COMPLIANCE_CALENDAR.map((c, i) => (
                <tr key={i} className="hover:bg-[#EDF8F3] transition-colors">
                  <td className="py-3 px-4 font-semibold text-slate-950">{c.filing}</td>
                  <td className="py-3 px-4 font-semibold text-[#00A86B]">{c.timeline}</td>
                  <td className="py-3 px-4 font-medium text-slate-700">{c.authority}</td>
                  <td className="py-3 px-4 text-slate-700">{c.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
            Authoritative answers on Section 8 non-profit formation and governance:
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
