import { Skill } from '@/data/types';
import { Row, TechList } from '../shared/UI';

export const SkillsSection = ({ skills }: { skills: Skill[] }) => {
    const groupedSkills = skills.reduce<Record<string, string[]>>((acc, skill) => {
        (acc[skill.category] ??= []).push(skill.name);
        return acc;
    }, {});

    return (
        <div className="flex flex-col gap-5">
            {Object.entries(groupedSkills).map(([category, names]) => (
                <Row key={category} label={<span className="font-sans text-small">{category}</span>}>
                    <TechList items={names} className="text-ink" />
                </Row>
            ))}
        </div>
    );
};
