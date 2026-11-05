import { ChevronRight } from 'lucide-react';
import { Experience } from '@/data/types';
import { Row, TechList } from '../shared/UI';

type EmployerGroup = { company: string; roles: Experience[] };

// Consecutive roles at the same employer form one group; data is ordered newest first.
const groupByEmployer = (experiences: Experience[]): EmployerGroup[] =>
    experiences.reduce<EmployerGroup[]>((groups, role) => {
        const last = groups[groups.length - 1];
        if (last && last.company === role.company) {
            last.roles.push(role);
        } else {
            groups.push({ company: role.company, roles: [role] });
        }
        return groups;
    }, []);

const tenure = (roles: Experience[]) => {
    const start = roles[roles.length - 1].period.split(' – ')[0];
    const end = roles[0].period.split(' – ')[1];
    return `${start} – ${end}`;
};

const RoleDetails = ({ role }: { role: Experience }) => (
    <>
        <ul className="mt-3 flex flex-col gap-2 text-pretty text-body">
            {role.description.map((desc) => (
                <li key={desc} className="relative pl-5">
                    <span aria-hidden="true" className="absolute left-0 top-0 text-ink-3">–</span>
                    {desc}
                </li>
            ))}
        </ul>
        <TechList items={role.technologies} className="mt-4 text-ink-2" />
    </>
);

export const ExperienceTimeline = ({ experiences }: { experiences: Experience[] }) => (
    <div className="flex flex-col gap-16">
        {groupByEmployer(experiences).map((group, groupIdx) => (
            <article key={group.company + groupIdx}>
                <Row label={tenure(group.roles)}>
                    <h3 className="text-title font-semibold leading-7 tracking-[-0.01em] text-ink">{group.company}</h3>
                </Row>

                <ol className="mt-8 flex flex-col gap-8">
                    {group.roles.map((role, roleIdx) => {
                        const isCurrent = groupIdx === 0 && roleIdx === 0;
                        return (
                            <li key={role.title + role.period}>
                                <Row label={<time>{role.period}</time>}>
                                    {isCurrent ? (
                                        <>
                                            <h4 className="text-body font-medium leading-7 text-ink">{role.title}</h4>
                                            <RoleDetails role={role} />
                                        </>
                                    ) : (
                                        <details className="group/role">
                                            <summary className="-my-2 block cursor-pointer list-none py-2 text-ink [&::-webkit-details-marker]:hidden">
                                                {/* Inline chevron trails the last word, so it sits in the same place whether the title wraps or not. */}
                                                <h4 className="inline text-body font-medium leading-7">{role.title}</h4>
                                                <ChevronRight className="ml-1.5 inline h-4 w-4 -translate-y-px align-middle text-ink-3 transition-transform group-open/role:rotate-90 group-hover/role:text-ink-2" aria-hidden="true" />
                                            </summary>
                                            <RoleDetails role={role} />
                                        </details>
                                    )}
                                </Row>
                            </li>
                        );
                    })}
                </ol>
            </article>
        ))}
    </div>
);
