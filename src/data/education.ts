// src/data/education.ts
import { Education } from './types';

export const education: Education[] = [
    {
        institution: "Hochschule Karlsruhe – University of Applied Sciences",
        degree: "Bachelor of Science in Computer Science",
        period: "2020 – 2025",
        thesis: {
            title: "Measuring and Optimizing CO2 Emissions of a Kubernetes-based Cloud Application",
            company: "inovex GmbH",
            period: "Aug. 2024 – Nov. 2024",
            summary: "Analyzed the carbon footprint of cloud-native infrastructure and implemented optimization strategies",
            technologies: ["GreenIT", "Prometheus", "Optimization", "Cloud Infrastructure"]
        }
    }
];