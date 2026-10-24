import React from "react";
import FSSAIGuideLayout from "@/components/FSSAIGuideLayout";
import Link from "next/link";
import {
  FileText,
  Award,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Scale,
  Building,
  Store,
  UtensilsCrossed,
  RotateCcw,
  Clock,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "FSSAI Form C — Basic Registration Certificate Explained | Merrafilings",
  description:
    "Complete legal guide to FSSAI Form C. Discover who receives Form C, compare Form A vs Form C, understand validity, Schedule 4 hygiene norms, and display rules under FSS Act.",
};

export default function FSSAIFormCPage() {
  return (
    <FSSAIGuideLayout
      currentSlug="form-c"
      title="FSSAI Form C — The Basic Registration Certificate Explained"
      breadcrumbLabel="FSSAI Form C"
      metaPublishedDate="Updated October 2026"
      readingTime="8 min read"
      authorName="Merrafilings Regulatory Compliance Desk"
    >
      {/* Intro Hero Box */}
      <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-2xl p-6 sm:p-7">
        <p className="text-base sm:text-[17px] text-slate-800 leading-relaxed font-normal">
          In India&apos;s food safety legal framework, <strong className="font-semibold text-slate-900">FSSAI Form C</strong> is the definitive statutory <strong className="font-semibold text-slate-900">Registration Certificate</strong> issued to micro and petty food business operators. Governed under the Food Safety and Standards (Licensing and Registration of Food Businesses) Regulations, 2011, Form C certifies that a small food business has satisfied statutory registration criteria, committed to Schedule 4 sanitary standards, and is legally licensed to operate in India.
        </p>
      </div>

      {/* Section 1: What is Form C? */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
          <Award className="w-6 h-6 text-emerald-600 shrink-0" />
          <span>What Exactly Is FSSAI Form C?</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          When an entrepreneur or vendor launches a food venture in India, the statutory mandate under Section 31 of the <strong>Food Safety and Standards Act, 2006</strong> requires obtaining prior legal authorization. While larger manufacturers and restaurants require a formal State or Central License, micro-scale food business operators (turnover up to ₹12 Lakhs per annum) are granted <strong>Basic Registration</strong>.
        </p>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          The official certificate generated and signed by the Registering Authority (typically the local Food Safety Officer or designated Municipal Health Officer) upon approving this basic registration is statutory <strong>Form C</strong>. It serves as incontestable proof of lawful compliance during regulatory inspections, bank account openings, and vendor onboardings.
        </p>
      </section>

      {/* Section 2: Who Receives Form C? */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
          <Store className="w-6 h-6 text-emerald-600 shrink-0" />
          <span>Who Is Eligible to Receive FSSAI Form C?</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          Form C is exclusively issued to entities falling within the &quot;Petty Food Business Operator&quot; bracket defined under Regulation 2.1.1 of the 2011 Regulations. This includes:
        </p>

        <div className="grid sm:grid-cols-2 gap-4 pt-1">
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
            <h3 className="font-semibold text-slate-900 text-base flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Petty Food Manufacturers
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Units with manufacturing capacity up to 100 kg/liters per day (excluding milk and meat), or milk collection up to 500 liters per day, or slaughtering capacity up to 2 large animals, 10 small animals, or 50 poultry birds per day.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
            <h3 className="font-semibold text-slate-900 text-base flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Small Retailers & Kiosks
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Kirana stores, petty tea stalls, snack vendors, confectioners, juice centers, and temporary festival food stalls with annual revenue under ₹12 Lakhs.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
            <h3 className="font-semibold text-slate-900 text-base flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Home Bakers & Cloud Kitchens
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Home chefs, home bakers, and artisanal tiffin services producing limited batch foods directly from home kitchens for local consumers.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
            <h3 className="font-semibold text-slate-900 text-base flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Hawkers & Street Food Vendors
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Itinerant vendors, mobile food carts, weekly bazaar food stalls, and dabba delivery services operating without fixed permanent factory setups.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Difference Between Form A and Form C */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
          <Scale className="w-6 h-6 text-emerald-600 shrink-0" />
          <span>FSSAI Form A vs. Form C — Understanding the Difference</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          Many food business operators confuse Form A and Form C. A simple rule of thumb: <strong className="font-semibold text-slate-900">You submit Form A; you receive Form C</strong>.
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-800 font-semibold">
              <tr>
                <th className="py-3 px-4">Attribute</th>
                <th className="py-3 px-4">Form A</th>
                <th className="py-3 px-4">Form C</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50/50">
                <td className="py-3 px-4 font-medium text-slate-900">Legal Character</td>
                <td className="py-3 px-4">Statutory Application Form</td>
                <td className="py-3 px-4">Official Registration Certificate</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="py-3 px-4 font-medium text-slate-900">Submitted / Issued By</td>
                <td className="py-3 px-4">Submitted by the Food Business Operator</td>
                <td className="py-3 px-4">Issued by the Registering Authority</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="py-3 px-4 font-medium text-slate-900">Portal Stage</td>
                <td className="py-3 px-4">Initiation stage (uploading ID & photo)</td>
                <td className="py-3 px-4">Conclusion stage (upon approval)</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="py-3 px-4 font-medium text-slate-900">Statutory Fee</td>
                <td className="py-3 px-4">₹100 per year of requested validity</td>
                <td className="py-3 px-4">No additional fee to generate or print</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="py-3 px-4 font-medium text-slate-900">Public Display Requirement</td>
                <td className="py-3 px-4">No display requirement (internal filing)</td>
                <td className="py-3 px-4">Mandatory framed display at entrance</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4: What Does Form C Contain? */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
          <FileText className="w-6 h-6 text-emerald-600 shrink-0" />
          <span>Statutory Details Contained in FSSAI Form C</span>
        </h2>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 space-y-3">
          <p className="text-sm text-slate-700 leading-relaxed">
            Your Form C certificate is structured in a nationally harmonized format bearing the national emblem, the official FSSAI seal, and the following verified information:
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
            <li className="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Registration Number:</strong> Unique 14-digit registration ID.</span>
            </li>
            <li className="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Name of FBO:</strong> Legal name of proprietor, firm, or society.</span>
            </li>
            <li className="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Address of Food Premises:</strong> Exact physical location of operation.</span>
            </li>
            <li className="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Kind of Business (KoB):</strong> Approved scope (e.g. food retail, catering).</span>
            </li>
            <li className="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Period of Validity:</strong> Explicit commencement and expiration dates.</span>
            </li>
            <li className="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Digital Signature:</strong> Cryptographic sign of Registering Authority.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 5: Validity & Renewal */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
          <Clock className="w-6 h-6 text-emerald-600 shrink-0" />
          <span>Validity and Renewal Timeline</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          At the time of submitting Form A, the applicant can choose a validity period ranging from <strong>1 year up to 5 years</strong>, with the statutory fee calculated at ₹100 per year.
        </p>
        <div className="p-4 bg-emerald-50/70 border border-emerald-200/80 rounded-xl space-y-2 text-sm text-slate-800">
          <h4 className="font-semibold text-emerald-900">Renewal Mandate (Regulation 2.1.10):</h4>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
            An application for renewal of Form C must be lodged on FoSCoS not later than <strong>30 days prior to the expiration date</strong> indicated on the certificate. Renewal applications submitted after the 30-day window attract a statutory late fine of ₹100 per day. If not renewed prior to the actual expiry date, the certificate stands cancelled, requiring a complete fresh application.
          </p>
        </div>
      </section>

      {/* Section 6: Post-Receipt Legal Obligations */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
          <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
          <span>Statutory Obligations After Receiving Form C</span>
        </h2>
        <div className="space-y-3 pt-1">
          <div className="flex gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-sm text-sm">
            <span className="shrink-0 w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-xs">
              1
            </span>
            <div>
              <strong className="text-slate-900">Prominent Physical Display:</strong> Form C must be exhibited in a conspicuous location at the entrance or billing area of the registered food establishment.
            </div>
          </div>

          <div className="flex gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-sm text-sm">
            <span className="shrink-0 w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-xs">
              2
            </span>
            <div>
              <strong className="text-slate-900">14-Digit Number on Bills & Packaging:</strong> The FSSAI registration number and official FSSAI logo must be legibly printed on food packets, delivery containers, invoices, and electronic bill receipts.
            </div>
          </div>

          <div className="flex gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-sm text-sm">
            <span className="shrink-0 w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-xs">
              3
            </span>
            <div>
              <strong className="text-slate-900">Schedule 4 General Hygiene Practices:</strong> Even petty vendors must maintain potable water, pest management, sanitary disposal, and personal cleanliness for all food handlers.
            </div>
          </div>

          <div className="flex gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-sm text-sm">
            <span className="shrink-0 w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-xs">
              4
            </span>
            <div>
              <strong className="text-slate-900">Filing Form D-1 (Where Mandated):</strong> Basic registration holders in certain specialized categories (such as milk collection) must submit periodic half-yearly returns in Form D-1 to the Registering Authority.
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Merrafilings Support */}
      <section className="space-y-4 bg-gradient-to-br from-emerald-50 via-teal-50 to-white border border-emerald-200 rounded-2xl p-6 sm:p-7">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
          <Sparkles className="w-6 h-6 text-emerald-600 shrink-0" />
          <span>Obtain Your Form C Effortlessly with Merrafilings</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          Navigating food safety categories, document uploads, and authority scrutiny can be confusing for small food vendors. At <strong className="font-semibold text-slate-900">Merrafilings</strong>, our legal experts verify your eligibility, prepare Form A, draft landlord declarations, and expedite your Form C certificate generation with zero hassles.
        </p>
        <div className="pt-2">
          <Link
            href="/fssai"
            className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium text-sm transition-all shadow-sm hover:shadow"
          >
            <span>Apply for Basic Registration Online</span>
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
              What happens if my food business turnover exceeds ₹12 Lakhs while holding Form C?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              If your annual turnover crosses ₹12 Lakhs, you must apply to upgrade from Form C (Basic Registration) to a State FSSAI License on the FoSCoS portal. Operating with only a basic registration when turnover exceeds ₹12 Lakhs constitutes non-compliance and can attract fines up to ₹5 Lakhs under Section 63 of the FSS Act.
            </p>
          </div>

          <div className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-white">
            <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-1.5">
              Can I modify the premise address on an existing Form C certificate?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Yes. You can file a Modification Application on FoSCoS by submitting the new address proof and landlord NOC along with a nominal government modification fee. A revised Form C reflecting the updated address will be issued after officer scrutiny.
            </p>
          </div>

          <div className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-white">
            <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-1.5">
              Can one person hold multiple Form C certificates?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Yes. FSSAI registration is location-specific. If an individual operates multiple tea stalls or bakeries across different physical premises, a distinct Form C registration must be obtained for each individual operating location.
            </p>
          </div>
        </div>
      </section>
    </FSSAIGuideLayout>
  );
}
