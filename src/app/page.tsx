// src/app/page.tsx
import { Download, Mail } from 'lucide-react';
import { Button } from '@/components/shared/Button';
import { SkillCard } from '@/components/skills/SkillCard';
import { ExperienceTimeline } from '@/components/experience/ExperienceTimeline';
import { skills } from '@/data/skills';
import { experience } from '@/data/experience';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              DevOps Engineer & Cloud Infrastructure Specialist
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Building Cloud-Native Infrastructure with Kubernetes, Terraform, and Lots of Coffee.
            </p>
            <div className="flex justify-center gap-4">
              <a href='/lennart-krauch-cv.pdf'>
                <Button>
                  <Download className="w-5 h-5 mr-2 inline" />
                  Download CV
                </Button>
              </a>
              <a href="mailto:lennart@krauch.net">
                <Button variant="secondary">
                  <Mail className="w-5 h-5 mr-2 inline" />
                  Contact Me
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, idx) => (
              <SkillCard key={idx} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
          <ExperienceTimeline experiences={experience} />
        </div>
      </section>
    </main >
  );
}