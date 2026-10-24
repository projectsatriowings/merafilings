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
  Layers,
  Search,
  BadgeCheck,
} from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "Determine the Trust Classification",
    desc: "Decide whether your entity will operate as a Public Charitable Trust (for public benefit, healthcare, education, or religious welfare) or a Private Family Trust (for family estate planning and succession).",
    tag: "Entity Strategy",
  },
  {
    step: "02",
    title: "Select & Verify Trust Name",
    desc: "Choose a distinctive name that reflects your mission. Verify that the proposed name does not infringe upon registered trademarks or violate the Emblems and Names (Prevention of Improper Use) Act, 1950.",
    tag: "Name Search",
  },
  {
    step: "03",
    title: "Identify Settlor & Managing Trustees",
    desc: "Appoint the author/settlor who transfers the initial corpus fund and a minimum of two managing trustees possessing clean legal standing, Indian KYC proofs, and designated administrative duties.",
    tag: "Governance",
  },
  {
    step: "04",
    title: "Draft the Formal Trust Deed",
    desc: "Draft a comprehensive deed outlining charitable objectives, trustee powers, quorum rules, bank account management, investment mandates, and an irrevocable dissolution clause.",
    tag: "Legal Charter",
  },
  {
    step: "05",
    title: "Procure Non-Judicial Stamp Paper & Pay Duty",
    desc: "Print the finalized Trust Deed on state-specific non-judicial stamp paper or purchase an electronic e-stamp certificate adhering to your state's stamp duty rates on trust settlements.",
    tag: "Stamp Duty",
  },
  {
    step: "06",
    title: "Execute Before the Local Sub-Registrar",
    desc: "The settlor, trustees, and two independent witnesses appear in person before the jurisdictional Sub-Registrar of Assurances for biometric fingerprinting, photograph capture, and signature execution.",
    tag: "Sub-Registrar",
  },
  {
    step: "07",
    title: "Obtain Certified Trust Deed & Registration Seal",
    desc: "Upon thorough verification of documents and fees, the Sub-Registrar registers the deed into public records and issues the certified registration certificate.",
    tag: "Incorporation",
  },
];

const STRATEGIC_BENEFITS = [
  {
    icon: ShieldCheck,
    title: "Sovereign Legal Identity",
    desc: "Grants legal standing to enter contracts, buy/sell real estate, open institutional bank accounts, and sue or defend in the trust's name.",
  },
  {
    icon: Receipt,
    title: "Income Tax Exemptions (12AB & 80G)",
    desc: "Enables registered public trusts to claim 100% tax exemption on donations and gives donors a 50% deduction on their taxable income.",
  },
  {
    icon: Award,
    title: "Corporate CSR & Public Grants",
    desc: "Eligible for Form CSR-1 registration under the MCA to execute multi-lakh CSR projects funded by leading corporates and PSUs.",
  },
  {
    icon: Scale,
    title: "Disciplined Governance & Asset Protection",
    desc: "Clear fiduciary rules prevent trustee misappropriation and protect family or community assets for generations to come.",
  },
];

const FAQS = [
  {
    q: "Can trust registration be completed 100% online in India?",
    a: "While preliminary application details, deed drafting, stamp duty payment, and appointment booking can be done online in many states, physical appearance by the Settlor, Trustees, and two witnesses before the local Sub-Registrar is legally mandatory for biometric verification and deed execution.",
  },
  {
    q: "Where should the trust deed be registered?",
    a: "Under Section 28 of the Registration Act, 1908, the Trust Deed must be registered in the office of the Sub-Registrar within whose sub-district the whole or some portion of the trust property or the registered office is situated.",
  },
  {
    q: "What is the minimum initial corpus fund required to create a trust?",
    a: "There is no minimum monetary threshold mandated by the Indian Trusts Act. You can establish a trust with a nominal corpus amount such as ₹1,000, ₹5,000, or ₹10,000, which the settlor settles into the trust bank account upon registration.",
  },
  {
    q: "How long does it take to complete trust registration?",
    a: "Deed drafting and document compilation typically take 2 to 4 working days. Once the Sub-Registrar appointment is attended, the registered Trust Deed is generally delivered within 3 to 7 working days, depending on local registrar backlogs.",
  },
  {
    q: "What post-registration compliances must be completed immediately?",
    a: "Immediately after registration, the trust must apply for a Trust PAN and TAN, open a current bank account in the trust's name, file Form 10A on the Income Tax Portal for 12AB/80G registrations, and register on the NITI Aayog NGO Darpan portal.",
  },
];

export default function HowToApplyForTrustRegistrationGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <TrustGuideLayout
      currentSlug="how-to-apply-for-trust-registration-guide"
      title="How to Apply for Trust Registration: A Step-by-Step Guide"
      breadcrumbLabel="How to Apply Step-by-Step"
      metaPublishedDate="October 2026"
      readingTime="11 min read"
      authorName="Merrafilings Non-Profit Legal Advisory"
    >
      {/* Lead Narrative */}
      <div className="text-[15px] sm:text-base text-slate-800 leading-relaxed font-normal space-y-4">
        <p>
          Applying for <strong className="font-semibold text-slate-950">Trust Registration in India</strong> is a pivotal milestone for any philanthropic enterprise, educational mission, or family estate. A registered trust transitions an informal charitable aspiration into a legally bulletproof institution recognized by courts, banking authorities, and the Income Tax Department.
        </p>
        <p>
          While the procedure involves multiple stages—spanning deed formulation, state stamp duty evaluation, and jurisdictional Sub-Registrar execution—following a systematic roadmap ensures a seamless experience. This comprehensive guide details the precise sequence to apply for and successfully register a trust in India.
        </p>
      </div>

      {/* Section 1: Strategic Benefits */}
      <section className="pt-4 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              01
            </span>
            Why Formal Trust Registration is Crucial
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            A registered trust unlocks institutional trust, statutory tax benefits, and organizational longevity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {STRATEGIC_BENEFITS.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl border border-slate-200/90 bg-white hover:border-emerald-300 hover:shadow-xs transition-all"
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

      {/* Section 2: 7-Step Registration Workflow */}
      <section className="pt-6 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              02
            </span>
            The 7-Step Trust Application &amp; Registration Roadmap
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Follow these verified legal steps to establish and register your trust without delays or rejections.
          </p>
        </div>

        <div className="space-y-4">
          {STEPS.map((s, idx) => (
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
                    {s.tag}
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Key Considerations & State Variations */}
      <section className="pt-6 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              03
            </span>
            Key Considerations &amp; State Jurisdiction Nuances
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Legal distinctions governing public trusts across diverse Indian states.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-2">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Landmark className="w-4 h-4 text-emerald-600" />
              Maharashtra &amp; Gujarat (Charity Commissioner)
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              In Maharashtra and Gujarat, Public Charitable Trusts are regulated under the <em>Bombay Public Trusts Act, 1950</em>. After Sub-Registrar registration, an additional registration application must be submitted to the Office of the Charity Commissioner.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-2">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Scale className="w-4 h-4 text-emerald-600" />
              Other Indian States (Sub-Registrar Jurisdiction)
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              In states like Delhi, Tamil Nadu, Karnataka, Uttar Pradesh, and West Bengal, registration before the local Sub-Registrar under the <em>Registration Act, 1908</em> and <em>Indian Trusts Act, 1882</em> completes the formal registration of the trust deed.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Post-Registration Milestone Checklist */}
      <section className="pt-6 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              04
            </span>
            Immediate Post-Registration Milestones
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Critical follow-up steps to make your trust operational and tax-exempt.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50/60 to-white border border-emerald-200/80">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-3xs">
              <span className="text-xs font-bold text-emerald-700 block mb-1">MILESTONE 1</span>
              <h4 className="text-sm font-bold text-slate-900 mb-1">PAN &amp; Bank Account</h4>
              <p className="text-xs text-slate-600">Apply for Trust PAN via Protean/UTIITSL and open an operational Current Bank Account with authorized signing mandates.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-3xs">
              <span className="text-xs font-bold text-emerald-700 block mb-1">MILESTONE 2</span>
              <h4 className="text-sm font-bold text-slate-900 mb-1">12AB &amp; 80G Approval</h4>
              <p className="text-xs text-slate-600">File Form 10A on the e-filing portal to receive provisional 3-year tax exemption and 50% deduction eligibility for donors.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-3xs">
              <span className="text-xs font-bold text-emerald-700 block mb-1">MILESTONE 3</span>
              <h4 className="text-sm font-bold text-slate-900 mb-1">NGO Darpan &amp; CSR-1</h4>
              <p className="text-xs text-slate-600">Register on NITI Aayog's NGO Darpan to access central grants and submit Form CSR-1 on MCA V3 for corporate CSR funding.</p>
            </div>
          </div>
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
            Answers to common queries about registration methods, fees, and timelines.
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
              Streamlined Legal Registration
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Let Merrafilings Handle Your Trust Registration
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Don't risk procedural delays or drafting loopholes. Our specialized non-profit legal counsel assists you with custom deed formulation, Sub-Registrar appointment scheduling, stamp duty calculation, and tax exemption filings.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/trust-registration"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 text-xs sm:text-sm font-bold hover:bg-emerald-400 transition-colors shadow-md"
              >
                Apply for Trust Registration
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold border border-white/20 transition-colors"
              >
                Speak with a Legal Advisor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </TrustGuideLayout>
  );
}
