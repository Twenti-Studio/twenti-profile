"use client";

import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Laptop,
  Layout,
  Palette,
  PenTool,
  Rocket,
  Search,
  Server,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Reveal from "../components/Reveal";
import { useLanguage } from "../context/LanguageContext";

// ============================================

// WORK WITH US
// ============================================
// Halaman ini adalah lini bisnis SEKUNDER Twenti Studio.
// Identitas utama tetap produk sendiri (lihat /produk).
// Karena itu bahasanya "kolaborasi", bukan "jasa", dan harga
// diletakkan di bawah sebagai estimasi, bukan daftar paket.
// ============================================

const ServicesClient = () => {
  const { t, language } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  // Tiga bentuk kolaborasi
  const collaborationForms = [
    {
      id: "build-website",
      icon: <Laptop className="w-9 h-9" />,
      titleKey: "work.forms.website.title",
      descKey: "work.forms.website.desc",
    },
    {
      id: "build-product",
      icon: <Smartphone className="w-9 h-9" />,
      titleKey: "work.forms.product.title",
      descKey: "work.forms.product.desc",
    },
    {
      id: "improve-product",
      icon: <Layout className="w-9 h-9" />,
      titleKey: "work.forms.improve.title",
      descKey: "work.forms.improve.desc",
    },
  ];

  // Empat kemampuan inti studio
  const capabilities = [
    {
      icon: <Palette className="w-8 h-8" />,
      titleKey: "home.whatWeBuild.design.title",
      descKey: "home.whatWeBuild.design.desc",
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      titleKey: "home.whatWeBuild.development.title",
      descKey: "home.whatWeBuild.development.desc",
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      titleKey: "home.whatWeBuild.quality.title",
      descKey: "home.whatWeBuild.quality.desc",
    },
    {
      icon: <Server className="w-8 h-8" />,
      titleKey: "home.whatWeBuild.infrastructure.title",
      descKey: "home.whatWeBuild.infrastructure.desc",
    },
  ];

  const processSteps = [
    {
      number: "01",
      titleKey: "services.process.step1.title",
      icon: <Search className="w-6 h-6" />,
      descKey: "services.process.step1.desc",
      durationKey: "services.process.step1.duration",
      deliverables: {
        id: ["Project Brief", "Requirement Document", "Timeline Estimasi"],
        en: ["Project Brief", "Requirement Document", "Timeline Estimate"],
      },
    },
    {
      number: "02",
      titleKey: "services.process.step2.title",
      icon: <PenTool className="w-6 h-6" />,
      descKey: "services.process.step2.desc",
      durationKey: "services.process.step2.duration",
      deliverables: {
        id: ["Wireframes", "UI Design", "Interactive Prototype"],
        en: ["Wireframes", "UI Design", "Interactive Prototype"],
      },
    },
    {
      number: "03",
      titleKey: "services.process.step3.title",
      icon: <Code2 className="w-6 h-6" />,
      descKey: "services.process.step3.desc",
      durationKey: "services.process.step3.duration",
      deliverables: {
        id: ["Working Application", "Quality Assurance", "Bug Fixes"],
        en: ["Working Application", "Quality Assurance", "Bug Fixes"],
      },
    },
    {
      number: "04",
      titleKey: "services.process.step4.title",
      icon: <Rocket className="w-6 h-6" />,
      descKey: "services.process.step4.desc",
      durationKey: "services.process.step4.duration",
      deliverables: {
        id: ["Deployment", "Documentation", "Technical Support"],
        en: ["Deployment", "Documentation", "Technical Support"],
      },
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-dark-900 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            {t("work.heroTitle")}{" "}
            <span className="text-orange-500">{t("work.heroHighlight")}</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            {t("work.heroSubtitle")}
          </p>
        </div>
      </section>

      {/* Tiga Bentuk Kolaborasi */}
      <section className="py-16 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
              {t("work.forms.label")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4">
              {t("work.forms.title")}{" "}
              <span className="text-orange-500">
                {t("work.forms.titleHighlight")}
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {collaborationForms.map((form) => (
              <div
                key={form.id}
                id={form.id}
                className="group p-8 bg-dark-700 border border-white/5 rounded-2xl card-hover"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-dark-600 rounded-xl text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {form.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors">
                  {t(form.titleKey)}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {t(form.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Empat Kemampuan Studio */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
              {t("home.whatWeBuild.label")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
              {t("home.whatWeBuild.title")}{" "}
              <span className="text-orange-500">
                {t("home.whatWeBuild.titleHighlight")}
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              {t("home.whatWeBuild.subtitle")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability) => (
              <div
                key={capability.titleKey}
                className="p-8 bg-dark-800 border border-white/5 rounded-2xl card-hover group"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-dark-700 rounded-xl text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {t(capability.titleKey)}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t(capability.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ringkasan harga, detail lengkapnya ada di /paket-harga */}
      <section className="py-24 bg-dark-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="p-10 bg-dark-700 border border-white/10 rounded-3xl">
              <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
                {t("work.estimate.label")}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold mt-4 mb-4">
                {t("work.estimate.title")}{" "}
                <span className="text-orange-500">
                  {t("work.estimate.titleHighlight")}
                </span>
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                {t("work.estimate.subtitle")}
              </p>
              <Link
                href="/paket-harga"
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                <span>{t("nav.pricing")}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
              {t("services.process.label")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              {t("services.process.title")}{" "}
              <span className="text-orange-500">
                {t("services.process.titleHighlight")}
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              {t("services.process.subtitle")}
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-dark-600 z-0">
              <div
                className="h-full bg-orange-500 transition-all duration-700"
                style={{ width: `${(activeStep / 3) * 100}%` }}
              />
            </div>

            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className={`relative z-10 flex flex-col items-center text-center cursor-pointer group transition-all duration-300 ${
                  index <= activeStep ? "opacity-100" : "opacity-40"
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div
                  className={`w-24 h-24 flex items-center justify-center rounded-full border-4 transition-all duration-500 mb-6 ${
                    index <= activeStep
                      ? "bg-dark-800 border-orange-500 text-orange-500"
                      : "bg-dark-700 border-dark-600 text-gray-500"
                  }`}
                >
                  {step.icon}
                </div>
                <div className="inline-block px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full mb-3">
                  {step.number} | {t(step.durationKey)}
                </div>
                <h3 className="text-xl font-bold mb-3">{t(step.titleKey)}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {t(step.descKey)}
                </p>
                <ul className="space-y-1">
                  {step.deliverables[language].map((item) => (
                    <li
                      key={item}
                      className="text-xs text-gray-500 flex items-center justify-center gap-1"
                    >
                      <CheckCircle2 className="w-3 h-3 text-orange-500/50" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-12 bg-dark-700 border border-white/10 rounded-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {t("services.cta.title")}
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              {t("services.cta.subtitle")}
            </p>
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-colors duration-300"
            >
              <span>{t("services.cta.button")}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesClient;
