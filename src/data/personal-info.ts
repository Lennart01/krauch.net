// src/data/personal-info.ts
import { PersonalInfo } from "./types"

export const personalInfo: PersonalInfo = {
    name: "Lennart Krauch",
    title: "Cloud Platform / Kubernetes Engineer",
    // \u2060 (word joiner) after each hyphen keeps "Database-as-a-Service" on one line.
    summary: "Cloud Platform Engineer at inovex GmbH. I build a Kubernetes-based Database-\u2060as-\u2060a-\u2060Service for PostgreSQL, SQL Server and MongoDB, with in-house operators written in Go.",
    contact: {
        github: "Lennart01",
        email: "Lennart@krauch.net",
        linkedin: "lennart-krauch",
        education: "B.Sc."
    }
};