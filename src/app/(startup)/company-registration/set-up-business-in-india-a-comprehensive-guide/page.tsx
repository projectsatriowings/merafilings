"use client";

import React, { useState } from "react";
import Link from "next/link";
import CompanyGuideLayout from "@/components/CompanyGuideLayout";
import {
  Building2,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Landmark,
  FileText,
  DollarSign,
  Receipt,
  Scale,
  Sparkles,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Globe2,
  Award,
  Layers,
  Zap,
  Briefcase,
  Users2,
} from "lucide-react";

const MACRO_DRIVERS = [
  {
    title: "World's Fastest-Growing Major Economy",
    desc: "With consistent GDP expansion above 6-7%, a demographic dividend of 1.4+ billion citizens, and a burgeoning middle class, India represents the single largest open consumer and enterprise market in the developing world.",
    stat: "6.8%+ GDP Growth",
    badge: "Macro Advantage",
  },
  {
    title: "Pro-Business Regulatory Initiatives",
    desc: "Government flagship programs like 'Make in India', Production-Linked Incentives (PLI), the National Single Window System (NSWS), and MCA SPICe+ integrated forms have dismantled legacy bureaucratic red tape.",
    stat: "100+ PLI Sectors",
    badge: "Policy Support",
  },
  {
    title: "World-Class Digital Public Infrastructure",
    desc: "India's digital backbone—the India Stack (UPI, Aadhaar e-KYC, DigiLocker, Account Aggregator)—enables paperless customer onboarding, instant B2B settlements, and frictionless digital commerce at zero latency.",
    stat: "14B+ Monthly UPI Vol",
    badge: "Fintech Scale",
  },
  {
    title: "Abundant High-Skill Technical Talent",
    desc: "India graduates over 1.5 million engineers and STEM professionals annually, offering global technology firms, SaaS ventures, and R&D centers cost-effective, world-class engineering and management talent.",
    stat: "1.5M+ STEM Grads/Yr",
    badge: "Human Capital",
  },
];

const SETUP_STAGES = [
  {
    stage: "Stage 01",
    title: "Define Your Corporate Entity Structure",
    desc: "Evaluate regulatory requirements and liability parameters to choose the ideal legal form: Private Limited Company (gold standard for scale & venture funding), Public Limited Company (for large public capital mobilization), LLP (for consulting & professional partnerships), or Indian Subsidiary (for foreign parents).",
    tag: "Entity Selection",
  },
  {
    stage: "Stage 02",
    title: "Obtain Digital Signatures (DSC) & Director Identification (DIN)",
    desc: "Procure Class 3 Digital Signature Certificates with cryptographic USB tokens for all proposed directors and designated partners. Apply for Director Identification Numbers (DIN) directly integrated within MCA SPICe+ Part B.",
    tag: "Digital Identity",
  },
  {
    stage: "Stage 03",
    title: "Reserve Corporate Name via MCA RUN / SPICe+ Part A",
    desc: "Submit up to two unique, compliant name choices on the MCA V3 portal. Ensure the name adheres to Rule 8 of the Companies (Incorporation) Rules, 2014, and is not identical or deceptively similar to any existing entity or registered trademark.",
    tag: "Name Reservation",
  },
  {
    stage: "Stage 04",
    title: "File SPICe+ Integrated Incorporation with MCA CRC",
    desc: "Submit Form SPICe+ Part B alongside electronic Memorandum of Association (Form INC-33), electronic Articles of Association (Form INC-34), AGILE-PRO-S (for GST, EPFO, ESIC, Professional Tax, and Corporate Bank Account), and INC-9 declarations.",
    tag: "CRC Incorporation",
  },
  {
    stage: "Stage 05",
    title: "Tax Registrations & Statutory Licensing",
    desc: "Secure permanent Corporate Identity Number (CIN), Company PAN, and TAN. Complete Goods and Services Tax (GSTIN) registration, state-level Shops and Commercial Establishments Act license, and industry-specific certifications (FSSAI, MSME Udyam, RERA).",
    tag: "Tax & Licensing",
  },
  {
    stage: "Stage 06",
    title: "Bank Account Opening & Commencement Filing (INC-20A)",
    desc: "Open your operational current account with an integrated scheduled commercial bank. Deposit the subscribed share capital into the corporate bank account within 180 days and file Form INC-20A with bank statements to commence commercial operations legally.",
    tag: "Business Launch",
  },
];

const FUNDING_AVENUES = [
  {
    type: "Venture Capital & Private Equity",
    desc: "Tier-1 institutional funds (Sequoia, Accel, Peak XV, Matrix) and domestic VC funds look for scalable Private Limited Companies in SaaS, AI, fintech, healthcare, and consumer internet. Requires audited balance sheets and clean cap tables.",
    badge: "High Growth",
    color: "emerald",
  },
  {
    type: "Angel Networks & Early-Stage Syndicates",
    desc: "Platforms like Indian Angel Network (IAN), Mumbai Angels, and AngelList India invest between ₹25 Lakhs to ₹5 Crores in pre-seed and seed rounds via convertible instruments (CCPS or CCDs).",
    badge: "Seed Stage",
    color: "blue",
  },
  {
    type: "Government Schemes & Startup Grants",
    desc: "The Startup India Seed Fund Scheme (SISFS) provides grants up to ₹20 Lakhs for proof-of-concept and debt up to ₹50 Lakhs for commercialization. The CGTMSE scheme extends collateral-free loans up to ₹5 Crores.",
    badge: "Non-Dilutive",
    color: "purple",
  },
  {
    type: "Commercial Bank Lines of Credit",
    desc: "Public and private sector commercial banks (HDFC, ICICI, SBI) extend working capital facilities, overdrafts, Letter of Credit (LC), and Bank Guarantees (BG) against cash flows and movable assets.",
    badge: "Debt Capital",
    color: "teal",
  },
];

const FAQS = [
  {
    q: "Can a foreign national or NRI set up a business in India?",
    a: "Yes. Foreign nationals and Non-Resident Indians (NRIs) can establish an Indian business entity (as a Private Limited Company or Wholly Owned Subsidiary). Under the Foreign Exchange Management Act (FEMA) and FDI policy, 100% Foreign Direct Investment is permitted under the Automatic Route across most sectors without prior RBI or government approval, provided at least one director is an Indian resident.",
  },
  {
    q: "What is the corporate tax rate for companies in India?",
    a: "Under Section 115BAA of the Income Tax Act, 1961, domestic Indian companies can opt for a flat corporate tax rate of 22% (effective tax rate of 25.17% inclusive of surcharge and cess), with exemption from Minimum Alternate Tax (MAT). New manufacturing companies incorporated before statutory deadlines can access a 15% base tax rate under Section 115BAB.",
  },
  {
    q: "Is GST registration mandatory immediately upon incorporation?",
    a: "GST registration is mandatory if: (1) Aggregate annual turnover exceeds ₹40 Lakhs for suppliers of goods (₹20 Lakhs in special category states) or ₹20 Lakhs for service providers; (2) You engage in inter-state supply of goods; (3) You operate via e-commerce marketplaces; or (4) You import/export services. Startups frequently register voluntarily to claim input tax credit (ITC) on initial capital expenses.",
  },
  {
    q: "What are the mandatory annual compliances for a company in India?",
    a: "Every incorporated company must complete: (1) Appointment of statutory auditor via Form ADT-1 within 30 days; (2) Filing Certificate of Commencement of Business (INC-20A) within 180 days; (3) Annual ROC return via Form MGT-7/7A; (4) Financial statements filing via Form AOC-4; (5) Annual Director KYC (DIR-3 KYC); and (6) Corporate Income Tax Return (ITR-6) accompanied by a mandatory Tax Audit Report.",
  },
  {
    q: "What is the minimum capital required to start a company in India?",
    a: "Under the Companies (Amendment) Act, the previous minimum paid-up capital requirement of ₹1,00,000 was abolished. You can incorporate a Private Limited Company with zero minimum capital—starting with nominal authorized capital of ₹1,000 or ₹10,000.",
  },
];

export default function SetUpBusinessInIndiaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <CompanyGuideLayout
      currentSlug="set-up-business-in-india-a-comprehensive-guide"
      title="Setting Up a Business in India: A Comprehensive Guide"
      breadcrumbLabel="Setting Up a Business in India"
      metaPublishedDate="October 2026"
      readingTime="10 min read"
      authorName="Merrafilings Corporate Secretarial Desk"
    >
      {/* Lead Paragraph */}
      <div className="text-[15px] sm:text-base text-slate-800 leading-relaxed font-normal space-y-4">
        <p>
          India has cemented its reputation as one of the world&apos;s most dynamic and lucrative destinations for business establishment, corporate expansion, and venture capital investment. Anchored by a fast-growing gross domestic product, business-friendly government policies like <strong className="font-semibold text-slate-950">&apos;Make in India&apos;</strong>, and unparalleled digital infrastructure, the subcontinent provides a fertile launchpad for domestic innovators and multinational enterprises alike.
        </p>
        <p>
          However, successfully establishing and scaling a commercial enterprise in India requires navigating a multi-layered regulatory architecture governed by the <strong className="font-semibold text-slate-950">Companies Act, 2013</strong>, the <strong className="font-semibold text-slate-950">Foreign Exchange Management Act (FEMA)</strong>, and the Goods and Services Tax (GST) regime. This comprehensive guide provides an end-to-end strategic roadmap for launching your business in India with structural clarity and absolute legal compliance.
        </p>
      </div>

      {/* Section 1: Macro Drivers */}
      <section className="pt-4 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              01
            </span>
            Compelling Catalysts to Set Up Business in India
          </h2>
          <p className="text-sm text-slate-600 mt-1.5 font-normal">
            Key macroeconomic drivers attracting domestic founders and global corporations:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {MACRO_DRIVERS.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-slate-200/90 bg-white hover:border-emerald-300 hover:shadow-xs transition-all space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold uppercase tracking-wider border border-emerald-200/70">
                  {item.badge}
                </span>
                <span className="text-xs font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded-md">
                  {item.stat}
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Six Steps of Establishment */}
      <section className="pt-6 space-y-6 border-t border-slate-100">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              02
            </span>
            The 6-Stage Process to Establish a Business in India
          </h2>
          <p className="text-sm text-slate-600 mt-1.5 font-normal">
            A chronological, statutory breakdown of the incorporation workflow from entity selection to commercial commencement:
          </p>
        </div>

        <div className="space-y-3.5">
          {SETUP_STAGES.map((st, i) => (
            <div
              key={i}
              className="p-5 rounded-xl border border-slate-200/80 bg-white hover:border-emerald-300 hover:shadow-xs transition-all flex flex-col sm:flex-row items-start gap-4"
            >
              <div className="flex items-center sm:flex-col justify-between w-full sm:w-28 shrink-0">
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/70">
                  {st.stage}
                </span>
                <span className="text-[11px] font-semibold text-slate-500 mt-1">
                  {st.tag}
                </span>
              </div>
              <div className="space-y-1 flex-1">
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  {st.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Funding Landscape */}
      <section className="pt-6 space-y-5 border-t border-slate-100">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              03
            </span>
            Navigating Financing &amp; Capital Avenues in India
          </h2>
          <p className="text-sm text-slate-600 mt-1.5 font-normal">
            Evaluate optimal capital sources tailored to your growth phase and corporate model:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {FUNDING_AVENUES.map((fund, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-slate-200/90 bg-[#FAF9F7]/70 space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900">
                  {fund.type}
                </span>
                <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[11px] font-semibold text-emerald-700">
                  {fund.badge}
                </span>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
                {fund.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Taxation & Compliance Overview */}
      <section className="pt-6 space-y-5 border-t border-slate-100">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              04
            </span>
            Direct &amp; Indirect Tax Structure Overview
          </h2>
          <p className="text-sm text-slate-600 mt-1.5 font-normal">
            Summary of statutory tax obligations applicable to corporate enterprises in India:
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs">
          <table className="w-full text-left text-[12.5px] font-normal text-slate-900">
            <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Tax Head</th>
                <th className="py-3 px-4 text-[#00A86B]">Prescribed Statutory Rate</th>
                <th className="py-3 px-4">Key Legal Provisions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-[#EDF8F3] transition-colors">
                <td className="py-3 px-4 font-medium text-slate-900">Corporate Income Tax (Domestic)</td>
                <td className="py-3 px-4 font-semibold text-[#00A86B]">22% (Effective 25.17%)</td>
                <td className="py-3 px-4 text-slate-700">Section 115BAA; exempt from Minimum Alternate Tax (MAT)</td>
              </tr>
              <tr className="hover:bg-[#EDF8F3] transition-colors">
                <td className="py-3 px-4 font-medium text-slate-900">New Manufacturing Corporate Tax</td>
                <td className="py-3 px-4 font-semibold text-[#00A86B]">15% (Effective 17.16%)</td>
                <td className="py-3 px-4 text-slate-700">Section 115BAB for eligible manufacturing entities</td>
              </tr>
              <tr className="hover:bg-[#EDF8F3] transition-colors">
                <td className="py-3 px-4 font-medium text-slate-900">Goods &amp; Services Tax (GST)</td>
                <td className="py-3 px-4 font-semibold text-[#00A86B]">0%, 5%, 12%, 18%, 28%</td>
                <td className="py-3 px-4 text-slate-700">18% standard for business services &amp; software SaaS; full ITC</td>
              </tr>
              <tr className="hover:bg-[#EDF8F3] transition-colors">
                <td className="py-3 px-4 font-medium text-slate-900">Withholding Tax (TDS)</td>
                <td className="py-3 px-4 font-semibold text-[#00A86B]">1% - 10% (Domestic) / Sec 195 (Foreign)</td>
                <td className="py-3 px-4 text-slate-700">Deducted on contractor, rent, professional fee, and foreign remittances</td>
              </tr>
              <tr className="hover:bg-[#EDF8F3] transition-colors">
                <td className="py-3 px-4 font-medium text-slate-900">Dividend Distribution</td>
                <td className="py-3 px-4 font-semibold text-[#00A86B]">Taxable in hands of recipient</td>
                <td className="py-3 px-4 text-slate-700">10% domestic TDS; DTAA treaty rates (5%-15%) for foreign parents</td>
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
            Essential answers on establishing a commercial enterprise in India:
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
