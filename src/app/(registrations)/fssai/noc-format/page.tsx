import React from "react";
import FSSAIGuideLayout from "@/components/FSSAIGuideLayout";
import Link from "next/link";
import {
  FileText,
  Building,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Scale,
  FileCheck,
  Copy,
  Info,
} from "lucide-react";

export const metadata = {
  title: "FSSAI NOC Format — When Required & What It Must Contain | Merrafilings",
  description:
    "Comprehensive guide on FSSAI No Objection Certificate (NOC) format. Learn when landlord or municipal NOC is required for food business registration and access ready-to-use templates.",
};

export default function FSSAINocFormatPage() {
  return (
    <FSSAIGuideLayout
      currentSlug="noc-format"
      title="FSSAI NOC Format — When It Is Required and What It Should Contain"
      breadcrumbLabel="FSSAI NOC Format"
      metaPublishedDate="Updated October 2026"
      readingTime="7 min read"
      authorName="Merrafilings Corporate Documentation Desk"
    >
      {/* Intro Hero Box */}
      <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-2xl p-6 sm:p-7">
        <p className="text-base sm:text-[17px] text-slate-800 leading-relaxed font-normal">
          A <strong className="font-semibold text-slate-900">No Objection Certificate (NOC)</strong> is a pivotal legal supporting document in the FSSAI registration and licensing workflow. It serves as formal, written proof that the owner of the premises, commercial society, or local governing authority has unconditionally permitted food business operations from that designated physical address. Understanding exactly when an NOC is demanded by food safety officers, who must issue it, and what wording it must contain prevents costly rejection notices on the FoSCoS portal.
        </p>
      </div>

      {/* Section 1: What is an FSSAI NOC? */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
          <FileText className="w-6 h-6 text-emerald-600 shrink-0" />
          <span>What is an FSSAI No Objection Certificate?</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          Under the <strong>Food Safety and Standards (Licensing and Registration of Food Businesses) Regulations, 2011</strong>, the Registering Authority or Designated Officer (DO) must confirm that an applicant has lawful possession and unhindered rights to operate a food establishment from their chosen premises. 
        </p>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          An FSSAI NOC is an official declaration issued by the property owner, landlord, municipality, or commercial complex management stating that they harbor no objections to the storage, processing, cooking, packaging, or sale of edible items at the declared site. While self-owned properties can satisfy premise proof with title deeds or tax receipts, leased and shared locations invariably require an explicit NOC.
        </p>
      </section>

      {/* Section 2: When is an NOC Required? */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
          <Building className="w-6 h-6 text-emerald-600 shrink-0" />
          <span>When Is an FSSAI NOC Required?</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          Food business operators (FBOs) are frequently issued scrutiny queries (Form A or Form B clarifications) on the FoSCoS dashboard due to missing landlord consent. You must submit an NOC under the following circumstances:
        </p>

        <div className="grid sm:grid-cols-2 gap-4 pt-2">
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2.5">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold text-sm">
              01
            </div>
            <h3 className="font-semibold text-slate-900 text-base">Rented or Leased Premises</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              When the applicant does not own the property. Even with a registered rent agreement, registering authorities often mandate a specific FSSAI NOC if the lease deed does not explicitly state commercial food usage.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2.5">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold text-sm">
              02
            </div>
            <h3 className="font-semibold text-slate-900 text-base">Shared Commercial Spaces & Cloud Kitchens</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              When operating from co-working hubs, multi-brand cloud kitchen pods, or shopping mall food courts, an NOC from the master leaseholder or facility management is mandatory.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2.5">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold text-sm">
              03
            </div>
            <h3 className="font-semibold text-slate-900 text-base">Home-Based Food Businesses</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              For home bakers, tiffin providers, and cottage food artisans operating from residential apartments, housing societies (RWAs) often demand an NOC to confirm no disturbance or unauthorized commercial usage.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2.5">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold text-sm">
              04
            </div>
            <h3 className="font-semibold text-slate-900 text-base">Municipal & Panchayat Clearances</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Certain state municipal corporations or village panchayats require local health officer / sanitary inspector NOCs before approving state food manufacturing licenses.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Types of NOCs */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
          <Scale className="w-6 h-6 text-emerald-600 shrink-0" />
          <span>Types of NOCs Used in FSSAI Applications</span>
        </h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-800 font-semibold">
              <tr>
                <th className="py-3 px-4">NOC Classification</th>
                <th className="py-3 px-4">Issuing Authority / Person</th>
                <th className="py-3 px-4">Applicable Scenario</th>
                <th className="py-3 px-4">Key Verification Point</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50/50">
                <td className="py-3 px-4 font-medium text-slate-900">Landlord / Owner NOC</td>
                <td className="py-3 px-4">Legal title holder of property</td>
                <td className="py-3 px-4">Rented restaurants, kiosks, bakeries</td>
                <td className="py-3 px-4">Matches name on electricity bill / municipal tax</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="py-3 px-4 font-medium text-slate-900">Society / RWA NOC</td>
                <td className="py-3 px-4">Apartment Owners Association</td>
                <td className="py-3 px-4">Home kitchens, dabba services, residential setups</td>
                <td className="py-3 px-4">Official letterhead with secretary stamp</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="py-3 px-4 font-medium text-slate-900">Municipal Health NOC</td>
                <td className="py-3 px-4">Local Municipal Corporation</td>
                <td className="py-3 px-4">Commercial eateries, meat shops, sweet stalls</td>
                <td className="py-3 px-4">Trade license & hygiene compliance certificate</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="py-3 px-4 font-medium text-slate-900">Mall / Facility NOC</td>
                <td className="py-3 px-4">Commercial Complex Operator</td>
                <td className="py-3 px-4">Food courts, multiplex counters, retail outlets</td>
                <td className="py-3 px-4">Premises demarcated with unit / kiosk number</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4: Key Components */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
          <FileCheck className="w-6 h-6 text-emerald-600 shrink-0" />
          <span>Essential Components of an FSSAI NOC</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          While the FSSAI does not prescribe a rigid single statutory template, an acceptable NOC must contain all necessary legal particulars. Omitting any of these core fields can cause application rejection:
        </p>
        <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
          <li className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-lg border border-slate-100">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Date of Execution:</strong> Must be recent and prior to or concurrent with application date.</span>
          </li>
          <li className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-lg border border-slate-100">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Owner Full Details:</strong> Legal name, parentage, permanent address, and contact number.</span>
          </li>
          <li className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-lg border border-slate-100">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>FBO Exact Legal Name:</strong> Individual proprietor name or registered company / LLP entity name.</span>
          </li>
          <li className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-lg border border-slate-100">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Exact Premise Address:</strong> Must match word-for-word with the electricity bill and FoSCoS form.</span>
          </li>
          <li className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-lg border border-slate-100">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Kind of Business (KoB):</strong> Specific statement specifying food activities (e.g., cloud kitchen, bakery).</span>
          </li>
          <li className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-lg border border-slate-100">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Clear No-Objection Clause:</strong> Unambiguous declaration allowing FSSAI registration and operations.</span>
          </li>
        </ul>
      </section>

      {/* Section 5: Copy-Pasteable Template */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
            <Copy className="w-6 h-6 text-emerald-600 shrink-0" />
            <span>Sample FSSAI Landlord NOC Format</span>
          </h2>
          <span className="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full font-medium">
            Ready to Copy
          </span>
        </div>
        <p className="text-sm text-slate-600">
          You may print this format on plain paper (or ₹20/₹50 non-judicial stamp paper if requested by local authority), sign it, and upload a clear PDF scan onto FoSCoS:
        </p>

        <div className="relative bg-slate-900 text-slate-100 rounded-xl p-5 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto shadow-inner border border-slate-800">
          <pre className="whitespace-pre-wrap">
{`NO OBJECTION CERTIFICATE (NOC) FOR FSSAI REGISTRATION / LICENSE

Date: [DD/MM/YYYY]

To,
The Registering / Licensing Authority,
Food Safety and Standards Authority of India (FSSAI),
[District / City, State]

Subject: No Objection Certificate for carrying on Food Business Operations

I/We, [Name of Landlord / Legal Owner], son/daughter of [Father's Name], residing at [Landlord's Permanent Address], contact number [Mobile Number], do hereby solemnly affirm and declare as follows:

1. That I am the sole legal and absolute owner of the premises situated at:
   [Complete Property Address: Shop/Plot/Door No., Street, Area, City, District, State, PIN Code]
   (matching the attached electricity bill / property tax receipt).

2. That I have leased / rented / permitted the said premises to [Name of Food Business Operator / Firm / Company], represented by [Name of Proprietor / Director / Partner], for carrying on business operations.

3. That I have NO OBJECTION whatsoever to [Name of Food Business Operator] operating a food business under the name and style of "[Trade Name / Brand Name]" specifically for [describe food activity: e.g., restaurant, bakery, cloud kitchen, food packaging, grocery retail] from the aforementioned premises.

4. That I have NO OBJECTION to the Food Safety and Standards Authority of India (FSSAI) issuing a Basic Registration Certificate / State License / Central License to the said applicant for the said location.

5. This certificate is issued at the request of the applicant solely for the purpose of obtaining FSSAI certification and statutory food safety compliance.

DEPONENT / LANDLORD SIGNATURE: _______________________

Name: [Landlord / Owner Full Name]
Phone Number: [Mobile Number]
Email Address: [Email ID]
Enclosure: Copy of Electricity Bill / Municipal Tax Receipt / Sale Deed (Self-Attested)`}
          </pre>
        </div>
      </section>

      {/* Section 6: Important Guidelines & Common Pitfalls */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
          <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0" />
          <span>Critical Guidelines & Mistakes to Avoid</span>
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-4 bg-amber-50/70 border border-amber-200/80 rounded-xl text-slate-800 text-sm">
            <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold text-amber-900">Mismatched Premise Address:</strong> Even minor spelling variations between the address mentioned in the NOC, the electricity bill, and Form A/B will trigger a query on the FoSCoS portal. Ensure exact character-for-character consistency.
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-amber-50/70 border border-amber-200/80 rounded-xl text-slate-800 text-sm">
            <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold text-amber-900">Self-Declarations Are Not Landlord NOCs:</strong> A self-declaration signed by the food business operator claiming they occupy rented premises is not legally acceptable in lieu of the actual property owner's written NOC.
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-amber-50/70 border border-amber-200/80 rounded-xl text-slate-800 text-sm">
            <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold text-amber-900">Undated Certificates:</strong> Submitting an NOC without an explicit date of execution is one of the most frequent grounds for scrutiny rejection. Always ensure the date is visible.
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Merrafilings Support */}
      <section className="space-y-4 bg-gradient-to-br from-emerald-50 via-teal-50 to-white border border-emerald-200 rounded-2xl p-6 sm:p-7">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
          <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
          <span>How Merrafilings Streamlines Your FSSAI Documentation</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          Drafting compliant documentation is where most food businesses lose precious weeks due to repeated portal queries. At <strong className="font-semibold text-slate-900">Merrafilings</strong>, our food safety compliance lawyers and corporate paralegals draft custom landlord NOCs, verify electricity bill utility proofs against title records, and manage your complete FoSCoS filing from scratch.
        </p>
        <div className="pt-2">
          <Link
            href="/fssai"
            className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium text-sm transition-all shadow-sm hover:shadow"
          >
            <span>Apply for FSSAI Registration with Merrafilings</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Section 8: FAQs */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
          <HelpCircle className="w-6 h-6 text-emerald-600 shrink-0" />
          <span>Frequently Asked Questions</span>
        </h2>
        <div className="space-y-3 pt-1">
          <div className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-white">
            <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-1.5">
              Is an NOC mandatory if I already possess a registered lease agreement?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              If your registered lease agreement specifically and unambiguously specifies that the premises is let out for operating a food establishment, restaurant, or commercial kitchen, the lease deed itself usually suffices. However, if the agreement is general commercial or residential, an explicit FSSAI NOC from the landlord is required to avoid scrutiny queries.
            </p>
          </div>

          <div className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-white">
            <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-1.5">
              Does an FSSAI Landlord NOC need to be on non-judicial stamp paper?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              For Basic Registration, an NOC signed on plain paper along with the landlord&apos;s utility bill is generally accepted by the Registering Authority. For State or Central Licenses, several state licensing authorities require the NOC to be printed on ₹20, ₹50, or ₹100 stamp paper and notarized. Merrafilings provides pre-vetted formats matching your specific state jurisdiction.
            </p>
          </div>

          <div className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-white">
            <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-1.5">
              Do I need an NOC if I own the food business property?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              No. If you are the registered owner of the premises, you do not require a landlord NOC. You simply need to provide proof of ownership, such as a recent electricity bill in your name, municipal property tax receipt, or registered sale deed.
            </p>
          </div>
        </div>
      </section>
    </FSSAIGuideLayout>
  );
}
