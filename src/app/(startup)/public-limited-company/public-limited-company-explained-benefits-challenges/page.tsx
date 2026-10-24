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
} from "lucide-react";

const CHARACTERISTICS = [
  {
    icon: Users2,
    title: "Minimum 7 Shareholders & No Upper Limit",
    desc: "Requires a minimum of 7 subscribers to incorporate. Unlike a Private Limited company (capped at 200 members), there is no statutory limit on the maximum number of shareholders.",
  },
  {
    icon: Landmark,
    title: "Minimum 3 Directors & Independent Board",
    desc: "Must appoint at least 3 directors, with at least one resident Indian director. Listed public companies must also appoint independent and female directors.",
  },
  {
    icon: Coins,
    title: "Public Capital & Uncapped Equity Raising",
    desc: "Legally permitted to issue a prospectus, invite public subscriptions, accept public deposits, and float an Initial Public Offering (IPO) on stock exchanges.",
  },
  {
    icon: ShieldCheck,
    title: "Limited Liability & Freely Transferable Shares",
    desc: "Shareholders' personal assets are 100% insulated from corporate liabilities. Equity shares are freely transferable without requiring approval from the board of directors.",
  },
];

const COMPARISON_TABLE = [
  {
    feature: "Minimum Members",
    publicLtd: "7 Shareholders",
    pvtLtd: "2 Shareholders",
  },
  {
    feature: "Maximum Members",
    publicLtd: "Unlimited (No statutory ceiling)",
    pvtLtd: "200 Members",
  },
  {
    feature: "Minimum Directors",
    publicLtd: "3 Directors",
    pvtLtd: "2 Directors",
  },
  {
    feature: "Public Invitation for Capital",
    publicLtd: "Permitted via Prospectus / IPO / Rights Issue",
    pvtLtd: "Strictly Prohibited by law",
  },
  {
    feature: "Transferability of Shares",
    publicLtd: "Freely transferable (No board restrictions)",
    pvtLtd: "Restricted as per Articles of Association (AoA)",
  },
  {
    feature: "Dematerialization (ISIN)",
    publicLtd: "Mandatory Demat via NSDL / CDSL",
    pvtLtd: "Mandatory only for non-small private companies",
  },
  {
    feature: "Statutory Quorum for AGM",
    publicLtd: "5 to 30 members depending on member base",
    pvtLtd: "2 members personally present",
  },
  {
    feature: "Name Suffix",
    publicLtd: 'Must end with "Limited"',
    pvtLtd: 'Must end with "Private Limited"',
  },
];

const CHALLENGES = [
  {
    title: "Rigorous Regulatory Oversight",
    desc: "Subject to stringent MCA, ROC, and SEBI compliance audits, quarterly disclosures, and mandatory secretarial audits under Section 204.",
  },
  {
    title: "Operational Transparency & Public Scrutiny",
    desc: "Financial balance sheets, executive remuneration, and board meeting resolutions become public records accessible on the MCA portal.",
  },
  {
    title: "Higher Compliance & Administrative Costs",
    desc: "Dematerialization maintenance, statutory auditor fees, internal audit committees, and corporate governance protocols require structured budgets.",
  },
  {
    title: "Market Volatility & Shareholder Accountability",
    desc: "Corporate performance and strategic decisions face continuous scrutiny from retail investors, institutional funds, and proxy advisors.",
  },
];

const FAQS = [
  {
    q: "What is a Public Limited Company under the Companies Act, 2013?",
    a: "Under Section 2(71) of the Indian Companies Act, 2013, a Public Limited Company is a corporate entity that is not a private company, has a minimum of 7 members, 3 directors, and possesses freely transferable shares with the statutory right to raise equity capital from the public.",
  },
  {
    q: "Is there a minimum paid-up share capital requirement for a Public Limited Company?",
    a: "No. The Companies (Amendment) Act, 2015 removed the earlier requirement of ₹5,00,000 minimum paid-up capital. Today, a public company can be incorporated with any nominal authorized capital based on the business requirements.",
  },
  {
    q: "Can an existing Private Limited Company convert into a Public Limited Company?",
    a: "Yes. Under Section 14 of the Companies Act, 2013, a Private Limited company can convert into a Public Limited company by increasing its members to 7, directors to 3, passing a special resolution in an Extraordinary General Meeting (EGM), altering its MoA/AoA, and filing Form INC-27 with the ROC.",
  },
  {
    q: "What is the mandatory dematerialization requirement for unlisted public companies?",
    a: "Under Rule 9A of the Companies (Prospectus and Allotment of Securities) Rules, 2014, every unlisted public company must issue securities only in dematerialized format and facilitate the dematerialization of all existing securities through depositories (NSDL and CDSL).",
  },
  {
    q: "Can a foreign national or NRI be a director in an Indian Public Limited Company?",
    a: "Yes. Foreign nationals and NRIs can serve as directors provided they obtain a Director Identification Number (DIN) and a Class-3 Digital Signature Certificate. However, at least one director on the board must be a resident of India.",
  },
];

export default function PublicLimitedCompanyExplainedBenefitsChallengesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PublicLimitedGuideLayout
      currentSlug="public-limited-company-explained-benefits-challenges"
      title="What is a Public Limited Company?"
      breadcrumbLabel="What is a Public Limited Company?"
      metaPublishedDate="October 2026"
      readingTime="11 min read"
      authorName="Merrafilings Corporate Advisory Desk"
    >
      {/* Lead Narrative */}
      <div className="text-[15px] sm:text-base text-slate-800 leading-relaxed font-normal space-y-4">
        <p>
          In the arena of corporate enterprise, the <strong className="font-semibold text-slate-950">Public Limited Company (PLC)</strong> represents the pinnacle of institutional scale, capital accessibility, and commercial prestige. Governed under the <strong className="font-semibold text-slate-950">Companies Act, 2013</strong>, this structure provides businesses with the legal mandate to raise substantial capital from the public, issue freely transferable equity shares, and eventually list on premier stock exchanges like the NSE and BSE.
        </p>
        <p>
          While the opportunities for exponential expansion and institutional credibility are boundless, operating a public company demands meticulous adherence to corporate governance, transparency, and statutory disclosures. This definitive guide explores the foundational anatomy, strategic benefits, operational challenges, and regulatory landscape of Public Limited Companies in India.
        </p>
      </div>

      {/* Section 1: Core Characteristics */}
      <section className="pt-4 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              01
            </span>
            Defining Characteristics of a Public Limited Company
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            The legal pillars that distinguish a Public Limited Company from all other business structures.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CHARACTERISTICS.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl border border-slate-200/90 bg-white hover:border-emerald-300 hover:shadow-xs transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">{c.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{c.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 2: Key Advantages */}
      <section className="pt-6 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              02
            </span>
            Strategic Advantages of Choosing a Public Limited Structure
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Why ambitious founders and conglomerate ventures establish or convert to a public entity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">Uncapped Capital Raising</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Tap into vast institutional funds, private equity, venture debt, and public retail subscriptions via IPOs.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">Market Prestige &amp; Trust</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Elevates brand standing with global vendors, financial institutions, banking partners, and high-caliber executives.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
              <Coins className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">Stock Liquidity &amp; M&amp;A</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Dematerialized shares provide instant liquidity for promoters and serve as strategic currency for mergers and acquisitions.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Public vs Private Limited Table */}
      <section className="pt-6 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              03
            </span>
            Public Limited Company vs. Private Limited Company
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            A side-by-side legal comparison under the provisions of the Companies Act, 2013.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
          <table className="w-full text-left text-xs border-collapse min-w-[580px]">
            <thead>
              <tr className="bg-slate-100/80 border-b border-slate-200 text-slate-900 font-semibold">
                <th className="p-3 w-1/3">Corporate Parameter</th>
                <th className="p-3 w-1/3 text-emerald-800 bg-emerald-50/50">Public Limited Company</th>
                <th className="p-3 w-1/3">Private Limited Company</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              {COMPARISON_TABLE.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/40"}>
                  <td className="p-3 font-semibold text-slate-900">{row.feature}</td>
                  <td className="p-3 bg-emerald-50/30 font-medium text-emerald-950">{row.publicLtd}</td>
                  <td className="p-3">{row.pvtLtd}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4: Operational Challenges */}
      <section className="pt-6 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              04
            </span>
            Operational Challenges &amp; Regulatory Complexities
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Critical responsibilities and governance obligations to manage effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CHALLENGES.map((ch, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-white">
              <h3 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                {ch.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">{ch.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: FAQs */}
      <section className="pt-6 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <HelpCircle className="w-6 h-6 text-emerald-600" />
            Frequently Asked Questions (FAQs)
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Expert answers regarding public incorporation, capital norms, Demat, and foreign directorships.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-white overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-4 text-left font-semibold text-slate-900 text-sm hover:text-emerald-700 transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 text-slate-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-emerald-600" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 6: CTA */}
      <section className="pt-8 pb-4">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-950 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              Corporate Capital Formation
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Incorporate Your Public Limited Company with Merrafilings
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Navigate MCA V3 SPICe+ filing, 3 Director DINs, custom e-MOA &amp; e-AOA drafting, and mandatory NSDL/CDSL Demat ISIN admission with India's leading corporate CA and CS advisory.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/public-limited-company"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 text-xs sm:text-sm font-bold hover:bg-emerald-400 transition-colors shadow-md"
              >
                Incorporate Public Company
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold border border-white/20 transition-colors"
              >
                Consult a Corporate Lawyer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PublicLimitedGuideLayout>
  );
}
