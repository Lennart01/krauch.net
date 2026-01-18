import { Skill } from '@/data/types';
import { SkillCard } from './SkillCard';
import { useMemo } from 'react';

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
        <div className="space-y-16">
            {Object.entries(groupedSkills).map(([category, categorySkills]) => (
                <div key={category} className="space-y-6">
                    {/* Updated Header Styling for better readability */}
                    <h3 className="text-xl font-bold text-white flex items-center gap-3">
                        <span className="w-8 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
                        {category}
                        <span className="text-zinc-600 text-sm font-normal ml-auto hidden sm:block">
                            {categorySkills.length} skills
                        </span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {categorySkills.map((skill, idx) => (
                            <SkillCard key={`${category}-${idx}`} skill={skill} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};