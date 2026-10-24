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
  ExternalLink,
} from "lucide-react";

const CHARACTERISTICS = [
  {
    icon: Users2,
    title: "Broad Public Shareholding Base",
    desc: "Equity shares are offered to retail, HNI, and institutional investors without any statutory ceiling on the maximum number of shareholders, democratizing enterprise ownership.",
  },
  {
    icon: Landmark,
    title: "Governed by a Professional Board",
    desc: "A statutory minimum of 3 directors directs operations, establishes corporate governance policies, and safeguards shareholder value with independent oversight.",
  },
  {
    icon: ShieldCheck,
    title: "Rigid Limited Liability Shield",
    desc: "Shareholder financial exposure is strictly confined to the unpaid nominal value of their subscribed shares, shielding personal assets against corporate insolvency.",
  },
  {
    icon: Coins,
    title: "Authorized & Paid-up Share Capital",
    desc: "Enables flexible equity structures, including equity shares with differential voting rights (DVRs) and preference shares structured for massive capital projects.",
  },
  {
    icon: Scale,
    title: "Comprehensive Statutory Transparency",
    desc: "Subject to mandatory public disclosure of audited balance sheets, P&L accounts, board reports, and key managerial remuneration on the MCA portal.",
  },
];

const ADVANTAGES = [
  {
    step: "01",
    title: "Unmatched Access to Capital Markets",
    desc: "Unlike private entities constrained to debt or restricted private placements, a Public Limited Company can mobilize funds through public issues, IPOs, Qualified Institutional Placements (QIP), and rights issues.",
    benefit: "Accelerates multi-hundred-crore expansion, global M&A, and high-capex R&D projects.",
  },
  {
    step: "02",
    title: "Enhanced Institutional Credibility",
    desc: "Publicly scrutinized financial accounts and regulatory disclosures provide financial institutions, government tenders, global vendors, and institutional lenders superior trust and creditworthiness.",
    benefit: "Secures lower interest rates, higher credit ratings, and eligibility for mega public-sector bids.",
  },
  {
    step: "03",
    title: "Supreme Liquidity for Shareholders",
    desc: "Shares can be bought and sold freely without requiring board consent. Listing on major bourses (BSE & NSE) provides instantaneous valuation, secondary market liquidity, and transparent exits.",
    benefit: "Attracts top-tier talent via liquid Employee Stock Option Plans (ESOPs) and angel/VC exits.",
  },
  {
    step: "04",
    title: "Perpetual Succession & Brand Longevity",
    desc: "The existence of the company remains completely unaffected by changes in directors or the death, insolvency, or retirement of any shareholder, ensuring generational corporate continuity.",
    benefit: "Maintains uninterrupted commercial contracts, intellectual property rights, and operations.",
  },
];

const FORMATION_STEPS = [
  {
    num: "1",
    title: "Drafting MoA & AoA with Public Clauses",
    desc: "Formulating the Memorandum of Association (defining core and ancillary business objectives) and Articles of Association (ensuring free share transferability and regulatory compliance under the Companies Act 2013).",
  },
  {
    num: "2",
    title: "Capital Structure Allocation & Allotment",
    desc: "Establishing the authorized share capital structure, issuing subscription commitments among at least 7 founding subscribers, and structuring distinct share classes.",
  },
  {
    num: "3",
    title: "ROC Disclosure & Filing Compliance",
    desc: "Filing comprehensive director KYC, registered office documentation, consent letters (DIR-2), declarations (INC-9), and statutory disclosures through the MCA SPICe+ digital portal.",
  },
  {
    num: "4",
    title: "ISIN Admission & Optional IPO Listing",
    desc: "Securing mandatory International Securities Identification Numbers (ISIN) via NSDL/CDSL for share dematerialization, followed by SEBI-compliant IPO roadmaps for public stock exchange listing.",
  },
];

const CURRENT_TRENDS = [
  {
    icon: Leaf,
    title: "Emphasis on ESG & Sustainable Governance",
    desc: "Investors, mutual funds, and global asset managers prioritize companies adhering to robust Environmental, Social, and Governance (ESG) criteria. Under SEBI's Business Responsibility and Sustainability Reporting (BRSR) framework, public companies must substantiate environmental impact, workplace diversity, and carbon-reduction targets.",
  },
  {
    icon: Scale,
    title: "MCA V3 Regulatory Reforms & Stricter Audits",
    desc: "The transition to the MCA21 Version 3 portal enforces rigorous real-time validation, automatic tax data cross-checks, and mandatory audit trail (edit log) features in accounting software. Public enterprises must maintain uncompromising compliance to avoid penal actions.",
  },
  {
    icon: Cpu,
    title: "Digital Integration & Demat Mandates",
    desc: "All public limited companies (listed and unlisted) are mandated to issue and transfer securities solely in dematerialized form via NSDL/CDSL depositories. Board meetings and shareholder votes now widely integrate secure electronic voting (e-voting) and cloud governance platforms.",
  },
];

const FAQS = [
  {
    q: "What is the primary difference between a Public and a Private Limited Company?",
    a: "A Public Limited Company requires a minimum of 7 shareholders (with no upper limit) and 3 directors, and can invite the public to subscribe to its shares. A Private Limited Company is restricted to a maximum of 200 members, cannot invite the public for deposits or shares, and restricts share transferability.",
  },
  {
    q: "Can an unlisted Public Limited Company issue shares to the public directly?",
    a: "An unlisted public company can issue shares via private placements or rights issues, but to issue shares to the general public via an IPO, it must comply with SEBI (Issue of Capital and Disclosure Requirements) Regulations and list on a recognized stock exchange such as BSE or NSE.",
  },
  {
    q: "Is share dematerialization mandatory for unlisted public companies?",
    a: "Yes. Under Rule 9A of the Companies (Prospectus and Allotment of Securities) Rules, every unlisted public company must issue securities only in dematerialized form and facilitate dematerialization of all existing shares through depository connectivity (NSDL / CDSL).",
  },
  {
    q: "What is the statutory quorum for an Annual General Meeting (AGM) of a public company?",
    a: "Under Section 103 of the Companies Act 2013, the quorum depends on the number of members: 5 members personally present if members are up to 1,000; 15 members if between 1,000 and 5,000; and 30 members if total members exceed 5,000.",
  },
  {
    q: "How does Merrafilings assist with Public Limited Company formation and compliance?",
    a: "Merrafilings manages end-to-end incorporation, including DSC, DIN approvals, name reservation, drafting public MoA/AoA, MCA SPICe+ filing, PAN/TAN issuance, bank account integration, ISIN depository admission, and ongoing secretarial compliances.",
  },
];

export default function PublicLimitedCompaniesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <PublicLimitedGuideLayout
      currentSlug="public-limited-companies"
      title="Understanding Public Limited Companies: Registration, Features & Compliance"
      breadcrumbLabel="Understanding Public Limited Companies"
      metaPublishedDate="Oct 20, 2026"
      readingTime="9 min read"
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
                Corporate Architecture & Governance
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                The Pinnacle Structure for High-Growth Enterprises
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                A <strong>Public Limited Company (PLC)</strong> represents the premier corporate vehicle in India designed for enterprises seeking large-scale capital accumulation, nationwide or global market presence, and public market credibility. Governed under the <strong>Companies Act 2013</strong> and supervised by the Ministry of Corporate Affairs (MCA) and SEBI (for listed entities), this legal structure democratizes ownership by enabling institutional and retail investors to acquire equity.
              </p>
            </div>
          </div>
        </div>

        {/* Section 1: What is a Public Limited Company */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm">
              01
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              What Is a Public Limited Company?
            </h2>
          </div>
          <div className="h-0.5 w-full bg-slate-100" />
          <p className="text-sm sm:text-base leading-relaxed">
            A Public Limited Company is an incorporated corporate body possessing a separate legal entity, perpetual succession, and a common seal (optional). Unlike private firms, a public company is legally entitled to invite the general public to subscribe to its equity shares, preference shares, or debentures.
          </p>
          <p className="text-sm sm:text-base leading-relaxed">
            In exchange for the privilege of mobilizing public savings and institutional capital, public companies operate under a regime of heightened accountability. They are mandated to publish their financial condition, submit quarterly/annual filings to the Registrar of Companies (ROC), and maintain stringent internal audit and corporate governance standards.
          </p>
        </section>

        {/* Section 2: Characteristics Grid */}
        <section className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm">
              02
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Essential Characteristics of a Public Limited Company
            </h2>
          </div>
          <div className="h-0.5 w-full bg-slate-100" />
          <p className="text-sm sm:text-base text-slate-600">
            The legal architecture of a public limited company under Section 2(71) of the Companies Act 2013 is distinguished by several unique operational attributes:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CHARACTERISTICS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-teal-300 hover:shadow-md transition-all group"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-1">
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

        {/* Section 3: Strategic Benefits */}
        <section className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm">
              03
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Key Advantages of Operating as a Public Limited Company
            </h2>
          </div>
          <div className="h-0.5 w-full bg-slate-100" />
          <div className="space-y-4">
            {ADVANTAGES.map((adv, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-teal-200 transition-all shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-teal-600 bg-teal-100/70 px-2 py-0.5 rounded">
                      {adv.step}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      {adv.title}
                    </h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mb-3 leading-relaxed">
                  {adv.desc}
                </p>
                <div className="flex items-center gap-2 text-xs text-teal-800 font-medium bg-teal-50 border border-teal-200/60 p-2.5 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>
                    <strong>Strategic Value:</strong> {adv.benefit}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Formation Roadmap */}
        <section className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm">
              04
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Steps to Form a Public Limited Company in India
            </h2>
          </div>
          <div className="h-0.5 w-full bg-slate-100" />
          <p className="text-sm sm:text-base text-slate-600">
            Incorporating a public company requires strategic legal drafting and meticulous verification across central government portals:
          </p>
          <div className="relative border-l-2 border-teal-200 pl-6 ml-3 space-y-6">
            {FORMATION_STEPS.map((step, idx) => (
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
          <div className="mt-4 p-4 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-between">
            <span className="text-xs sm:text-sm text-sky-900">
              Need step-by-step guidance on MCA SPICe+ Part A & Part B filings?
            </span>
            <Link
              href="/public-limited-company/how-to-start-a-public-limited-company"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 hover:text-teal-900 hover:underline shrink-0"
            >
              Read Incorporation Walkthrough <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* Section 5: Current Trends and Industry Modernization */}
        <section className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm">
              05
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Current Trends & Emerging Regulatory Dynamics
            </h2>
          </div>
          <div className="h-0.5 w-full bg-slate-100" />
          <div className="grid grid-cols-1 gap-4">
            {CURRENT_TRENDS.map((trend, idx) => {
              const Icon = trend.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-slate-200 bg-white hover:border-teal-300 transition-all shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                        {trend.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {trend.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 6: Future Outlook */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm">
              06
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              The Future Outlook for Public Limited Companies
            </h2>
          </div>
          <div className="h-0.5 w-full bg-slate-100" />
          <p className="text-sm sm:text-base leading-relaxed">
            As India advances towards a $5-trillion economy, the role of public limited companies will expand exponentially. Initiatives like international exchange connectivity via GIFT City International Financial Services Centre (IFSC), direct listing of Indian companies on foreign stock exchanges, and relaxed FDI norms have opened new avenues for global capitalization.
          </p>
          <p className="text-sm sm:text-base leading-relaxed">
            However, public corporations must balance rapid growth with uncompromising governance vigilance. Modern stakeholders demand real-time transparency, independent board supervision, cybersecurity risk controls, and social responsibility. Companies that build robust statutory frameworks today will command premium valuations in tomorrow’s capital markets.
          </p>
        </section>

        {/* Summary CTA Box */}
        <div className="rounded-2xl border border-teal-200 bg-gradient-to-br from-teal-50 via-white to-emerald-50 p-6 sm:p-8 text-center space-y-4 shadow-sm">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            Incorporate Your Public Limited Company with Merrafilings
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From drafting capital structures and reserving company names to securing 7+ subscriber digital signatures and MCA approval, Merrafilings provides fast, reliable, CA/CS-assisted incorporation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/public-limited-company"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-medium text-sm transition-all shadow-md hover:shadow-lg"
            >
              Start Public Company Registration <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/public-limited-company/essential-documents-for-public-limited-company"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-teal-700 hover:border-teal-300 font-medium text-sm transition-all"
            >
              View Required Documents
            </Link>
          </div>
        </div>

        {/* Section 7: FAQs */}
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
