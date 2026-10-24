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
  Building,
  Store,
  Factory,
  UtensilsCrossed,
  Receipt,
  Scale,
  Wheat,
} from "lucide-react";

export interface FSSAIGuideItem {
  slug: string;
  title: string;
  href: string;
  shortTitle: string;
}

export const FSSAI_RELATED_GUIDES: FSSAIGuideItem[] = [
  {
    slug: "mitra",
    title: "FSSAI Mitra — What It Is and How It Helps Food Businesses",
    href: "/fssai/mitra",
    shortTitle: "FSSAI Mitra Facilitation",
  },
  {
    slug: "noc-format",
    title: "FSSAI NOC Format — When It Is Required and What It Should Contain",
    href: "/fssai/noc-format",
    shortTitle: "FSSAI NOC Format Guide",
  },
  {
    slug: "registration-download",
    title: "How to Download Your FSSAI Registration Certificate Online",
    href: "/fssai/registration-download",
    shortTitle: "Download FSSAI Certificate",
  },
  {
    slug: "form-c",
    title: "FSSAI Form C — The Basic Registration Certificate Explained",
    href: "/fssai/form-c",
    shortTitle: "Form C Registration Certificate",
  },
  {
    slug: "form-9",
    title: "FSSAI Form 9 — Annual Return Filing for Licensed Food Businesses",
    href: "/fssai/form-9",
    shortTitle: "Form 9 Annual Return Filing",
  },
  {
    slug: "fbo-search",
    title: "FSSAI FBO Search — How to Find and Verify a Registered Food Business",
    href: "/fssai/registration-download",
    shortTitle: "FBO Verification Search",
  },
  {
    slug: "governing-ministry",
    title: "FSSAI and the Ministry — Understanding the Governing...",
    href: "/fssai/mitra",
    shortTitle: "FSSAI Regulatory Framework",
  },
];

interface FSSAIGuideLayoutProps {
  currentSlug: string;
  title?: string;
  breadcrumbLabel?: string;
  metaPublishedDate?: string;
  readingTime?: string;
  authorName?: string;
  children: React.ReactNode;
}

export default function FSSAIGuideLayout({
  currentSlug,
  title,
  breadcrumbLabel,
  metaPublishedDate = "Oct 2026",
  readingTime = "9 min read",
  authorName = "Merrafilings Food Safety Advisory Desk",
  children,
}: FSSAIGuideLayoutProps) {
  const activeGuide = FSSAI_RELATED_GUIDES.find((g) => g.slug === currentSlug);
  const displayTitle = title || activeGuide?.title || "FSSAI Guide";
  const displayBreadcrumb = breadcrumbLabel || activeGuide?.shortTitle || displayTitle;

  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("FSSAI Food License Consultation");
  const [searchOpen, setSearchOpen] = useState(false);

  const openContact = (service?: string) => {
    if (service) setModalTitle(service);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-800 antialiased flex flex-col font-sans">
      {/* Top Navigation */}
      <Navbar onOpenSearch={() => setSearchOpen(true)} onOpenContact={() => openContact()} />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-6 flex-wrap"
        >
          <Link
            href="/"
            className="hover:text-emerald-600 transition-colors font-medium text-slate-600"
          >
            Home
          </Link>
          <span className="text-slate-300">/</span>
          <Link
            href="/fssai"
            className="hover:text-emerald-600 transition-colors font-medium text-slate-600"
          >
            FSSAI Registration
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-900 font-semibold line-clamp-1 max-w-[300px] sm:max-w-md">
            {displayBreadcrumb}
          </span>
        </nav>

        {/* 2-Column Responsive Layout: Left Content, Right Sticky Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Main Content Article Column */}
          <article className="lg:col-span-8 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-9 lg:p-11 shadow-xs">
            {/* Header Block */}
            <div className="border-b border-slate-100 pb-7 mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold tracking-wide uppercase mb-3.5 border border-emerald-200/60">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Food Safety &amp; FoSCoS Regulatory Advisory</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-tight leading-tight sm:leading-snug">
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
                  FSS Act 2006 &amp; FoSCoS Compliant
                </span>
              </div>
            </div>

            {/* Injected Article Body */}
            <div className="space-y-8 text-slate-900 leading-relaxed font-normal">
              {children}
            </div>

            {/* End of Article Call to Action */}
            <div className="mt-12 pt-8 border-t border-slate-100">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50/70 via-slate-50 to-teal-50/40 border border-emerald-200/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-emerald-900 font-semibold text-base">
                    <UtensilsCrossed className="w-5 h-5 text-emerald-600" />
                    <span>Secure Your 14-Digit FSSAI License with Merrafilings</span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-800 font-normal max-w-xl leading-relaxed">
                    Get end-to-end assistance for Basic Registration (Form C), State/Central Food Licenses, FoSCoS portal filings, Annual Returns (Form 9 / Form D-1), and NOC drafting with zero compliance delays.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => openContact("FSSAI Registration Application")}
                  className="px-5 py-3 rounded-xl bg-[#00B074] hover:bg-[#009663] text-white font-semibold text-xs sm:text-sm shadow-sm transition-all whitespace-nowrap cursor-pointer shrink-0"
                >
                  Apply for FSSAI License →
                </button>
              </div>
            </div>
          </article>

          {/* Sticky Sidebar Right Column */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            {/* Widget 1: Expert Consultation Card (Matching Screenshot) */}
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
                      Free food safety compliance call
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => openContact("FSSAI Expert Consultation")}
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
                {FSSAI_RELATED_GUIDES.map((item) => {
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
                onClick={() => openContact("Live Chat regarding FSSAI Registration")}
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
