import { cn } from "@/lib/utils";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "row-span-1 rounded-3xl group/bento hover:shadow-2xl transition duration-300 shadow-input dark:shadow-green-400/20 p-6 dark:bg-neutral-900/50  dark:border-white/[0.1] bg-white border border-neutral-200 justify-between flex flex-col space-y-8 hover:border-[var(--color-primary)]/50 ",
                className
            )}
        >
            {header}
            <div className="group-hover/bento:translate-x-1 transition duration-200">
                {icon && (
                    <div className="mb-4">
                        {icon}
                    </div>
                )}
                <div className="font-sans font-bold text-neutral-800 dark:text-neutral-100 mb-2 mt-2 text-xl tracking-tight">
                    {title}
                </div>
                <div className="font-sans font-normal text-neutral-600 text-sm dark:text-neutral-400 leading-relaxed">
                    {description}
                </div>
            </div>
        </div>

    );
};

