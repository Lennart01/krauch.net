// src/types/index.ts
export interface Skill {
    name: string;
    category: string;
    icon: string;
}

export interface Experience {
    title: string;
    company: string;
    period: string;
    description: string[];
    technologies: string[];
}

export interface Education {
    institution: string;
    degree: string;
    period: string;
    thesis?: string;
}

export interface Certificate {
    title: string;
    issuer: string;
    year: string;
}

export interface PersonalInfo {
    name: string;
    title: string;
    contact: {
        github: string;
        email: string;
        linkedin: string;
        education: string;
    };
}