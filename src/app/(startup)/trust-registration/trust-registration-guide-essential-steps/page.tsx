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
  Clock,
  Briefcase,
  Check,
  FileCheck2,
} from "lucide-react";

const ESSENTIAL_STEPS = [
  {
    step: "01",
    title: "Determine Trust Classification & Mission",
    desc: "Evaluate whether your goals align with a Public Charitable Trust (for community welfare, healthcare, education, or religion) or a Private Family Trust (for family estate protection and succession planning).",
    duration: "Day 1",
  },
  {
    step: "02",
    title: "Finalize Name & Appoint Trustees",
    desc: "Select a unique, non-infringing title reflecting your mission. Appoint the author/settlor who transfers initial corpus and a minimum of two capable trustees with clean legal standing and Indian KYC documents.",
    duration: "Day 1 - 2",
  },
  {
    step: "03",
    title: "Draft the Formal Trust Deed",
    desc: "Draft a comprehensive, legally compliant Trust Deed detailing charitable objectives, trustee powers, quorum rules, banking authority, investment limits, and an irrevocable dissolution clause.",
    duration: "Day 2 - 3",
  },
  {
    step: "04",
    title: "Purchase Stamp Paper & Pay Registration Fees",
    desc: "Print the finalized charter on state-mandated non-judicial stamp paper or generate electronic e-stamping certificates adhering to local state stamp duty schedules.",
    duration: "Day 3 - 4",
  },
  {
    step: "05",
    title: "Execute Before the Sub-Registrar",
    desc: "The settlor, managing trustees, and two independent witnesses present themselves at the local Sub-Registrar of Assurances office for biometric capture, verification, and registration.",
    duration: "Day 4 - 5",
  },
  {
    step: "06",
    title: "Fund Corpus & Open Trust Bank Account",
    desc: "Apply for the Trust's independent PAN and TAN cards, and open an operational Current Bank Account using the certified registered Trust Deed and trustee board resolutions.",
    duration: "Day 6 - 8",
  },
  {
    step: "07",
    title: "Secure Tax Exemptions (12AB & 80G)",
    desc: "File Form 10A on the Income Tax Portal to secure provisional 12AB tax-exempt status and 80G donor deduction privileges, followed by NITI Aayog NGO Darpan and CSR-1 registrations.",
    duration: "Day 9 - 14",
  },
];

const ONGOING_ADMINISTRATION = [
  {
    title: "Annual Statutory CA Audit",
    freq: "Yearly",
    desc: "Compulsory audit by an independent Chartered Accountant in Form 10B (receipts > ₹5 Cr) or Form 10BB (receipts ≤ ₹5 Cr).",
  },
  {
    title: "Income Tax Return (ITR-7)",
    freq: "Annual (By Oct 31)",
    desc: "Mandatory filing of Form ITR-7 by audited trusts to maintain active Section 11/12 tax exemptions.",
  },
  {
    title: "Statement of Donations (Form 10BD)",
    freq: "Annual (By May 31)",
    desc: "Filing donor contribution statements with CBDT and issuing Form 10BE tax deduction certificates to all donors.",
  },
  {
    title: "Periodic Trustee Meetings & Minutes",
    freq: "Quarterly / Half-Yearly",
    desc: "Maintaining signed minutes of trustee meetings, banking authorization resolutions, and annual budget approvals.",
  },
];

const FAQS = [
  {
    q: "What is the primary document required to execute the essential trust steps?",
    a: "The most critical document is the Trust Deed. It serves as the constitutional charter establishing the legal relationship between the Settlor, the Trustees, and the Beneficiaries. It must be executed on non-judicial stamp paper and registered with the Sub-Registrar.",
  },
  {
    q: "Can a single person register a trust in India?",
    a: "No. A trust requires at least two individuals: one who creates the trust (Settlor/Author) and at least one other person to act as Trustee. While the Settlor can also be a Trustee, there must be at least two distinct individuals on the board of trustees.",
  },
  {
    q: "How does transferring assets to a trust work after registration?",
    a: "Once the Trust Deed is registered and the Trust PAN and bank account are established, the Settlor formally deposits the settled initial corpus into the trust account. For immovable properties, a registered gift deed or settlement deed must be executed and mutated in local land revenue records.",
  },
  {
    q: "What happens if a trust fails to file its annual ITR-7 return on time?",
    a: "Failing to file Form ITR-7 by the prescribed due date (October 31st for audited trusts) results in the automatic forfeiture of tax exemptions under Sections 11 and 12 for that financial year, making the entire surplus taxable at normal commercial rates.",
  },
  {
    q: "Is an NGO Darpan registration mandatory for all charitable trusts?",
    a: "NGO Darpan registration with NITI Aayog is not mandatory for basic operation, but it is compulsory if the trust intends to apply for government grants, central ministry funding, or foreign contribution clearance (FCRA).",
  },
];

export default function TrustRegistrationGuideEssentialStepsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <TrustGuideLayout
      currentSlug="trust-registration-guide-essential-steps"
      title="Trust Registration Guide: Essential Steps"
      breadcrumbLabel="Essential Steps Guide"
      metaPublishedDate="October 2026"
      readingTime="11 min read"
      authorName="Merrafilings Non-Profit Legal Advisory"
    >
      {/* Lead Narrative */}
      <div className="text-[15px] sm:text-base text-slate-800 leading-relaxed font-normal space-y-4">
        <p>
          Forming a trust in India often seems intimidating due to the legal intricacies, state stamp duty calculations, and multi-agency compliance requirements. However, when approached through a structured, step-by-step framework, the entire procedure becomes clear, transparent, and manageable.
        </p>
        <p>
          Whether you are stepping into the role of a founder, trustee, social entrepreneur, or estate planner, this <strong className="font-semibold text-slate-950">Essential Steps Guide</strong> breaks down the complete journey—from identifying initial trust goals and formulating a robust deed to Sub-Registrar execution, bank onboarding, and lifetime compliance management.
        </p>
      </div>

      {/* Section 1: 7 Essential Steps */}
      <section className="pt-4 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              01
            </span>
            The 7 Essential Steps to Register a Trust in India
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            A chronological legal roadmap from initial concept to certified governmental recognition.
          </p>
        </div>

        <div className="space-y-4">
          {ESSENTIAL_STEPS.map((s, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-slate-200 bg-white hover:border-emerald-300 hover:shadow-xs transition-all flex flex-col sm:flex-row items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 font-bold text-base flex items-center justify-center shrink-0 border border-emerald-200/70">
                {s.step}
              </div>
              <div className="space-y-1.5 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-sm sm:text-base font-bold text-slate-950">{s.title}</h3>
                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Est. Timeline: {s.duration}
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Post-Registration Asset Transfer */}
      <section className="pt-6 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              02
            </span>
            How to Legally Vest &amp; Transfer Assets into the Trust Corpus
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Crucial steps to ensure legal ownership transitions from the settlor to the trust board.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50/60 to-white border border-emerald-200/80 space-y-3 text-xs sm:text-[13px] text-slate-700 leading-relaxed">
          <p>
            Registration of the Trust Deed alone does not automatically convey external properties to the trust. Founders must execute formal asset vesting procedures:
          </p>
          <ul className="space-y-2 pt-1">
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Bank Transfer of Cash Corpus:</strong> Deposit the initial settlement sum stated in the Trust Deed directly into the newly opened trust current account.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Immovable Property Settlement:</strong> Execute a registered conveyance deed or gift deed and record mutation entries in local municipality/tehsildar records.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Financial Securities &amp; Equity:</strong> Update Depository Participant (DP) account holders to reflect the trustees acting on behalf of the trust.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 3: Ongoing Trust Administration */}
      <section className="pt-6 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              03
            </span>
            Ongoing Trust Administration &amp; Compliance Calendar
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Essential annual filings to safeguard charitable status and protect trustees from legal liabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ONGOING_ADMINISTRATION.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-white">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {item.freq}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
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
            Practical answers regarding trustee minimums, banking, asset transfers, and tax deadlines.
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
              Complete Non-Profit Legal Care
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Execute Every Trust Step Flawlessly with Merrafilings
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Experience hassle-free trust registration with India's premier CA and legal advisory. We handle deed drafting, Sub-Registrar appointment coordination, PAN/TAN issuance, and Section 12AB/80G tax exemptions seamlessly.
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
                Consult Legal Counsel
              </Link>
            </div>
          </div>
        </div>
      </section>
    </TrustGuideLayout>
  );
}
