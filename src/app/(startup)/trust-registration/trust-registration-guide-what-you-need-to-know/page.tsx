"use client";

import React, { useState } from "react";
import Link from "next/link";
import TrustGuideLayout from "@/components/TrustGuideLayout";
import {
  FileText,
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
  Users2,
  Globe,
  Coins,
  Cpu,
  Lock,
} from "lucide-react";

const TRUST_VARIANTS = [
  {
    type: "Revocable Living Trust",
    desc: "Allows the settlor/grantor to alter, amend, or revoke trust provisions during their lifetime. Offers maximum flexibility but does not provide complete asset shielding from personal creditors.",
    badge: "Flexible Control",
  },
  {
    type: "Irrevocable Trust",
    desc: "Once executed and settled, the settlor relinquishes all legal ownership and control over the corpus. Provides ironclad creditor protection, estate planning security, and tax shielding.",
    badge: "Asset Protection",
  },
  {
    type: "Public Charitable Trust",
    desc: "Formed exclusively for public welfare, poverty eradication, education, or healthcare. Entitled to 100% tax exemptions under Section 12AB and 80G donor deduction benefits.",
    badge: "Philanthropy & Tax Exempt",
  },
  {
    type: "Private Family Trust",
    desc: "Created under the Indian Trusts Act, 1882 to protect family wealth, manage generational wealth transfer, avoid probate disputes, and provide for vulnerable or minor beneficiaries.",
    badge: "Estate Succession",
  },
  {
    type: "Testamentary Trust",
    desc: "Created through clauses in a valid Will and comes into existence only after the testator's demise. Subject to probate validation where applicable.",
    badge: "Post-Demise Transfer",
  },
];

const MODERN_TRENDS = [
  {
    icon: Coins,
    title: "Digital Asset & Cryptocurrency Management",
    desc: "Modern trust deeds now incorporate specific digital asset clauses governing cryptocurrency holdings, software IP, SaaS equity, and offshore digital estates.",
  },
  {
    icon: Lock,
    title: "Enhanced PMLA & Anti-Money Laundering KYC",
    desc: "Sub-Registrars and banks enforce stringent ultimate beneficial ownership (UBO) disclosure norms for settlors, trustees, and named beneficiaries.",
  },
  {
    icon: Scale,
    title: "Accreted Tax Liabilities (Section 115TD)",
    desc: "Stringent exit taxes apply if a registered charitable trust converts into a non-charitable entity, fails to apply income, or dissolves without transferring assets to a similar trust.",
  },
  {
    icon: Globe,
    title: "Cross-Border Assets & FEMA Compliance",
    desc: "Trusts with NRI settlors or overseas beneficiaries must navigate Reserve Bank of India (RBI) Foreign Exchange Management Act (FEMA) transfer limitations.",
  },
];

const FAQS = [
  {
    q: "What is the primary difference between a Revocable and an Irrevocable Trust in India?",
    a: "In a Revocable Trust, the settlor retains the power to revoke, amend terms, or reclaim assets at any point. Because the settlor retains control, the trust income is clubbed with the settlor's personal income under Section 61 of the Income Tax Act. In an Irrevocable Trust, asset transfer is permanent and irreversible, offering true ring-fencing against creditors and separate taxation.",
  },
  {
    q: "Can a private family trust protect assets against future business insolvency or creditors?",
    a: "Yes. An Irrevocable Private Family Trust creates a separate legal estate. Assets transferred into the trust when the settlor is solvent cannot be attached by future creditors or insolvency resolution professionals (IRPs), provided the transfer was not executed to defraud existing creditors.",
  },
  {
    q: "Is probate mandatory for a registered Trust in India?",
    a: "No. One of the greatest advantages of establishing an inter vivos (living) Trust over a Will is that trusts do not require probate court proceedings. Asset distribution takes place immediately and privately upon the conditions specified in the Trust Deed.",
  },
  {
    q: "How are private family trusts taxed in India?",
    a: "If the shares of individual beneficiaries are determinate (expressly fixed), income is taxed at the respective personal slab rate of each beneficiary. If the trust is discretionary (trustees decide distribution percentages), the entire trust income is taxed at the Maximum Marginal Rate (MMR), currently around 39% or 42.74% including applicable surcharges.",
  },
  {
    q: "Can a Trust own shares in Private Limited companies or startups?",
    a: "Yes. Private trusts commonly hold equity shares in private limited companies and listed corporations as part of family holding structures, subject to depository participant (DP) regulations and SEBI guidelines.",
  },
];

export default function TrustRegistrationGuideWhatYouNeedToKnowPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <TrustGuideLayout
      currentSlug="trust-registration-guide-what-you-need-to-know"
      title="Trust Registration Guide: Everything You Need to Know"
      breadcrumbLabel="Everything You Need to Know"
      metaPublishedDate="October 2026"
      readingTime="11 min read"
      authorName="Merrafilings Non-Profit Legal Advisory"
    >
      {/* Lead Narrative */}
      <div className="text-[15px] sm:text-base text-slate-800 leading-relaxed font-normal space-y-4">
        <p>
          Navigating the legal terrain of <strong className="font-semibold text-slate-950">Trust Registration in India</strong> is fundamental for visionaries focused on prudent asset protection, multi-generational succession planning, and impactful philanthropy. Unlike casual financial arrangements, a registered trust creates an enduring legal architecture backed by enforceable fiduciary obligations.
        </p>
        <p>
          Whether your goal is safeguarding family businesses from succession disputes, managing digital assets, or securing institutional tax exemptions for charitable endeavors, this comprehensive guide equips you with the strategic legal insights, entity classifications, and procedural essentials required to establish your trust with confidence.
        </p>
      </div>

      {/* Section 1: Types of Trusts */}
      <section className="pt-4 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              01
            </span>
            Spectrum of Trust Classifications in India
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Select the appropriate legal vehicle matching your operational, tax, and governance objectives.
          </p>
        </div>

        <div className="space-y-3.5">
          {TRUST_VARIANTS.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-slate-200 bg-white hover:border-emerald-300 hover:shadow-xs transition-all"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-sm sm:text-base font-bold text-slate-950">{item.type}</h3>
                <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  {item.badge}
                </span>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Key Strategic Benefits */}
      <section className="pt-6 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              02
            </span>
            Key Strategic Advantages of Trust Registration
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Why registered trusts surpass unwritten agreements, Wills, and informal partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">Asset Ring-Fencing</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Shields business equity and real estate holdings from personal lawsuits, creditor claims, and family partitions.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">Absolute Family Privacy</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Unlike Wills that become public records during probate litigation, private trust deeds remain confidential private contracts.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">Seamless Succession</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Eliminates the multi-year delays, stamp duty costs, and court fees associated with obtaining testamentary letters of administration.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Modern Regulatory Trends */}
      <section className="pt-6 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              03
            </span>
            Modern Regulatory Frontiers &amp; Emerging Trends
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Navigating digital assets, cross-border remittance, and modern taxation policies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {MODERN_TRENDS.map((trend, idx) => {
            const Icon = trend.icon;
            return (
              <div key={idx} className="p-5 rounded-xl border border-slate-200 bg-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">{trend.title}</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{trend.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 4: FAQs */}
      <section className="pt-6 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <HelpCircle className="w-6 h-6 text-emerald-600" />
            Frequently Asked Questions (FAQs)
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Legal clarifications on probate bypass, taxation rates, and discretionary trusts.
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

      {/* Section 5: CTA */}
      <section className="pt-8 pb-4">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-950 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              Comprehensive Trust Architecture
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Structure Your Trust with Merrafilings Specialists
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Whether establishing an irrevocable private family estate or incorporating a nationwide public charity, Merrafilings delivers custom legal drafting, local Sub-Registrar execution, and CBDT tax exemption approvals.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/trust-registration"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 text-xs sm:text-sm font-bold hover:bg-emerald-400 transition-colors shadow-md"
              >
                Start Trust Registration
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold border border-white/20 transition-colors"
              >
                Schedule Legal Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </TrustGuideLayout>
  );
}
