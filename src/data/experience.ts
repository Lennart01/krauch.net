import { Experience } from './types';

export const experience: Experience[] = [
    {
        title: "Cloud Platform Engineer",
        company: "inovex GmbH",
        period: "Mar. 2025 - Present",
        description: [
            "Building a Database-as-a-Service (DBaaS) platform on Kubernetes supporting Postgres, SQLServer, and MongoDB",
            "Developing internal Kubernetes Operators in Go to automate database lifecycle management and serving logic",
            "Modularizing Terraform infrastructure and implementing monitoring for large-scale database serving across multiple worker clusters",
            "Building additional internal tools and supporting operators"
        ],
        technologies: ["Go", "Kubernetes Operators", "PostgreSQL", "Terraform", "Monitoring", "DBaaS"]
    },
    {
        title: "Working Student (Cloud Platform Engineering)",
        company: "inovex GmbH",
        period: "Dec. 2024 - Feb. 2025",
        description: [
            "Ensured a seamless handover of the scrumlr.io infrastructure and operations to colleagues",
            "Maintained operational stability of the app during the transition period",
            "Created comprehensive technical documentation"
        ],
        technologies: ["Kubernetes", "FluxCD", "Technical Documentation"]
    },
    {
        title: "Bachelor Thesis",
        company: "inovex GmbH",
        period: "Aug. 2024 - Nov. 2024",
        description: [
            "Topic: Measuring and Optimizing CO2 Emissions of a Kubernetes-based Cloud Application",
            "Analyzed the carbon footprint of cloud-native infrastructure and implemented optimization strategies"
        ],
        technologies: ["GreenIT", "Prometheus", "Optimization", "Cloud Infrastructure"]
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