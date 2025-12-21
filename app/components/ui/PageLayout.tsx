import React from "react";

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function PageLayout({ title, children, className = "" }: PageLayoutProps) {
  return (
    <main
      className={`mt-20 flex flex-1 flex-col items-center rounded-lg bg-white px-4 md:mt-30 md:px-6 lg:mt-40 ${className}`}
    >
      <div className="w-full max-w-4xl">
        {/* Heading */}
        <h1 className="mb-6 text-3xl font-light text-gray-900 md:mb-8 md:text-4xl">
          {title}
        </h1>

        {/* Content */}
        {children}
      </div>
    </main>
  );
}
