import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import ProducerCompanyGuideLayout from "@/components/ProducerCompanyGuideLayout";
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  FolderLock,
  Building,
  HelpCircle,
  AlertTriangle,
  Receipt,
  UserCheck,
  Home,
  Sprout,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Documents Required for Producer Company Registration | Merrafilings",
  description:
    "Exhaustive checklist of documents required for Producer Company registration in India. KYC of directors, primary producer proof (7/12, Patta), registered office proofs, and MCA filing formats.",
  keywords: [
    "documents required for producer company registration",
    "producer company KYC documents",
    "primary producer proof 7/12 extract",
    "FPO registration documents",
    "MCA SPICe+ documents checklist",
  ],
};

export default function ProducerCompanyDocumentsGuidePage() {
  return (
    <ProducerCompanyGuideLayout
      currentSlug="producer-company-registration-documents-guide"
      title="Documents Required for Producer Company Registration: An In-Depth Guide"
      breadcrumbLabel="Required Documents Guide"
      metaPublishedDate="Oct 2026"
      readingTime="10 min read"
      authorName="Merrafilings Agribusiness Compliance Desk"
    >
      {/* Introduction */}
      <section className="space-y-4">
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-700">
          Establishing a <strong className="font-semibold text-slate-900">Producer Company</strong> (FPO) in India requires a thorough and precise understanding of the statutory documentation mandated by the Ministry of Corporate Affairs (MCA). Unlike an ordinary private limited company, a Producer Company requires dual layers of legal verification: standard corporate promoter KYC alongside verified proof of <strong className="font-semibold text-slate-900">primary agricultural producer status</strong> for all founding shareholders.
        </p>
        <p className="text-[15px] sm:text-base leading-relaxed text-slate-700">
          Any discrepancies in name spellings across revenue records, outdated utility bills, or mismatched identity proofs can result in formal CRC resubmission notices, causing unnecessary delays of weeks. This detailed guide by{" "}
          <Link href="/" className="text-emerald-700 font-medium hover:underline">
            Merrafilings
          </Link>{" "}
          provides an exhaustive, structured checklist of every document required from directors, shareholders, land authorities, and registered office landlords to ensure seamless first-attempt MCA approval.
        </p>
      </section>

      {/* Understanding Producer Company Registration */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm">
            01
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Why Documentation Accuracy is Critical
          </h2>
        </div>
        <p className="text-[14.5px] sm:text-[15px] leading-relaxed text-slate-700">
          Under Part IXA of the Companies Act, the Registrar of Companies must confirm that every founding member qualifies as a &quot;primary producer&quot;—someone who earns their livelihood directly from farming, horticulture, dairy, forestry, or allied primary produce. Preparing standardized, clean digital dossiers ensures quick verification by the MCA Central Registration Centre (CRC).
        </p>
      </section>

      {/* Complete Checklist of Documents */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm">
            02
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Exhaustive Checklist of Required Documents
          </h2>
        </div>
        <p className="text-[14.5px] sm:text-[15px] leading-relaxed text-slate-700">
          The documentation is categorized into four distinct statutory sections:
        </p>

        {/* Category 1: Proof of Primary Producer Status */}
        <div className="p-5 rounded-2xl border border-slate-200 bg-white space-y-3">
          <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
            <Sprout className="w-5 h-5 text-emerald-600" />
            <span>Category A: Proof of Primary Producer Status (Mandatory for All 10+ Members)</span>
          </div>
          <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
            Every founding member (minimum 10 individuals or 2 producer institutions) must submit at least one official document substantiating active agricultural involvement:
          </p>
          <ul className="space-y-2 text-xs sm:text-[13px] text-slate-800">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Land Ownership Records:</strong> Latest 7/12 extract (Satbara), Khasra-Khatauni, Jamabandi, or Record of Rights (RoR) registered in the member&apos;s name.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Revenue Authority Certificate:</strong> Primary Producer Certificate issued by the local Tehsildar, Village Revenue Officer (VRO), or Gram Panchayat Sarpanch.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Kisan Credit Card (KCC) Passbook:</strong> Copy of active KCC issued by a nationalized or cooperative bank showing operational agricultural credit.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Tenant Farmer Documentation:</strong> In the case of landless tenant farmers, a certified cultivation agreement, Pashu Kisan Credit Card (dairy), or local agriculture officer endorsement.</span>
            </li>
          </ul>
        </div>

        {/* Category 2: Directors & Members Identity & Address Proof */}
        <div className="p-5 rounded-2xl border border-slate-200 bg-white space-y-3">
          <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
            <UserCheck className="w-5 h-5 text-emerald-600" />
            <span>Category B: Identity &amp; Address Proofs (Directors &amp; Shareholders)</span>
          </div>
          <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
            Required from all proposed directors (minimum 5) and shareholders:
          </p>
          <ul className="space-y-2 text-xs sm:text-[13px] text-slate-800">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>PAN Card (Compulsory for Indian Nationals):</strong> Self-attested copy. Name and date of birth must match government records verbatim.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Identity Proof:</strong> Valid Aadhaar Card, Voter Identity Card, Passport, or Driving License.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Personal Residential Address Proof:</strong> Bank account statement, electricity bill, telephone bill, or mobile postpaid bill <strong>not older than 2 months</strong>.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Passport Photos:</strong> Recent passport-sized color photographs in high resolution.</span>
            </li>
          </ul>
        </div>

        {/* Category 3: Registered Office Premises Proof */}
        <div className="p-5 rounded-2xl border border-slate-200 bg-white space-y-3">
          <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
            <Home className="w-5 h-5 text-emerald-600" />
            <span>Category C: Registered Office Premises Proof</span>
          </div>
          <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
            The registered office can be commercial, agricultural, or residential premises located anywhere within India:
          </p>
          <ul className="space-y-2 text-xs sm:text-[13px] text-slate-800">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Latest Utility Bill:</strong> Electricity bill, water bill, or gas bill issued within the last 2 months showing the exact premises address.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>No Objection Certificate (NOC):</strong> Signed written NOC from the property owner authorizing the company to use the address for MCA communications.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Rent Agreement / Lease Deed:</strong> Notarized rent agreement if the premises are leased, or title deed/tax receipt if self-owned.</span>
            </li>
          </ul>
        </div>

        {/* Category 4: Digital Signatures & Statutory Secretarial Forms */}
        <div className="p-5 rounded-2xl border border-slate-200 bg-white space-y-3">
          <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
            <FolderLock className="w-5 h-5 text-emerald-600" />
            <span>Category D: Digital Signatures &amp; Secretarial Declarations</span>
          </div>
          <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
            Prepared and electronically verified by Merrafilings:
          </p>
          <ul className="space-y-2 text-xs sm:text-[13px] text-slate-800">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Class-3 Digital Signature Certificate (DSC):</strong> Secured for all 5 proposed directors to sign electronic SPICe+ forms.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Director Consent (Form DIR-2):</strong> Formal written consent to act as director with disclosures of interests in other entities.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Promoter Declaration (Form INC-9):</strong> Legal affidavit confirming non-conviction and compliance with company formation laws.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Custom MOA &amp; AOA:</strong> Tailored charter documents drafted with statutory Part IXA producer clauses.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Common Mistakes to Avoid */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm">
            03
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Common Documentation Pitfalls &amp; Rejection Risks
          </h2>
        </div>
        <p className="text-[14.5px] sm:text-[15px] leading-relaxed text-slate-700">
          The MCA Central Registration Centre enforces strict automated and manual validation rules. Avoid these frequent filing errors:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-3">
          <div className="p-4 rounded-xl border border-red-200/80 bg-red-50/40">
            <div className="flex items-center gap-2 text-red-900 font-semibold text-xs sm:text-sm mb-1">
              <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
              <span>Name Mismatches Across Documents</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              If an individual&apos;s name differs even by an initial between their PAN, Aadhaar, and 7/12 land record, MCA scrutiny will reject the application. A supporting name affidavit is required.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-red-200/80 bg-red-50/40">
            <div className="flex items-center gap-2 text-red-900 font-semibold text-xs sm:text-sm mb-1">
              <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
              <span>Stale Utility Bills (&gt; 60 Days Old)</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              Utility bills (electricity, water, telephone) for both personal addresses and the registered office must be dated within 2 months of the filing date.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-red-200/80 bg-red-50/40">
            <div className="flex items-center gap-2 text-red-900 font-semibold text-xs sm:text-sm mb-1">
              <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
              <span>Insufficient Minimum Directors/Members</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              Submitting fewer than 10 primary producer subscribers or fewer than 5 directors is a statutory violation under Part IXA that results in instant rejection.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-red-200/80 bg-red-50/40">
            <div className="flex items-center gap-2 text-red-900 font-semibold text-xs sm:text-sm mb-1">
              <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
              <span>Missing Producer Status Proof</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              Submitting standard KYC without valid revenue authority producer certificates or land patta records will lead to disqualification by the CRC scrutiny officer.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="space-y-4 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm">
            04
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3.5">
          <div className="p-4 rounded-xl border border-slate-200 bg-white">
            <h3 className="text-sm font-semibold text-slate-900">
              Can landless agricultural laborers or tenant farmers become members?
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-600 mt-2 leading-relaxed">
              Yes. A landless farmer can qualify as a primary producer by obtaining a formal certificate from the local Village Revenue Officer (VRO), Tehsildar, or Gram Panchayat confirming active agricultural labor or tenant cultivation, or through a Pashu Kisan Credit Card for dairy/livestock farmers.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white">
            <h3 className="text-sm font-semibold text-slate-900">
              What is the maximum number of members a Producer Company can have?
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-600 mt-2 leading-relaxed">
              Unlike a standard Private Limited Company (which is capped at 200 members), a Producer Company has <strong>no upper limit</strong> on the number of members. It can expand to thousands of farmer shareholders across multiple districts.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white">
            <h3 className="text-sm font-semibold text-slate-900">
              How long does document processing and incorporation take?
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-600 mt-2 leading-relaxed">
              With complete, verified KYC and land records in hand, Merrafilings processes the entire incorporation application and obtains the Certificate of Incorporation in 15 to 20 working days.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white">
            <h3 className="text-sm font-semibold text-slate-900">
              Do directors have to physically visit the ROC or Merrafilings office?
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-600 mt-2 leading-relaxed">
              No. The entire process with Merrafilings is 100% digital. Documents are uploaded via our secure online portal, and digital signatures are verified remotely.
            </p>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="space-y-3 pt-6 border-t border-slate-100">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900">
          Summary
        </h2>
        <p className="text-[14px] sm:text-[14.5px] leading-relaxed text-slate-700">
          Understanding and assembling the precise documents required for producer company registration can significantly expedite your startup journey. Ensuring complete, verified KYC, valid primary producer land certificates, and accurate registered office documentation guarantees a fast, hassle-free incorporation.
        </p>
        <p className="text-[14px] sm:text-[14.5px] leading-relaxed text-slate-700">
          Let{" "}
          <Link href="/producer-company-registration" className="text-emerald-700 font-semibold hover:underline">
            Merrafilings Agribusiness Compliance Specialists
          </Link>{" "}
          review and prepare your FPO dossier for swift, first-time MCA approval.
        </p>
      </section>
    </ProducerCompanyGuideLayout>
  );
}
