import JobCard from "@/components/JobCard";
import jobs from "@/data/jobs";

export default function Home() {
  console.log('Rendering Home page')
  return (
    <main className="p-6 space-y-4">
      <h1 className="text-3xl font-bold">Opportunities</h1>
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          id={job.id}
          title={job.title}
          description={job.description}
          image={job.image}
        />
      ))}
    </main>
  );
}
