import React from "react";

export default function Wrapper({ children, className }: {
    children: React.ReactNode,
    className?: string
}) {
    return (
        <div className={"mx-auto box-content max-w-screen-lg px-6 sm:px-12 lg:px-16 " + (className ? className : "")}>
            {children}
        </div>
    );
}