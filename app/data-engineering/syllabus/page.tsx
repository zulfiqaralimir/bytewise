import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Program Syllabus — Data Engineering — ByteWise",
  description:
    "Syllabus of the Data Engineering Specialization by Joe Reis, DeepLearning.AI and AWS: prerequisites, four-course outline, learning activities, grading and support.",
};

const courses = [
  {
    n: 1,
    title: "Introduction to Data Engineering",
    weeks: 4,
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
    objectives: [
      "Define data modeling and its role in reflecting business logic",
      "Apply the normalization stages to a denormalized table",
      "Describe the fact and dimension tables of a star schema and transform data in third normal form to a star schema",
      "Describe the data warehouse modeling approaches such as Inmon, Kimball, Data Vault, and One Big Table",
      "Use feature engineering to convert a dataset into a tabular form that's expected by a classical machine learning algorithms",
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
    title: "Lecture videos",
    body: "A collection of short videos that cover the underlying theory as well as demonstrations for important tools and technologies you need for each week. There are also “Lab Walkthrough” videos that give you a high level overview of the labs before you dive in. Some of the videos are labeled “[Optional]”, and are designed to supplement your learning experience but you will not be assessed on this content. Some of these optional videos feature industry experts and are intended to provide you with practical feedback from veterans in the field of data.",
  },
  {
    title: "Labs",
    body: "Hands-on exercises that allow you to practice applying what you learned in the lecture videos. These are designed to help you develop skills for particular open source or AWS technologies that are commonly used when building data engineering solutions. There are two types of labs: Graded Programming Assignments cover critical concepts for that week, and they typically make up a larger percentage of your grade. Practice Labs are ungraded; the concepts they cover are still important, but designating some labs as “practice” reduces the pressure to excel in all of them, so you can focus on learning rather than just completing them for a grade. You are encouraged to try all of the labs, whether graded or practice.",
  },
  {
    title: "Quizzes",
    body: "A collection of questions to help you reinforce your learning about the concepts covered in each week. You will find a graded quiz near the end of each week, and the grade you obtain for those quizzes will contribute to your overall grade for each course. Occasionally you will find practice quizzes that contain reflection questions or short graded quizzes that contain questions to check your understanding throughout the week. After completing each quiz, make sure you read the feedback carefully.",
  },
  {
    title: "Reading items",
    body: "Content presented in a textual format so that you can more easily reference the information later on. Some of these reading items will include additional links for you to learn more about the topic. Unless otherwise specified, you are not required to review the materials from these external links to be successful in this program. Some of these reading items are labeled “[Optional]” and cover secondary material that is not critical for the program.",
  },
];

export default function SyllabusPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <Link href="/data-engineering" className="text-sm text-blue-300 hover:text-blue-200">
            ← Data Engineering
          </Link>
          <h1 className="mt-6 text-4xl md:text-5xl font-black tracking-tight">Program Syllabus</h1>
          <p className="mt-3 text-lg text-slate-300">
            Data Engineering Specialization · Joe Reis · DeepLearning.AI &amp; AWS
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-6 py-12 text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">What is this program about?</h2>
        <p>
          This program was designed by Joe Reis in partnership with DeepLearning.AI and AWS to cover the
          fundamentals of data engineering, both in terms of the underlying theory and frameworks for thinking
          like a data engineer, as well as practical skills for building data engineering solutions on the cloud.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">Who is this program designed for?</h2>
        <p>
          This program is designed for anyone interested in pursuing a career in or adjacent to data engineering.
          You might be a student, or already working professionally in a field that involves data. In either case,
          you&apos;re interested in acquiring data engineering skills and knowledge to support your career goals.
          Even if you are already working as a data engineer, you will find value in the combination of theoretical
          background and technical application presented here.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">What background knowledge do I need?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Required:</strong> intermediate Python programming skills, including familiarity with Python
            syntax, data structures, functions, and classes.
          </li>
          <li>
            Some familiarity with Pandas dataframes may be helpful but is not required. To learn the basics, the
            W3Schools Pandas tutorials or the Kaggle Pandas tutorials are recommended.
          </li>
          <li>
            Basic familiarity with SQL may be helpful but is not required. The SQLBolt Tutorials are a good place
            to learn the basics.
          </li>
          <li>
            Basic familiarity with the technical fundamentals of the AWS cloud will be helpful but is not required.
            To learn the basics, the AWS Cloud Practitioner Essentials and AWS Cloud Technical Essentials courses are
            recommended.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">What is unique about this program?</h2>
        <h3 className="font-bold text-gray-900 mt-4 mb-1">It teaches you how to think like a data engineer</h3>
        <p>
          You will learn how to think like a data engineer when designing, building, and maintaining systems that
          take raw data, turn it into something useful, and serve it to downstream stakeholders. It&apos;s not just
          about the tools and technologies! You will first learn how to gather stakeholder needs and understand the
          business problems they are trying to solve with data. Then you&apos;ll translate those needs into system
          requirements, and choose the appropriate tools and technologies for the solutions you&apos;re aiming to
          build. By the end of this program, you&apos;ll walk away with a robust mental framework that you can apply
          to any data engineering project.
        </p>
        <h3 className="font-bold text-gray-900 mt-4 mb-1">Hands-on practice</h3>
        <p>
          You&apos;ll have plenty of opportunities to practice applying the mental framework through hands-on
          activities. You&apos;ll be thrown into simulated stakeholder conversations and be asked to gather
          requirements for your data systems. You&apos;ll design and implement end-to-end batch and streaming data
          pipelines on the AWS cloud, troubleshoot common problems faced by many new data engineers, use popular open
          source tools to orchestrate and monitor your data pipelines, build data lake and data lakehouse storage
          architectures, query, model, and transform your data using various processing frameworks, and serve data to
          downstream stakeholders for business analytics and machine learning use cases. The program takes a
          just-in-time approach to introduce you to tools and technologies you&apos;ll need for each exercise, and
          you&apos;ll be guided through each step of the labs with detailed instructions and video walkthroughs.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">Textbook and readings</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <em>Fundamentals of Data Engineering</em>
          </li>
          <li>Additional supplementary reading materials will be provided throughout the courses</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-2">Program outline</h2>
        <p className="mb-5">This program is structured as 4 courses.</p>
        <div className="space-y-5">
          {courses.map((c) => (
            <section key={c.n} className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
              <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">
                Course {c.n} · {c.weeks} weeks
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{c.title}</h3>
              <p className="text-sm text-gray-600 mb-2">
                This course consists of {c.weeks} weeks of content and covers these main learning objectives:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                {c.objectives.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Learning activities used in this program</h2>
        <div className="space-y-4">
          {activities.map((a) => (
            <div key={a.title}>
              <h3 className="font-bold text-gray-900 mb-1">{a.title}</h3>
              <p>{a.body}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">How are assessments graded?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Graded labs</strong> (graded programming assignments): a grade of 60% or more is required to pass.
          </li>
          <li>
            <strong>Quiz assignments</strong> (graded quiz): a grade of 80% or more is required to pass.
          </li>
          <li>
            <strong>Ungraded labs</strong> (practice labs): no grade needed, you only need to complete them.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">Where to get support</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Questions related to the course content:</strong> join the DeepLearning.AI Forum, where you can
            reach out to course Mentors and fellow learners for help with any course content-related issues.
          </li>
          <li>
            <strong>Questions related to the DeepLearning.AI platform:</strong> refer to the Learner Help Center for
            specific technical problems, such as error messages, difficulty submitting assignments, or problems with
            video playback.
          </li>
        </ul>
      </article>
    </main>
  );
}
