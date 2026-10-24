import React from "react";
import FSSAIGuideLayout from "@/components/FSSAIGuideLayout";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  FileText,
  AlertTriangle,
  Building,
  Store,
  Factory,
  UtensilsCrossed,
  Clock,
  HelpCircle,
  ArrowRight,
  Receipt,
  Scale,
  MapPin,
  Check,
  Users,
  Sparkles,
  Globe2,
} from "lucide-react";

export const metadata = {
  title: "FSSAI Mitra — What It Is and How It Helps Food Businesses | Merrafilings",
  description:
    "Comprehensive guide explaining the FSSAI Mitra scheme. Discover how certified Food Safety Mitras help petty food business operators, street vendors, and small manufacturers with FoSCoS registration.",
};

export default function FSSAIMitraPage() {
  return (
    <FSSAIGuideLayout
      currentSlug="mitra"
      title="FSSAI Mitra — What It Is and How It Helps Food Businesses"
      breadcrumbLabel="FSSAI Mitra Scheme"
      metaPublishedDate="Updated October 2026"
      readingTime="8 min read"
      authorName="Merrafilings Food Safety Advisory Desk"
    >
      {/* Intro Box */}
      <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-2xl p-6 sm:p-7">
        <p className="text-base sm:text-[17px] text-slate-800 leading-relaxed font-normal">
          The <strong className="font-semibold text-slate-900">FSSAI Mitra</strong> initiative is a flagship facilitation program rolled out by the Food Safety and Standards Authority of India (FSSAI) to bridge the digital and procedural divide for micro, small, and informal food businesses across India. While the FoSCoS (Food Safety Compliance System) portal allows online registration, millions of small tea stall owners, street food vendors, home bakers, and rural food artisans face challenges with digital literacy, document formatting, and technical categorization. FSSAI Mitras act as certified ground-level facilitators to streamline this registration journey.
        </p>
      </div>

      {/* Section 1: What is the FSSAI Mitra Program? */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
          <Users className="w-6 h-6 text-emerald-600 shrink-0" />
          <span>What is the FSSAI Mitra Initiative?</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          The word <em>&quot;Mitra&quot;</em> translates to &quot;friend&quot; or &quot;companion,&quot; perfectly embodying the philosophy behind this government-backed support model. Launched to accelerate the formalization of India&apos;s vast unorganized food sector, the FSSAI Mitra program establishes a nationwide network of trained and accredited individuals who offer assisted digital services to Food Business Operators (FBOs).
        </p>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          Rather than replacing statutory food safety authorities, Mitras serve as certified intermediaries. They assist applicants in understanding statutory rules under the <strong>Food Safety and Standards Act, 2006</strong>, compiling compliant identity and premise proofs, and navigating the digital FoSCoS interface.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-semibold text-sm text-slate-900 mb-1.5">Last-Mile Accessibility</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Brings digital compliance directly to grassroots markets, rural weekly haats, and peri-urban food clusters.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-semibold text-sm text-slate-900 mb-1.5">Deficiency Reduction</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Drastically reduces application rejections and scrutiny queries through pre-submission document vetting.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-semibold text-sm text-slate-900 mb-1.5">Grassroots Formalization</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Enables street food vendors and small home processors to secure 14-digit registration numbers and access institutional credit.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Who Can Be an FSSAI Mitra? */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
          <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
          <span>Who Functions as an FSSAI Mitra?</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          An FSSAI Mitra is not an unverified broker or private agent; they are formal affiliates recognized under statutory facilitation guidelines. Typical entities certified as Mitras include:
        </p>

        <div className="space-y-3">
          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-sm text-slate-900">Common Service Centre (CSC) Village Level Entrepreneurs (VLEs)</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Authorized operators of Digital Seva Kendras operating across rural panchayats and district administrative blocks, empowered to file FoSCoS applications.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-sm text-slate-900">Certified Food Safety Facilitators</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Individuals holding degrees in food technology, science, dairy chemistry, or hospitality who have undergone formal FSSAI training modules on licensing rules.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-sm text-slate-900">State-Enrolled Civil Society &amp; Industry Associations</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Self-help groups (SHGs), Mahila Udyogs, and local trade federations partnered with State Food Safety Commissioners to onboard petty producers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Key Services Provided by an FSSAI Mitra */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
          <FileText className="w-6 h-6 text-emerald-600 shrink-0" />
          <span>Core Responsibilities &amp; Facilitation Scope</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          The primary focus of the Mitra program is entry-level <strong>FSSAI Basic Registration (Form C)</strong> for businesses with an annual turnover of up to ₹12 Lakhs. Key services delivered include:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-2">
            <div className="font-semibold text-sm text-slate-900 flex items-center gap-2">
              <Store className="w-4 h-4 text-emerald-600" />
              <span>Application Filing &amp; FoSCoS Navigation</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Assisting operators with account creation, selecting appropriate Kind of Business (KoB) codes, inputting operating hours, and specifying exact product lists.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-2">
            <div className="font-semibold text-sm text-slate-900 flex items-center gap-2">
              <Receipt className="w-4 h-4 text-emerald-600" />
              <span>Document Collation &amp; Scanning</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Scanning applicant identity cards (Aadhaar/Voter ID), photographing premises, and formatting landlord consent or NOC letters into acceptable file formats.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-2">
            <div className="font-semibold text-sm text-slate-900 flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-emerald-600" />
              <span>Local Language Translation &amp; Guidance</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Explaining mandatory hygiene protocols under Schedule 4 in regional vernacular languages so vendors understand their daily sanitary duties.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-2">
            <div className="font-semibold text-sm text-slate-900 flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>Status Tracking &amp; Form C Download</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Monitoring the online portal for scrutiny updates, responding to clarification queries from the Registering Authority, and printing the final 14-digit registration certificate.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Comparative Breakdown: Mitra vs Professional Legal Support */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
          <Scale className="w-6 h-6 text-emerald-600 shrink-0" />
          <span>FSSAI Mitra vs Merrafilings Professional Advisory</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          While the FSSAI Mitra program is ideal for basic petty registrations, scaling enterprises, cloud kitchens, and manufacturers require broader corporate and statutory coverage:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-xs sm:text-sm text-slate-700">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-900 font-semibold">
              <tr>
                <th className="p-3 sm:p-4">Compliance Parameter</th>
                <th className="p-3 sm:p-4">FSSAI Mitra Facilitator</th>
                <th className="p-3 sm:p-4">Merrafilings Corporate Advisory</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="p-3 sm:p-4 font-medium text-slate-900">Target Segment</td>
                <td className="p-3 sm:p-4">Micro vendors, hawkers, small home bakers (under ₹12L turnover)</td>
                <td className="p-3 sm:p-4">Startups, restaurants, cloud kitchens, FMCG manufacturers, importers</td>
              </tr>
              <tr>
                <td className="p-3 sm:p-4 font-medium text-slate-900">Licensing Tiers</td>
                <td className="p-3 sm:p-4">Primarily Basic Registration (Form C)</td>
                <td className="p-3 sm:p-4">Basic Registration, State License, and Central Import/Export License</td>
              </tr>
              <tr>
                <td className="p-3 sm:p-4 font-medium text-slate-900">Technical Documentation</td>
                <td className="p-3 sm:p-4">Basic photo ID and address uploading</td>
                <td className="p-3 sm:p-4">FSMS drafting, NABL water potability audits, kitchen blueprints, Form IX nomination</td>
              </tr>
              <tr>
                <td className="p-3 sm:p-4 font-medium text-slate-900">Ongoing Annual Compliance</td>
                <td className="p-3 sm:p-4">Limited to one-time registration filing</td>
                <td className="p-3 sm:p-4">Form 9 Annual Returns, Form D-1 filings, audit preparation, automated renewals</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 5: Best Practices for Food Businesses */}
      <section className="p-6 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/80 space-y-3">
        <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-emerald-600" />
          <span>Strategic Takeaways for Food Entrepreneurs</span>
        </h3>
        <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
          <li className="flex items-start gap-2">
            <span className="text-emerald-600 font-bold">✓</span>
            <span><strong>Same Statutory Output:</strong> Whether filed independently, through an FSSAI Mitra, or via Merrafilings, the resulting certificate is the official 14-digit Form C registration issued by the Government of India.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-600 font-bold">✓</span>
            <span><strong>Mandatory Packaging Display:</strong> Once issued, the 14-digit FSSAI number and official logo must appear on all product labels, delivery packaging, and invoice headers.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-600 font-bold">✓</span>
            <span><strong>Upgrade as You Scale:</strong> If your annual revenue crosses ₹12 Lakhs, you must promptly upgrade from Basic Registration to an FSSAI State License to prevent non-compliance penalties.</span>
          </li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="space-y-4 pt-4 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
          <HelpCircle className="w-6 h-6 text-emerald-600 shrink-0" />
          <span>Frequently Asked Questions</span>
        </h2>
        <div className="space-y-3">
          <div className="p-4 rounded-xl border border-slate-200 bg-white">
            <h3 className="font-semibold text-sm text-slate-900 mb-1">Does an FSSAI Mitra charge a fee for registration services?</h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Yes. In addition to the statutory government basic registration fee (₹100 per year), Mitra operators or CSC centres charge a nominal facilitation fee set by regional government guidelines to cover scanning, internet usage, and administrative support.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white">
            <h3 className="font-semibold text-sm text-slate-900 mb-1">Can an FSSAI Mitra issue a food license directly?</h3>
            <p className="text-xs sm:text-sm text-slate-600">
              No. Mitras are strictly facilitators and do not possess regulatory approval powers. Every application submitted through a Mitra is routed directly to the designated Food Safety Officer (FSO) or Registering Authority for statutory review and final certificate sign-off.
            </p>
          </div>
        </div>
      </section>
    </FSSAIGuideLayout>
  );
}
