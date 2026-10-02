import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Engineering — ByteWise",
  description:
    "Data Engineering Specialization by DeepLearning.AI and AWS: the data engineering lifecycle, pipelines, storage architecture, and serving data.",
};

const outcomes = [
  {
    title: "Understand the data engineering lifecycle",
    body: "Gain insights into the foundational lifecycle to approach data engineering problems systematically.",
  },
  {
    title: "Build effective data pipelines and architecture",
    body: "Understand data generation, ingestion, storage, and retrieval to choose the right tools and function effectively as a real-world data engineer.",
  },
  {
    title: "Make data useful and drive results",
    body: "Serve processed data to data stakeholders to effectively drive business and organizational goals.",
  },
];

const activities = [
  "Gather requirements from simulated stakeholder conversations, translate those requirements to design a data system, and choose the tools for the project.",
  "Design and implement end-to-end data pipelines in AWS cloud, troubleshoot common problems data engineers face, and use popular open-source tools to monitor your data pipelines.",
  "Build different data storage architecture, query and transform your data, and serve your data to data stakeholders for business analytics and machine learning use cases.",
];

const links = [
  {
    label: "Course",
    href: "https://learn.deeplearning.ai/specializations/data-engineering/lesson/gy6y4z/welcome-to-data-engineering",
  },
  { label: "Claude", href: "https://claude.ai/chat/1bbabe50-6e06-4394-a958-71ad9cfd58e8" },
  { label: "ByteWise", href: "https://bytewise-psi.vercel.app/data-engineering" },
];

export default function DataEngineeringPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <Link href="/" className="text-sm text-blue-300 hover:text-blue-200">
            ← ByteWise
          </Link>
          <h1 className="mt-6 text-5xl font-black tracking-tight">Data Engineering</h1>
          <p className="mt-3 text-lg text-slate-300">
            DeepLearning.AI &amp; AWS · Instructors: Joe Reis, Morgan Willis
          </p>
          <a
            href="https://learn.deeplearning.ai/specializations/data-engineering/lesson/gy6y4z/welcome-to-data-engineering"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block bg-blue-500 hover:bg-blue-400 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg"
          >
            Start the course on DeepLearning.AI →
          </a>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What you&apos;ll learn</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {outcomes.map((o) => (
            <div key={o.title} className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <h3 className="font-bold text-gray-900 mb-2">{o.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{o.body}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Throughout this program, you will</h2>
        <ul className="space-y-3">
          {activities.map((a) => (
            <li key={a} className="flex gap-3 text-gray-700 leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
              {a}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Links</h2>
        <ul className="space-y-2">
          {links.map((l) => (
            <li key={l.href} className="text-gray-700">
              <span className="font-semibold">{l.label}:</span>{" "}
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-500 underline break-all"
              >
                {l.href}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
