import React from "react";
import FSSAIGuideLayout from "@/components/FSSAIGuideLayout";
import Link from "next/link";
import {
  FileText,
  Calendar,
  AlertTriangle,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Scale,
  Building,
  Factory,
  Clock,
  Sparkles,
  TrendingUp,
  Receipt,
  FileCheck,
} from "lucide-react";

export const metadata = {
  title: "FSSAI Form 9 — Annual Return Filing for Licensed Food Businesses | Merrafilings",
  description:
    "Comprehensive compliance guide for FSSAI Form 9 annual return. Learn who must file, the 31st May due date, online FoSCoS submission steps, and penalties for non-filing.",
};

export default function FSSAIForm9Page() {
  return (
    <FSSAIGuideLayout
      currentSlug="form-9"
      title="FSSAI Form 9 — Annual Return Filing for Licensed Food Businesses"
      breadcrumbLabel="FSSAI Form 9 Annual Return"
      metaPublishedDate="Updated October 2026"
      readingTime="8 min read"
      authorName="Merrafilings Corporate Compliance Division"
    >
      {/* Intro Hero Callout */}
      <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-2xl p-6 sm:p-7">
        <p className="text-base sm:text-[17px] text-slate-800 leading-relaxed font-normal">
          Holding an FSSAI State or Central License brings ongoing statutory disclosure obligations under the <strong className="font-semibold text-slate-900">Food Safety and Standards Act, 2006</strong>. Chief among these is filing <strong className="font-semibold text-slate-900">FSSAI Form 9</strong> — the mandatory annual compliance return declaring your food manufacturing, processing, importation, and handling volumes for the preceding financial year. Submitting Form 9 by <strong className="font-semibold text-slate-900">31st May</strong> each year is vital to prevent daily late fines and protect your license from regulatory suspension.
        </p>
      </div>

      {/* Section 1: What is Form 9? */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
          <FileText className="w-6 h-6 text-emerald-600 shrink-0" />
          <span>What Is FSSAI Form 9?</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          Statutory <strong>Form 9</strong> is the official annual return format prescribed under Regulation 2.1.13 of the <strong>Food Safety and Standards (Licensing and Registration of Food Businesses) Regulations, 2011</strong>. It is designed to furnish the Food Safety and Standards Authority of India with a transparent, verifiable account of the food commodities produced, imported, or commercialized by licensed facilities during the past financial year (April 1 to March 31).
        </p>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          Through Form 9 filings on the FoSCoS portal, food safety commissioners monitor national production volumes, assess ingredient consumption trends, track domestic versus export distributions, and ensure that licensed units do not exceed their authorized manufacturing capacities.
        </p>
      </section>

      {/* Section 2: Who Must File Form 9? */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
          <Factory className="w-6 h-6 text-emerald-600 shrink-0" />
          <span>Who Is Required to File FSSAI Form 9?</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          The legal obligation to file Form 9 applies to all food business operators possessing an active <strong>State or Central FSSAI License</strong> involved in production, handling, or import activities. This includes:
        </p>

        <div className="grid sm:grid-cols-2 gap-4 pt-1">
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
            <h3 className="font-semibold text-slate-900 text-base flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Food Manufacturers & Processors
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Industrial food processing units, bakeries, confectioneries, beverage bottling plants, edible oil refineries, and snack makers holding state or central licenses.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
            <h3 className="font-semibold text-slate-900 text-base flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Packers, Repackers & Relabellers
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Entities that procure bulk food ingredients and package, brand, or label them into consumer-ready or commercial units under their proprietary trade names.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
            <h3 className="font-semibold text-slate-900 text-base flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Food Importers
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              All commercial importers bringing packaged, raw, or semi-processed food items into Indian customs territory under a Central FSSAI License.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
            <h3 className="font-semibold text-slate-900 text-base flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Large Wholesalers & Storage Hubs
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Warehouses, cold storages, and wholesale distributors managing significant tonnage of specialized food products under state or central licensing jurisdictions.
            </p>
          </div>
        </div>

        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700 leading-relaxed">
          <strong>Important Note on Basic Registrations:</strong> Small businesses operating under Basic FSSAI Registration (Form C) do NOT file Form 9. Where applicable, petty businesses file half-yearly returns in Form D-1. Similarly, dairy units follow dedicated half-yearly reporting under Form D-2.
        </div>
      </section>

      {/* Section 3: Statutory Due Date */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
          <Calendar className="w-6 h-6 text-emerald-600 shrink-0" />
          <span>Statutory Deadline for Filing FSSAI Form 9</span>
        </h2>
        <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-bold text-emerald-700 tracking-wider uppercase">Annual Statutory Due Date</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">On or Before 31st May</h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Covers operational transactions for the preceding financial year (1st April to 31st March).
            </p>
          </div>
          <div className="shrink-0 bg-white border border-emerald-200 rounded-xl p-4 shadow-sm text-center">
            <span className="text-xs text-slate-500 block">Reporting Period</span>
            <span className="font-bold text-slate-900 text-sm">Preceding FY (12 Months)</span>
          </div>
        </div>
      </section>

      {/* Section 4: Details Captured */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
          <FileCheck className="w-6 h-6 text-emerald-600 shrink-0" />
          <span>What Information Must Be Disclosed in Form 9?</span>
        </h2>
        <div className="space-y-3 pt-1">
          <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
            <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm space-y-1">
              <strong className="text-slate-900 font-semibold block">1. FBO & License Credentials</strong>
              <p className="text-slate-600 text-xs leading-relaxed">
                Full legal name of the entity, exact licensed premises address, and the 14-digit state/central license number.
              </p>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm space-y-1">
              <strong className="text-slate-900 font-semibold block">2. Product Classification & Volume</strong>
              <p className="text-slate-600 text-xs leading-relaxed">
                Itemized breakdown according to FSSAI food category codes, product descriptions, installed daily capacity vs actual volume produced (in MT or Liters).
              </p>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm space-y-1">
              <strong className="text-slate-900 font-semibold block">3. Raw Material Sourcing</strong>
              <p className="text-slate-600 text-xs leading-relaxed">
                Quantity, value, and origin of primary agricultural or processed ingredients consumed during production cycles.
              </p>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm space-y-1">
              <strong className="text-slate-900 font-semibold block">4. Domestic Sales vs Export Turnover</strong>
              <p className="text-slate-600 text-xs leading-relaxed">
                Distribution metrics showing total domestic dispatch value and foreign exchange earnings from export consignments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Step-by-Step Online Filing on FoSCoS */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
          <TrendingUp className="w-6 h-6 text-emerald-600 shrink-0" />
          <span>How to File FSSAI Form 9 Online via FoSCoS</span>
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Physical paper submissions are no longer entertained. All licensed FBOs must file through the FoSCoS compliance portal:
        </p>

        <div className="space-y-3 pt-1">
          <div className="flex gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
            <span className="shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm">
              1
            </span>
            <div className="space-y-1">
              <h3 className="font-semibold text-slate-900 text-sm sm:text-base">Login to the FoSCoS Business Portal</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Visit <strong>foscos.fssai.gov.in</strong> and log in using your licensed User ID and password.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
            <span className="shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm">
              2
            </span>
            <div className="space-y-1">
              <h3 className="font-semibold text-slate-900 text-sm sm:text-base">Navigate to Annual Return Filing</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                From the left dashboard navigation panel, select <strong>&quot;Annual Return / Compliance Filing&quot;</strong> and choose <strong>&quot;Form 9 - Annual Return for Manufacturers / Importers&quot;</strong>.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
            <span className="shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm">
              3
            </span>
            <div className="space-y-1">
              <h3 className="font-semibold text-slate-900 text-sm sm:text-base">Select the Applicable Financial Year</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Choose the relevant financial year from the drop-down menu. The portal auto-populates your approved food product categories from your license schedule.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
            <span className="shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm">
              4
            </span>
            <div className="space-y-1">
              <h3 className="font-semibold text-slate-900 text-sm sm:text-base">Enter Production, Purchase & Sales Data</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Fill in the monthly or aggregated annual figures for production, raw material consumption, domestic sales, and exports. (If no production occurred, mark the &quot;Nil Return&quot; option).
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
            <span className="shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm">
              5
            </span>
            <div className="space-y-1">
              <h3 className="font-semibold text-slate-900 text-sm sm:text-base">Review, Submit & Archive Acknowledgement</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Verify all mathematical entries against your audited financial statements. Click Submit, download the digital acknowledgement receipt, and store it for your five-year compliance dossier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Penalties for Non-Filing */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
          <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0" />
          <span>Statutory Penalties & Consequences of Late Filing</span>
        </h2>
        <div className="space-y-3">
          <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-xl text-slate-800 text-sm space-y-1">
            <strong className="font-semibold text-amber-900 block">Daily Late Fee of ₹100 per Day:</strong>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Under FSSAI orders and FoSCoS rules, defaulting licensed FBOs incur a late fine of <strong>₹100 per day</strong> for every day of delay past 31st May, up to a maximum statutory cap (often equivalent to five times the annual license fee).
            </p>
          </div>

          <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-xl text-slate-800 text-sm space-y-1">
            <strong className="font-semibold text-amber-900 block">Blocking of License Renewal:</strong>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              The FoSCoS automated system restricts license renewal applications if prior years&apos; annual returns are flagged as pending. FBOs are forced to clear accumulated late fines before renewal processing.
            </p>
          </div>

          <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-xl text-slate-800 text-sm space-y-1">
            <strong className="font-semibold text-amber-900 block">Suspension Risk During Audits:</strong>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Food Safety Officers routinely inspect annual return acknowledgements during periodic hygiene audits. Failure to produce valid Form 9 records can result in an improvement notice under Section 32 or suspension of manufacturing permissions.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Merrafilings Annual Return Desk */}
      <section className="space-y-4 bg-gradient-to-br from-emerald-50 via-teal-50 to-white border border-emerald-200 rounded-2xl p-6 sm:p-7">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
          <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
          <span>Never Miss an FSSAI Deadline with Merrafilings</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          Reconciling manufacturing logs, batch outputs, and sales ledgers across multiple product codes can be cumbersome. At <strong className="font-semibold text-slate-900">Merrafilings</strong>, our food safety compliance accountants cross-check your accounting records, ensure full accuracy across FSSAI categories, and file your Form 9 well ahead of the 31st May deadline.
        </p>
        <div className="pt-2">
          <Link
            href="/fssai"
            className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium text-sm transition-all shadow-sm hover:shadow"
          >
            <span>Consult Merrafilings Compliance Experts</span>
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
              Must I file Form 9 if my factory was non-operational or had zero sales?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Yes. If your food license was active during any part of the financial year, filing is mandatory even if production was zero. In this scenario, you must file a &quot;Nil Return&quot; declaring 0 MT and ₹0 value. Failing to file a Nil Return attracts the same ₹100/day late penalty.
            </p>
          </div>

          <div className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-white">
            <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-1.5">
              Can restaurants, hotels, and cloud kitchens file Form 9?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Form 9 specifically applies to food manufacturers, processors, repackers, and importers. Standard food service establishments like restaurants and catering units holding state licenses generally do not file Form 9, but they must maintain food safety supervisor (FoSTaC) certificates, water testing reports, and medical fitness records.
            </p>
          </div>

          <div className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-white">
            <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-1.5">
              Can an offline paper return be submitted directly to the food safety commissioner?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              No. FSSAI has entirely transitioned to paperless digital compliance through the FoSCoS portal. Manual paper returns submitted via postal dispatch or in person are not recognized as valid statutory submissions.
            </p>
          </div>
        </div>
      </section>
    </FSSAIGuideLayout>
  );
}
