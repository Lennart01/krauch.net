// src/data/experience.ts
import { Experience } from './types';

export const experience: Experience[] = [
    {
        title: "Bachelor Thesis",
        company: "inovex GmbH",
        period: "Aug. 2024 - Present",
        description: [
            "Measuring and Optimizing CO2 Emissions of a Kubernetes-based Cloud Application"
        ],
        technologies: ["Kubernetes", "Cloud Infrastructure", "CO2 Optimization"]
    },
    {
        title: "Working Student IT Engineering & Operations",
        company: "inovex GmbH",
        period: "Mar. 2023 - Jul. 2024",
        description: [
            "Development of Kubernetes infrastructure for scrumlr.io, including cluster deployment automation and Git versioning with FluxCD",
            "Setup of high-availability Postgres clusters and backup infrastructure",
            "Implementation of monitoring components including Grafana dashboards and alerts",
            "Development of infrastructure for AI model serving using BentoML for text and image generation models",
            "Mentoring and supporting development teams in infrastructure and DevOps practices"
        ],
        technologies: ["Kubernetes", "Terraform", "FluxCD", "GitLab CI/CD", "Prometheus", "Grafana", "BentoML", "OpenStack"]
    },
    {
        title: "IT Engineering & Operations Intern",
        company: "inovex GmbH",
        period: "Sept. 2022 - Feb. 2023",
        description: [
            "Supported the development of ParrotApp, a generative AI service platform",
            "Containerized solutions using GitLab pipelines with Kaniko",
            "Implemented monitoring and alerting systems",
            "Assisted in GPU infrastructure setup for AI model deployment"
        ],
        technologies: ["Python", "Docker", "GitLab", "Prometheus", "Grafana", "BentoML"]
    }
];