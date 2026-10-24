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
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Landmark,
  FileText,
  Users2,
  Target,
  Globe2,
  TreePine,
  GraduationCap,
  Briefcase,
  Layers,
  FileCheck2,
} from "lucide-react";

const KEY_BENEFITS = [
  {
    icon: Building2,
    title: "Distinct Legal Corporate Status",
    desc: "A Section 8 company enjoys an independent corporate legal identity recognized across all Indian states and internationally, distinct from its founders, directors, and members.",
  },
  {
    icon: Receipt,
    title: "Substantial Tax Exemptions (12AB & 80G)",
    desc: "Upon securing registration under Section 12AB and Section 80G of the Income Tax Act, 1961, the company's income is 100% tax-exempt, and donors receive 50% deductions.",
  },
  {
    icon: ShieldCheck,
    title: "Limited Personal Liability",
    desc: "Members and directors enjoy limited liability. Their personal assets are completely insulated and never exposed to the company's organizational debts or contractual liabilities.",
  },
  {
    icon: Scale,
    title: "Corporate Personality & Perpetual Succession",
    desc: "The organization can hold immovable property, enter into contracts, and sue or be sued in its corporate name. Changes in directorship do not affect its continuous existence.",
  },
  {
    icon: Award,
    title: "Unrivalled Credibility with Donors & CSR Boards",
    desc: "Subject to rigorous MCA disclosures and statutory CA audits, Section 8 entities hold first-tier preference among Fortune 500 CSR committees, government bodies, and global donors.",
  },
];

const SETUP_STEPS = [
  {
    step: "01",
    title: "Obtain Digital Signature Certificates (DSC)",
    desc: "Secure Class 3 Digital Signatures for all proposed directors and subscribers to facilitate electronic authentication of digital forms on the MCA V3 portal.",
  },
  {
    step: "02",
    title: "Reserve Unique Name via SPICe+ Part A",
    desc: "Submit a unique name aligning with non-profit naming conventions. Names must include mandatory suffixes such as Foundation, Forum, Association, Council, Federation, Chambers, or Institute.",
  },
  {
    step: "03",
    title: "Draft Charter Documents (MoA & AoA)",
    desc: "Formulate specialized Memorandum of Association (Form INC-13) and Articles of Association incorporating statutory covenants prohibiting dividend distribution and personal profit extraction.",
  },
  {
    step: "04",
    title: "Secure Section 8 License from Central Government / ROC",
    desc: "File Form SPICe+ alongside a 3-year projected financial statement, asset declaration, and estimated operational budget to obtain the formal Central Government Section 8 license.",
  },
  {
    step: "05",
    title: "Submit SPICe+ Part B for Incorporation",
    desc: "Upload registered office address proof, director consents (DIR-2), non-disqualification declarations (INC-9), and pay statutory MCA stamp duties to generate the Certificate of Incorporation.",
  },
  {
    step: "06",
    title: "Procure PAN, TAN & Open Bank Account",
    desc: "Automated issuance of PAN, TAN, EPFO, and ESIC registrations, followed by opening a dedicated corporate bank account with designated signatory controls.",
  },
];

const SOCIAL_SECTORS = [
  {
    icon: TreePine,
    sector: "Environmental Protection & Sustainability",
    focus: "Afforestation drives, waste recycling initiatives, renewable energy awareness, wildlife preservation, and climate resilience projects.",
  },
  {
    icon: HeartHandshake,
    sector: "Poverty Eradication & Social Welfare",
    focus: "Nutritional food distribution, rural livelihood generation, women empowerment programs, disability rehabilitation, and disaster relief.",
  },
  {
    icon: Sparkles,
    sector: "Promotion of Arts, Culture & Heritage",
    focus: "Revival of indigenous handicrafts, restoration of historical monuments, cultural festivals, and preservation of rare performing arts.",
  },
  {
    icon: GraduationCap,
    sector: "Education, Science & Research",
    focus: "Constructing schools in under-served regions, digital literacy campaigns, scientific research incubators, and student scholarship endowments.",
  },
];

const ENTITY_COMPARISON = [
  {
    feature: "Governing Legislation",
    section8: "Companies Act, 2013 (Central Ministry of Corporate Affairs)",
    trust: "Indian Trusts Act, 1882 / State Public Trusts Acts",
    society: "Societies Registration Act, 1860 (State Registrar of Societies)",
  },
  {
    feature: "Jurisdictional Validity",
    section8: "Central pan-India recognition across all states and union territories",
    trust: "Primarily regional / state-specific registration limits",
    society: "State-specific jurisdiction; multi-state requires separate registration",
  },
  {
    feature: "Minimum Promoters / Members",
    section8: "2 for Private Limited status; 7 for Public Limited status",
    trust: "Minimum 2 Trustees (Author/Settlor and Trustee)",
    society: "Minimum 7 members from diverse states or backgrounds",
  },
  {
    feature: "Corporate Personality & Succession",
    section8: "Full separate legal corporate entity with perpetual succession",
    trust: "Not a distinct legal entity; assets vest in trustees personally",
    society: "Partial legal personality; title held through governing council",
  },
  {
    feature: "Public Transparency & Reporting",
    section8: "High: Annual AOC-4 & MGT-7 filings publicly viewable on MCA portal",
    trust: "Low: Private accounting with minimal public disclosure",
    society: "Moderate: Annual returns submitted to local state registrar",
  },
  {
    feature: "CSR Grants & Institutional Funding",
    section8: "Highest credibility; top choice for corporate CSR-1 projects & donors",
    trust: "Subject to stringent third-party corporate due diligence",
    society: "Moderate credibility; often slowed by state governance scrutiny",
  },
];

const COMPLIANCE_FRAMEWORK = [
  {
    title: "Statutory CA Audit",
    freq: "Annual",
    desc: "Compulsory audit of accounts, balance sheet, and revenue statements by an independent Chartered Accountant.",
  },
  {
    title: "ROC Form AOC-4 Filing",
    freq: "Annual (Within 30 days of AGM)",
    desc: "Submission of audited financial statements, director's report, and auditor's notes on the MCA V3 portal.",
  },
  {
    title: "ROC Form MGT-7 Filing",
    freq: "Annual (Within 60 days of AGM)",
    desc: "Annual return containing details of registered office, members, directorship changes, and board meetings.",
  },
  {
    title: "Income Tax Return (ITR-7)",
    freq: "Annual (By Oct 31)",
    desc: "Mandatory tax return filing for charitable organizations claiming tax exemptions under Sections 11 and 12.",
  },
];

const FAQS = [
  {
    q: "What is a Section 8 Company under the Companies Act, 2013?",
    a: "A Section 8 Company is an entity registered under Section 8 of the Indian Companies Act, 2013, formed exclusively for promoting commerce, art, science, sports, education, research, social welfare, religion, charity, protection of environment, or any other philanthropic purpose. It must apply its profits solely to its stated objectives and is strictly prohibited from distributing dividends to its members.",
  },
  {
    q: "How does a Section 8 company differ from a commercial Private Limited company?",
    a: "While both are incorporated under the Companies Act and offer limited liability, a commercial company distributes profits to shareholders via dividends. In contrast, a Section 8 company cannot pay dividends, enjoys exemption from using 'Limited' or 'Private Limited' in its name, and is eligible for 100% tax exemptions under Section 12AB/80G.",
  },
  {
    q: "Is there a minimum capital requirement to incorporate a Section 8 Company?",
    a: "No. The Companies Act, 2013 eliminated minimum paid-up capital requirements. A Section 8 company can be registered with zero minimum paid-up capital and can be formed either with share capital or limited by guarantee.",
  },
  {
    q: "What are the main documents required for Section 8 company registration?",
    a: "The primary documents include PAN cards and Aadhaar/Passports of directors, proof of residential address (bank statements/utility bills), passport-size photographs, registered office address proof (electricity bill, NOC from landlord, rent agreement), drafted MoA and AoA in Form INC-13, and a 3-year projected financial roadmap.",
  },
  {
    q: "How does a Section 8 company become eligible for CSR funding?",
    a: "To receive Corporate Social Responsibility (CSR) funds under Section 135 of the Companies Act, the Section 8 company must possess valid registrations under Section 12AB and Section 80G, maintain an established track record in charitable activities, and file Form CSR-1 on the MCA portal to obtain a unique CSR Registration Number.",
  },
  {
    q: "Can a Section 8 company be converted into a regular commercial business later?",
    a: "Yes, but subject to stringent legal procedures under Section 8(4)(ii) and Rule 22 of the Companies (Incorporation) Rules, 2014. The company must pass a special resolution, obtain ROC approval, pay market-value taxes on accumulated assets, and prove that charitable funds have not been misappropriated.",
  },
];

export default function UnderstandSection8CompaniesKeyBenefitsSetupPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Section8GuideLayout
      currentSlug="understand-section-8-companies-key-benefits-setup"
      title="Understanding Section 8 Companies and Their Essentials"
      breadcrumbLabel="Key Benefits & Setup"
      metaPublishedDate="October 2026"
      readingTime="12 min read"
      authorName="Merrafilings Corporate Advisory Desk"
    >
      {/* Lead Narrative */}
      <div className="text-[15px] sm:text-base text-slate-800 leading-relaxed font-normal space-y-4">
        <p>
          In the Indian nonprofit ecosystem, non-governmental organizations (NGOs) and social enterprises require an institutional legal framework that guarantees high governance, financial transparency, and public trust. Among the traditional models—Trusts, Societies, and Companies—the <strong className="font-semibold text-slate-950">Section 8 Company</strong> has emerged as the gold standard for institutional social initiatives.
        </p>
        <p>
          Governed under the <strong className="font-semibold text-slate-950">Companies Act, 2013</strong>, a Section 8 Company combines corporate operational sophistication with pure philanthropic dedication. By statutory mandate, every rupee of income must be dedicated toward the organization's social objectives, completely forbidding any distribution of dividends or personal profits to members.
        </p>
      </div>

      {/* Section 1: Definition and Purpose */}
      <section className="pt-4 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              01
            </span>
            Definition and Purpose of Section 8 Company
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            The legal foundation and statutory non-profit mandate under Section 8(1) of the Indian Companies Act, 2013.
          </p>
        </div>

        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-emerald-50/60 to-white border border-emerald-200/80 space-y-4">
          <p className="text-sm text-slate-700 leading-relaxed">
            Under Section 8(1) of the Companies Act, 2013, an entity is licensed as a non-profit company if it proves to the satisfaction of the Central Government (delegated to the Registrar of Companies) that:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 block mb-1">
                Clause (a)
              </span>
              <h4 className="text-sm font-bold text-slate-900 mb-1">Philanthropic Objectives</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Formed for promoting commerce, art, science, sports, education, research, social welfare, religion, charity, protection of environment, or any other objective.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 block mb-1">
                Clause (b)
              </span>
              <h4 className="text-sm font-bold text-slate-900 mb-1">Surplus Reinvestment</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                It intends to apply all profits, investment returns, or other income solely in promoting its public welfare objectives.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 block mb-1">
                Clause (c)
              </span>
              <h4 className="text-sm font-bold text-slate-900 mb-1">Dividend Prohibition</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                It strictly prohibits the payment of any dividend, bonus, or monetary profit distribution to its members or shareholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Advantages */}
      <section className="pt-6 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              02
            </span>
            Key Advantages of Forming a Section 8 Company
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Why philanthropic leaders and CSR foundations choose Section 8 over traditional trusts or societies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {KEY_BENEFITS.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl border border-slate-200/80 bg-white hover:border-emerald-300 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">{b.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 3: Step-by-Step Setup */}
      <section className="pt-6 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              03
            </span>
            How to Form a Section 8 Company? Step-by-Step
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            A structured roadmap through the MCA V3 portal and Ministry of Corporate Affairs requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SETUP_STEPS.map((s, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-white shadow-xs relative"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  STEP {s.step}
                </span>
                <h3 className="text-sm font-bold text-slate-900">{s.title}</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Compliance and Regulatory Framework */}
      <section className="pt-6 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              04
            </span>
            Compliance & Regulatory Framework
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Mandatory annual statutory obligations to preserve active ROC status and tax-exempt privileges.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {COMPLIANCE_FRAMEWORK.map((c, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/50">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-slate-900">{c.title}</h3>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {c.freq}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Critical Role in Social Development */}
      <section className="pt-6 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              05
            </span>
            Critical Role in Social Development & CSR Impact
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Catalyzing grassroots change and corporate CSR deployment across national priority areas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SOCIAL_SECTORS.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div key={idx} className="p-5 rounded-xl border border-slate-200 bg-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">{sec.sector}</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{sec.focus}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 6: Section 8 Company vs. Trust vs. Society */}
      <section className="pt-6 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              06
            </span>
            Section 8 Company vs. Trust vs. Society: Comprehensive Comparison
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            A side-by-side legal analysis to guide your choice of non-profit structure in India.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
          <table className="w-full text-left text-xs border-collapse min-w-[620px]">
            <thead>
              <tr className="bg-slate-100/80 border-b border-slate-200 text-slate-900 font-semibold">
                <th className="p-3 w-1/4">Key Parameter</th>
                <th className="p-3 w-1/4 text-emerald-800 bg-emerald-50/50">Section 8 Company</th>
                <th className="p-3 w-1/4">Charitable Trust</th>
                <th className="p-3 w-1/4">Registered Society</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              {ENTITY_COMPARISON.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/40"}>
                  <td className="p-3 font-semibold text-slate-900">{row.feature}</td>
                  <td className="p-3 bg-emerald-50/30 font-medium text-emerald-950">{row.section8}</td>
                  <td className="p-3">{row.trust}</td>
                  <td className="p-3">{row.society}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 7: FAQs */}
      <section className="pt-6 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <HelpCircle className="w-6 h-6 text-emerald-600" />
            Frequently Asked Questions (FAQs)
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Expert answers regarding setup, operational permissions, tax privileges, and governance rules.
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

      {/* Section 8: Final Thoughts & Call to Action */}
      <section className="pt-8 pb-4">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-950 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              Empowering Social Change
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Launch Your Section 8 Non-Profit with Merrafilings
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              From SPICe+ Part A name reservations and Central Government license drafting to Section 12AB/80G registrations and CSR-1 compliance, Merrafilings guides you through every step with absolute precision and guaranteed ROC approval.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/section-8-company-registration"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 text-xs sm:text-sm font-bold hover:bg-emerald-400 transition-colors shadow-md"
              >
                Register Section 8 Company
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold border border-white/20 transition-colors"
              >
                Consult a Non-Profit CA
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Section8GuideLayout>
  );
}
