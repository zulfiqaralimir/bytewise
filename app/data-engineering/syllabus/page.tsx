import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Program Syllabus — Data Engineering — ByteWise",
  description:
    "Syllabus of the Data Engineering Specialization by Joe Reis, DeepLearning.AI and AWS: prerequisites, four-course outline, learning activities, grading and support.",
};

function rich(text: string) {
  return text.split("**").map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-gray-900">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

function Bullets({ items, dot = "bg-blue-500" }: { items: string[]; dot?: string }) {
  return (
    <ul className="space-y-2">
      {items.map((t) => (
        <li key={t} className="flex gap-3">
          <span className={`mt-2.5 w-1.5 h-1.5 rounded-full ${dot} flex-shrink-0`} />
          <span>{rich(t)}</span>
        </li>
      ))}
    </ul>
  );
}

const stats = [
  { value: "4", label: "Courses" },
  { value: "15", label: "Weeks" },
  { value: "60%", label: "Pass graded labs" },
  { value: "80%", label: "Pass graded quizzes" },
];

const nav = [
  { id: "about", label: "About" },
  { id: "prerequisites", label: "Prerequisites" },
  { id: "unique", label: "What’s unique" },
  { id: "outline", label: "Course outline" },
  { id: "activities", label: "Activities" },
  { id: "grading", label: "Grading" },
  { id: "support", label: "Support" },
];

const prerequisites = [
  {
    tag: "Required",
    tagStyle: "bg-rose-100 text-rose-700",
    title: "Intermediate Python",
    points: ["**Python syntax**", "**Data structures**, **functions**, and **classes**"],
    hint: "",
  },
  {
    tag: "Helpful",
    tagStyle: "bg-amber-100 text-amber-700",
    title: "Pandas dataframes",
    points: ["Some familiarity **may help**, **not required**"],
    hint: "Try the W3Schools or Kaggle Pandas tutorials.",
  },
  {
    tag: "Helpful",
    tagStyle: "bg-amber-100 text-amber-700",
    title: "Basic SQL",
    points: ["Basic familiarity **may help**, **not required**"],
    hint: "Try the SQLBolt Tutorials.",
  },
  {
    tag: "Helpful",
    tagStyle: "bg-amber-100 text-amber-700",
    title: "AWS cloud fundamentals",
    points: ["Technical fundamentals of **AWS** will **help**, **not required**"],
    hint: "Try AWS Cloud Practitioner Essentials and AWS Cloud Technical Essentials.",
  },
];

const courses = [
  {
    n: 1,
    title: "Introduction to Data Engineering",
    weeks: 4,
    accent: "bg-blue-600",
    soft: "border-blue-200 bg-blue-50",
    objectives: [
      "Identify key upstream and downstream collaborators and stakeholders for data engineers",
      "Articulate a mental framework for building data engineering solutions",
      "Identify some of the necessary considerations for requirements gathering at the start of a new project",
      "Describe the structure of the data engineering lifecycle and its undercurrents, and how to think about data engineering problems through this lens",
      "Identify some of the key technologies that can be employed in different stages of the data engineering lifecycle",
      "Evaluate technologies and tools against the context of requirements and good data architecture",
      "Design a data architecture on AWS based on stakeholder requirements",
      "Implement a batch and streaming pipeline on AWS to support a product recommendation system",
    ],
  },
  {
    n: 2,
    title: "Source Systems, Data Ingestion, and Pipelines",
    weeks: 4,
    accent: "bg-violet-600",
    soft: "border-violet-200 bg-violet-50",
    objectives: [
      "Identify different data formats and determine appropriate source systems for generating each type of data",
      "Explain at a high level how data is generated, stored, and retrieved in various source systems, including relational databases, NoSQL databases, object storage, and streaming systems",
      "Explain the basics of cloud networking",
      "Troubleshoot database connection errors",
      "Explain the difference between batch and streaming ingestions and identify uses cases for each pattern",
      "Differentiate between the two batch ingestion patterns: Extract-Transform-Load (ETL) and Extract-Load-Transform (ELT)",
      "Create a script to ingest data from a REST API",
      "Describe the basic components of an event-streaming platform",
      "Interact with an event streaming platform as a source system and as an ingestion tool",
      "Use Terraform to provision AWS resources for your data pipeline",
      "Identify tools for monitoring your data systems and data quality",
      "Identify and monitor relevant data quality metrics",
      "Explain how orchestration can be applied to a data pipeline, and list its benefits",
      "Build data pipelines with DAGs in Airflow using features such as Taskflow API, operators, XCom variables, etc.",
    ],
  },
  {
    n: 3,
    title: "Data Storage and Queries",
    weeks: 3,
    accent: "bg-emerald-600",
    soft: "border-emerald-200 bg-emerald-50",
    objectives: [
      "Explain how data is physically stored on disk and in memory",
      "Compare how data is stored and queried in object, block, and file storage systems",
      "Explain how data is stored in row-oriented vs column-oriented databases",
      "Explain how graph and vector databases store and retrieve data",
      "Explain the key architectural features of data warehouses, data lakes, and data lakehouses",
      "Implement a data lake using AWS Glue",
      "Implement a data lakehouse with a medallion-like architecture using Lake Formation and Iceberg",
      "Explain the stages of the life of a query",
      "Implement advanced SQL queries",
      "Explain the role of an index and its impact on query performance",
      "Summarize approaches for processing aggregate and join queries",
      "Compare the execution times of aggregate queries between row and columnar storage",
      "List some strategies for enhancing query performance",
      "Aggregate and join streaming data",
    ],
  },
  {
    n: 4,
    title: "Data Modeling, Transformation, and Serving",
    weeks: 4,
    accent: "bg-orange-600",
    soft: "border-orange-200 bg-orange-50",
    objectives: [
      "Define data modeling and its role in reflecting business logic",
      "Apply the normalization stages to a denormalized table",
      "Describe the fact and dimension tables of a star schema and transform data in third normal form to a star schema",
      "Describe the data warehouse modeling approaches such as Inmon, Kimball, Data Vault, and One Big Table",
      "Use feature engineering to convert a dataset into a tabular form that’s expected by a classical machine learning algorithms",
      "Preprocess and vectorize textual data",
      "List techniques for processing and augmenting image data",
      "Compare an in-memory processing framework like Spark, and a disk-based processing framework like Hadoop",
      "Describe the technical considerations for choosing a distributed processing framework, such as Spark, vs a non-distributed framework like Pandas dataframes",
      "Describe the technical considerations for using Spark SQL vs Spark DataFrames when transforming data using PySpark",
      "Describe how streaming transformation works with a near-real time processing engine such as Spark Structured Streaming",
      "Identify different ways of serving data for analytics and machine learning use cases",
      "Describe the purpose of a semantic layer that sits on top of the data model",
      "Create views and materialized views",
      "Describe the benefits and drawbacks of serving data using views and materialized views",
    ],
  },
];

const activities = [
  {
    letter: "V",
    title: "Lecture videos",
    points: [
      "**Short videos** on the underlying **theory** plus **demonstrations** of key tools and technologies each week",
      "**Lab Walkthrough** videos give a high-level overview of each lab before you dive in",
      "Videos labeled **[Optional]** supplement your learning and are **not assessed**",
      "Some optional videos feature **industry experts** sharing practical feedback from veterans in data",
    ],
  },
  {
    letter: "L",
    title: "Labs",
    points: [
      "**Hands-on exercises** to apply what you learned with **open source** and **AWS** technologies",
      "**Graded Programming Assignments** cover critical concepts and carry a **larger share of your grade**",
      "**Practice Labs** are **ungraded** so you can focus on learning, not just grades",
      "Try **all** labs, graded or practice",
    ],
  },
  {
    letter: "Q",
    title: "Quizzes",
    points: [
      "Questions that **reinforce** each week's concepts",
      "A **graded quiz** near the end of each week counts toward your course grade",
      "**Practice quizzes** contain reflection questions; **short graded quizzes** check understanding along the way",
      "**Read the feedback** carefully after each quiz",
    ],
  },
  {
    letter: "R",
    title: "Reading items",
    points: [
      "**Text content** you can easily reference later",
      "Some include **additional links** to learn more; these are **not required** unless specified",
      "Items labeled **[Optional]** cover secondary material and are **not assessed**",
    ],
  },
];

const grading = [
  { value: "60%+", title: "Graded labs", points: ["**Graded programming assignments**", "**60% or more** required to pass"], style: "border-blue-200 bg-blue-50 text-blue-700" },
  { value: "80%+", title: "Graded quizzes", points: ["**Graded quiz** assignments", "**80% or more** required to pass"], style: "border-violet-200 bg-violet-50 text-violet-700" },
  { value: "Done", title: "Practice labs", points: ["**Ungraded** practice labs", "**No grade needed**, you only need to **complete** them"], style: "border-emerald-200 bg-emerald-50 text-emerald-700" },
];

function SectionHeading({ id, kicker, title }: { id: string; kicker: string; title: string }) {
  return (
    <div id={id} className="scroll-mt-20 mb-6">
      <div className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1">{kicker}</div>
      <h2 className="text-3xl font-black text-gray-900 tracking-tight">{title}</h2>
    </div>
  );
}

export default function SyllabusPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-gray-700">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 pt-12 pb-16">
          <Link href="/data-engineering" className="text-sm text-blue-300 hover:text-blue-200">
            ← Data Engineering
          </Link>
          <h1 className="mt-6 text-4xl md:text-6xl font-black tracking-tight">Program Syllabus</h1>
          <p className="mt-3 text-lg text-slate-300 max-w-2xl">
            Data Engineering Specialization · designed by Joe Reis with DeepLearning.AI &amp; AWS
          </p>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-white/10 border border-white/15 px-5 py-4">
                <div className="text-3xl font-black text-blue-300">{s.value}</div>
                <div className="text-sm text-slate-300">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section nav */}
      <nav className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-3 flex gap-2 overflow-x-auto text-sm whitespace-nowrap">
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="px-3 py-1.5 rounded-full text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors"
            >
              {n.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-14 space-y-20 text-[17px] leading-relaxed">
        {/* About */}
        <section>
          <SectionHeading id="about" kicker="Overview" title="What is this program about?" />
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">The program</h3>
              <Bullets
                items={[
                  "Designed by **Joe Reis** with **DeepLearning.AI** and **AWS**",
                  "Covers the **fundamentals of data engineering**",
                  "**Theory and frameworks** for thinking like a data engineer",
                  "**Practical skills** for building data engineering solutions **on the cloud**",
                ]}
              />
            </div>
            <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Who it&apos;s for</h3>
              <Bullets
                items={[
                  "Anyone pursuing a **career in or adjacent to data engineering**",
                  "**Students**, or professionals already working in a field that **involves data**",
                  "Working **data engineers** benefit from the mix of **theory and technical application**",
                ]}
              />
            </div>
          </div>
        </section>

        {/* Instructor */}
        <section>
          <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm flex flex-col sm:flex-row sm:items-center gap-5">
            <span className="flex-shrink-0 w-16 h-16 rounded-2xl bg-blue-600 text-white text-2xl font-black flex items-center justify-center">
              JR
            </span>
            <div className="flex-1">
              <div className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1">Program designer</div>
              <h3 className="text-xl font-bold text-gray-900">Joe Reis</h3>
              <Bullets
                items={[
                  "**Best-Selling Author** and **Global Keynote Speaker**",
                  "**Data Engineer & Architect**, **Professor**, **Podcaster**",
                  "**Advisor & Investor**",
                ]}
              />
            </div>
            <a
              href="https://www.linkedin.com/in/josephreis/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-3 text-center"
            >
              LinkedIn →
            </a>
          </div>
        </section>

        {/* Prerequisites */}
        <section>
          <SectionHeading id="prerequisites" kicker="Before you start" title="What background knowledge do I need?" />
          <div className="grid gap-4 sm:grid-cols-2">
            {prerequisites.map((p) => (
              <div key={p.title} className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
                <span className={`inline-block rounded-full px-3 py-0.5 text-xs font-bold ${p.tagStyle}`}>{p.tag}</span>
                <h3 className="mt-3 font-bold text-gray-900 text-lg">{p.title}</h3>
                <div className="mt-2"><Bullets items={p.points} /></div>
                {p.hint && <p className="mt-2 text-sm text-gray-500">{p.hint}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Unique */}
        <section>
          <SectionHeading id="unique" kicker="Approach" title="What is unique about this program?" />
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
              <h3 className="font-bold text-gray-900 mb-2">Learn to think like a data engineer</h3>
              <Bullets
                items={[
                  "Design, build, and maintain systems that turn **raw data** into something **useful** for **downstream stakeholders**",
                  "It\’s **not just about tools**",
                  "First **gather stakeholder needs** and understand their **business problems**",
                  "**Translate needs into system requirements**, then choose the right tools and technologies",
                  "Leave with a **robust mental framework** for **any** data engineering project",
                ]}
              />
            </div>
            <div className="rounded-2xl border border-violet-200 bg-violet-50 p-6">
              <h3 className="font-bold text-gray-900 mb-2">Hands-on practice</h3>
              <Bullets
                dot="bg-violet-500"
                items={[
                  "**Simulated stakeholder conversations** to gather requirements",
                  "**End-to-end batch and streaming pipelines** on AWS",
                  "**Troubleshoot** problems new data engineers commonly face",
                  "**Open source tools** to orchestrate and monitor pipelines",
                  "**Data lake** and **data lakehouse** storage architectures",
                  "**Query, model, and transform** data with various processing frameworks",
                  "**Serve data** for business analytics and machine learning",
                  "**Just-in-time** tool introductions, with detailed lab instructions and **video walkthroughs**",
                ]}
              />
            </div>
          </div>
          <div className="mt-4 rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-2">Textbook and readings</h3>
            <Bullets
              items={[
                "Textbook: **Fundamentals of Data Engineering**",
                "**Additional supplementary readings** are provided throughout the courses",
              ]}
            />
          </div>
        </section>

        {/* Outline */}
        <section>
          <SectionHeading id="outline" kicker="Program outline" title="Four courses" />
          <p className="mb-6">Tap a course to see its main learning objectives.</p>
          <div className="space-y-4">
            {courses.map((c, i) => (
              <details
                key={c.n}
                open={i === 0}
                className={`group rounded-2xl border ${c.soft} overflow-hidden`}
              >
                <summary className="flex items-center gap-4 p-5 cursor-pointer list-none select-none">
                  <span
                    className={`flex-shrink-0 w-12 h-12 rounded-xl ${c.accent} text-white text-xl font-black flex items-center justify-center`}
                  >
                    {c.n}
                  </span>
                  <span className="flex-1">
                    <span className="block text-xs font-bold uppercase tracking-widest text-gray-500">
                      Course {c.n} · {c.weeks} weeks
                    </span>
                    <span className="block text-xl font-bold text-gray-900">{c.title}</span>
                  </span>
                  <span className="text-gray-400 text-2xl transition-transform group-open:rotate-90">›</span>
                </summary>
                <div className="px-5 pb-6 bg-white/70">
                  <p className="text-sm text-gray-500 pt-4 pb-3">
                    This course consists of {c.weeks} weeks of content and covers these main learning objectives:
                  </p>
                  <ol className="space-y-2.5">
                    {c.objectives.map((o, k) => (
                      <li key={o} className="flex gap-3">
                        <span
                          className={`flex-shrink-0 mt-0.5 w-6 h-6 rounded-full ${c.accent} text-white text-xs font-bold flex items-center justify-center`}
                        >
                          {k + 1}
                        </span>
                        <span>{o}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Activities */}
        <section>
          <SectionHeading id="activities" kicker="How you learn" title="Learning activities" />
          <div className="grid gap-4 sm:grid-cols-2">
            {activities.map((a) => (
              <div key={a.title} className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 rounded-xl bg-blue-600 text-white font-black flex items-center justify-center">
                    {a.letter}
                  </span>
                  <h3 className="font-bold text-gray-900 text-lg">{a.title}</h3>
                </div>
                <Bullets items={a.points} />
              </div>
            ))}
          </div>
        </section>

        {/* Grading */}
        <section>
          <SectionHeading id="grading" kicker="Assessment" title="How are assessments graded?" />
          <div className="grid gap-4 md:grid-cols-3">
            {grading.map((g) => (
              <div key={g.title} className={`rounded-2xl border p-6 ${g.style}`}>
                <div className="text-4xl font-black">{g.value}</div>
                <h3 className="mt-2 font-bold text-gray-900">{g.title}</h3>
                <div className="mt-2 text-gray-700"><Bullets items={g.points} dot="bg-gray-400" /></div>
              </div>
            ))}
          </div>
        </section>

        {/* Support */}
        <section>
          <SectionHeading id="support" kicker="Help" title="Where to get support" />
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Course content questions</h3>
              <Bullets
                items={[
                  "Join the **DeepLearning.AI Forum**",
                  "Reach **course Mentors** and **fellow learners**",
                  "Help with any **course content-related** issue",
                ]}
              />
            </div>
            <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Platform questions</h3>
              <Bullets
                items={[
                  "Use the **Learner Help Center**",
                  "For **technical problems** such as **error messages**",
                  "**Difficulty submitting assignments**",
                  "Problems with **video playback**",
                ]}
              />
            </div>
          </div>
        </section>

        <div className="text-center">
          <Link href="/data-engineering" className="text-blue-600 hover:text-blue-500 underline font-semibold">
            ← Back to Data Engineering
          </Link>
        </div>
      </div>
    </main>
  );
}
