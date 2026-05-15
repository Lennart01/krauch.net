import React from 'react';

export const Badge = ({ children }: { children: React.ReactNode }) => (
    <span className="px-3 py-1 bg-zinc-900/80 border border-zinc-800/80 rounded-full text-[11px] font-mono font-medium text-zinc-300 shadow-sm whitespace-nowrap uppercase tracking-wider">
        {children}
    </span>
);

export const Card = ({ children, className = "", as: Component = "div" }: { children: React.ReactNode, className?: string, as?: any }) => (
    <Component className={`group relative bg-zinc-900/30 border border-zinc-800/50 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-zinc-900/50 hover:border-zinc-700/50 hover:shadow-2xl hover:shadow-indigo-500/[0.03] ${className}`}>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10">
            {children}
        </div>
    </Component>
);

export const SectionHeader = ({ title }: { title: string }) => (
    <h3 className="text-2xl font-semibold text-zinc-100 mb-10 flex items-center gap-3 tracking-tight">
        <span className="w-8 h-px bg-gradient-to-r from-indigo-500 to-transparent" />
        {title}
    </h3>
);
