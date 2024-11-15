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
    const Icon = icons[skill.icon as keyof typeof icons];

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center gap-3">
                {Icon && (
                    <div className="p-2 bg-blue-50 rounded-md">
                        <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                )}
                <div>
                    <h3 className="font-medium text-gray-900">{skill.name}</h3>
                </div>
            </div>
        </div>
    );
};