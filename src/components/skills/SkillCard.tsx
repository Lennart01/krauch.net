import {
    Box, Code, Cloud, Terminal, Database,
    MonitorDot, Server
} from 'lucide-react';
import { Skill } from '../../data/types';

const icons = {
    Box,
    Code,
    Cloud,
    Terminal,
    Database,
    MonitorDot,
    Server
} as const;

export const SkillCard = ({ skill }: { skill: Skill }) => {
    const Icon = icons[skill.icon as keyof typeof icons] || Code;

    return (
        <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl hover:border-zinc-600 hover:bg-zinc-800/80 transition-all duration-300 group">
            <div className="flex items-center gap-3">
                <div className="p-2.5 bg-zinc-800 rounded-lg group-hover:bg-zinc-700 transition-colors">
                    <Icon className="w-5 h-5 text-zinc-400 group-hover:text-blue-400 transition-colors" />
                </div>
                <div>
                    <h3 className="font-medium text-zinc-200 group-hover:text-white transition-colors">
                        {skill.name}
                    </h3>
                </div>
            </div>
        </div>
    );
};