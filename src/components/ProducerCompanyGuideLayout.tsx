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
  Sprout,
  Users,
} from "lucide-react";

export interface ProducerCompanyGuideItem {
  slug: string;
  title: string;
  href: string;
  shortTitle: string;
}

export const PRODUCER_COMPANY_RELATED_GUIDES: ProducerCompanyGuideItem[] = [
  {
    slug: "producer-company-registration-fee-explained",
    title: "Understanding the Producer Company Registration Fee",
    href: "/producer-company-registration/producer-company-registration-fee-explained",
    shortTitle: "Registration Fee Explained",
  },
  {
    slug: "guides",
    title: "Understanding the Producer Company Framework",
    href: "/producer-company-registration/guides",
    shortTitle: "Framework & Architecture",
  },
  {
    slug: "producer-company-registration-documents-guide",
    title: "Documents Required for Producer Company Registration: An In-Depth Guide",
    href: "/producer-company-registration/producer-company-registration-documents-guide",
    shortTitle: "Required Documents Guide",
  },
  {
    slug: "guide",
    title: "The Comprehensive Guide to Producer Company Registration",
    href: "/producer-company-registration/guide",
    shortTitle: "Comprehensive Guide",
  },
  {
    slug: "understanding-producer-company-a-detailed-guide",
    title: "Exploring What a Producer Company Means: An In-Depth Guide",
    href: "/producer-company-registration/understanding-producer-company-a-detailed-guide",
    shortTitle: "Producer Company Meaning & Impact",
  },
];

interface ProducerCompanyGuideLayoutProps {
  currentSlug: string;
  title?: string;
  breadcrumbLabel?: string;
  metaPublishedDate?: string;
  readingTime?: string;
  authorName?: string;
  children: React.ReactNode;
}

export default function ProducerCompanyGuideLayout({
  currentSlug,
  title,
  breadcrumbLabel,
  metaPublishedDate = "Oct 2026",
  readingTime = "10 min read",
  authorName = "Merrafilings Agribusiness Advisory Desk",
  children,
}: ProducerCompanyGuideLayoutProps) {
  const activeGuide = PRODUCER_COMPANY_RELATED_GUIDES.find((g) => g.slug === currentSlug);
  const displayTitle = title || activeGuide?.title || "Producer Company Guide";
  const displayBreadcrumb = breadcrumbLabel || activeGuide?.shortTitle || displayTitle;

  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Producer Company Consultation");
  const [searchOpen, setSearchOpen] = useState(false);

  const openContact = (topic?: string) => {
    setModalTitle(topic || "Producer Company Advisory");
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
                href="/producer-company-registration"
                className="hover:text-[#155EEF] transition-colors font-medium text-slate-800"
              >
                Producer Company Registration
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
                <Sprout className="w-3.5 h-3.5 text-emerald-600" />
                <span>Agribusiness &amp; FPO Incorporation Advisory</span>
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
                  Companies Act Part IXA &amp; SFAC / NABARD
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
                    <Sprout className="w-5 h-5 text-emerald-600" />
                    <span>Incorporate Your Producer Company (FPO) with Merrafilings</span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-800 font-normal max-w-xl leading-relaxed">
                    Set up for 10+ farmer producers or 2+ producer institutions. Includes SPICe+ Part A name approval (&quot;Producer Company Limited&quot;), 5 Director DINs, Class-3 DSCs, agricultural charter drafting (MOA/AOA), SFAC equity grant application dossier, and Section 80PA 100% tax exemption assistance.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => openContact("Producer Company Registration")}
                  className="px-5 py-3 rounded-xl bg-[#00B074] hover:bg-[#009663] text-white font-semibold text-xs sm:text-sm shadow-sm transition-all whitespace-nowrap cursor-pointer shrink-0"
                >
                  Start FPO Setup →
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
                  onClick={() => openContact("Producer Company Consultation with Experts")}
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
                {PRODUCER_COMPANY_RELATED_GUIDES.map((item) => {
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
                              ? "text-emerald-600"
                              : "text-slate-400 group-hover:text-emerald-600"
                          }`}
                        >
                          →
                        </span>
                        <span className="leading-snug">{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Live Chat with Experts button (matching screenshot badge) */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => openContact("Live Chat regarding Producer Company")}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-full bg-gradient-to-r from-[#00D084] to-[#00B074] hover:from-[#00B074] hover:to-[#009663] text-white font-bold text-sm shadow-md shadow-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/30 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#00B074]" />
                <span>Live chat with experts</span>
              </button>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
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
