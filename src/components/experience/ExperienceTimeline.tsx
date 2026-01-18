import { Experience } from '@/data/types';

export const ExperienceTimeline = ({ experiences }: { experiences: Experience[] }) => {
    return (
        <div className="space-y-12">
            {experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-8 md:pl-12 group">
                    {/* Timeline Line */}
                    <div className="absolute left-0 top-2 bottom-0 w-px bg-zinc-800 group-last:h-auto" />

                    {/* Timeline Dot */}
                    <div className="absolute left-[-4px] top-2.5 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-zinc-950/50 shadow-[0_0_12px_rgba(59,130,246,0.5)]" />

                    <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl hover:border-zinc-700 transition-colors duration-300">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                            <div>
                                <h3 className="font-semibold text-xl text-zinc-100">{exp.title}</h3>
                                <p className="text-blue-400 font-medium">{exp.company}</p>
                            </div>
                            <span className="text-sm font-mono text-zinc-500 bg-zinc-900/50 px-3 py-1 rounded-full border border-zinc-800 whitespace-nowrap w-fit">
                                {exp.period}
                            </span>
                        </div>

                        <ul className="space-y-2 text-zinc-400 mb-6">
                            {exp.description.map((desc, i) => (
                                <li key={i} className="flex items-start">
                                    <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-zinc-600 rounded-full flex-shrink-0" />
                                    <span>{desc}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                                <span key={i} className="px-2.5 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-md text-xs font-medium">
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