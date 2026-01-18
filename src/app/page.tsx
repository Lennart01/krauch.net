import { Download, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/shared/Button';
import { SkillsSection } from '@/components/skills/SkillsSection';
import { ExperienceTimeline } from '@/components/experience/ExperienceTimeline';
import { skills } from '@/data/skills';
import { experience } from '@/data/experience';

export default function Home() {
    return (
        <main className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-blue-500/30">

            {/* Background Ambience (Global) */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                    {/* Intense Top Glow for Hero */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] -z-10 opacity-60" />

                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium border border-blue-500/20 hover:bg-blue-500/20 transition-colors cursor-default">
                                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                                Available for new opportunities
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                                Cloud Platform & <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300">
                  Kubernetes Engineer
                </span>
                            </h1>

                            <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                                Building Cloud-Native Infrastructure with Kubernetes, Terraform, and lots of coffee.
                                Specializing in automation, observability, and platform engineering.
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <a href='/lennart-krauch-cv.pdf' download>
                                    <Button className="w-full sm:w-auto shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]">
                                        <Download className="w-4 h-4 mr-2" />
                                        Download CV
                                    </Button>
                                </a>
                                <a href="mailto:lennart@krauch.net">
                                    <Button variant="secondary" className="w-full sm:w-auto backdrop-blur-sm bg-white/5 border-white/10 hover:bg-white/10">
                                        <Mail className="w-4 h-4 mr-2" />
                                        Contact Me
                                    </Button>
                                </a>
                            </div>

                            <div className="mt-12 flex justify-center gap-8 text-zinc-500">
                                <a href="https://github.com/Lennart01" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 hover:scale-110 transition-all duration-300">
                                    <Github className="w-6 h-6" />
                                </a>
                                <a href="https://linkedin.com/in/lennart-krauch" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 hover:scale-110 transition-all duration-300">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Experience Section (Moved Up) */}
                <section id="experience" className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            <div className="mb-16 flex items-center gap-4">
                                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500/50" />
                                <h2 className="text-3xl font-bold text-white">
                                    Professional Journey
                                </h2>
                                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-500/50" />
                            </div>

                            <ExperienceTimeline experiences={experience} />
                        </div>
                    </div>
                </section>

                {/* Skills Section (Moved Down) */}
                <section id="skills" className="py-24 relative">
                    <div className="absolute inset-0 bg-blue-500/5 -skew-y-3 -z-10 transform origin-left" />
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="mb-16 flex items-center gap-4">
                                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500/50" />
                                <h2 className="text-3xl font-bold text-white flex items-center gap-2">
                                    Technical Arsenal
                                </h2>
                                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-500/50" />
                            </div>

                            <SkillsSection skills={skills} />
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-8 text-center text-zinc-600 text-sm border-t border-white/5 bg-black/20 backdrop-blur-xl">
                    <p>© {new Date().getFullYear()} Lennart Krauch. Built with Next.js & Tailwind.</p>
                </footer>
            </div>
        </main>
    );
}