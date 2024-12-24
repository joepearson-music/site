import React from "react";

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

const Layout: React.FC<PageLayoutProps> = ({ title, children }) => (
  <div className="p-4 md:p-6 max-w-4xl mx-auto font-serif">
    <h1 className="text-2xl md:text-3xl lg:text-4xl mb-6 font-bold text-black">
      {title}
    </h1>
    {children}
  </div>
);

// Reusable text components with responsive sizing
const Title = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 text-black">
    {children}
  </h2>
);

const SubTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-lg md:text-xl lg:text-2xl font-bold mt-6 mb-3 text-black">
    {children}
  </h3>
);

const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <p className="text-base md:text-lg lg:text-xl leading-relaxed mb-4">
    {children}
  </p>
);

const List = ({ children }: { children: React.ReactNode }) => (
  <ul className="ml-6 mb-4 list-disc">{children}</ul>
);

const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="mb-2 text-base md:text-lg lg:text-xl">{children}</li>
);

const Link = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a href={href} className="text-blue-600 hover:text-blue-800 no-underline">
    {children}
  </a>
);

const Note = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-gray-100 border border-gray-300 rounded p-4 mb-4">
    {children}
  </div>
);

export { Layout, Link, List, ListItem, Note, Paragraph, SubTitle, Title };
