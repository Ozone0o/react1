import { ComponentPropsWithoutRef } from "react"
import { IconType } from "react-icons"

type ButtonProps = {
    icon?: IconType
    variant?: "default" | "outline" | "text" | "primary"
} & ComponentPropsWithoutRef<"button">

export default function Button({
    children,
    className = "",
    icon: Icon,
    variant = "default",
    ...props
}: ButtonProps) {
    return (
        <button
            className={`transition-colors inline-flex items-center min-w-[38px] min-h-[38px] rounded px-3 py-1.5
            ${
                variant === "default"
                    ? "text-black dark:text-gray-300 bg-gray-50 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-900"
                    : variant === "outline"
                    ? "border border-gray-300 dark:border-gray-600 text-black dark:text-gray-300 bg-gray-50 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                    : variant === "primary"
                    ? "bg-sky-500 text-white hover:bg-sky-400 hover:text-white shadow-sm rounded-lg disabled:shadow-none disabled:bg-transparent disabled:text-gray-300 dark:disabled:text-gray-600"
                    : "text-black  bg-transparent hover:bg-gray-200 "
            }
            ${className}`}
            {...props}
        >
            {Icon && <Icon className={`text-lg ${children ? "mr-1" : ""}`} />}
            {children}
        </button>
    )
}