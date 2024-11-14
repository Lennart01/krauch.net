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
        <div className="space-y-12">
            {Object.entries(groupedSkills).map(([category, categorySkills]) => (
                <div key={category} className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                        {category}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {categorySkills.map((skill, idx) => (
                            <SkillCard key={`${category}-${idx}`} skill={skill} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};