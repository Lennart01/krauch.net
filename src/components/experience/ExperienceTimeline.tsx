import { Calendar } from 'lucide-react';
import { Experience } from '@/data/types';
import { Card, Badge } from '../shared/UI';

export const ExperienceTimeline = ({ experiences }: { experiences: Experience[] }) => {
    return (
        <div className="flex flex-col relative">
            <div className="hidden md:block absolute left-[208px] top-4 bottom-4 w-px bg-gradient-to-b from-zinc-800/20 via-zinc-800 to-zinc-800/20" />

            {experiences.map((exp, idx) => (
                <div key={idx} className="group flex flex-col md:flex-row gap-8 items-start mb-12 last:mb-0 relative">

                    <div className="hidden md:block absolute left-[208px] top-8 w-2.5 h-2.5 rounded-full bg-zinc-800 border-2 border-indigo-500/50 -translate-x-[4.5px] ring-4 ring-[#0A0A0B] group-hover:border-indigo-400 group-hover:bg-indigo-500/20 transition-all duration-300" />

                    <div className="md:w-48 shrink-0 md:pt-6 md:text-right">
                        <time className="inline-flex items-center gap-2 text-zinc-400 text-sm font-mono tracking-wide bg-zinc-900/50 px-3 py-1.5 rounded-full border border-zinc-800/50 md:bg-transparent md:border-none md:p-0">
                            <Calendar className="w-4 h-4 text-indigo-500/70 hidden md:block" />
                            {exp.period}
                        </time>
                    </div>

                    <Card as="article" className="flex-1 w-full p-6 md:p-8">
                        <h4 className="text-xl font-semibold text-zinc-100 mb-1 tracking-tight">
                            {exp.title}
                        </h4>
                        <div className="text-indigo-400/90 font-medium mb-6 flex items-center gap-2">
                            {exp.company}
                        </div>
                        <ul className="flex flex-col gap-3.5 mb-8">
                            {exp.description.map((desc, i) => (
                                <li key={i} className="flex items-start gap-3 text-zinc-400 leading-relaxed text-sm md:text-base">
                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/40 mt-2.5 shrink-0" />
                                    <span>{desc}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/50 mt-auto">
                            {exp.technologies.map((tech, i) => (
                                <Badge key={i}>{tech}</Badge>
                            ))}
                        </div>
                    </Card>
                </div>
            ))}
        </div>
    );
};
