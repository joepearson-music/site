import React, { CSSProperties } from "react";

interface SocialIconProps {
  path: string;
  viewBox?: string;
  href: string;
  label: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({
  path,
  viewBox = "0 0 24 24",
  href,
  label,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    style={styles.iconLink}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox={viewBox}
      style={styles.icon}
    >
      <path d={path} />
    </svg>
  </a>
);

interface SocialIconData {
  label: string;
  href: string;
  path: string;
}

const CustomSocialBar: React.FC = () => {
  const socialIcons: SocialIconData[] = [
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/joe-pearson-845350266",
      path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z",
    },
    {
      label: "GitHub",
      href: "https://github.com/joepearson-music",
      path: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/joepearson.music/",
      path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01 M7.5 2h9a5.5 5.5 0 0 1 5.5 5.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2z",
    },
  ];

  return (
    <div style={styles.socialBar}>
      {socialIcons.map((icon) => (
        <SocialIcon key={icon.label} {...icon} />
      ))}
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
  socialBar: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    margin: "15px 0",
  },
  iconLink: {
    color: "inherit",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "32px",
    height: "32px",
  },
  icon: {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    transition: "transform 0.3s ease",
  },
};

export default CustomSocialBar;
