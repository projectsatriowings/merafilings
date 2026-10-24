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
  Globe,
  Zap,
  Briefcase,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Startup India Scheme Benefits | Unlocking Entrepreneurial Success | Merrafilings",
  description:
    "Explore the full spectrum of Startup India Scheme benefits: 3-year Section 80-IAC tax holiday, angel tax exemption, ₹10,000 Cr Fund of Funds, 80% patent discounts, and self-certification compliance.",
  keywords: [
    "Startup India scheme benefits",
    "Startup India tax exemptions",
    "Section 80-IAC income tax holiday",
    "DPIIT angel tax relief",
    "Startup India funding",
    "Fund of Funds for Startups FFS",
    "Patent fee rebate for startups",
  ],
};

export default function StartupIndiaBenefitsPage() {
  return (
    <StartupIndiaGuideLayout
      currentSlug="unlocking-startup-india-scheme-benefits"
      title="Unlocking Entrepreneurial Success with Startup India Scheme Benefits"
      breadcrumbLabel="Startup India Scheme Benefits"
      metaPublishedDate="Oct 2026"
      readingTime="11 min read"
      authorName="Merrafilings Corporate Advisory Team"
    >
      {/* Intro Overview */}
      <section className="space-y-4">
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
          India&apos;s entrepreneurial landscape has witnessed a transformative paradigm shift with the introduction of the <strong className="font-semibold text-slate-900">Startup India Scheme</strong>. Launched in January 2016 by the Government of India, the initiative is architected to eliminate systemic entry barriers, catalyze capital inflow, and provide young enterprises with institutional stability.
        </p>
        <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
          For founders operating in highly competitive markets, leveraging the multi-tiered benefits offered under Startup India is critical to lengthening capital runway, protecting core intellectual property, and scaling rapidly without suffocating compliance overhead. In this detailed guide, we unpack each statutory incentive, eligibility standard, and modern regulatory update to help you maximize venture growth.
        </p>
      </section>

      {/* Comprehensive Benefits Grid */}
      <section className="space-y-4 pt-4 border-t border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
            01
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Core Benefits of the Startup India Scheme
          </h2>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">
          The Startup India framework delivers actionable competitive advantages across taxation, legal compliance, capital raising, and government contracting:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-3">
          {/* Card 1: 3-Year Income Tax Holiday */}
          <div className="p-5 rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/50 via-white to-emerald-50/20 shadow-3xs">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-2">
              <BadgePercent className="w-4 h-4 text-emerald-600" />
              <span>3-Year Tax Exemption (Section 80-IAC)</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
              DPIIT recognized Private Limited companies and LLPs can claim a 100% tax deduction on business profits for three consecutive financial years out of their first ten years. This allows startups to retain vital cash flow and reinvest profits directly into product R&amp;D and talent acquisition.
            </p>
          </div>

          {/* Card 2: Angel Tax Exemption */}
          <div className="p-5 rounded-2xl border border-blue-200/80 bg-gradient-to-br from-blue-50/50 via-white to-blue-50/20 shadow-3xs">
            <div className="flex items-center gap-2 text-blue-800 font-bold text-sm mb-2">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Complete Angel Tax Relief (Section 56)</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
              Exemption from tax under Section 56(2)(viib) on capital investments received from eligible angel investors, venture funds, and high-net-worth individuals at valuations above the Fair Market Value (FMV), verified through filing Form 2 on the DPIIT portal.
            </p>
          </div>

          {/* Card 3: Reduced Compliance Burden */}
          <div className="p-5 rounded-2xl border border-purple-200/80 bg-gradient-to-br from-purple-50/50 via-white to-purple-50/20 shadow-3xs">
            <div className="flex items-center gap-2 text-purple-800 font-bold text-sm mb-2">
              <Scale className="w-4 h-4 text-purple-600" />
              <span>Labor &amp; Environmental Self-Certification</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
              Startups can self-certify compliance under 9 major labor statutes (including EPFO, ESIC, Gratuity, and Maternity Benefits) and 3 environmental laws. No routine regulatory inspections are conducted for up to 3 to 5 years unless a credible complaint is filed in writing.
            </p>
          </div>

          {/* Card 4: ₹10,000 Cr Fund of Funds */}
          <div className="p-5 rounded-2xl border border-amber-200/80 bg-gradient-to-br from-amber-50/50 via-white to-amber-50/20 shadow-3xs">
            <div className="flex items-center gap-2 text-amber-800 font-bold text-sm mb-2">
              <DollarSign className="w-4 h-4 text-amber-600" />
              <span>₹10,000 Crore Fund of Funds (FFS)</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
              Managed by SIDBI, the FFS injects institutional capital into SEBI-registered Alternative Investment Funds (AIFs) which, in turn, are mandated to invest in innovative homegrown startups, significantly multiplying venture capital availability.
            </p>
          </div>

          {/* Card 5: Intellectual Property Rebates */}
          <div className="p-5 rounded-2xl border border-cyan-200/80 bg-gradient-to-br from-cyan-50/50 via-white to-cyan-50/20 shadow-3xs">
            <div className="flex items-center gap-2 text-cyan-800 font-bold text-sm mb-2">
              <Award className="w-4 h-4 text-cyan-600" />
              <span>80% Patent &amp; 50% Trademark Subsidies</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
              Startups receive an 80% statutory fee waiver for filing patent applications and 50% waiver for trademark registrations. Furthermore, government-appointed facilitators provide free legal prosecution and advisory for filing IP applications.
            </p>
          </div>

          {/* Card 6: GeM Tender Exemptions */}
          <div className="p-5 rounded-2xl border border-rose-200/80 bg-gradient-to-br from-rose-50/50 via-white to-rose-50/20 shadow-3xs">
            <div className="flex items-center gap-2 text-rose-800 font-bold text-sm mb-2">
              <Landmark className="w-4 h-4 text-rose-600" />
              <span>Public Procurement &amp; GeM Startup Runway</span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
              Government departments and public sector undertakings (PSUs) are instructed to waive criteria relating to prior turnover and prior operating experience for recognized startups participating in public tenders, with zero Earnest Money Deposit (EMD).
            </p>
          </div>
        </div>
      </section>

      {/* Statutory Eligibility Checklist */}
      <section className="space-y-4 pt-4 border-t border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
            02
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Eligibility Criteria: Who Can Avail These Benefits?
          </h2>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">
          Not all businesses automatically qualify as startups under Indian corporate law. To apply for DPIIT recognition, your enterprise must strictly fulfill the following 5 statutory parameters:
        </p>

        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 bg-white shadow-3xs">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-semibold text-slate-900">1. Incorporated as an Eligible Entity</h3>
              <p className="text-xs text-slate-600 mt-0.5">
                The business must be formally incorporated as a Private Limited Company (under Companies Act, 2013), a Limited Liability Partnership (under LLP Act, 2008), or a registered Partnership Firm (under Indian Partnership Act, 1932). Sole proprietorships and OPCs are not eligible for DPIIT.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 bg-white shadow-3xs">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-semibold text-slate-900">2. Within 10 Years from Incorporation</h3>
              <p className="text-xs text-slate-600 mt-0.5">
                The period of existence must not have exceeded 10 years from the date of its original registration or incorporation certificate.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 bg-white shadow-3xs">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-semibold text-slate-900">3. Annual Turnover Under ₹100 Crore</h3>
              <p className="text-xs text-slate-600 mt-0.5">
                The entity&apos;s annual turnover has not exceeded ₹100 Crore in any financial year since its incorporation. Once turnover surpasses ₹100 Crore, startup recognition benefits expire.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 bg-white shadow-3xs">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-semibold text-slate-900">4. Genuine Innovation &amp; Scalability</h3>
              <p className="text-xs text-slate-600 mt-0.5">
                The entity must be engaged in innovation, development, or improvement of products, processes, or services, or possess a scalable business model with high potential for employment generation or wealth creation.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 bg-white shadow-3xs">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-semibold text-slate-900">5. Not a Restructured or Split-Up Entity</h3>
              <p className="text-xs text-slate-600 mt-0.5">
                The venture must NOT be formed by splitting up, de-merger, or reconstruction of an existing operating business or firm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Trends & Policy Enhancements */}
      <section className="space-y-4 pt-4 border-t border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
            03
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Current Trends &amp; Recent Scheme Updates
          </h2>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">
          As India solidifies its position as the world&apos;s third-largest startup ecosystem, several policy enhancements have recently been introduced:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60">
            <h3 className="text-sm font-bold text-slate-900 mb-1.5 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Emphasis on Green Tech</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              New dedicated seed allocations and incubation pathways for climate-tech, circular economy, and renewable energy startups to align with India&apos;s Net Zero 2070 commitments.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60">
            <h3 className="text-sm font-bold text-slate-900 mb-1.5 flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-600" />
              <span>DeepTech &amp; AI Mission</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              The National Deep Tech Startup Policy (NDTSP) framework offers specialized R&amp;D grants, semiconductor testbeds, and accelerated sovereign patent examination for AI &amp; deep-tech ventures.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60">
            <h3 className="text-sm font-bold text-slate-900 mb-1.5 flex items-center gap-2">
              <Globe className="w-4 h-4 text-purple-600" />
              <span>International Startup Bridges</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Bilateral startup bridge agreements with over 15 nations (including Singapore, UAE, Japan, and the UK) facilitating soft landing, cross-border capital access, and global market expansion.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison: Standard Enterprise vs. DPIIT Recognized Startup */}
      <section className="space-y-4 pt-4 border-t border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
            04
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Comparative Overview: Regular Enterprise vs. DPIIT Startup
          </h2>
        </div>

        <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-3xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold">
              <tr>
                <th className="p-3 sm:p-4">Feature / Parameter</th>
                <th className="p-3 sm:p-4">Regular Corporate Enterprise</th>
                <th className="p-3 sm:p-4 text-emerald-700">DPIIT Recognized Startup</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="p-3 sm:p-4 font-medium text-slate-900">Corporate Income Tax</td>
                <td className="p-3 sm:p-4">Standard 22% to 30% on taxable net profits</td>
                <td className="p-3 sm:p-4 font-semibold text-emerald-700">100% Tax Exemption for 3 years (Section 80-IAC)</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="p-3 sm:p-4 font-medium text-slate-900">Patent Filing Official Fees</td>
                <td className="p-3 sm:p-4">Full statutory fee (~₹8,000 to ₹40,000+)</td>
                <td className="p-3 sm:p-4 font-semibold text-emerald-700">80% Statutory Fee Waiver (~₹1,600)</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="p-3 sm:p-4 font-medium text-slate-900">Trademark Filing Fees</td>
                <td className="p-3 sm:p-4">₹9,000 to ₹10,000 per class</td>
                <td className="p-3 sm:p-4 font-semibold text-emerald-700">50% Statutory Fee Rebate (₹4,500)</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="p-3 sm:p-4 font-medium text-slate-900">Labor Law Inspections</td>
                <td className="p-3 sm:p-4">Subject to mandatory periodic inspector visits</td>
                <td className="p-3 sm:p-4 font-semibold text-emerald-700">Self-certification without inspection for up to 5 yrs</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="p-3 sm:p-4 font-medium text-slate-900">Public Tenders &amp; GeM</td>
                <td className="p-3 sm:p-4">Must demonstrate multi-year revenue &amp; track record</td>
                <td className="p-3 sm:p-4 font-semibold text-emerald-700">Exempt from prior turnover, experience, and EMD</td>
              </tr>
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="p-3 sm:p-4 font-medium text-slate-900">Winding Up Procedure</td>
                <td className="p-3 sm:p-4">Multi-year liquidation proceedings</td>
                <td className="p-3 sm:p-4 font-semibold text-emerald-700">Fast-track 90-day voluntary winding up under IBC</td>
              </tr>
            </tbody>
          </table>
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
              Can a Sole Proprietorship or One Person Company (OPC) apply for DPIIT recognition?
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
              No. The DPIIT notification strictly permits Private Limited Companies, Limited Liability Partnerships (LLPs), and Registered Partnership firms to register as startups. Sole proprietorships and OPCs must convert into a Private Limited Company or LLP before seeking recognition.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200/90 bg-white">
            <h3 className="text-sm font-bold text-slate-900 mb-1.5">
              What is the validity period of the Startup India recognition certificate?
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
              The recognition certificate remains valid for up to 10 years from the date of incorporation, or until the entity achieves an annual turnover exceeding ₹100 Crore in any financial year, whichever occurs first.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200/90 bg-white">
            <h3 className="text-sm font-bold text-slate-900 mb-1.5">
              Does DPIIT recognition automatically grant the Section 80-IAC tax holiday?
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
              No. DPIIT recognition is the preliminary prerequisite. Once your DPIIT certificate is issued, a separate application must be submitted for Section 80-IAC approval before the Inter-Ministerial Board (IMB), supported by detailed audited financials, pitch decks, and innovation validations.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200/90 bg-white">
            <h3 className="text-sm font-bold text-slate-900 mb-1.5">
              How can Merrafilings assist my startup in claiming these benefits?
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
              Merrafilings manages the complete lifecycle: corporate incorporation, DPIIT portal application filing, innovation write-up drafting, pitch deck structuring, Section 80-IAC dossier preparation, Form 2 angel tax declaration, and patent/trademark filing subsidies.
            </p>
          </div>
        </div>
      </section>
    </StartupIndiaGuideLayout>
  );
}
