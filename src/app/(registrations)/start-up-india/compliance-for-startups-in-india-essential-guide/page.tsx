import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import StartupIndiaGuideLayout from "@/components/StartupIndiaGuideLayout";
import {
  Rocket,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Building,
  Award,
  FileText,
  BadgePercent,
  Clock,
  ArrowRight,
  HelpCircle,
  Landmark,
  Scale,
  Sparkles,
  DollarSign,
  AlertTriangle,
  Calendar,
  Lock,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Compliance for Startups in India: Essential Guide | Merrafilings",
  description:
    "Master essential regulatory compliances for Indian startups: MCA ROC annual filings, INC-20A, GST, Income Tax, TDS, EPFO/ESIC labor laws, POSH, and DPIIT self-certification benefits.",
  keywords: [
    "compliance for startups in India",
    "startup compliance checklist",
    "startup annual filing ROC",
    "Form INC-20A commencement of business",
    "startup GST compliance",
    "startup labor law self certification",
    "startup compliance calendar",
  ],
};

export default function StartupComplianceGuidePage() {
  return (
    <StartupIndiaGuideLayout
      currentSlug="compliance-for-startups-in-india-essential-guide"
      title="Compliance for Startups in India: Essential Guide"
      breadcrumbLabel="Compliance for Startups Guide"
      metaPublishedDate="Oct 2026"
      readingTime="12 min read"
      authorName="Merrafilings Corporate Secretarial &amp; Tax Desk"
    >
      {/* Intro Overview */}
      <section className="space-y-4">
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
          Launching a new venture in India is an exhilarating journey, but navigating the dense regulatory and statutory landscape is critical to long-term survival and investor readiness. For early-stage ventures and scaling startups, <strong className="font-semibold text-slate-900">statutory corporate compliance</strong> is not merely a legal formality—it is the foundational cornerstone that protects corporate valuation, secures institutional funding, and shields founders from personal liabilities.
        </p>
        <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
          Non-compliance with the Ministry of Corporate Affairs (MCA), Income Tax Department, GST authorities, or labor regulators can lead to hefty compounding penalties, striking off of company names, or disqualification of directors. In this comprehensive manual, we outline the mandatory legal framework, annual compliance calendars, labor self-certification norms, and best practices tailored specifically for Indian startups.
        </p>
      </section>

      {/* Why Compliance Matters */}
      <section className="space-y-4 pt-4 border-t border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
            01
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Why Regulatory Compliance is Crucial for Indian Startups
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-3xs">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Investor Due Diligence Readiness</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Venture capital firms and angel networks conduct exhaustive legal, secretarial, and financial due diligence before signing term sheets. A spotless compliance record accelerates funding rounds and eliminates valuation discounts.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-3xs">
            <div className="flex items-center gap-2 text-rose-800 font-bold text-sm mb-1.5">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>Shield Against Compounding Fines</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              MCA levies default late filing penalties of ₹100 per day per form with no upper cap. Serious non-compliances lead to director disqualification under Section 164(2) and freeze of corporate bank accounts.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-3xs">
            <div className="flex items-center gap-2 text-blue-800 font-bold text-sm mb-1.5">
              <Building className="w-4 h-4 text-blue-600" />
              <span>Operational Continuity &amp; Legal Standing</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Maintaining active MCA status (&quot;Active / Compliant&quot;) is required to bid on government GeM tenders, secure bank credit lines, obtain trade licenses, and issue employee stock option plans (ESOPs).
            </p>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Startup Compliance */}
      <section className="space-y-4 pt-4 border-t border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
            02
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            The 4 Essential Compliance Pillars
          </h2>
        </div>

        {/* Pillar 1: MCA Secretarial Compliance */}
        <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3">
          <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base">
            <FileText className="w-5 h-5 text-emerald-600" />
            <span>Pillar 1: MCA &amp; ROC Corporate Secretarial Compliances</span>
          </div>
          <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
            Immediately following company incorporation via the SPICe+ single window, startups must execute critical post-incorporation formalities:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
            <li className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-slate-200/80">
              <span className="text-emerald-600 font-bold">✓</span>
              <span><strong>Form INC-20A:</strong> Commencement of Business certificate filed within 180 days of incorporation after subscribers deposit capital into the corporate bank account.</span>
            </li>
            <li className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-slate-200/80">
              <span className="text-emerald-600 font-bold">✓</span>
              <span><strong>Form ADT-1:</strong> Statutory appointment of first auditor within 30 days of incorporation by the Board of Directors.</span>
            </li>
            <li className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-slate-200/80">
              <span className="text-emerald-600 font-bold">✓</span>
              <span><strong>Board Meetings &amp; AGM:</strong> First Board Meeting within 30 days, minimum 4 meetings/year (or 2 for small companies), and Annual General Meeting within 6 months of FY end.</span>
            </li>
            <li className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-slate-200/80">
              <span className="text-emerald-600 font-bold">✓</span>
              <span><strong>AOC-4 &amp; MGT-7:</strong> Annual filing of audited Balance Sheet &amp; Profit/Loss statement (AOC-4) and Annual Return of shareholding (MGT-7/7A).</span>
            </li>
            <li className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-slate-200/80">
              <span className="text-emerald-600 font-bold">✓</span>
              <span><strong>DIR-3 KYC:</strong> Annual web-KYC or e-Form filing for every Director holding a DIN by September 30th to avoid DIN deactivation.</span>
            </li>
            <li className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-slate-200/80">
              <span className="text-emerald-600 font-bold">✓</span>
              <span><strong>Statutory Registers:</strong> Maintenance of Member Register (MGT-1), Director Register, and Share Transfer Register at the registered office.</span>
            </li>
          </ul>
        </div>

        {/* Pillar 2: Taxation & Withholding Taxes */}
        <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3">
          <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base">
            <BadgePercent className="w-5 h-5 text-blue-600" />
            <span>Pillar 2: Direct &amp; Indirect Tax Obligations (GST, Income Tax, TDS)</span>
          </div>
          <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
            Tax compliance operates on monthly, quarterly, and annual cadence to prevent interest accruals and input tax credit (ITC) blockages:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="bg-white p-3 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-1">GST Filings</h4>
              <p className="text-slate-600 leading-relaxed">
                Monthly filing of outward supplies (GSTR-1 by 11th) and summary tax payments (GSTR-3B by 20th), plus annual reconciliation (GSTR-9/9C) if turnover crosses ₹2 Cr.
              </p>
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-1">TDS Compliance</h4>
              <p className="text-slate-600 leading-relaxed">
                Monthly deposit of tax deducted at source by 7th of following month. Quarterly return filings (Form 24Q for salaries, Form 26Q for vendor payments) by 31st of month following quarter.
              </p>
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-1">Corporate Income Tax</h4>
              <p className="text-slate-600 leading-relaxed">
                Filing of annual corporate tax return (ITR-6 for Pvt Ltd, ITR-5 for LLP) by statutory deadline (October 31 for audited entities) alongside Tax Audit Report (Form 3CA/3CD).
              </p>
            </div>
          </div>
        </div>

        {/* Pillar 3: Labor & Employment Laws */}
        <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3">
          <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base">
            <Users className="w-5 h-5 text-purple-600" />
            <span>Pillar 3: Labor, Employment &amp; POSH Regulations</span>
          </div>
          <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
            Protecting employees while maintaining fair workplace standards:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <strong className="text-slate-900">EPFO &amp; ESIC:</strong> Mandatory for establishments employing 20+ (EPF) or 10+ (ESI) staff. Monthly returns and challan deposits by 15th of each month.
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <strong className="text-slate-900">Professional Tax (PT):</strong> State-specific employer enrollment (PTRC) and employee deduction (PTEC) with monthly/annual returns.
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <strong className="text-slate-900">POSH Act Compliance:</strong> Mandatory formation of Internal Complaints Committee (ICC) for companies with 10+ staff, annual POSH report to District Officer.
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <strong className="text-slate-900">DPIIT Self-Certification:</strong> Recognized startups can self-certify under 9 labor statutes (Contract Labour, Gratuity, EPF, ESI, Maternity) for up to 5 years without inspections.
            </div>
          </div>
        </div>

        {/* Pillar 4: IP & Foreign Investment (FEMA) */}
        <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3">
          <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base">
            <Lock className="w-5 h-5 text-amber-600" />
            <span>Pillar 4: Intellectual Property &amp; Cross-Border FDI / FEMA Compliance</span>
          </div>
          <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
            Startups raising offshore venture capital or deploying proprietary code must maintain tight compliance:
          </p>
          <ul className="space-y-1.5 text-xs text-slate-700">
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span><strong>RBI FEMA Form FC-GPR:</strong> Must be filed on the RBI FIRMS portal within 30 days of equity share or convertible instrument allotment to foreign investors.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span><strong>Registered Valuer Certificate:</strong> All equity or convertible issuances must be backed by a valuation report prepared by an IBBI Registered Valuer or SEBI Merchant Banker.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span><strong>Proprietary IP Assignment:</strong> Founders, coders, and freelance contractors must execute explicit intellectual property assignment agreements transferring ownership exclusively to the company.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Startup Compliance Calendar */}
      <section className="space-y-4 pt-4 border-t border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
            03
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Startup Annual Compliance Calendar
          </h2>
        </div>

        <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-3xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold">
              <tr>
                <th className="p-3 sm:p-4">Frequency</th>
                <th className="p-3 sm:p-4">Statutory Form / Filing</th>
                <th className="p-3 sm:p-4">Governing Authority</th>
                <th className="p-3 sm:p-4">Statutory Due Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="p-3 sm:p-4 font-semibold text-slate-900">Post-Setup</td>
                <td className="p-3 sm:p-4 font-medium text-emerald-700">Form INC-20A (Commencement)</td>
                <td className="p-3 sm:p-4">MCA / ROC</td>
                <td className="p-3 sm:p-4">Within 180 days of incorporation</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="p-3 sm:p-4 font-semibold text-slate-900">Post-Setup</td>
                <td className="p-3 sm:p-4 font-medium text-emerald-700">Form ADT-1 (Auditor Appointment)</td>
                <td className="p-3 sm:p-4">MCA / ROC</td>
                <td className="p-3 sm:p-4">Within 30 days of incorporation</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="p-3 sm:p-4 font-semibold text-slate-900">Monthly</td>
                <td className="p-3 sm:p-4">GSTR-1 &amp; GSTR-3B</td>
                <td className="p-3 sm:p-4">GST Portal (CBIC)</td>
                <td className="p-3 sm:p-4">11th &amp; 20th of following month</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="p-3 sm:p-4 font-semibold text-slate-900">Monthly</td>
                <td className="p-3 sm:p-4">TDS Challan 281 Deposit</td>
                <td className="p-3 sm:p-4">Income Tax Dept</td>
                <td className="p-3 sm:p-4">7th of following month</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="p-3 sm:p-4 font-semibold text-slate-900">Quarterly</td>
                <td className="p-3 sm:p-4">TDS Returns (24Q &amp; 26Q)</td>
                <td className="p-3 sm:p-4">TRACES / ITD</td>
                <td className="p-3 sm:p-4">31st of month following quarter</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="p-3 sm:p-4 font-semibold text-slate-900">Annual</td>
                <td className="p-3 sm:p-4">DIR-3 KYC (Director KYC)</td>
                <td className="p-3 sm:p-4">MCA / ROC</td>
                <td className="p-3 sm:p-4">September 30th</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="p-3 sm:p-4 font-semibold text-slate-900">Annual</td>
                <td className="p-3 sm:p-4">Corporate ITR-6 / Tax Audit</td>
                <td className="p-3 sm:p-4">Income Tax Dept</td>
                <td className="p-3 sm:p-4">October 31st (for audited companies)</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="p-3 sm:p-4 font-semibold text-slate-900">Annual</td>
                <td className="p-3 sm:p-4">Form AOC-4 (Financials)</td>
                <td className="p-3 sm:p-4">MCA / ROC</td>
                <td className="p-3 sm:p-4">Within 30 days of AGM (typically Oct 30)</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="p-3 sm:p-4 font-semibold text-slate-900">Annual</td>
                <td className="p-3 sm:p-4">Form MGT-7/7A (Annual Return)</td>
                <td className="p-3 sm:p-4">MCA / ROC</td>
                <td className="p-3 sm:p-4">Within 60 days of AGM (typically Nov 29)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Best Practices for Founders */}
      <section className="space-y-4 pt-4 border-t border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
            04
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Best Practices to Ensure Seamless Compliance
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-3xs">
            <h3 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>Automate Filing Reminders</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Track deadlines via an enterprise compliance dashboard. Avoid eleventh-hour ROC or GST portal traffic delays and late penalty surcharges.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-3xs">
            <h3 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
              <Scale className="w-4 h-4 text-blue-600" />
              <span>Engage Retainer CA &amp; CS Experts</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Partner with seasoned corporate legal professionals to supervise board minutes, secretarial registers, and tax filings, freeing founders to focus on product and sales.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-3xs">
            <h3 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-purple-600" />
              <span>Conduct Pre-Funding Audits</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Perform quarterly mock due diligence audits to rectify statutory gaps, cap table mismatches, or missing board resolutions before institutional investors review your records.
            </p>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="space-y-4 pt-4 border-t border-slate-100">
        <div className="flex items-center gap-2.5">
          <HelpCircle className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          <div className="p-4 rounded-xl border border-slate-200/90 bg-white">
            <h3 className="text-sm font-bold text-slate-900 mb-1.5">
              What happens if a startup fails to file Form INC-20A within 180 days?
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
              Failure to file Form INC-20A prevents the company from commencing business operations or exercising borrowing powers. The Registrar of Companies (ROC) can initiate striking-off proceedings under Section 248, and every defaulting officer faces a penalty of ₹1,000 per day up to ₹1,00,000.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200/90 bg-white">
            <h3 className="text-sm font-bold text-slate-900 mb-1.5">
              Is a statutory audit mandatory even if the startup has zero revenue?
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
              Yes. Under the Companies Act, 2013, every incorporated Private Limited Company must have its financial statements audited by an independent Chartered Accountant and file Form AOC-4 and MGT-7 annually, regardless of whether operations have commenced or revenue was generated.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200/90 bg-white">
            <h3 className="text-sm font-bold text-slate-900 mb-1.5">
              How does DPIIT recognition assist in reducing labor compliance burden?
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
              DPIIT recognized startups can self-certify compliance for 9 labor laws via the Shram Suvidha portal. No physical inspections by labor officers are conducted for up to 3 to 5 years unless a credible complaint of violation is submitted in writing and approved by a supervisory authority.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200/90 bg-white">
            <h3 className="text-sm font-bold text-slate-900 mb-1.5">
              How does Merrafilings manage compliance for early-stage startups?
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
              Merrafilings offers comprehensive annual compliance retainer packages covering Form INC-20A, ADT-1, AOC-4, MGT-7/7A, DIR-3 KYC, GST return filing, TDS management, statutory audit coordination, and DPIIT compliance tracking under dedicated senior CA/CS guidance.
            </p>
          </div>
        </div>
      </section>
    </StartupIndiaGuideLayout>
  );
}
