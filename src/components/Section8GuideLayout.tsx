"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import ServiceSearchModal from "@/components/ServiceSearchModal";
import {
  User,
  Calendar,
  Clock,
  Sparkles,
  ArrowRight,
  FileText,
  MessageCircle,
  ShieldCheck,
  Award,
  Building,
  HeartHandshake,
} from "lucide-react";

export interface Section8GuideItem {
  slug: string;
  title: string;
  href: string;
  shortTitle: string;
}

export const SECTION8_RELATED_GUIDES: Section8GuideItem[] = [
  {
    slug: "guides",
    title: "Understanding the Section 8 Company Structure",
    href: "/section-8-company-registration/guides",
    shortTitle: "Section 8 Company Structure",
  },
  {
    slug: "section-8-company-benefits-setup-guide",
    title: "Understanding Section 8 Company: Structure, Benefits, and Setup",
    href: "/section-8-company-registration/section-8-company-benefits-setup-guide",
    shortTitle: "Structure, Benefits & Setup",
  },
  {
    slug: "section-8-company-registration-benefits",
    title: "Understanding Section 8 Company in India",
    href: "/section-8-company-registration/section-8-company-registration-benefits",
    shortTitle: "Section 8 Company in India",
  },
  {
    slug: "why-we-need-section-8-company-key-benefits",
    title: "Understanding Why We Need Section 8 Company",
    href: "/section-8-company-registration/why-we-need-section-8-company-key-benefits",
    shortTitle: "Why We Need Section 8 Company",
  },
  {
    slug: "understand-section-8-companies-key-benefits-setup",
    title: "Understanding Section 8 Companies and Their Essentials",
    href: "/section-8-company-registration/understand-section-8-companies-key-benefits-setup",
    shortTitle: "Section 8 Companies & Essentials",
  },
];

interface Section8GuideLayoutProps {
  currentSlug: string;
  title?: string;
  breadcrumbLabel?: string;
  metaPublishedDate?: string;
  readingTime?: string;
  authorName?: string;
  children: React.ReactNode;
}

export default function Section8GuideLayout({
  currentSlug,
  title,
  breadcrumbLabel,
  metaPublishedDate = "Oct 2026",
  readingTime = "9 min read",
  authorName = "Merrafilings Non-Profit Advisory Desk",
  children,
}: Section8GuideLayoutProps) {
  const activeGuide = SECTION8_RELATED_GUIDES.find((g) => g.slug === currentSlug);
  const displayTitle = title || activeGuide?.title || "Section 8 Company Guide";
  const displayBreadcrumb = breadcrumbLabel || activeGuide?.shortTitle || displayTitle;

  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Section 8 Company Consultation");
  const [searchOpen, setSearchOpen] = useState(false);

  const openContact = (topic?: string) => {
    setModalTitle(topic || "Section 8 Company Advisory");
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF9] text-[#111827] flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar onOpenSearch={() => setSearchOpen(true)} onOpenContact={() => openContact()} />

      {/* Main Container */}
      <main className="flex-1 w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-[12.5px] font-normal text-slate-700 flex-wrap">
            <li>
              <Link href="/" className="hover:text-[#155EEF] transition-colors">
                Home
              </Link>
            </li>
            <li className="text-slate-300">/</li>
            <li>
              <Link
                href="/section-8-company-registration"
                className="hover:text-[#155EEF] transition-colors font-medium text-slate-800"
              >
                Section 8 Company
              </Link>
            </li>
            <li className="text-slate-300">/</li>
            <li className="text-[#00B074] font-normal line-clamp-1 max-w-[320px] sm:max-w-none">
              {displayBreadcrumb}
            </li>
          </ol>
        </nav>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Main Article Content Column */}
          <article className="lg:col-span-8 bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-9 md:p-11 shadow-xs">
            {/* Header Badge & Title */}
            <div className="border-b border-slate-100 pb-6 mb-7">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3.5">
                <HeartHandshake className="w-3.5 h-3.5 text-emerald-600" />
                <span>Non-Profit &amp; NGO Corporate Advisory</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-950 tracking-tight leading-[1.25] sm:leading-tight">
                {displayTitle}
              </h1>

              {/* Author & Timestamp Bar */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-[13px] text-slate-600 font-normal mt-4 pt-3 border-t border-slate-100">
                <span className="inline-flex items-center gap-1.5 text-slate-900 font-bold">
                  <User className="w-3.5 h-3.5 text-emerald-600" />
                  {authorName}
                </span>
                <span className="text-slate-300">•</span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  Updated: {metaPublishedDate}
                </span>
                <span className="text-slate-300">•</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {readingTime}
                </span>
                <span className="text-slate-300">•</span>
                <span className="inline-flex items-center gap-1.5 text-emerald-800 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200/70">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Section 8, Companies Act, 2013 &amp; MCA V3
                </span>
              </div>
            </div>

            {/* Injected Article Body */}
            <div className="space-y-8 text-slate-900 leading-relaxed font-normal">
              {children}
            </div>

            {/* End of Article Call to Action */}
            <div className="mt-12 pt-8 border-t border-slate-100">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50/70 via-slate-50 to-blue-50/40 border border-emerald-200/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-emerald-900 font-semibold text-base">
                    <Building className="w-5 h-5 text-emerald-600" />
                    <span>Incorporate Your Section 8 Non-Profit Company</span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-800 font-normal max-w-xl leading-relaxed">
                    Get end-to-end support from certified Chartered Accountants &amp; NGO advisors. Includes Director DSCs, Central Government License in Form INC-16, e-MOA &amp; e-AOA drafting, 12A &amp; 80G tax registration assistance, and PAN/TAN allotment.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => openContact("Section 8 Company Registration")}
                  className="px-5 py-3 rounded-xl bg-[#00B074] hover:bg-[#009663] text-white font-semibold text-xs sm:text-sm shadow-sm transition-all whitespace-nowrap cursor-pointer shrink-0"
                >
                  Start Section 8 Setup →
                </button>
              </div>
            </div>
          </article>

          {/* Sticky Sidebar Right Column */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            {/* Widget 1: Expert Consultation Card */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2 overflow-hidden">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 border-2 border-white flex items-center justify-center text-xs font-bold text-emerald-800 shadow-xs">
                      MT
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs font-bold text-blue-800 shadow-xs">
                      SK
                    </div>
                    <div className="w-8 h-8 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center text-xs font-bold text-purple-800 shadow-xs">
                      AR
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-[13px] font-semibold text-slate-900 leading-tight">
                      Consult <span className="text-[#155EEF]">Experts</span>
                    </h3>
                    <p className="text-[11px] text-slate-600 font-normal">
                      Free 15-min assessment call
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => openContact("Section 8 Company Consultation with Experts")}
                  className="px-3.5 py-2 min-h-[44px] rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-medium text-xs transition-colors cursor-pointer flex items-center justify-center"
                >
                  Connect
                </button>
              </div>
            </div>

            {/* Widget 2: Related Guides Card (With Emerald Top Border matching Screenshot) */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs relative overflow-hidden border-t-[3px] border-t-emerald-500">
              <div className="flex items-center gap-2 mb-3.5 pb-2 border-b border-slate-100">
                <FileText className="w-4 h-4 text-emerald-600" />
                <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
                  Related Guides
                </h2>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-[13px]">
                {SECTION8_RELATED_GUIDES.map((item) => {
                  const isActive = item.slug === currentSlug;
                  return (
                    <li key={item.slug}>
                      <Link
                        href={item.href}
                        className={`group flex items-start gap-2.5 p-2 rounded-xl transition-all duration-200 ${
                          isActive
                            ? "bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200/60 shadow-3xs"
                            : "text-slate-800 hover:text-emerald-700 hover:bg-slate-50 font-normal"
                        }`}
                      >
                        <span
                          className={`mt-0.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 ${
                            isActive
                              ? "text-emerald-600 font-bold"
                              : "text-slate-400 group-hover:text-emerald-600"
                          }`}
                        >
                          &rarr;
                        </span>
                        <span className="line-clamp-2 leading-relaxed">
                          {item.title}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Live Chat with Experts Button (Matching Screenshot) */}
              <div className="pt-4 mt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => openContact("Live Chat Section 8 Support")}
                  className="w-full py-3 px-4 min-h-[44px] rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-medium text-xs sm:text-[13px] flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Live chat with experts</span>
                </button>
              </div>
            </div>

            {/* Widget 3: Fast Legal Assistance Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-md space-y-3">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-emerald-400">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-semibold tracking-tight text-white">
                Turnkey Section 8 NGO Formation
              </h3>
              <p className="text-xs text-slate-300 font-normal leading-relaxed">
                Empower your philanthropic vision with the most credible legal structure in India. Receive government license in Form INC-16, zero capital requirement, 12A/80G tax exemptions, and CSR-1 funding eligibility.
              </p>
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => openContact("Section 8 NGO Desk")}
                  className="w-full py-2.5 px-3 min-h-[44px] rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-colors cursor-pointer flex items-center justify-center"
                >
                  Contact NGO Desk
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        serviceTitle={modalTitle}
      />

      <ServiceSearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectService={(service) => openContact(service)}
      />
    </div>
  );
}
