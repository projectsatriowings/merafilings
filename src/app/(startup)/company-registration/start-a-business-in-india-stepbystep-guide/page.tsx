"use client";

import React, { useState } from "react";
import Link from "next/link";
import CompanyGuideLayout from "@/components/CompanyGuideLayout";
import {
  Compass,
  CheckCircle2,
  Building2,
  Users2,
  FileText,
  DollarSign,
  TrendingUp,
  ShieldCheck,
  Award,
  Sparkles,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Layers,
  Search,
  Scale,
  Briefcase,
  Target,
} from "lucide-react";

const EXECUTION_PILLARS = [
  {
    step: "01",
    phase: "Planning & Validation",
    title: "Assess & Validate Your Business Idea",
    desc: "Every enduring business begins with rigorous problem-solution validation. Identify unaddressed consumer pain points or B2B workflow friction, define clear customer personas, calculate Total Addressable Market (TAM), and execute a disciplined SWOT analysis (Strengths, Weaknesses, Opportunities, Threats) before allocating capital.",
    icon: Compass,
    action: "Conduct TAM & SWOT Analysis",
  },
  {
    step: "02",
    phase: "Legal Structuring",
    title: "Select Your Optimal Business Entity",
    desc: "Your legal structure determines founder liability, tax compliance, and investor eligibility. Compare Sole Proprietorship (simplest, unlimited liability), Partnership (contractual, joint liability), Limited Liability Partnership (limited liability, flexible internal rules), and Private Limited Company (gold standard for equity funding & corporate scale).",
    icon: Scale,
    action: "Incorporate as Pvt Ltd or LLP",
  },
  {
    step: "03",
    phase: "Statutory Incorporation",
    title: "Register via MCA SPICe+ Integrated Platform",
    desc: "Reserve your company name via RUN/SPICe+ Part A, procure Class 3 Digital Signature Certificates (DSC) with encryption tokens, secure Director Identification Numbers (DIN), and file SPICe+ Part B with electronic Memorandum (e-MOA) and Articles of Association (e-AOA) to receive your Certificate of Incorporation and CIN.",
    icon: Building2,
    action: "Obtain Digital COI & CIN",
  },
  {
    step: "04",
    phase: "Licensing & Permits",
    title: "Secure Mandatory Operating Licenses & Permits",
    desc: "Obtain your municipal Trade License, state Shops & Commercial Establishment registration, and Goods and Services Tax (GSTIN) number. For specialized sectors, acquire FSSAI food business licenses, MSME Udyam registration certificates, or Directorate General of Foreign Trade (DGFT) Import Export Code (IEC).",
    icon: ShieldCheck,
    action: "Complete GST & Shop Act",
  },
  {
    step: "05",
    phase: "Capitalization",
    title: "Mobilize Initial Capital & Open Bank Accounts",
    desc: "Open a statutory corporate current account with zero balance, deposit promoter subscription share capital within 180 days, and file Form INC-20A (Commencement of Business). Explore financing mix: founder bootstrapping, Startup India Seed Fund (SISFS), commercial bank loans, or angel networks.",
    icon: DollarSign,
    action: "Deposit Share Capital & File INC-20A",
  },
  {
    step: "06",
    phase: "Go-to-Market",
    title: "Deploy Digital GTM & Customer Acquisition Engine",
    desc: "Establish your corporate digital presence: domain acquisition, search engine optimization (SEO), performance marketing campaigns, and B2B partner networks. Join industry associations like NASSCOM, CII, and FICCI to accelerate enterprise commercial alliances.",
    icon: Target,
    action: "Build Brand & Sales Pipeline",
  },
  {
    step: "07",
    phase: "Team & Compliance",
    title: "Build a Compliant Team & Institute Payroll Systems",
    desc: "Draft statutory employment contracts, non-disclosure agreements (NDAs), and intellectual property assignment deeds. Institute payroll compliance including Employees' Provident Fund (EPFO), Employee State Insurance (ESIC), state Professional Tax (PT), and quarterly TDS withholding.",
    icon: Users2,
    action: "Institute HR & Payroll Shield",
  },
];

const STRUCTURE_SUMMARY = [
  {
    type: "Private Limited Company",
    bestFor: "Scalable startups, technology ventures, companies seeking VC investment",
    features: "Limited liability, separate legal entity, equity shares, ESOP issuance, minimum 2 directors",
    audit: "Mandatory annual statutory audit",
  },
  {
    type: "Limited Liability Partnership (LLP)",
    bestFor: "Professional service firms, consulting practices, family businesses",
    features: "Limited liability, partnership flexibility, no dividend distribution tax, lower ROC burden",
    audit: "Mandatory only if turnover exceeds ₹40 Lakhs or capital exceeds ₹25 Lakhs",
  },
  {
    type: "One Person Company (OPC)",
    bestFor: "Solo founders, individual consultants, e-commerce solopreneurs",
    features: "Full 100% control, limited liability shield, nominee director mandate",
    audit: "Mandatory annual statutory audit",
  },
  {
    type: "Sole Proprietorship",
    bestFor: "Hyper-local retail shops, small freelance service providers",
    features: "Unregistered informal setup, zero MCA filing, 100% personal liability risk",
    audit: "Only if business turnover crosses income tax audit limits (₹1 Cr / ₹10 Cr)",
  },
];

const FAQS = [
  {
    q: "What is the very first step in starting a business in India?",
    a: "The first step is rigorous market research and idea validation—defining your core value proposition, assessing consumer demand, and selecting the legal corporate structure (such as a Private Limited Company or LLP) that aligns with your capital plans and risk tolerance.",
  },
  {
    q: "How much money do I need to start a Private Limited Company?",
    a: "Under current MCA regulations, there is no mandatory minimum paid-up capital requirement. You can start a Private Limited Company with any nominal capital (e.g., ₹1,000 to ₹10,000). The total cost typically consists of professional drafting fees, Class-3 DSC issuance, name reservation fees, and state-level stamp duty.",
  },
  {
    q: "Can I run my registered business from my residential home address?",
    a: "Yes. The Ministry of Corporate Affairs permits using a residential premises as the company's registered office address, provided you submit an electricity or utility bill less than two months old along with a No Objection Certificate (NOC) signed by the registered property owner.",
  },
  {
    q: "What is the difference between GST registration and Trade License?",
    a: "GST is a central/state indirect tax registration issued by the GST Council for the supply of goods and services across India. A Trade License is a local municipal permit issued by your city municipal corporation (e.g., BMC Mumbai, BBMP Bengaluru, GCC Chennai) verifying that your commercial activity conforms to local zoning, safety, and civic standards.",
  },
  {
    q: "How does the Startup India program help new businesses?",
    a: "Eligible startups recognized by the Department for Promotion of Industry and Internal Trade (DPIIT) access significant benefits: a 3-year 100% income tax exemption under Section 80-IAC, fast-track patent applications with an 80% rebate on statutory fees, self-certification under labor and environmental laws, and access to the Startup India Seed Fund Scheme (SISFS).",
  },
];

export default function StartABusinessInIndiaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <CompanyGuideLayout
      currentSlug="start-a-business-in-india-stepbystep-guide"
      title="How to Start a Business in India: A Step-by-Step Guide"
      breadcrumbLabel="How to Start a Business in India"
      metaPublishedDate="October 2026"
      readingTime="11 min read"
      authorName="Merrafilings Corporate Secretarial Desk"
    >
      {/* Lead Paragraph */}
      <div className="text-[15px] sm:text-base text-slate-800 leading-relaxed font-normal space-y-4">
        <p>
          Launching a successful venture in India combines boundless commercial opportunity with rigorous statutory execution. As one of the world&apos;s fastest-growing economies boasting a digital-first population of over 1.4 billion citizens, India offers unprecedented tailwinds for modern entrepreneurs across SaaS, fintech, manufacturing, consumer retail, and professional advisory sectors.
        </p>
        <p>
          However, transforming a creative concept into a resilient, legally sound, and profitable enterprise requires meticulous adherence to corporate incorporation laws, tax frameworks, and operational licensing. This step-by-step master guide outlines the complete 7-stage pathway to launching your venture in India cleanly, compliantly, and with institutional investor credibility.
        </p>
      </div>

      {/* Section 1: 7-Pillar Roadmap */}
      <section className="pt-4 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              01
            </span>
            The 7-Stage Master Roadmap to Launching Your Venture
          </h2>
          <p className="text-sm text-slate-600 mt-1.5 font-normal">
            A comprehensive, structured execution plan from market validation to compliant team building:
          </p>
        </div>

        <div className="space-y-4">
          {EXECUTION_PILLARS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl border border-slate-200/90 bg-white hover:border-emerald-300 hover:shadow-xs transition-all space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-lg bg-slate-900 text-emerald-400 font-bold text-xs flex items-center justify-center">
                      {item.step}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/70">
                      {item.phase}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-slate-500">
                    Action: {item.action}
                  </span>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-base font-bold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 2: Structure Summary Table */}
      <section className="pt-6 space-y-5 border-t border-slate-100">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              02
            </span>
            Selecting the Right Business Structure
          </h2>
          <p className="text-sm text-slate-600 mt-1.5 font-normal">
            Understand how entity structure dictates your corporate powers, founder liability, and compliance obligations:
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs">
          <table className="w-full text-left text-[12.5px] font-normal text-slate-900">
            <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Entity Structure</th>
                <th className="py-3 px-4">Best Suited For</th>
                <th className="py-3 px-4">Salient Legal Features</th>
                <th className="py-3 px-4">Annual Audit Mandate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {STRUCTURE_SUMMARY.map((st, i) => (
                <tr key={i} className="hover:bg-[#EDF8F3] transition-colors">
                  <td className="py-3 px-4 font-semibold text-slate-950">
                    {st.type}
                  </td>
                  <td className="py-3 px-4 text-slate-700">{st.bestFor}</td>
                  <td className="py-3 px-4 text-slate-700">{st.features}</td>
                  <td className="py-3 px-4 text-slate-700 font-medium">{st.audit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: Statutory Licensing Checklist */}
      <section className="pt-6 space-y-4 border-t border-slate-100">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              03
            </span>
            Mandatory Operating Licenses Checklist
          </h2>
          <p className="text-sm text-slate-600 mt-1.5 font-normal">
            Essential licenses and statutory certifications required before commencing customer billing:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div className="p-4 rounded-xl border border-slate-200/80 bg-white space-y-1">
            <span className="text-xs font-bold text-emerald-800 block">Goods &amp; Services Tax (GSTIN)</span>
            <p className="text-xs text-slate-700 font-normal leading-relaxed">
              Mandatory for inter-state sales, e-commerce, and turnovers exceeding ₹20L (services) or ₹40L (goods).
            </p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200/80 bg-white space-y-1">
            <span className="text-xs font-bold text-emerald-800 block">Shops &amp; Establishment License</span>
            <p className="text-xs text-slate-700 font-normal leading-relaxed">
              Mandatory state municipal registration regulating office operating hours, leaves, and employee workplace safety.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200/80 bg-white space-y-1">
            <span className="text-xs font-bold text-emerald-800 block">MSME Udyam Registration</span>
            <p className="text-xs text-slate-700 font-normal leading-relaxed">
              Free central government credential unlocking priority bank lending, lower patent filing fees, and interest rebates.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200/80 bg-white space-y-1">
            <span className="text-xs font-bold text-emerald-800 block">Import Export Code (IEC)</span>
            <p className="text-xs text-slate-700 font-normal leading-relaxed">
              10-digit DGFT code mandatory for cross-border export of goods or receiving foreign inward remittances for services.
            </p>
          </div>
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
            Practical answers to vital legal, procedural, and compliance inquiries:
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
