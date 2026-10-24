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
  FileCheck2,
  FolderLock,
  Layers,
  MapPin,
  Clock,
} from "lucide-react";

const PRIMARY_DOCUMENTS = [
  {
    doc: "Comprehensive Trust Deed",
    authority: "Indian Trusts Act, 1882 / State Registration Act",
    desc: "The principal constitutional instrument typed on state-mandated non-judicial stamp paper, specifying trust objectives, settlor intent, trustee powers, rules of succession, and beneficiary rights.",
    importance: "Mandatory Constitutional Document",
  },
  {
    doc: "PAN Card of Settlor & Trustees",
    authority: "Income Tax Department (CBDT)",
    desc: "Self-attested copies of Permanent Account Numbers for the author/settlor, all proposed managing trustees, and advisory board members.",
    importance: "Identity & Tax Verification",
  },
  {
    doc: "Proof of Identity & Address (Aadhaar / Passport / Voter ID)",
    authority: "Government of India / State Authorities",
    desc: "Valid government-issued photo identity and residential address proofs (Aadhaar Card, Passport, Voter ID, or Driving License) for each trustee.",
    importance: "KYC & Sub-Registrar Verification",
  },
  {
    doc: "Registered Office Address Proof",
    authority: "Local Municipal / Revenue Authority",
    desc: "Recent utility bill (Electricity, Water, or Piped Gas bill not older than 2 months) or municipal property tax receipt for the premises designated as the trust's headquarters.",
    importance: "Jurisdictional Proof",
  },
  {
    doc: "No Objection Certificate (NOC) from Landlord",
    authority: "Property Owner / Lessor",
    desc: "Signed declaration from the legal premise owner confirming unconditional permission to operate the charitable trust from the specified address, accompanied by the rent agreement.",
    importance: "Tenancy Consent",
  },
  {
    doc: "Passport-size Photographs & Witness KYC",
    authority: "Sub-Registrar Biometric Records",
    desc: "Two recent passport-sized color photographs of each trustee and the settlor, alongside KYC proofs (PAN & Aadhaar) for two independent adult witnesses.",
    importance: "Execution & Biometrics",
  },
];

const ANCILLARY_REQUIREMENTS = [
  {
    title: "Drafted Affidavit of Declaration",
    desc: "Notarized affidavit signed by the trustees affirming willingness to accept trusteeship, good standing, and absence of criminal convictions or insolvency proceedings.",
  },
  {
    title: "Corporate Board Resolution (if applicable)",
    desc: "When a private company or corporate entity acts as settlor, a formal resolution from the board of directors authorizing the trust creation and designated signatory is mandatory.",
  },
  {
    title: "Title Deeds of Endowed Immovable Property",
    desc: "If land or commercial buildings are settled into the trust corpus, registered title deeds, non-encumbrance certificates, and valuation reports must be produced.",
  },
  {
    title: "Stamp Duty Payment Challan",
    desc: "State-specific non-judicial stamp paper or e-stamping challan calculated based on initial corpus amount or local registration duty schedules.",
  },
];

const STEP_BY_STEP_PROCESS = [
  {
    step: "01",
    title: "Compile KYC & Supporting Documents",
    desc: "Collect self-attested PAN cards, Aadhaar cards, photographs, registered office address proofs, and landlord NOCs for all trustees.",
  },
  {
    step: "02",
    title: "Draft Custom Legal Trust Deed",
    desc: "Draft the deed on non-judicial stamp paper with explicit clauses on charitable aims, trustee management, banking authority, and dispute mechanisms.",
  },
  {
    step: "03",
    title: "Pay State Stamp Duty & Registration Fees",
    desc: "Purchase required state-specific stamp paper or pay digital e-stamp duty and registration fees as prescribed by the local Sub-Registrar.",
  },
  {
    step: "04",
    title: "Appear Before the Sub-Registrar",
    desc: "The settlor, managing trustees, and two independent witnesses present themselves at the local Sub-Registrar's office for biometric capture and execution.",
  },
  {
    step: "05",
    title: "Receive Registered Trust Deed",
    desc: "Upon physical verification and document scrutiny, the Sub-Registrar issues the officially endorsed Trust Deed with unique registration numbers.",
  },
  {
    step: "06",
    title: "Apply for Trust PAN, TAN & 12AB/80G",
    desc: "Apply for the trust's independent PAN and TAN, open a current bank account, and file Form 10A for 12AB and 80G tax exemptions.",
  },
];

const FAQS = [
  {
    q: "Why is registering a Trust Deed legally mandatory in India?",
    a: "Under Section 5 of the Indian Trusts Act, 1882, no trust in relation to immovable property is valid unless declared by a non-testamentary instrument in writing signed by the author and registered. Furthermore, registration before the Sub-Registrar is essential for public credibility, bank account opening, and claiming tax exemptions under Sections 11, 12AB, and 80G of the Income Tax Act.",
  },
  {
    q: "How many trustees and witnesses are required for trust registration?",
    a: "A trust requires a minimum of two trustees (one of whom is usually the author/settlor and managing trustee) and two independent adult witnesses holding valid government photo identification (such as Aadhaar or Voter ID) who must be physically present during registration before the Sub-Registrar.",
  },
  {
    q: "Can a residential address be used as the registered office for a trust?",
    a: "Yes. A trust can operate its registered office from a residential property owned by one of the trustees or a leased property, provided an electricity bill (< 2 months old) and a signed No Objection Certificate (NOC) from the property owner are submitted.",
  },
  {
    q: "What amount of stamp duty is required for registering a trust deed?",
    a: "Stamp duty on trust deeds is governed by respective State Stamp Acts and varies significantly across India. Generally, for charitable trusts, stamp duty ranges between ₹500 and ₹2,000, or a nominal percentage (approx. 1% to 3%) of the initial trust property or corpus value.",
  },
  {
    q: "What documents are required to open a trust bank account after registration?",
    a: "To open a current bank account, you must present the certified registered Trust Deed, Trust PAN Card, resolution passed by the board of trustees authorizing the bank account operation, and identity/address proofs of all authorized signatories.",
  },
];

export default function TrustRegistrationRequiredDocumentsGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <TrustGuideLayout
      currentSlug="trust-registration-required-documents-guide"
      title="Documents Required for Trust Registration"
      breadcrumbLabel="Documents Required"
      metaPublishedDate="October 2026"
      readingTime="10 min read"
      authorName="Merrafilings Non-Profit Legal Advisory"
    >
      {/* Lead Paragraph */}
      <div className="text-[15px] sm:text-base text-slate-800 leading-relaxed font-normal space-y-4">
        <p>
          Establishing a <strong className="font-semibold text-slate-950">Trust in India</strong> is a strategic and visionary decision for philanthropists, families, and social activists. Whether your mission is to run educational institutions, provide medical relief, manage religious shrines, or secure family wealth for future generations, understanding the precise documentation required ensures an expeditious registration process without legal delays.
        </p>
        <p>
          Governed primarily by the <strong className="font-semibold text-slate-950">Indian Trusts Act, 1882</strong> (for private trusts) and state-level Public Trust Acts / Registration Acts, registering a trust deed transforms a private intention into an enforceable legal entity. This comprehensive checklist details every mandatory document, supporting certificate, and procedural step required by the jurisdictional Sub-Registrar.
        </p>
      </div>

      {/* Section 1: Why Trust Registration is Critical */}
      <section className="pt-4 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              01
            </span>
            Why Trust Registration &amp; Accurate Documentation Matter
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            A registered trust establishes institutional legitimacy, protects family assets, and qualifies for tax exemptions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">Asset Protection &amp; Clarity</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Legally insulates trust property from personal bankruptcy, creditor claims, and family ownership disputes.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
              <Receipt className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">Tax Exemptions (12AB &amp; 80G)</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Mandatory prerequisite to obtain 100% tax exemption on trust receipts and offer 50% deductions to donors.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
              <Landmark className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">Institutional Credibility</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Enables opening bank accounts, acquiring immovable property, receiving CSR donations, and applying for government grants.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Primary Documents Checklist */}
      <section className="pt-6 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              02
            </span>
            Mandatory Documents Required for Trust Registration
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Exhaustive checklist of primary identification and constitutional documents required by the Sub-Registrar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PRIMARY_DOCUMENTS.map((doc, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-slate-200/90 bg-white hover:border-emerald-300 hover:shadow-xs transition-all"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {doc.importance}
                </span>
                <span className="text-[10px] text-slate-500 font-medium">{doc.authority}</span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1.5">{doc.doc}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{doc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Essential Clauses in a Trust Deed */}
      <section className="pt-6 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              03
            </span>
            Core Anatomy of a Robust Legal Trust Deed
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            The Trust Deed is the bedrock of your institution. Merrafilings ensures all mandatory statutory covenants are included.
          </p>
        </div>

        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 space-y-4">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Trust Name &amp; Domicile:</strong> A distinctive non-infringing title reflecting charitable or family objectives.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Charitable Aims &amp; Objects:</strong> Specific clauses addressing education, medical care, poverty relief, or religion.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Settlor &amp; Trustee Powers:</strong> Appointment, tenure, quorum for meetings, and succession rules for board members.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Corpus Endowment Clause:</strong> Irrevocable transfer of the initial settlement fund or immovable assets to the trust.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Banking &amp; Investment Authority:</strong> Clear mandates on authorized signatories, borrowing limits, and asset disposal.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Dissolution / Irrevocability Clause:</strong> Mandatory stipulation that upon dissolution, assets transfer to a similar non-profit.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 4: Ancillary & Jurisdictional Legal Requirements */}
      <section className="pt-6 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              04
            </span>
            Supplementary Legal &amp; State Specific Requirements
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Jurisdictional affidavits, corporate resolutions, and property valuation records.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ANCILLARY_REQUIREMENTS.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-white">
              <h3 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-emerald-600" />
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Step-by-Step Registration Process */}
      <section className="pt-6 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold flex items-center justify-center">
              05
            </span>
            Step-by-Step Trust Registration Workflow
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            A structured roadmap from document preparation to Sub-Registrar execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {STEP_BY_STEP_PROCESS.map((s, idx) => (
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

      {/* Section 6: FAQs */}
      <section className="pt-6 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
            <HelpCircle className="w-6 h-6 text-emerald-600" />
            Frequently Asked Questions (FAQs)
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Clear guidance regarding documentation, stamp duty rules, and registrar execution.
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

      {/* Section 7: Final CTA */}
      <section className="pt-8 pb-4">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-950 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              Trusted Legal Documentation
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Draft &amp; Register Your Trust Deed with Merrafilings
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Eliminate documentation errors and registrar rejections. Merrafilings prepares legally watertight Trust Deeds, handles state stamp duty calculations, coordinates Sub-Registrar execution, and files your 12A/80G tax exemptions seamlessly.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/trust-registration"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 text-xs sm:text-sm font-bold hover:bg-emerald-400 transition-colors shadow-md"
              >
                Register a Trust Now
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold border border-white/20 transition-colors"
              >
                Consult a Trust Lawyer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </TrustGuideLayout>
  );
}
