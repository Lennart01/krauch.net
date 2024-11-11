export const Button = ({
    children,
    variant = 'primary'
}: {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary'
}) => {
    const baseStyles = "px-4 py-2 rounded-md font-medium transition-colors";
    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
    };

    return (
        <button className={`${baseStyles} ${variants[variant]}`}>
            {children}
        </button>
    );
};