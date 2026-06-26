"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const modules = [
  {
    part: "Module 1 — An Introduction to Financial Strategy",
    chapters: [
      { chapter: "An Introduction to Financial Strategy", items: [] as { title: string; href: string }[] },
    ],
  },
  {
    part: "Module 2 — Performance Measurement in Financial Strategy",
    chapters: [
      { chapter: "Performance Measurement in Financial Strategy", items: [] as { title: string; href: string }[] },
    ],
  },
  {
    part: "Module 3 — Long Term Finance",
    chapters: [
      { chapter: "Long Term Finance", items: [] as { title: string; href: string }[] },
    ],
  },
  {
    part: "Module 4 — Short Term Finance & Working Capital Management",
    chapters: [
      { chapter: "Short Term Finance – Working Capital Management", items: [] as { title: string; href: string }[] },
    ],
  },
  {
    part: "Module 5 — Cost of Capital",
    chapters: [
      { chapter: "Cost of Capital", items: [] as { title: string; href: string }[] },
    ],
  },
  {
    part: "Module 6 — Capital Structure",
    chapters: [
      { chapter: "Capital Structure", items: [] as { title: string; href: string }[] },
    ],
  },
  {
    part: "Module 7 — The Role of Treasury",
    chapters: [
      { chapter: "The Role of Treasury", items: [] as { title: string; href: string }[] },
    ],
  },
  {
    part: "Module 8 — Investment Appraisal: Basic Techniques",
    chapters: [
      { chapter: "Investment Appraisal – Basic Techniques", items: [] as { title: string; href: string }[] },
    ],
  },
  {
    part: "Module 9 — Investment Appraisal: Further Techniques",
    chapters: [
      { chapter: "Investment Appraisal – Further Techniques", items: [] as { title: string; href: string }[] },
    ],
  },
  {
    part: "Module 10 — International Investment Appraisal",
    chapters: [
      { chapter: "International Investment Appraisal", items: [] as { title: string; href: string }[] },
    ],
  },
  {
    part: "Module 11 — Business Valuation",
    chapters: [
      { chapter: "Business Valuation", items: [] as { title: string; href: string }[] },
    ],
  },
  {
    part: "Module 12 — Mergers and Acquisitions",
    chapters: [
      {
        chapter: "Financial and Strategic Implications of Mergers and Acquisitions",
        items: [
          { title: "12.1 — Overview of Module", href: "/financial-strategy/module-12-mergers-and-acquisitions/12-1-overview" },
          { title: "12.2 — The Reasons for Growth by Acquisition or Merger", href: "/financial-strategy/module-12-mergers-and-acquisitions/12-2-reasons-for-growth" },
        ] as { title: string; href: string }[],
      },
    ],
  },
  {
    part: "Module 13 — Implementation and Control Procedures",
    chapters: [{ chapter: "Implementation and Control Procedures", items: [] as { title: string; href: string }[] }],
  },
  {
    part: "Module 14 — IFRS and IAS",
    chapters: [
      {
        chapter: "Financial Reporting Mastery: IFRS, IAS and the Language of Capital",
        items: [
          { title: "14.1 — The IFRS Architecture", href: "/financial-strategy/module-14-ifrs-and-ias/14-1-ifrs-architecture" },
          { title: "14.2 — Complete Master List of Standards", href: "/financial-strategy/module-14-ifrs-and-ias/14-2-master-list" },
          { title: "14.3 — CFO Core Curriculum", href: "/financial-strategy/module-14-ifrs-and-ias/14-3-cfo-core-curriculum" },
          { title: "14.4 — Quant / Hedge Fund Track", href: "/financial-strategy/module-14-ifrs-and-ias/14-4-quant-fund-track" },
          { title: "14.5 — The Three Standards That Define a Quant CFO", href: "/financial-strategy/module-14-ifrs-and-ias/14-5-three-standards" },
          { title: "14.6 — Recommended Study Resources", href: "/financial-strategy/module-14-ifrs-and-ias/14-6-study-resources" },
          { title: "14.7 — Module Self-Assessment", href: "/financial-strategy/module-14-ifrs-and-ias/14-7-self-assessment" },
        ] as { title: string; href: string }[],
      },
    ],
  },
  {
    part: "Module 15 — Taxation for CFOs",
    chapters: [{ chapter: "Corporate Tax Strategy & Compliance", items: [{ title: "Module 15 — Taxation for CFOs", href: "/financial-strategy/module-15-taxation" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 16 — Audit, Internal Controls & Governance",
    chapters: [{ chapter: "Audit, Controls & Governance", items: [{ title: "Module 16 — Audit, Internal Controls & Governance", href: "/financial-strategy/module-16-audit-controls-governance" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 17 — Budgeting, Forecasting & FP&A",
    chapters: [{ chapter: "Budgeting, Forecasting & FP&A", items: [{ title: "Module 17 — Budgeting, Forecasting & FP&A", href: "/financial-strategy/module-17-budgeting-forecasting-fpa" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 18 — Management Accounting for CFOs",
    chapters: [{ chapter: "Management Accounting for CFOs", items: [{ title: "Module 18 — Management Accounting for CFOs", href: "/financial-strategy/module-18-management-accounting" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 19 — Financial Modeling & Decision Support",
    chapters: [{ chapter: "Financial Modeling & Decision Support", items: [{ title: "Module 19 — Financial Modeling & Decision Support", href: "/financial-strategy/module-19-financial-modeling" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 20 — ESG & Sustainable Finance",
    chapters: [{ chapter: "ESG & Sustainable Finance", items: [{ title: "Module 20 — ESG & Sustainable Finance", href: "/financial-strategy/module-20-esg-sustainable-finance" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 21 — Enterprise Risk Management",
    chapters: [{ chapter: "Enterprise Risk Management", items: [{ title: "Module 21 — Enterprise Risk Management", href: "/financial-strategy/module-21-enterprise-risk-management" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 22 — Financial Risk: Market, Credit & Liquidity",
    chapters: [{ chapter: "Market, Credit & Liquidity Risk", items: [{ title: "Module 22 — Financial Risk: Market, Credit & Liquidity", href: "/financial-strategy/module-22-financial-risk" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 23 — Derivatives & Hedging Strategy",
    chapters: [{ chapter: "Derivatives & Hedging Strategy", items: [{ title: "Module 23 — Derivatives & Hedging Strategy", href: "/financial-strategy/module-23-derivatives-hedging" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 24 — Quantitative Finance for CFOs",
    chapters: [{ chapter: "Quantitative Finance for CFOs", items: [{ title: "Module 24 — Quantitative Finance for CFOs", href: "/financial-strategy/module-24-quantitative-finance" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 25 — AI & Technology in Finance",
    chapters: [{ chapter: "AI & Technology in Finance", items: [{ title: "Module 25 — AI & Technology in Finance", href: "/financial-strategy/module-25-ai-technology-finance" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 26 — FinTech & Digital Finance",
    chapters: [{ chapter: "FinTech & Digital Finance", items: [{ title: "Module 26 — FinTech & Digital Finance", href: "/financial-strategy/module-26-fintech-digital-finance" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 27 — Data Analytics & Financial Intelligence",
    chapters: [{ chapter: "Data Analytics & Financial Intelligence", items: [{ title: "Module 27 — Data Analytics & Financial Intelligence", href: "/financial-strategy/module-27-data-analytics" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 28 — CFO Leadership & Finance Team Management",
    chapters: [{ chapter: "CFO Leadership & Finance Team Management", items: [{ title: "Module 28 — CFO Leadership & Finance Team Management", href: "/financial-strategy/module-28-cfo-leadership" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 29 — Investor Relations & Capital Markets Communication",
    chapters: [{ chapter: "Investor Relations & Capital Markets Communication", items: [{ title: "Module 29 — Investor Relations & Capital Markets Communication", href: "/financial-strategy/module-29-investor-relations" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 30 — Board Reporting & Corporate Governance",
    chapters: [{ chapter: "Board Reporting & Corporate Governance", items: [{ title: "Module 30 — Board Reporting & Corporate Governance", href: "/financial-strategy/module-30-board-reporting" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 31 — Stakeholder & Banking Relationships",
    chapters: [{ chapter: "Stakeholder & Banking Relationships", items: [{ title: "Module 31 — Stakeholder & Banking Relationships", href: "/financial-strategy/module-31-stakeholder-banking" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 32 — Pakistan Financial Landscape for CFOs",
    chapters: [{ chapter: "Pakistan Financial Landscape", items: [{ title: "Module 32 — Pakistan Financial Landscape for CFOs", href: "/financial-strategy/module-32-pakistan-financial-landscape" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 33 — Gulf & MENA Finance for CFOs",
    chapters: [{ chapter: "Gulf & MENA Finance", items: [{ title: "Module 33 — Gulf & MENA Finance for CFOs", href: "/financial-strategy/module-33-gulf-mena-finance" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 34 — Islamic Finance & Shariah-Compliant Structures",
    chapters: [{ chapter: "Islamic Finance & Shariah-Compliant Structures", items: [{ title: "Module 34 — Islamic Finance & Shariah-Compliant Structures", href: "/financial-strategy/module-34-islamic-finance" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 35 — Cross-Border Finance & Transfer Pricing",
    chapters: [{ chapter: "Cross-Border Finance & Transfer Pricing", items: [{ title: "Module 35 — Cross-Border Finance & Transfer Pricing", href: "/financial-strategy/module-35-cross-border-finance" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 36 — The CFO Career Roadmap",
    chapters: [{ chapter: "The CFO Career Roadmap", items: [{ title: "Module 36 — The CFO Career Roadmap", href: "/financial-strategy/module-36-cfo-career-roadmap" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 37 — Personal Finance for CFOs",
    chapters: [{ chapter: "Personal Finance for CFOs", items: [{ title: "Module 37 — Personal Finance for CFOs", href: "/financial-strategy/module-37-personal-finance-cfo" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 38 — Financial Distress & Turnaround Finance",
    chapters: [{ chapter: "Financial Distress & Turnaround Finance", items: [{ title: "Module 38 — Financial Distress & Turnaround Finance", href: "/financial-strategy/module-38-financial-distress-turnaround" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 39 — Crisis Communication & Financial PR",
    chapters: [{ chapter: "Crisis Communication & Financial PR", items: [{ title: "Module 39 — Crisis Communication & Financial PR", href: "/financial-strategy/module-39-crisis-communication" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 40 — Project Finance & Infrastructure",
    chapters: [{ chapter: "Project Finance & Infrastructure", items: [{ title: "Module 40 — Project Finance & Infrastructure", href: "/financial-strategy/module-40-project-finance" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 41 — Real Estate Finance",
    chapters: [{ chapter: "Real Estate Finance", items: [{ title: "Module 41 — Real Estate Finance", href: "/financial-strategy/module-41-real-estate-finance" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 42 — Insurance for CFOs",
    chapters: [{ chapter: "Insurance for CFOs", items: [{ title: "Module 42 — Insurance for CFOs", href: "/financial-strategy/module-42-insurance" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 43 — Pension & Employee Benefits Finance",
    chapters: [{ chapter: "Pension & Employee Benefits Finance", items: [{ title: "Module 43 — Pension & Employee Benefits Finance", href: "/financial-strategy/module-43-pension-benefits" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 44 — CFO in Financial Services",
    chapters: [{ chapter: "CFO in Financial Services", items: [{ title: "Module 44 — CFO in Financial Services", href: "/financial-strategy/module-44-financial-services-cfo" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 45 — CFO in Technology & SaaS",
    chapters: [{ chapter: "CFO in Technology & SaaS", items: [{ title: "Module 45 — CFO in Technology & SaaS", href: "/financial-strategy/module-45-technology-saas-cfo" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 46 — CFO in Family Business & Conglomerates",
    chapters: [{ chapter: "CFO in Family Business & Conglomerates", items: [{ title: "Module 46 — CFO in Family Business & Conglomerates", href: "/financial-strategy/module-46-family-business-conglomerates" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 47 — Macroeconomics for CFOs",
    chapters: [{ chapter: "Macroeconomics for CFOs", items: [{ title: "Module 47 — Macroeconomics for CFOs", href: "/financial-strategy/module-47-macroeconomics" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 48 — Geopolitical Risk & Finance",
    chapters: [{ chapter: "Geopolitical Risk & Finance", items: [{ title: "Module 48 — Geopolitical Risk & Finance", href: "/financial-strategy/module-48-geopolitical-risk" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 49 — CFO Toolkit: Templates & Checklists",
    chapters: [{ chapter: "CFO Toolkit: Templates & Checklists", items: [{ title: "Module 49 — CFO Toolkit: Templates & Checklists", href: "/financial-strategy/module-49-cfo-toolkit" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 50 — CFO Case Studies: Pakistan & Gulf",
    chapters: [{ chapter: "CFO Case Studies: Pakistan & Gulf", items: [{ title: "Module 50 — CFO Case Studies: Pakistan & Gulf", href: "/financial-strategy/module-50-case-studies" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 51 — CFA Exam Bridge for CFOs",
    chapters: [{ chapter: "CFA Exam Bridge for CFOs", items: [{ title: "Module 51 — CFA Exam Bridge for CFOs", href: "/financial-strategy/module-51-cfa-exam-bridge" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 52 — ACCA, ICAP & Professional Credentials",
    chapters: [{ chapter: "ACCA, ICAP & Professional Credentials", items: [{ title: "Module 52 — ACCA, ICAP & Professional Credentials", href: "/financial-strategy/module-52-acca-icap-credentials" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 53 — FRM, ESG Certificate & Specialist Credentials",
    chapters: [{ chapter: "FRM, ESG Certificate & Specialist Credentials", items: [{ title: "Module 53 — FRM, ESG Certificate & Specialist Credentials", href: "/financial-strategy/module-53-frm-esg-specialist-credentials" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 54 — Financial Statement Analysis for CFOs",
    chapters: [{ chapter: "Financial Statement Analysis for CFOs", items: [{ title: "Module 54 — Financial Statement Analysis for CFOs", href: "/financial-strategy/module-54-financial-statement-analysis" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 55 — Consolidation Accounting Workshop",
    chapters: [{ chapter: "Consolidation Accounting Workshop", items: [{ title: "Module 55 — Consolidation Accounting Workshop", href: "/financial-strategy/module-55-consolidation-accounting-workshop" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 56 — Equity Capital Markets Deep Dive",
    chapters: [{ chapter: "Equity Capital Markets Deep Dive", items: [{ title: "Module 56 — Equity Capital Markets Deep Dive", href: "/financial-strategy/module-56-equity-capital-markets" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 57 — Debt Capital Markets Deep Dive",
    chapters: [{ chapter: "Debt Capital Markets Deep Dive", items: [{ title: "Module 57 — Debt Capital Markets Deep Dive", href: "/financial-strategy/module-57-debt-capital-markets" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 58 — Private Equity & Venture Capital for CFOs",
    chapters: [{ chapter: "Private Equity & Venture Capital for CFOs", items: [{ title: "Module 58 — Private Equity & Venture Capital for CFOs", href: "/financial-strategy/module-58-private-equity-venture-capital" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 59 — Corporate Law for CFOs (Pakistan)",
    chapters: [{ chapter: "Corporate Law for CFOs (Pakistan)", items: [{ title: "Module 59 — Corporate Law for CFOs (Pakistan)", href: "/financial-strategy/module-59-corporate-law-pakistan" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 60 — Financial Regulation & Compliance",
    chapters: [{ chapter: "Financial Regulation & Compliance", items: [{ title: "Module 60 — Financial Regulation & Compliance", href: "/financial-strategy/module-60-financial-regulation-compliance" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 61 — Startup & Early Stage Valuation",
    chapters: [{ chapter: "Startup & Early Stage Valuation", items: [{ title: "Module 61 — Startup & Early Stage Valuation", href: "/financial-strategy/module-61-startup-valuation" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 62 — Distressed Asset Valuation",
    chapters: [{ chapter: "Distressed Asset Valuation", items: [{ title: "Module 62 — Distressed Asset Valuation", href: "/financial-strategy/module-62-distressed-asset-valuation" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 63 — Intangible Asset & IP Valuation",
    chapters: [{ chapter: "Intangible Asset & IP Valuation", items: [{ title: "Module 63 — Intangible Asset & IP Valuation", href: "/financial-strategy/module-63-intangible-asset-valuation" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 64 — Behavioral Finance for CFOs",
    chapters: [{ chapter: "Behavioral Finance for CFOs", items: [{ title: "Module 64 — Behavioral Finance for CFOs", href: "/financial-strategy/module-64-behavioral-finance" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 65 — Negotiation for CFOs",
    chapters: [{ chapter: "Negotiation for CFOs", items: [{ title: "Module 65 — Negotiation for CFOs", href: "/financial-strategy/module-65-negotiation-for-cfos" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 66 — The Future CFO",
    chapters: [{ chapter: "The Future CFO", items: [{ title: "Module 66 — The Future CFO", href: "/financial-strategy/module-66-future-cfo" }] as { title: string; href: string }[] }],
  },
  // ─── TRACK B: QUANT & HEDGE FUND ────────────────────────────────────────────
  {
    part: "Module 67 — Probability & Statistics for Quant Finance",
    chapters: [{ chapter: "Probability & Statistics for Quant Finance", items: [{ title: "Module 67 — Probability & Statistics for Quant Finance", href: "/financial-strategy/module-67-probability-statistics-quant-finance" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 68 — Stochastic Calculus & Financial Mathematics",
    chapters: [{ chapter: "Stochastic Calculus & Financial Mathematics", items: [{ title: "Module 68 — Stochastic Calculus & Financial Mathematics", href: "/financial-strategy/module-68-stochastic-calculus-financial-mathematics" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 69 — Options Theory & Derivatives Pricing",
    chapters: [{ chapter: "Options Theory & Derivatives Pricing", items: [{ title: "Module 69 — Options Theory & Derivatives Pricing", href: "/financial-strategy/module-69-options-theory-derivatives-pricing" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 70 — Fixed Income Mathematics & Bond Markets",
    chapters: [{ chapter: "Fixed Income Mathematics & Bond Markets", items: [{ title: "Module 70 — Fixed Income Mathematics & Bond Markets", href: "/financial-strategy/module-70-fixed-income-mathematics-bond-markets" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 71 — Market Microstructure & Trading Systems",
    chapters: [{ chapter: "Market Microstructure & Trading Systems", items: [{ title: "Module 71 — Market Microstructure & Trading Systems", href: "/financial-strategy/module-71-market-microstructure-trading-systems" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 72 — Algorithmic & Quantitative Trading Strategies",
    chapters: [{ chapter: "Algorithmic & Quantitative Trading Strategies", items: [{ title: "Module 72 — Algorithmic & Quantitative Trading Strategies", href: "/financial-strategy/module-72-algorithmic-quantitative-trading-strategies" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 73 — Portfolio Construction & Optimization",
    chapters: [{ chapter: "Portfolio Construction & Optimization", items: [{ title: "Module 73 — Portfolio Construction & Optimization", href: "/financial-strategy/module-73-portfolio-construction-optimization" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 74 — Hedge Fund Strategies In Depth",
    chapters: [{ chapter: "Hedge Fund Strategies In Depth", items: [{ title: "Module 74 — Hedge Fund Strategies In Depth", href: "/financial-strategy/module-74-hedge-fund-strategies-in-depth" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 75 — Performance Measurement & Attribution",
    chapters: [{ chapter: "Performance Measurement & Attribution", items: [{ title: "Module 75 — Performance Measurement & Attribution", href: "/financial-strategy/module-75-performance-measurement-attribution" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 76 — Fund Operations & Infrastructure",
    chapters: [{ chapter: "Fund Operations & Infrastructure", items: [{ title: "Module 76 — Fund Operations & Infrastructure", href: "/financial-strategy/module-76-fund-operations-infrastructure" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 77 — Investor Relations for Investment Managers",
    chapters: [{ chapter: "Investor Relations for Investment Managers", items: [{ title: "Module 77 — Investor Relations for Investment Managers", href: "/financial-strategy/module-77-investor-relations-investment-managers" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 78 — Machine Learning for Finance",
    chapters: [{ chapter: "Machine Learning for Finance", items: [{ title: "Module 78 — Machine Learning for Finance", href: "/financial-strategy/module-78-machine-learning-for-finance" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 79 — Risk Management for Investment Managers",
    chapters: [{ chapter: "Risk Management for Investment Managers", items: [{ title: "Module 79 — Risk Management for Investment Managers", href: "/financial-strategy/module-79-risk-management-investment-managers" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 80 — Regulation for Investment Managers",
    chapters: [{ chapter: "Regulation for Investment Managers", items: [{ title: "Module 80 — Regulation for Investment Managers", href: "/financial-strategy/module-80-regulation-investment-managers" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 81 — Interest Rate & Credit Derivatives",
    chapters: [{ chapter: "Interest Rate & Credit Derivatives", items: [{ title: "Module 81 — Interest Rate & Credit Derivatives", href: "/financial-strategy/module-81-interest-rate-credit-derivatives" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 82 — Commodity Markets & Trading",
    chapters: [{ chapter: "Commodity Markets & Trading", items: [{ title: "Module 82 — Commodity Markets & Trading", href: "/financial-strategy/module-82-commodity-markets-trading" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 83 — Global Macro Trading",
    chapters: [{ chapter: "Global Macro Trading", items: [{ title: "Module 83 — Global Macro Trading", href: "/financial-strategy/module-83-global-macro-trading" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 84 — Quantitative Risk Models: EVT & Copulas",
    chapters: [{ chapter: "Quantitative Risk Models: EVT & Copulas", items: [{ title: "Module 84 — Quantitative Risk Models: EVT & Copulas", href: "/financial-strategy/module-84-quantitative-risk-models-evt-copulas" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 85 — Portfolio Risk Reporting",
    chapters: [{ chapter: "Portfolio Risk Reporting", items: [{ title: "Module 85 — Portfolio Risk Reporting", href: "/financial-strategy/module-85-portfolio-risk-reporting" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 86 — Alternative Data Sourcing & Signals",
    chapters: [{ chapter: "Alternative Data Sourcing & Signals", items: [{ title: "Module 86 — Alternative Data Sourcing & Signals", href: "/financial-strategy/module-86-alternative-data-sourcing-signals" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 87 — Systematic Strategy Implementation",
    chapters: [{ chapter: "Systematic Strategy Implementation", items: [{ title: "Module 87 — Systematic Strategy Implementation", href: "/financial-strategy/module-87-systematic-strategy-implementation" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 88 — Fund Legal Structures",
    chapters: [{ chapter: "Fund Legal Structures", items: [{ title: "Module 88 — Fund Legal Structures", href: "/financial-strategy/module-88-fund-legal-structures" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 89 — Tax for Investment Managers",
    chapters: [{ chapter: "Tax for Investment Managers", items: [{ title: "Module 89 — Tax for Investment Managers", href: "/financial-strategy/module-89-tax-investment-managers" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 90 — ESG for Investment Managers",
    chapters: [{ chapter: "ESG for Investment Managers", items: [{ title: "Module 90 — ESG for Investment Managers", href: "/financial-strategy/module-90-esg-investment-managers" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 91 — Islamic Finance for Investment Managers",
    chapters: [{ chapter: "Islamic Finance for Investment Managers", items: [{ title: "Module 91 — Islamic Finance for Investment Managers", href: "/financial-strategy/module-91-islamic-finance-investment-managers" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 92 — Quant Finance in Pakistan & Gulf",
    chapters: [{ chapter: "Quant Finance in Pakistan & Gulf", items: [{ title: "Module 92 — Quant Finance in Pakistan & Gulf", href: "/financial-strategy/module-92-quant-finance-pakistan-gulf" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 93 — The Future of Quantitative Finance ✓ Track B Complete",
    chapters: [{ chapter: "The Future of Quantitative Finance", items: [{ title: "Module 93 — The Future of Quantitative Finance", href: "/financial-strategy/module-93-future-quantitative-finance" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 94 — The Investment Banking Industry",
    chapters: [{ chapter: "The Investment Banking Industry", items: [{ title: "Module 94 — The Investment Banking Industry", href: "/financial-strategy/module-94-investment-banking-industry" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 95 — IB Analyst & Associate Toolkit",
    chapters: [{ chapter: "IB Analyst & Associate Toolkit", items: [{ title: "Module 95 — IB Analyst & Associate Toolkit", href: "/financial-strategy/module-95-ib-analyst-toolkit" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 96 — Financial Statement Analysis for IB",
    chapters: [{ chapter: "Financial Statement Analysis for IB", items: [{ title: "Module 96 — Financial Statement Analysis for IB", href: "/financial-strategy/module-96-fsa-investment-banking" }] as { title: string; href: string }[] }],
  },
  {
    part: "Module 97 — IB Industry Coverage Groups",
    chapters: [{ chapter: "IB Industry Coverage Groups", items: [{ title: "Module 97 — IB Industry Coverage Groups", href: "/financial-strategy/module-97-coverage-groups" }] as { title: string; href: string }[] }],
  },
];

const allHrefs = modules.flatMap((m) =>
  m.chapters.flatMap((ch) => ch.items.map((i) => i.href))
);

export function FinancialStrategySidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(modules.map((m) => [m.part, true]))
  );

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    const activeModule = modules.find((m) =>
      m.chapters.some((ch) => ch.items.some((item) => item.href === pathname))
    );
    if (activeModule) {
      setCollapsed((prev) => ({ ...prev, [activeModule.part]: false }));
    }
  }, [pathname]);

  const toggleCollapse = (part: string) => {
    setCollapsed((prev) => ({ ...prev, [part]: !prev[part] }));
  };

  return (
    <>
      {/* Reading progress bar — gold */}
      <div
        className="fixed top-0 left-0 h-1 z-50 transition-all duration-150"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(to right, #b45309, #f59e0b, #fbbf24)",
        }}
      />

      {/* Mobile header */}
      <header className="md:hidden fixed top-1 left-0 right-0 z-40 bg-[#0a0f1e] border-b border-amber-900/40 flex items-center justify-between px-4 py-3">
        <Link href="/financial-strategy" className="font-black text-lg text-white">
          <span className="text-amber-400">Financial</span> Strategy
        </Link>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-lg text-amber-400 hover:bg-amber-400/10"
          aria-label="Toggle menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/60 z-30"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 bottom-0 w-72 z-40 flex flex-col transition-transform duration-300
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
        style={{ background: "#0d1630", borderRight: "1px solid #1e2d45" }}
      >
        {/* Brand */}
        <div className="p-6" style={{ borderBottom: "1px solid #1e2d45" }}>
          <Link href="/" className="block mb-4">
            <div className="font-black text-xl text-white">
              Byte<span className="text-blue-400">Wise</span>
            </div>
            <div className="text-xs text-slate-500 mt-0.5">Programming from First Principles</div>
          </Link>
          <Link href="/financial-strategy" className="block">
            <div className="font-black text-lg leading-tight">
              <span className="text-amber-400">Financial</span>
              <span className="text-white"> Strategy</span>
            </div>
            <div className="text-xs text-amber-700/70 mt-0.5 uppercase tracking-widest">
              Premium Finance Track
            </div>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-4">
          <Link
            href="/financial-strategy"
            className={`block px-6 py-2 text-sm font-semibold mb-2 transition-colors ${
              pathname === "/financial-strategy"
                ? "text-amber-400"
                : "text-slate-400 hover:text-amber-300"
            }`}
          >
            Overview
          </Link>

          {modules.map((module) => (
            <div key={module.part} className="mb-2">
              <button
                onClick={() => toggleCollapse(module.part)}
                className="w-full flex items-center justify-between px-6 py-2 text-xs font-bold uppercase tracking-widest transition-colors"
                style={{ color: collapsed[module.part] ? "#6b5a2e" : "#d97706" }}
              >
                <span>{module.part}</span>
                <span className="text-base leading-none">
                  {collapsed[module.part] ? "+" : "−"}
                </span>
              </button>

              {!collapsed[module.part] && (
                <div>
                  {module.chapters.map((ch) => (
                    <div key={ch.chapter}>
                      <div className="px-6 pt-2 pb-1 text-xs font-semibold uppercase tracking-wider text-amber-900/80">
                        {ch.chapter}
                      </div>
                      {ch.items.length === 0 ? (
                        <div className="pl-8 pr-6 py-1.5 text-xs text-slate-600 italic">
                          Coming soon
                        </div>
                      ) : (
                        <ul>
                          {ch.items.map((item) => {
                            const globalIdx = allHrefs.indexOf(item.href);
                            const isActive = pathname === item.href;
                            return (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  onClick={() => setMobileOpen(false)}
                                  className={`flex items-center gap-3 pl-8 pr-6 py-2 text-sm transition-colors ${
                                    isActive
                                      ? "text-amber-400 border-r-2 border-amber-400"
                                      : "text-slate-400 hover:text-amber-300"
                                  }`}
                                  style={
                                    isActive
                                      ? { background: "rgba(245,158,11,0.08)" }
                                      : undefined
                                  }
                                >
                                  <span className="text-xs text-slate-600 w-4 flex-shrink-0">
                                    {globalIdx + 1}.
                                  </span>
                                  <span className="flex-1">{item.title}</span>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 space-y-2" style={{ borderTop: "1px solid #1e2d45" }}>
          <Link
            href="/docs/cs-book"
            className="block text-xs text-slate-500 hover:text-amber-400 transition-colors text-center"
          >
            CS Book →
          </Link>
          <Link
            href="/blog"
            className="block text-xs text-slate-500 hover:text-amber-400 transition-colors text-center"
          >
            Blog →
          </Link>
          <div className="text-xs text-slate-600 text-center">By Zulfiqar Ali Mir</div>
        </div>
      </aside>
    </>
  );
}
