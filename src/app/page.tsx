import { Download, Mail, Github, Linkedin, GraduationCap } from 'lucide-react';
import { ExperienceTimeline } from '@/components/experience/ExperienceTimeline';
import { SkillsSection } from '@/components/skills/SkillsSection';
import { SectionHeader, Card, Badge } from '@/components/shared/UI';
import { experience } from '@/data/experience';
import { skills } from '@/data/skills';

export default function Home() {
    return (
        <main className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24 lg:py-32">
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/10 blur-[150px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/10 blur-[150px]" />
            </div>

            <div className="relative z-10">
                <header className="animate-fade-up flex flex-col md:flex-row md:items-end justify-between gap-10 mb-32">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-br from-zinc-100 to-zinc-500">
                            Lennart Krauch
                        </h1>
                        <h2 className="text-xl md:text-2xl text-indigo-400 font-medium tracking-tight mb-6">
                            Cloud Platform & Kubernetes Engineer
                        </h2>
                        <p className="text-zinc-400 leading-relaxed text-lg">
                            Building scalable cloud-native infrastructure with Kubernetes and Terraform. Specializing in platform engineering, automation, and distributed systems observability.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 shrink-0 w-full md:w-auto">
                        <a
                            href="mailto:Lennart@krauch.net"
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-zinc-100 text-zinc-950 rounded-lg font-semibold hover:bg-white transition-all active:scale-[0.98] shadow-lg shadow-zinc-100/10"
                        >
                            <Mail className="w-4 h-4" />
                            Contact Me
                        </a>
                        <a
                            href="/lennart-krauch-cv.pdf"
                            download
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900/80 text-zinc-100 border border-zinc-800 rounded-lg font-medium hover:bg-zinc-800 hover:border-zinc-700 transition-all active:scale-[0.98]"
                        >
                            <Download className="w-4 h-4" />
                            Download CV
                        </a>
                        <div className="flex justify-center gap-6 mt-2">
                            <a href="https://github.com/Lennart01" target="_blank" rel="noreferrer" aria-label="GitHub Profile" className="text-zinc-500 hover:text-zinc-200 hover:scale-110 transition-all">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://linkedin.com/in/lennart-krauch" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" className="text-zinc-500 hover:text-zinc-200 hover:scale-110 transition-all">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </header>

                <section className="mb-32 animate-fade-up delay-100">
                    <SectionHeader title="Experience" />
                    <ExperienceTimeline experiences={experience} />
                </section>

                <section className="mb-32 animate-fade-up delay-200">
                    <SectionHeader title="Technical Expertise" />
                    <SkillsSection skills={skills} />
                </section>

                <section className="mb-32 animate-fade-up delay-300">
                    <SectionHeader title="Education" />
                    <Card className="p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                        <div className="p-4 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 shrink-0">
                            <GraduationCap className="w-8 h-8 text-indigo-400" />
                        </div>
                        <div className="flex-1 w-full">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                                <h4 className="text-xl md:text-2xl font-semibold text-zinc-100 tracking-tight">B.Sc. in Computer Science</h4>
                                <Badge>2020 — 2025</Badge>
                            </div>
                            <div className="text-indigo-400/90 font-medium mb-6 text-lg">
                                Hochschule Karlsruhe – University of Applied Sciences
                            </div>
                            <div className="bg-zinc-950/50 p-5 rounded-xl border border-zinc-800/80">
                                <strong className="text-zinc-300 font-medium flex items-center gap-2 mb-2 text-sm uppercase tracking-wider">
                                    Thesis Topic
                                </strong>
                                <p className="text-zinc-400 leading-relaxed">
                                    Measuring and Optimizing CO2 Emissions of a Kubernetes-based Cloud Application
                                </p>
                            </div>
                        </div>
                    </Card>
                </section>

                <footer className="pt-10 border-t border-zinc-800/50 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-500 text-sm animate-fade-up delay-300">
                    <p className="flex items-center gap-2">
                        © {new Date().getFullYear()} Lennart Krauch. All rights reserved.
                    </p>
                    <div className="flex items-center gap-8 font-mono uppercase tracking-wider text-[11px]">
                        <a href="https://github.com/Lennart01" className="hover:text-zinc-300 hover:underline transition-all">GitHub</a>
                        <a href="https://linkedin.com/in/lennart-krauch" className="hover:text-zinc-300 hover:underline transition-all">LinkedIn</a>
                    </div>
                </footer>
            </div>
        </main>
    );
}
