interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
}

export default function ProjectCard({ title, description, tech, link, github }: ProjectCardProps) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2">{description}</p>
      <p className="mt-2 text-sm text-gray-500">{tech.join(', ')}</p>
      <div className="mt-4 flex gap-2">
        {link && <a href={link} target="_blank" className="text-blue-500">Live Demo</a>}
        {github && <a href={github} target="_blank" className="text-gray-700">GitHub</a>}
      </div>
    </div>
  );
}
