import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acknowledgments — Data Engineering — ByteWise",
  description:
    "Contributors to the DeepLearning.AI Data Engineering Professional Certificate: AWS experts, industry experts, Factored.AI engineers, the DeepLearning.AI team, video team and course testers.",
};

type Person = { name: string; role: string; bio?: string };

const awsExperts: Person[] = [
  {
    name: "Morgan Willis",
    role: "Principal Cloud Technologist, AWS",
    bio: "Central in incorporating **AWS**, the platform hosting most practical labs, into the program; designed and delivered learning content and guides you **step by step** through AWS services.",
  },
  {
    name: "Gal Heyne",
    role: "Technical Product Manager, AWS",
    bio: "Led the **AWS side** of the course from **ideation to launch**; helped create the initial vision, recruited the AWS course team, and secured the tools for the **practical labs**.",
  },
  {
    name: "Navnit Shukla",
    role: "Senior Solutions Architect, AWS",
    bio: "Contributed **AWS Analytics** expertise so labs reflect the **real-world** cloud data engineer experience; author of **Data Wrangling on AWS** and shaped **data transformation** in course 4.",
  },
];

const experts: Person[] = [
  { name: "Matt Housley", role: "Co-author of Fundamentals of Data Engineering · CTO at Ternary Data" },
  { name: "Colleen Fotsch", role: "Senior Technical Manager of Marketing Technologies - Data Platform, CHG Healthcare" },
  { name: "Zach Wilson", role: "Founder at DataExpert.io" },
  { name: "Carly Taylor", role: "Director, Franchise Security Strategy at Activision · Founder at Rebel Data Science · ML at Call of Duty" },
  { name: "Ben Rogojan", role: "Seattle Data Guy (Owner and Data Consultant)" },
  { name: "Bill Inmon", role: "Father of Data Warehousing · Co-Founder at Datavox" },
  { name: "Sol Rashidi", role: "Head of Technology for Startups, North America, AWS" },
  { name: "Wes McKinney", role: "Creator of Pandas · Co-founder at Voltron Data · Author, Python for Data Analysis · Principal Architect at Posit · GP at Composed Ventures" },
  { name: "Drew Banin", role: "Co-Founder at dbt Labs" },
  { name: "Christopher Bergh", role: "CEO & Head Chef at DataKitchen" },
  { name: "Barr Moses", role: "Co-Founder & CEO at Monte Carlo" },
  { name: "Abe Gong", role: "Co-Founder & CEO at Great Expectations" },
  { name: "Chad Sanderson", role: "CEO at Gable.ai" },
  { name: "Jordan Morrow", role: "Godfather of Data Literacy · SVP of Data & AI Transformation, AgileOne" },
  { name: "Juan Sequeda", role: "Principal Scientist & Head of AI Lab at data.world" },
];

const factored: Person[] = [
  { name: "David Ricardo Valencia-Díaz", role: "Curriculum Engineer, Factored.AI" },
  { name: "Cristian Amaya", role: "Curriculum Engineer, Factored.AI" },
];

const dlaiTeam: Person[] = [
  { name: "Ryan Keenan", role: "Director of Content Quality" },
  { name: "Jessica Yau", role: "Curriculum Product Manager" },
  { name: "Hawraa Salami", role: "Curriculum Product Manager" },
  { name: "Elena Sanina", role: "Senior Curriculum Engineer" },
  { name: "Obed Kobina Nsiah", role: "Curriculum Developer" },
  { name: "Ernesto Cuartas", role: "Curriculum Developer" },
  { name: "Dapinder Dosanjh", role: "Project Manager" },
  { name: "Deepthi Locanindi", role: "QA Project Manager" },
  { name: "Muhammad Mubashar", role: "Senior Learning Technologist" },
  { name: "Giovanni Lignarolo", role: "Community Coordinator" },
  { name: "Nifemi Aluko", role: "Product Marketing Manager" },
  { name: "Rowan Bradley", role: "Product Marketing Manager" },
];

const videoTeam: Person[] = [
  { name: "Nic Camp", role: "Head of Video" },
  { name: "Paul T Layland", role: "Video Editor" },
  { name: "Geoffrey Stebbins", role: "Video Editor" },
  { name: "Jake Miller", role: "Videographer" },
  { name: "Roshan Das", role: "Videographer" },
  { name: "Alec Smith", role: "Videographer" },
];

const testers = [
  "Amir Zare", "Reinoud Bosch", "Georgios Nikolitsis", "Adam Cook", "Benjamin Weitz", "Deepti Prasad",
  "Arvydas Zukauskas", "Lukman Aliyu", "Girijesh Sharma", "Idith Kisin", "Hridam Adhikari", "Yawo Amengonu",
  "Paolo Cacace", "Aryan Dhasmana", "Darrell Larsen", "Yuanzhe Li", "Madan K U", "Payal Jain", "Vy",
  "Yeison Camargo", "Kin Cheung", "Aflah Zul", "Omar Wael", "Jeevan G", "Willy Muange", "Gabi Fonseca",
];

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

function Heading({ kicker, title, intro }: { kicker: string; title: string; intro?: string }) {
  return (
    <div className="mb-6">
      <div className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1">{kicker}</div>
      <h2 className="text-3xl font-black text-gray-900 tracking-tight">{title}</h2>
      {intro && <p className="mt-2 text-gray-600">{intro}</p>}
    </div>
  );
}

function PeopleGrid({ people }: { people: Person[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {people.map((p) => (
        <div key={p.name} className="rounded-2xl bg-white border border-gray-200 p-5 shadow-sm">
          <h3 className="font-bold text-gray-900">{p.name}</h3>
          <p className="text-sm text-blue-700 mt-0.5">{p.role}</p>
        </div>
      ))}
    </div>
  );
}

export default function AcknowledgmentsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-gray-700">
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 pt-12 pb-14">
          <Link href="/data-engineering" className="text-sm text-blue-300 hover:text-blue-200">
            ← Data Engineering
          </Link>
          <h1 className="mt-6 text-4xl md:text-6xl font-black tracking-tight">Acknowledgments</h1>
          <p className="mt-3 text-lg text-slate-300 max-w-2xl">
            The people behind the Data Engineering Professional Certificate
          </p>
          <ul className="mt-6 space-y-2 text-slate-300 max-w-2xl">
            {[
              "**DeepLearning.AI** thanks all the **industry experts** who contributed to the program",
              "Some appear as **guest speakers** in course videos",
              "Others gave expertise and feedback **behind the scenes** on content and structure",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                <span className="[&_strong]:text-white">{rich(t)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-14 space-y-16 text-[17px] leading-relaxed">
        <section>
          <Heading kicker="AWS" title="AWS Subject Matter Expert Contributors" />
          <div className="space-y-3">
            {awsExperts.map((p) => (
              <div key={p.name} className="rounded-2xl border border-orange-200 bg-orange-50 p-6">
                <h3 className="text-lg font-bold text-gray-900">{p.name}</h3>
                <p className="text-sm text-orange-700 mb-2">{p.role}</p>
                <p>{rich(p.bio ?? "")}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <Heading kicker="Industry" title="Other Subject Matter Expert Contributors" />
          <PeopleGrid people={experts} />
        </section>

        <section>
          <Heading
            kicker="Engineering partner"
            title="Factored.AI Contributors"
            intro="Engineering support from Factored.AI, a partner company of DeepLearning.AI."
          />
          <ul className="mb-4 space-y-2">
            <li className="flex gap-3">
              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
              <span>{rich("Special shoutout to the engineers who built the **practical labs**")}</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
              <span>{rich("An authentic experience **building data systems on the cloud**")}</span>
            </li>
          </ul>
          <PeopleGrid people={factored} />
        </section>

        <section>
          <Heading kicker="Team" title="The DeepLearning.AI Team" />
          <PeopleGrid people={dlaiTeam.map((p) => ({ ...p, role: `${p.role}, DeepLearning.AI` }))} />
        </section>

        <section>
          <Heading
            kicker="Production"
            title="Video Team at DeepLearning.AI"
            intro="Thanks to the team members who filmed and edited the video content."
          />
          <PeopleGrid people={videoTeam.map((p) => ({ ...p, role: `${p.role}, DeepLearning.AI` }))} />
        </section>

        <section>
          <Heading kicker="Quality" title="Course Testers" />
          <ul className="mb-4 space-y-2">
            <li className="flex gap-3">
              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
              <span>{rich("Testers **diligently tested and supported** the courses to keep quality consistently high")}</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
              <span>{rich("Their **feedback and learner support** shaped the course content")}</span>
            </li>
          </ul>
          <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-3">Testers of Course 1: Introduction to Data Engineering</h3>
            <div className="flex flex-wrap gap-2">
              {testers.map((t) => (
                <span key={t} className="rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-sm text-blue-800">
                  {t}
                </span>
              ))}
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
