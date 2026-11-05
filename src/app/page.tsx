import { Download, Mail } from 'lucide-react';
import { ExperienceTimeline } from '@/components/experience/ExperienceTimeline';
import { SkillsSection } from '@/components/skills/SkillsSection';
import { Row, Section, TechList } from '@/components/shared/UI';
import { certificates } from '@/data/certificates';
import { education } from '@/data/education';
import { experience } from '@/data/experience';
import { personalInfo } from '@/data/personal-info';
import { skills } from '@/data/skills';

const { name, title, summary, contact } = personalInfo;
const githubUrl = `https://github.com/${contact.github}`;
const linkedinUrl = `https://linkedin.com/in/${contact.linkedin}`;
// GitHub Pages serves the site under a base path that plain hrefs to public/ do not receive.
const cvUrl = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/lennart-krauch-cv.pdf`;

const currentRole = experience[0];
const currentSince = currentRole.period.split(' – ')[0];

const textLink = "py-2.5 underline decoration-ink-3 underline-offset-4 transition-[color,text-decoration-color] hover:text-ink hover:decoration-ink-2";

// `wide` cells take the full row on phones; the rest pair up two per row.
const contactCells = [
    { label: "Email", value: contact.email, href: `mailto:${contact.email}`, external: false, wide: true },
    { label: "GitHub", value: contact.github, href: githubUrl, external: true, wide: false },
    { label: "LinkedIn", value: contact.linkedin, href: linkedinUrl, external: true, wide: false },
];

export default function Home() {
    return (
        <div className="mx-auto max-w-[48rem] px-6">
            <main>
                <header className="animate-settle pt-20 sm:pt-32">
                    <h1 className="text-display-sm font-semibold tracking-[-0.035em] text-ink sm:text-display">
                        {name}
                    </h1>
                    <p className="mt-3 text-title text-ink">{title}</p>
                    <p className="mt-6 max-w-[60ch] text-pretty text-body">{summary}</p>

                    {/* Hairline grid: cells share 1px edges because the gaps reveal the box's line colour behind them. */}
                    <div className="mt-10 grid gap-px overflow-hidden rounded-md border border-line bg-line">
                        <dl className="grid grid-cols-2 gap-px md:grid-cols-3">
                            <div className="col-span-2 bg-ground px-5 py-4 md:col-span-3">
                                <dt className="text-small">Currently</dt>
                                <dd className="text-body text-ink">
                                    {currentRole.title} at {currentRole.company}, since <span className="whitespace-nowrap">{currentSince}</span>
                                </dd>
                            </div>
                            {contactCells.map((cell) => (
                                <div key={cell.label} className={`min-w-0 bg-ground px-5 py-4 ${cell.wide ? "col-span-2 md:col-span-1" : ""}`}>
                                    <dt className="text-small">{cell.label}</dt>
                                    <dd className="text-body text-ink [overflow-wrap:anywhere]">
                                        <a
                                            href={cell.href}
                                            className={textLink}
                                            {...(cell.external ? { target: "_blank", rel: "noreferrer" } : {})}
                                        >
                                            {cell.value}
                                        </a>
                                    </dd>
                                </div>
                            ))}
                        </dl>
                        <div className="flex flex-wrap gap-3 bg-ground px-5 py-4">
                            <a
                                href={`mailto:${contact.email}`}
                                className="inline-flex h-11 items-center gap-2 rounded-lg bg-ink px-5 text-small font-medium text-ground transition-[background-color] hover:bg-white active:translate-y-px"
                            >
                                <Mail className="h-4 w-4" aria-hidden="true" />
                                Email me
                            </a>
                            <a
                                href={cvUrl}
                                download
                                className="inline-flex h-11 items-center gap-2 rounded-lg border border-ink-3 px-5 text-small font-medium text-ink transition-[background-color,border-color] hover:border-ink-2 hover:bg-raised active:translate-y-px"
                            >
                                <Download className="h-4 w-4" aria-hidden="true" />
                                Download CV (PDF)
                            </a>
                        </div>
                    </div>
                </header>

                <Section title="Experience">
                    <ExperienceTimeline experiences={experience} />
                </Section>

                <Section title="Skills">
                    <SkillsSection skills={skills} />
                </Section>

                <Section title="Education & Certification">
                    <div className="flex flex-col gap-8">
                        {education.map((edu) => (
                            <Row key={edu.degree} label={edu.period}>
                                <h3 className="text-body font-medium leading-7 text-ink">{edu.degree}</h3>
                                <p className="text-body">{edu.institution}</p>
                                {edu.thesis && (
                                    <div className="mt-5">
                                        <p className="text-body text-ink">{edu.thesis.title}</p>
                                        <p className="text-small">
                                            Bachelor thesis, written at {edu.thesis.company}, <span className="whitespace-nowrap">{edu.thesis.period}</span>
                                        </p>
                                        <p className="mt-2 text-body">{edu.thesis.summary}</p>
                                        <TechList items={edu.thesis.technologies} className="mt-3 text-ink-2" />
                                    </div>
                                )}
                            </Row>
                        ))}
                        <div className="flex flex-col gap-3">
                            {certificates.map((cert) => (
                                <Row key={cert.title} label={cert.year}>
                                    <p className="text-body">
                                        <span className="text-ink">{cert.title}</span>, {cert.issuer}
                                    </p>
                                </Row>
                            ))}
                        </div>
                    </div>
                </Section>
            </main>

            <footer className="mt-28 flex flex-col gap-2 border-t border-rule py-8 text-small sm:flex-row sm:items-center sm:justify-between">
                <p>© {new Date().getFullYear()} {name}</p>
                <nav aria-label="Contact">
                    <ul className="flex flex-wrap gap-x-6">
                        <li><a href={`mailto:${contact.email}`} className={textLink}>Email</a></li>
                        <li><a href={cvUrl} download className={textLink}>CV (PDF)</a></li>
                        <li><a href={githubUrl} target="_blank" rel="noreferrer" className={textLink}>GitHub</a></li>
                        <li><a href={linkedinUrl} target="_blank" rel="noreferrer" className={textLink}>LinkedIn</a></li>
                    </ul>
                </nav>
            </footer>
        </div>
    );
}
