import { Skill } from './types';

export const skills: Skill[] = [
    // Programming Languages
    { category: "Programming Languages", name: "Go", icon: "Code" },
    { category: "Programming Languages", name: "Python", icon: "Code" },
    { category: "Programming Languages", name: "Bash", icon: "Terminal" },
    { category: "Programming Languages", name: "SQL", icon: "Database" },

    // Cloud & Infrastructure
    { category: "Cloud & Infrastructure", name: "Kubernetes", icon: "Box" },
    { category: "Cloud & Infrastructure", name: "OpenStack", icon: "Server" },
    { category: "Cloud & Infrastructure", name: "Azure", icon: "Cloud" },
    { category: "Cloud & Infrastructure", name: "AWS", icon: "Cloud" },
    { category: "Cloud & Infrastructure", name: "GCP", icon: "Cloud" },

    // DevOps Tools
    { category: "DevOps Tools", name: "Terraform", icon: "Code" },
    { category: "DevOps Tools", name: "GitLab CI/CD", icon: "Box" },
    { category: "DevOps Tools", name: "FluxCD", icon: "MonitorDot" },
    { category: "DevOps Tools", name: "GitHub Actions", icon: "Box" },
    { category: "DevOps Tools", name: "Helm", icon: "Box" },
    { category: "DevOps Tools", name: "Ansible", icon: "Terminal" },
    { category: "DevOps Tools", name: "BentoML", icon: "Box" },

    // Webservers / Load Balancers (New Category from CV)
    { category: "Webservers & LB", name: "Nginx", icon: "Server" },
    { category: "Webservers & LB", name: "Apache", icon: "Server" },
    { category: "Webservers & LB", name: "Traefik", icon: "Server" },
    { category: "Webservers & LB", name: "Caddy", icon: "Server" },
    { category: "Webservers & LB", name: "HAProxy", icon: "Server" },

    // Monitoring & Databases
    { category: "Monitoring & Databases", name: "Prometheus", icon: "MonitorDot" },
    { category: "Monitoring & Databases", name: "Grafana", icon: "MonitorDot" },
    { category: "Monitoring & Databases", name: "Victoria Metrics", icon: "MonitorDot" },
    { category: "Monitoring & Databases", name: "InfluxDB", icon: "Database" },
    { category: "Monitoring & Databases", name: "PostgreSQL", icon: "Database" },
    { category: "Monitoring & Databases", name: "Redis", icon: "Database" },
    { category: "Monitoring & Databases", name: "SQLite", icon: "Database" },

    // Development Tools
    { category: "Development Tools", name: "Git", icon: "Code" },
    { category: "Development Tools", name: "VSCode", icon: "Code" },
    { category: "Development Tools", name: "Vim", icon: "Terminal" },
    { category: "Development Tools", name: "Zed", icon: "Code" },
];