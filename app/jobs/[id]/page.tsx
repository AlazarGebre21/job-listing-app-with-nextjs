import jobs from "../../../data/jobs";
import { notFound } from "next/navigation";

export default function JobDetail({ params }: { params: { id: string } }) {
  const job = jobs.find((job) => job.id === params.id);


 
  if (!job) return notFound();

  return (
    <main className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <section className="md:col-span-2 space-y-4">
        <h1 className="text-2xl font-bold">{job.title}</h1>
        <p>{job.description}</p>

        <div>
          <h2 className="text-xl font-semibold">Responsibilities</h2>
          <ul className="list-disc list-inside">
            {job.responsibilities.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Ideal Candidate</h2>
          <p>Age: {job.ideal_candidate.age}</p>
          <p>Gender: {job.ideal_candidate.gender}</p>
          <ul className="list-disc list-inside">
            {job.ideal_candidate.traits.map((trait, i) => (
              <li key={i}>{trait}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">When & Where</h2>
          <p>{job.when_where}</p>
        </div>
      </section>

      <aside className="bg-gray-100 p-4 rounded-xl">
        <h2 className="text-xl font-bold mb-2">About</h2>
        <p>
          <strong>Posted on:</strong> {job.about.posted_on}
        </p>
        <p>
          <strong>Deadline:</strong> {job.about.deadline}
        </p>
        <p>
          <strong>Location:</strong> {job.about.location}
        </p>
        <p>
          <strong>Start Date:</strong> {job.about.start_date}
        </p>
        <p>
          <strong>End_date:</strong> {job.about.end_date}
        </p>
        <p>
          <strong>Categories:</strong>
        </p>
        <ul className="list-disc list-inside ml-4">
          {job.about.categories.map((catagory, i) => (
            <li key={i}>{catagory}</li>
          ))}
        </ul>
        <p>
          <strong>Skills:</strong>
        </p>
        <ul className="list-disc list-inside ml-4">
          {job.about.required_skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
<br />
<br />
      </aside>
    </main>
  );
}
