import { Experience } from '@/data/types';

export const ExperienceTimeline = ({ experiences }: { experiences: Experience[] }) => {
    return (
        <div className="space-y-8">
            {experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-8 before:absolute before:left-0 before:h-full before:w-px before:bg-gray-200">
                    <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-blue-600 -translate-x-[5px]" />
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="font-medium text-lg text-gray-900">{exp.title}</h3>
                            <span className="text-sm text-gray-500">{exp.period}</span>
                        </div>
                        <p className="text-gray-600 mb-2">{exp.company}</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            {exp.description.map((desc, i) => (
                                <li key={i}>{desc}</li>
                            ))}
                        </ul>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                                <span key={i} className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};