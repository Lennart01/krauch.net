// src/data/types.ts
export interface Skill {
    name: string;
    category: string;
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
    thesis?: Thesis;
}

export interface Thesis {
    title: string;
    company: string;
    period: string;
    summary: string;
    technologies: string[];
}

export interface Certificate {
    title: string;
    issuer: string;
    year: string;
}

export interface PersonalInfo {
    name: string;
    title: string;
    summary: string;
    contact: {
        github: string;
        email: string;
        linkedin: string;
        education: string;
    };
}