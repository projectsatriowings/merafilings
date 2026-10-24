"use client";

import React, { useState } from "react";
import Link from "next/link";
import TrustGuideLayout from "@/components/TrustGuideLayout";
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
  Users2,
  FileText,
  Clock,
  Layers,
} from "lucide-react";

const CHARITABLE_OBJECTS = [
  {
    title: "Relief of the Poor & Destitute",
    desc: "Providing food, shelter, clothing, sanitation, and livelihood rehabilitation to economically backward communities.",
  },
  {
    title: "Advancement of Education",
    desc: "Establishing schools, colleges, vocational training institutes, scholarship funds, and research endowments.",
  },
  {
    title: "Medical Relief & Healthcare",
    desc: "Running charitable hospitals, rural clinics, dispensaries, mobile health vans, and subsidizing critical medical procedures.",
  },
  {
    title: "Environmental & Heritage Preservation",
    desc: "Preserving historical monuments, afforestation drives, wildlife protection, and implementing clean water conservation initiatives.",
  },
];

const TRUST_TYPES_MATRIX = [
  {
    param: "Primary Beneficiaries",
    charitable: "General public without discrimination of caste, creed, or religion",
    religious: "Followers of specific religious faiths or shrine maintenance",
    private: "Identified family members, children, or specific individuals",
  },
  {
    param: "Governing Statute",
    charitable: "State Public Trusts Acts & Income Tax Act, 1961",
    religious: "Religious Endowments Acts / State Waqf / Hindu Religious Boards",
    private: "Indian Trusts Act, 1882",
  },
  {
    param: "Section 80G Deduction",
    charitable: "Fully Eligible for 80G tax deductions for donors",
    religious: "Generally Ineligible for 80G (unless mixed public charity)",
    private: "Completely Ineligible for 80G",
  },
  {
    param: "Income Tax Exemption",
    charitable: "100% Tax Exemption on trust income under Section 11 & 12AB",
    religious: "Tax Exempt if recognized as public religious endowment",
    private: "Taxed at Maximum Marginal Rate (MMR) or slab rates",
  },
  {
    param: "CSR Grant Eligibility",
    charitable: "Eligible for Form CSR-1 corporate grants",
    religious: "Generally restricted from corporate CSR funding",
    private: "Ineligible for CSR grants",
  },
];

const RECENT_REFORMS = [
  {
    title: "5-Year Renewable 12AB Registration",
    desc: "Charitable trusts now receive a provisional registration for 3 years, followed by a formal 5-year registration renewal via Form 10AB on the Income Tax Portal.",
  },
  {
    title: "Mandatory Form 10BD Donation Filings",
    desc: "Every charitable trust must electronically file an annual Statement of Donations in Form 10BD by May 31st and issue Certificate Form 10BE to donors.",
  },
  {
    title: "Revised CA Audit Forms 10B & 10BB",
    desc: "Enhanced audit reporting mandated for trusts having income over ₹5 Crores or receiving foreign contribution or claiming exemptions under sub-clauses of Section 10(23C).",
  },
  {
    title: "Stricter FCRA Compliance",
    desc: "Mandatory SBI New Delhi Main Branch operational account for receiving international foreign grants under the amended Foreign Contribution Regulation Act.",
  },
];

const FAQS = [
  {
    q: "What defines a trust as a 'Public Charitable Trust' in India?",
    a: "Under Section 2(15) of the Income Tax Act, 1961, 'charitable purpose' includes relief of the poor, education, yoga, medical relief, preservation of environment, and advancement of any other object of general public utility. A public charitable trust is established for the benefit of the general public at large, without any restriction to a specific family or private group.",
  },
  {
    q: "What is the difference between Section 12AB and Section 80G registration?",
    a: "Section 12AB exempts the charitable trust itself from paying income tax on donations, voluntary contributions, and investment income. Section 80G benefits the donor, allowing individuals or corporations who donate to claim a 50% deduction from their taxable gross total income.",
  },
  {
    q: "Can a charitable trust carry out business or commercial activities?",
    a: "Under the proviso to Section 2(15), a charitable trust having the objective of 'advancement of any other object of general public utility' may carry out commercial activities provided the gross receipts from such activity do not exceed 20% of the total receipts of the trust for that fiscal year.",
  },
  {
    q: "Can trustees draw a salary or remuneration from the charitable trust?",
    a: "Trustees can receive reasonable compensation for professional services rendered (e.g., medical, legal, or management services) if specifically permitted in the registered Trust Deed, provided the payments comply with Section 13(2)(c) of the Income Tax Act and do not represent excessive or personal benefit extraction.",
  },
  {
    q: "Can an Indian charitable trust accept foreign contributions?",
    a: "Yes, but only after obtaining prior permission or permanent registration under the Foreign Contribution Regulation Act (FCRA) from the Ministry of Home Affairs (MHA) and maintaining an exclusive FCRA bank account with the State Bank of India, New Delhi Main Branch.",
  },
];

export default function CharitableTrustRegistrationACompleteGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <TrustGuideLayout
      currentSlug="charitable-trust-registration-a-complete-guide"
      title="Charitable Trust Registration: A Complete Guide"
      breadcrumbLabel="Charitable Trust Complete Guide"
      metaPublishedDate="October 2026"
      readingTime="12 min read"
      authorName="Merrafilings Non-Profit Legal Advisory"
    >
      {/* Lead Narrative */}
      <div className="text-[15px] sm:text-base text-slate-800 leading-relaxed font-normal space-y-4">
        <p>
          Setting up a <strong className="font-semibold text-slate-950">Public Charitable Trust</strong> is among India's most respected avenues to translate philanthropic goals into lasting institutional impact. By creating a transparent, legally protected entity dedicated exclusively to public welfare, founders can mobilize public donations, secure corporate CSR partnerships, and earn comprehensive statutory tax exemptions.
        </p>
        <p>
          Whether your focus is providing healthcare in underserved rural hamlets, establishing educational institutions, or championing climate resilience, this comprehensive guide provides an exhaustive analysis of legal eligibility, deed drafting rules, tax exemptions under Section 12AB/80G, and ongoing regulatory compliances.
        </p>
      </div>

      {/* Section 1: Charitable Objects */}
      <section className="pt-4 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              01
            </span>
            Recognized Charitable Objects under Section 2(15)
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            To qualify for public trust status and CBDT tax exemptions, trust objects must align with statutory guidelines.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CHARITABLE_OBJECTS.map((item, idx) => (
            <div key={idx} className="p-5 rounded-xl border border-slate-200 bg-white">
              <div className="flex items-center gap-2.5 mb-2">
                <HeartHandshake className="w-4 h-4 text-emerald-600 shrink-0" />
                <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Why Form a Charitable Trust? */}
      <section className="pt-6 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              02
            </span>
            Strategic Advantages of a Registered Charitable Trust
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            A formal registered trust deed unlocks donor confidence, fiscal privileges, and institutional scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
              <Receipt className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">Double Tax Immunity</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              100% tax exemption on trust income under Section 12AB plus 50% income deduction for donors under Section 80G.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">CSR &amp; Grant Access</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Full eligibility for MCA Form CSR-1 registration and NITI Aayog NGO Darpan listing for central government grants.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">Perpetual Existence</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              The charitable trust continues in perpetuity. Replacement of trustees never disrupts institutional ownership.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Comparative Analysis Matrix */}
      <section className="pt-6 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              03
            </span>
            Comparative Matrix: Charitable vs. Religious vs. Private Trust
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            A comprehensive statutory breakdown of non-profit and private trust classifications.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
          <table className="w-full text-left text-xs border-collapse min-w-[620px]">
            <thead>
              <tr className="bg-slate-100/80 border-b border-slate-200 text-slate-900 font-semibold">
                <th className="p-3 w-1/4">Key Parameter</th>
                <th className="p-3 w-1/4 text-emerald-800 bg-emerald-50/50">Public Charitable Trust</th>
                <th className="p-3 w-1/4">Public Religious Trust</th>
                <th className="p-3 w-1/4">Private Family Trust</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              {TRUST_TYPES_MATRIX.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/40"}>
                  <td className="p-3 font-semibold text-slate-900">{row.param}</td>
                  <td className="p-3 bg-emerald-50/30 font-medium text-emerald-950">{row.charitable}</td>
                  <td className="p-3">{row.religious}</td>
                  <td className="p-3">{row.private}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4: Recent Regulatory Reforms */}
      <section className="pt-6 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              04
            </span>
            Recent CBDT Compliance Reforms Every Founder Must Know
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Important statutory amendments impacting charitable trusts across India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {RECENT_REFORMS.map((ref, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-white">
              <h3 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-600" />
                {ref.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">{ref.desc}</p>
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
            In-depth legal answers regarding tax deductions, commercial limitations, and foreign grants.
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
              Empowering Public Philanthropy
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Launch Your Public Charitable Trust with Merrafilings
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              From drafting non-profit deeds with compliant charitable clauses to Sub-Registrar execution, 12AB/80G tax exemptions, and CSR-1 registration, Merrafilings guarantees complete legal peace of mind.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/trust-registration"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 text-xs sm:text-sm font-bold hover:bg-emerald-400 transition-colors shadow-md"
              >
                Incorporate Charitable Trust
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
    </TrustGuideLayout>
  );
}
