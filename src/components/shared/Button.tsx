export const Button = ({
                           children,
                           variant = 'primary',
                           className = ''
                       }: {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    className?: string;
}) => {
    const baseStyles = "px-6 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center justify-center";

    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 active:scale-[0.98]",
        secondary: "bg-zinc-800 text-zinc-100 border border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600 active:scale-[0.98]"
    };

    return (
        <button className={`${baseStyles} ${variants[variant]} ${className}`}>
            {children}
        </button>
    );
};