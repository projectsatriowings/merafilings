"use client";

import React, { useState } from "react";
import Link from "next/link";
import Section8GuideLayout from "@/components/Section8GuideLayout";
import {
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
  Lock,
} from "lucide-react";

const STRATEGIC_ADVANTAGES = [
  {
    title: "Independent Corporate Legal Identity",
    desc: "A Section 8 Company is an autonomous juristic entity. It can acquire, hold, and dispose of property, enter into binding commercial contracts, open corporate bank accounts, and initiate legal proceedings in its own name, completely distinct from its promoters.",
    badge: "Juristic Persona",
  },
  {
    title: "Comprehensive Tax Exemption Shield",
    desc: "By securing registrations under Section 12AB and Section 80G of the Income Tax Act, 1961, the company enjoys 100% tax exemption on non-profit income and voluntary donations, while enabling donors to claim a 50% tax deduction on contributions.",
    badge: "12A & 80G Shield",
  },
  {
    title: "Zero Prescribed Minimum Paid-up Capital",
    desc: "Under current Ministry of Corporate Affairs (MCA) provisions, Section 8 companies do not require any mandatory minimum paid-up capital. Promoters can incorporate with nominal funds and allocate 100% of mobilized resources directly toward programmatic objectives.",
    badge: "Zero Minimum Capital",
  },
  {
    title: "Elevated Institutional Trust & Donor Confidence",
    desc: "Because Section 8 companies operate under the rigorous scrutiny of the Companies Act, 2013, with public financial disclosures on the MCA portal, institutional grantors, bilateral agencies, and CSR committees favor them over unmonitored trusts.",
    badge: "CSR & Grant Ready",
  },
];

const FIVE_FORMATION_STAGES = [
  {
    num: "01",
    title: "Name Availability Search & Reservation (SPICe+ Part A)",
    desc: "Select and reserve an exclusive name reflecting your charitable purpose. Must incorporate non-profit suffixes such as Foundation, Forum, Association, Federation, Council, Chamber, or Institute as mandated by MCA Rule 8 guidelines.",
  },
  {
    num: "02",
    title: "Drafting Specialized Non-Profit Charters (e-MOA & e-AOA)",
    desc: "Draft the electronic Memorandum of Association (Form INC-33) detailing non-profit clauses and strict non-distribution covenants, alongside the electronic Articles of Association (Form INC-34) regulating democratic member governance.",
  },
  {
    num: "03",
    title: "Application for Central Government License (Form INC-12)",
    desc: "Submit Form INC-12 accompanied by three-year income and expenditure estimates, asset statements, and director declarations. The Registrar of Companies verifies the public interest grounds and issues the Section 8 License in Form INC-16.",
  },
  {
    num: "04",
    title: "Integrated SPICe+ Part B Filing with MCA CRC",
    desc: "Submit Form SPICe+ Part B along with director declarations (INC-9), registered office proof (utility bill <2 months old and owner NOC), and AGILE-PRO-S for PAN, TAN, and integrated corporate bank account opening.",
  },
  {
    num: "05",
    title: "Certificate of Incorporation (COI) & CIN Issuance",
    desc: "Upon final electronic scrutiny, the Central Registration Centre (CRC) issues the digitally signed Certificate of Incorporation containing the permanent Corporate Identity Number (CIN), finalizing legal establishment.",
  },
];

const STATUTORY_RULES = [
  {
    title: "Mandatory Annual Financial Audit",
    desc: "Every Section 8 Company must appoint an independent statutory auditor (Chartered Accountant) under Section 139 to conduct a comprehensive audit of accounts, balance sheets, and cash flows annually.",
  },
  {
    title: "ROC Annual Return Filings (AOC-4 & MGT-7)",
    desc: "File audited balance sheets via Form AOC-4 within 30 days of the AGM and annual member return via Form MGT-7/7A within 60 days of the AGM on the MCA portal.",
  },
  {
    title: "Mandatory Corporate Income Tax Return (ITR-7)",
    desc: "Regardless of whether the company has taxable income or enjoys 12A exemption, filing Form ITR-7 with the Income Tax Department by October 31st each year is mandatory.",
  },
  {
    title: "Minimum Board Meetings Requirement",
    desc: "Under Section 173 of the Companies Act, a Section 8 Company must hold at least one board meeting every six calendar months, with a minimum gap of 90 days between two consecutive meetings.",
  },
];

const FAQS = [
  {
    q: "Why is a Section 8 Company considered superior to a registered Trust or Society?",
    a: "A Section 8 Company operates under a uniform central law (Companies Act, 2013) with nationwide validity, strict ROC financial reporting, limited liability for members, and seamless transferability of governance. Trusts and societies are governed by state-specific registrars with variable rules, lower transparency, and personal liability exposure for trustees.",
  },
  {
    q: "Can a Section 8 Company be converted into a commercial Private Limited Company?",
    a: "Under Section 8(4)(ii) of the Companies Act, a Section 8 Company cannot convert into any other company class except in accordance with strict prescribed conditions (passing a special resolution in a general meeting, obtaining regional director approval, and settling all received grants and tax benefits).",
  },
  {
    q: "What is Form INC-16 in Section 8 company registration?",
    a: "Form INC-16 is the official statutory license issued by the Central Government (Ministry of Corporate Affairs) granting permission to incorporate as a non-profit company without including the words 'Limited' or 'Private Limited' in its name.",
  },
  {
    q: "Do members in a Section 8 Company have voting rights?",
    a: "Yes. Every member of a Section 8 Company possesses voting rights as defined in its Articles of Association. Governance operates democratically, typically on a 'one member, one vote' principle, ensuring community alignment and unbiased decision-making.",
  },
  {
    q: "What tax benefits are available to donors contributing to a Section 8 Company?",
    a: "When a Section 8 company obtains registration under Section 80G of the Income Tax Act, individual, corporate, and institutional donors can claim a 50% tax deduction on the eligible donation amount from their gross total income.",
  },
];

export default function Section8CompanyRegistrationBenefitsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Section8GuideLayout
      currentSlug="section-8-company-registration-benefits"
      title="Understanding Section 8 Company in India"
      breadcrumbLabel="Section 8 Company in India"
      metaPublishedDate="October 2026"
      readingTime="10 min read"
      authorName="Merrafilings Non-Profit Advisory Desk"
    >
      {/* Lead Paragraph */}
      <div className="text-[15px] sm:text-base text-slate-800 leading-relaxed font-normal space-y-4">
        <p>
          India has emerged as a global focal point for social entrepreneurship, charitable initiatives, and non-profit innovation. Among the multiple legal avenues available to founders, the <strong className="font-semibold text-slate-950">Section 8 Company</strong> represents the most advanced, respected, and legally sound structure for executing public welfare programs without private profit motives.
        </p>
        <p>
          Constituted under Section 8 of the <strong className="font-semibold text-slate-950">Companies Act, 2013</strong>, this entity channels all capital and revenue toward promoting science, arts, commerce, education, charity, and social welfare. By prohibiting dividend distributions to members, it creates a transparent corporate sanctuary dedicated solely to social good. This comprehensive handbook provides an authoritative analysis of its formation process, strategic advantages, and key statutory regulations.
        </p>
      </div>

      {/* Section 1: Strategic Advantages */}
      <section className="pt-4 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              01
            </span>
            Why Choose a Section 8 Company Structure?
          </h2>
          <p className="text-sm text-slate-600 mt-1.5 font-normal">
            Key operational, legal, and reputational benefits that distinguish Section 8 corporations:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {STRATEGIC_ADVANTAGES.map((adv, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-slate-200/90 bg-white hover:border-emerald-300 hover:shadow-xs transition-all space-y-2"
            >
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold uppercase tracking-wider border border-emerald-200/70">
                {adv.badge}
              </span>
              <h3 className="text-base font-bold text-slate-900 pt-1">
                {adv.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
                {adv.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: 5-Stage Formation */}
      <section className="pt-6 space-y-6 border-t border-slate-100">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              02
            </span>
            The 5-Stage Formation Process under MCA SPICe+
          </h2>
          <p className="text-sm text-slate-600 mt-1.5 font-normal">
            Step-by-step statutory pathway from name reservation to incorporation certificate issuance:
          </p>
        </div>

        <div className="space-y-3.5">
          {FIVE_FORMATION_STAGES.map((s, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-slate-200/80 bg-white hover:border-emerald-300 hover:shadow-xs transition-all flex items-start gap-4"
            >
              <div className="w-9 h-9 rounded-xl bg-slate-900 text-emerald-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                {s.num}
              </div>
              <div className="space-y-1 flex-1">
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Statutory Regulations */}
      <section className="pt-6 space-y-5 border-t border-slate-100">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              03
            </span>
            Mandatory Statutory Regulations &amp; Governance
          </h2>
          <p className="text-sm text-slate-600 mt-1.5 font-normal">
            Statutory responsibilities required to maintain active corporate license and tax-exempt status:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {STATUTORY_RULES.map((rule, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-slate-200/90 bg-[#FAF9F7]/70 space-y-1.5"
            >
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{rule.title}</span>
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
                {rule.desc}
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
            Practical answers regarding Section 8 incorporation and ongoing regulatory compliance:
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
