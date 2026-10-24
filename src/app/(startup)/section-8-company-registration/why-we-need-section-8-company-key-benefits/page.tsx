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
  Briefcase,
  Target,
} from "lucide-react";

const SOCIETAL_IMPERATIVES = [
  {
    title: "Institutional Scale for Complex Social Challenges",
    desc: "Addressing endemic socioeconomic challenges—such as educational inequality, rural healthcare deficits, environmental degradation, and clean water access—requires formal institutional capacity, long-term capital planning, and corporate management systems.",
    badge: "Systemic Impact",
  },
  {
    title: "The Linchpin of Corporate Social Responsibility (CSR)",
    desc: "Under Section 135 of the Companies Act, 2013, eligible Indian corporations must allocate 2% of average net profits to CSR activities. Section 8 companies, holding Form CSR-1 registrations, serve as the most credible, audited implementation partners.",
    badge: "CSR Ecosystem",
  },
  {
    title: "Uncompromising Transparency & Public Accountability",
    desc: "Unlike private family trusts, all Section 8 financial statements, balance sheets, and director filings are publicly accessible on the MCA V3 portal. This radical transparency guarantees that donor funds are deployed exclusively for stated causes.",
    badge: "Public Audit Trail",
  },
  {
    title: "Attracting Elite Professional & Executive Talent",
    desc: "Modern non-profits require data scientists, corporate fundraisers, financial controllers, and seasoned managers. The corporate structure of Section 8 allows professional compensation, clear organizational hierarchies, and performance frameworks.",
    badge: "Human Capital",
  },
];

const ADVANTAGES_OVER_MODELS = [
  {
    feature: "Centralized Federal Legal Status",
    section8: "Incorporated under central Companies Act, 2013 with pan-India validity",
    trust: "Governed under state-level Indian Trusts Act, 1882 with local registrar limits",
    society: "Governed by state Societies Registration Acts with fragmented jurisdiction",
  },
  {
    feature: "Democratic Member Governance",
    section8: "Democratic member voting rights; no personal or dynastic ownership",
    trust: "Often dominated by hereditary or lifelong trustees without term limits",
    society: "Governing body elected, but vulnerable to regional political factions",
  },
  {
    feature: "Institutional Funding & Global Grants",
    section8: "First-tier preference for CSR grants, bilateral funding, and FCRA approval",
    trust: "Lower institutional trust; scrutinized heavily by corporate CSR boards",
    society: "Moderate eligibility; frequently faces operational delays in funding",
  },
  {
    feature: "Statutory Reporting & ROC Filings",
    section8: "Mandatory annual filing of Form AOC-4, MGT-7, and CA statutory audit",
    trust: "Minimal or zero public reporting; private accounting oversight",
    society: "State registrar filings; variable enforcement across jurisdictions",
  },
];

const SUSTAINABILITY_PILLARS = [
  {
    title: "Corporate CSR Partnerships",
    desc: "Formulate programmatic multi-year CSR proposals for blue-chip corporations and PSUs to secure predictable project funding under Schedule VII of the Companies Act.",
  },
  {
    title: "Section 80G Retail Philanthropy",
    desc: "Mobilize high-volume individual donor campaigns by offering instant 50% income tax deduction certificates under Section 80G.",
  },
  {
    title: "Self-Sustaining Programmatic Revenue",
    desc: "Charge nominal, cost-recovery fees for educational publications, vocational certifications, diagnostic healthcare tests, and community training programs.",
  },
  {
    title: "Multilateral & Bilateral Grants",
    desc: "Obtain Foreign Contribution Regulation Act (FCRA) registration to receive international development grants from global foundations and UN agencies.",
  },
];

const FAQS = [
  {
    q: "Why is a Section 8 Company considered essential in modern India?",
    a: "Modern social challenges require institutional professionalism, multi-crore budgeting, and rigorous public auditing. A Section 8 Company provides the legal architecture needed to bridge corporate CSR funds, government welfare policies, and grassroots implementation with zero conflict of interest.",
  },
  {
    q: "Can a Section 8 Company receive international donations from abroad?",
    a: "Yes. To legally receive foreign donations and grants from international individuals, trusts, or agencies, a Section 8 Company must apply for and obtain prior permission or permanent registration under the Foreign Contribution Regulation Act (FCRA) from the Ministry of Home Affairs (MHA).",
  },
  {
    q: "What is the role of Form CSR-1 in Section 8 funding?",
    a: "Form CSR-1 is the electronic registration form filed on the MCA portal by non-profit entities seeking to undertake CSR activities funded by corporate entities. Upon approval, the MCA generates a unique CSR Registration Number, certifying the entity as eligible to receive corporate CSR grants under Section 135.",
  },
  {
    q: "Can an existing Trust or Society convert into a Section 8 Company?",
    a: "Yes. An existing registered society or charitable trust can be converted or registered as a Section 8 Company under Chapter XXI of the Companies Act, 2013, by satisfying member consent requirements, drafting compliant MoA/AoA, and obtaining a fresh Section 8 license.",
  },
  {
    q: "Are Section 8 companies required to hold Annual General Meetings (AGMs)?",
    a: "Yes. Under Section 96 of the Companies Act, every Section 8 Company must hold an Annual General Meeting of its members within six months from the close of the financial year to adopt audited financial statements, approve annual reports, and appoint auditors.",
  },
];

export default function WhyWeNeedSection8CompanyKeyBenefitsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Section8GuideLayout
      currentSlug="why-we-need-section-8-company-key-benefits"
      title="Understanding Why We Need Section 8 Company"
      breadcrumbLabel="Why We Need Section 8 Company"
      metaPublishedDate="October 2026"
      readingTime="11 min read"
      authorName="Merrafilings Non-Profit Advisory Desk"
    >
      {/* Lead Paragraph */}
      <div className="text-[15px] sm:text-base text-slate-800 leading-relaxed font-normal space-y-4">
        <p>
          In the rapidly evolving socioeconomic landscape of modern India, addressing complex challenges—such as educational disparity, public healthcare access, environmental sustainability, and rural poverty—demands structured, institutional, and transparent non-profit frameworks. Among the various legal structures available, the <strong className="font-semibold text-slate-950">Section 8 Company</strong> holds an indispensable position.
        </p>
        <p>
          Regulated under the <strong className="font-semibold text-slate-950">Companies Act, 2013</strong>, a Section 8 Company bridges the gap between commercial corporate rigor and grassroots social welfare. By prohibiting dividend distributions and mandating 100% reinvestment of surpluses, it establishes the ultimate benchmark for accountability, making it the preferred vehicle for corporate CSR funds, international philanthropic agencies, and transformative social leaders.
        </p>
      </div>

      {/* Section 1: Societal Imperatives */}
      <section className="pt-4 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              01
            </span>
            Why Section 8 Companies Are Indispensable Today
          </h2>
          <p className="text-sm text-slate-600 mt-1.5 font-normal">
            Strategic factors compelling modern founders to establish Section 8 corporate non-profits:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SOCIETAL_IMPERATIVES.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-slate-200/90 bg-white hover:border-emerald-300 hover:shadow-xs transition-all space-y-2"
            >
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold uppercase tracking-wider border border-emerald-200/70">
                {item.badge}
              </span>
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

      {/* Section 2: Comparative Table */}
      <section className="pt-6 space-y-5 border-t border-slate-100">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              02
            </span>
            Section 8 Company vs. Traditional Trusts &amp; Societies
          </h2>
          <p className="text-sm text-slate-600 mt-1.5 font-normal">
            Detailed parameter comparison demonstrating Section 8 superiority for institutional philanthropy:
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200/90 shadow-2xs">
          <table className="w-full text-left text-[12.5px] font-normal text-slate-900">
            <thead className="bg-[#FAF9F7] text-slate-800 text-[12.5px] font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Evaluation Dimension</th>
                <th className="py-3 px-4 text-[#00A86B]">Section 8 Company</th>
                <th className="py-3 px-4">Charitable Trust</th>
                <th className="py-3 px-4">Registered Society</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {ADVANTAGES_OVER_MODELS.map((row, i) => (
                <tr key={i} className="hover:bg-[#EDF8F3] transition-colors">
                  <td className="py-3 px-4 font-semibold text-slate-950">{row.feature}</td>
                  <td className="py-3 px-4 font-semibold text-[#00A86B]">{row.section8}</td>
                  <td className="py-3 px-4 text-slate-700">{row.trust}</td>
                  <td className="py-3 px-4 text-slate-700">{row.society}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: Financial Sustainability Pillars */}
      <section className="pt-6 space-y-5 border-t border-slate-100">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              03
            </span>
            Building Sustainable Long-Term Revenue Streams
          </h2>
          <p className="text-sm text-slate-600 mt-1.5 font-normal">
            How a Section 8 non-profit structures diverse capital channels for perpetual mission impact:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SUSTAINABILITY_PILLARS.map((p, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-slate-200/90 bg-[#FAF9F7]/70 space-y-1.5"
            >
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{p.title}</span>
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
                {p.desc}
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
            Key insights on why non-profit leaders establish Section 8 companies:
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
