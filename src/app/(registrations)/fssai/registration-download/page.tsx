import React from "react";
import FSSAIGuideLayout from "@/components/FSSAIGuideLayout";
import Link from "next/link";
import {
  Download,
  FileCheck2,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  QrCode,
  Lock,
  Printer,
  Smartphone,
  Info,
  Calendar,
  Layers,
} from "lucide-react";

export const metadata = {
  title: "How to Download Your FSSAI Registration Certificate Online | Merrafilings",
  description:
    "Step-by-step tutorial on downloading your approved FSSAI Basic Registration Certificate (Form C) from the FoSCoS portal. Learn requirements, troubleshooting, and display rules.",
};

export default function FSSAIRegistrationDownloadPage() {
  return (
    <FSSAIGuideLayout
      currentSlug="registration-download"
      title="How to Download Your FSSAI Registration Certificate Online"
      breadcrumbLabel="Download FSSAI Certificate"
      metaPublishedDate="Updated October 2026"
      readingTime="8 min read"
      authorName="Merrafilings Food Safety Advisory Desk"
    >
      {/* Hero Callout */}
      <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-2xl p-6 sm:p-7">
        <p className="text-base sm:text-[17px] text-slate-800 leading-relaxed font-normal">
          Once your FSSAI basic registration application is granted by the local Registering Authority, your official certificate — statutory <strong className="font-semibold text-slate-900">Form C</strong> — is immediately generated and digitally signed on the government&apos;s FoSCoS portal. Downloading, printing, and prominently displaying this certificate is not merely a formality; it is an enforceable legal mandate under the Food Safety and Standards Act, 2006. This guide walks you step-by-step through accessing and downloading your certificate.
        </p>
      </div>

      {/* Section 1: What is the Certificate? */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
          <FileCheck2 className="w-6 h-6 text-emerald-600 shrink-0" />
          <span>Understanding the FSSAI Registration Certificate (Form C)</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          The FSSAI Registration Certificate is the formal legal instrument granted to micro, petty, and small-scale food business operators (turnover up to ₹12 Lakhs per annum). Issued in accordance with the <strong>Food Safety and Standards (Licensing and Registration of Food Businesses) Regulations, 2011</strong>, this document certifies that your operational premises comply with basic sanitary and hygiene benchmarks prescribed under Schedule 4.
        </p>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          The certificate features your unique <strong>14-digit FSSAI Registration Number</strong>, an embedded verification QR code, registered trade details, Kind of Business (KoB) activities, and validity dates.
        </p>
      </section>

      {/* Section 2: Registration Download vs License Download */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
          <Layers className="w-6 h-6 text-emerald-600 shrink-0" />
          <span>Registration Certificate vs. Food License Certificate</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          Before initiating your download, ensure you understand which category of authorization was sanctioned for your food establishment:
        </p>

        <div className="grid sm:grid-cols-2 gap-4 pt-1">
          <div className="bg-white border-2 border-emerald-500/30 rounded-xl p-5 shadow-sm space-y-2.5">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-md text-xs font-semibold">
              Covered in this Guide
            </div>
            <h3 className="font-bold text-slate-900 text-base">FSSAI Basic Registration (Form C)</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Issued to petty food manufacturers, small retailers, hawkers, tea vendors, and home kitchens with an annual turnover up to ₹12 Lakhs. The certificate is titled &quot;Registration Certificate under FSS Act, 2006&quot; and designated as Form C.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2.5">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-semibold">
              Separate Workflow
            </div>
            <h3 className="font-bold text-slate-900 text-base">State or Central FSSAI License</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Mandatory for medium-to-large food processing units, hotels, cloud kitchens exceeding ₹12 Lakhs turnover, and importers. The resulting document is titled &quot;License Certificate&quot; and includes Annexures detailing approved manufacturing capacities.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Prerequisites */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
          <Lock className="w-6 h-6 text-emerald-600 shrink-0" />
          <span>Pre-requisites Before Downloading</span>
        </h2>
        <div className="grid sm:grid-cols-3 gap-3.5 pt-1">
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm">
              ✓
            </div>
            <h4 className="font-semibold text-slate-900 text-sm">Approved Status</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Your application ARN must show &quot;Registration Issued&quot; or &quot;Approved&quot;. Certificates cannot be downloaded while pending inspection or under scrutiny.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm">
              <Smartphone className="w-4 h-4" />
            </div>
            <h4 className="font-semibold text-slate-900 text-sm">Portal Credentials</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Access to your FoSCoS login ID (or registered mobile / email) and password created during initial application filing.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm">
              <Printer className="w-4 h-4" />
            </div>
            <h4 className="font-semibold text-slate-900 text-sm">PDF Reader & Printer</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              A device with Adobe Acrobat / PDF viewing capabilities and a color printer for physical certificate framing.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Step-by-Step Download Guide */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
          <Download className="w-6 h-6 text-emerald-600 shrink-0" />
          <span>Step-by-Step: Downloading Your FSSAI Certificate from FoSCoS</span>
        </h2>
        <div className="space-y-3 pt-1">
          <div className="flex gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
            <span className="shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm">
              1
            </span>
            <div className="space-y-1">
              <h3 className="font-semibold text-slate-900 text-sm sm:text-base">Navigate to the Official FoSCoS Portal</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Open your web browser and visit <strong>https://foscos.fssai.gov.in</strong>. Avoid unauthorized copycat sites that charge predatory downloading or retrieval fees.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
            <span className="shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm">
              2
            </span>
            <div className="space-y-1">
              <h3 className="font-semibold text-slate-900 text-sm sm:text-base">Log In as a Food Business Operator (FBO)</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Click on the <strong>&quot;Login - Businesses&quot;</strong> button located at the top-right corner. Enter your registered User ID / Application Reference Number (ARN) / Registered Mobile Number and password, then enter the captcha security code.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
            <span className="shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm">
              3
            </span>
            <div className="space-y-1">
              <h3 className="font-semibold text-slate-900 text-sm sm:text-base">Access the Dashboard Navigation Menu</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Upon successful authentication, locate the left sidebar menu. Click on the <strong>&quot;Issued&quot;</strong> or <strong>&quot;Registration Certificate&quot;</strong> tab.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
            <span className="shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm">
              4
            </span>
            <div className="space-y-1">
              <h3 className="font-semibold text-slate-900 text-sm sm:text-base">Select Your Active Food Business Entry</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                In the table of approved registrations, identify your business entry displaying your permanent 14-digit Registration Number (starting with digits corresponding to your state code).
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
            <span className="shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm">
              5
            </span>
            <div className="space-y-1">
              <h3 className="font-semibold text-slate-900 text-sm sm:text-base">Click &quot;Download Certificate&quot; (Form C)</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Click the blue or green <strong>&quot;Download Certificate&quot;</strong> icon under the Action column. Your browser will prompt you to save the generated PDF file directly to your local computer or smartphone.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
            <span className="shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm">
              6
            </span>
            <div className="space-y-1">
              <h3 className="font-semibold text-slate-900 text-sm sm:text-base">Print in Full Color and Display Prominently</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Open the PDF, check that the FSSAI logo and official green seal are sharp, and print on heavy paper (at least 100 GSM). Frame the certificate and hang it at your main entrance or billing counter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: What the Certificate Contains */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
          <QrCode className="w-6 h-6 text-emerald-600 shrink-0" />
          <span>Key Information Visible on the Downloaded Form C</span>
        </h2>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
          <p className="text-sm text-slate-700">
            Carefully cross-check the details printed on your downloaded Form C immediately after retrieval:
          </p>
          <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
            <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div><strong>14-Digit Registration No:</strong> Your permanent statutory identity.</div>
            </div>
            <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div><strong>QR Code Verification:</strong> Scannable by consumers & food safety officers.</div>
            </div>
            <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div><strong>FBO Name & Trade Title:</strong> Legal entity & public branding name.</div>
            </div>
            <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div><strong>Premises Address:</strong> Geographically demarcated operational site.</div>
            </div>
            <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div><strong>Category / Kind of Business:</strong> Specifically sanctioned food handling scope.</div>
            </div>
            <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div><strong>Validity & Expiry Dates:</strong> Explicit period (1 to 5 years from issuance).</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Troubleshooting Common Download Errors */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
          <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0" />
          <span>Troubleshooting Common Download Obstacles</span>
        </h2>
        <div className="space-y-3">
          <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm text-sm">
            <h3 className="font-semibold text-slate-900 mb-1 flex items-center gap-2">
              <Info className="w-4 h-4 text-sky-600" />
              <span>Status Shows &quot;Under Process&quot; or &quot;Query Raised&quot;</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              The FoSCoS system does not generate Form C until the Registering Authority issues final administrative approval. If a clarification query was raised, you must upload the requested documents within 30 days.
            </p>
          </div>

          <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm text-sm">
            <h3 className="font-semibold text-slate-900 mb-1 flex items-center gap-2">
              <Info className="w-4 h-4 text-sky-600" />
              <span>Forgotten Password / Inactive Mobile Number</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Use the &quot;Forgot Password&quot; link on the login screen. If you no longer have access to the registered mobile number or email ID, a profile update request must be lodged with your Designated Officer through an official affidavit.
            </p>
          </div>

          <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm text-sm">
            <h3 className="font-semibold text-slate-900 mb-1 flex items-center gap-2">
              <Info className="w-4 h-4 text-sky-600" />
              <span>Browser Pop-up Blocker Suppressing the PDF</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Google Chrome and Safari often block automatic PDF downloads from government portals. Ensure pop-ups are permitted for <em>foscos.fssai.gov.in</em> or try holding Ctrl while clicking the download button.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Merrafilings Advisory */}
      <section className="space-y-4 bg-gradient-to-br from-emerald-50 via-teal-50 to-white border border-emerald-200 rounded-2xl p-6 sm:p-7">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
          <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
          <span>Let Merrafilings Manage Your Food Safety Compliance</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          Need help retrieving an old registration number, updating registered premises, or obtaining your fresh FSSAI Basic Registration within 48 to 72 hours? <strong className="font-semibold text-slate-900">Merrafilings</strong> provides complete end-to-end liaison with food safety commissioners across all 28 states and 8 union territories.
        </p>
        <div className="pt-2">
          <Link
            href="/fssai"
            className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium text-sm transition-all shadow-sm hover:shadow"
          >
            <span>Get Started with Merrafilings FSSAI Services</span>
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
              Is a soft copy on my phone sufficient during a food safety inspection?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              No. Section 31 of the Food Safety and Standards Act requires that the certificate be printed and prominently exhibited at the primary entrance or service counter of the premises. Keeping only a digital PDF on your smartphone may lead to an improvement notice or spot penalty.
            </p>
          </div>

          <div className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-white">
            <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-1.5">
              Do I have to pay any extra fee to download the certificate after approval?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              No. Once the statutory registration fee (₹100 per year) is paid at the time of application, downloading Form C from FoSCoS is 100% free of charge. Beware of fraudulent emails claiming certificate delivery fees.
            </p>
          </div>

          <div className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-white">
            <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-1.5">
              How many days before expiry should I initiate renewal?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              You should initiate renewal at least 30 to 60 days before the expiry date shown on your certificate. Initiating renewal after expiry requires submitting a completely fresh application and risks late penalty fees of ₹100 per day.
            </p>
          </div>
        </div>
      </section>
    </FSSAIGuideLayout>
  );
}
