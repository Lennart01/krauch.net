import React from 'react';

export const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <section className="mt-24 md:mt-32">
        <h2 className="mb-10 text-heading font-semibold tracking-[-0.02em] text-ink">{title}</h2>
        {children}
    </section>
);

// One row of the page grid: a 176px date/label column on the left from 768px up, stacked above the content below it.
export const Row = ({ label, children, className = "" }: { label?: React.ReactNode, children: React.ReactNode, className?: string }) => (
    <div className={`md:grid md:grid-cols-[11rem_1fr] md:gap-x-8 ${className}`}>
        <div className="mb-1 font-mono text-meta tabular-nums text-ink-2 md:mb-0 md:whitespace-nowrap">{label}</div>
        <div className="min-w-0">{children}</div>
    </div>
);

// Technologies as plain text: "Go · Kubernetes · Terraform". Never pills. The caller sets the ink.
// Each name stays whole; a separator that would start a line falls into the clipped left gutter.
export const TechList = ({ items, className = "" }: { items: string[], className?: string }) => (
    <div className={`overflow-hidden text-small ${className}`}>
        <ul className="-ml-5 flex flex-wrap">
            {items.map((item) => (
                <li key={item} className="relative max-w-full pl-5">
                    <span aria-hidden="true" className="absolute left-0 w-5 text-center text-ink-3">·</span>
                    {item}
                </li>
            ))}
        </ul>
    </div>
);
