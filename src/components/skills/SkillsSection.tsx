import { useMemo } from 'react';
import { Code2, Cloud, Wrench, Server, Database, Terminal } from 'lucide-react';
import { Skill } from '@/data/types';
import { Card, Badge } from '../shared/UI';

const categoryIcons: Record<string, React.ElementType> = {
    "Programming Languages": Code2,
    "Cloud & Infrastructure": Cloud,
    "DevOps Tools": Wrench,
    "Webservers & LB": Server,
    "Monitoring & Databases": Database,
    "Development Tools": Terminal,
};

export const SkillsSection = ({ skills }: { skills: Skill[] }) => {
    const groupedSkills = useMemo(() => {
        return skills.reduce((acc, skill) => {
            const category = skill.category;
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(skill);
            return acc;
        }, {} as Record<string, Skill[]>);
    }, [skills]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(groupedSkills).map(([category, categorySkills]) => {
                const Icon = categoryIcons[category] || Terminal;

                return (
                    <Card key={category} className="p-6 md:p-8 flex flex-col h-full">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-2.5 bg-indigo-500/10 rounded-xl border border-indigo-500/20 text-indigo-400">
                                <Icon className="w-5 h-5" />
                            </div>
                            <h4 className="font-medium text-zinc-100 tracking-tight">{category}</h4>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {categorySkills.map((skill, idx) => (
                                <Badge key={idx}>{skill.name}</Badge>
                            ))}
                        </div>
                    </Card>
                );
            })}
        </div>
    );
};
