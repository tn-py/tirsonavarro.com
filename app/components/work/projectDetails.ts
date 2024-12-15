import {
    SiCplusplus,
    SiSupabase,
    SiGithub, SiShopify,
    SiNextdotjs,
    SiReact,
    SiRust,
    SiTailwindcss,
    SiTypescript,
    SiWebgl,
    SiZig
} from "react-icons/si";
import {IconType} from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "Search By VIN Tool",
        description:
            "Search By VIN Tool created with TypeScript, React, Next.js, Tailwind CSS, Supabase",
        technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiSupabase],
        techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Supabase"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/", "https://tailwindcss.com/", "https://www.framer.com/motion/"],
        github: "https://github.com/tn-py/search-by-vin",
        demo: "https://https://searchbyvin.tirso-coolifyserver.tech/",
        image: "/projects/searchbyvin.png",
        available: true,
    },
    {
        id: 1,
        name: "Shopify Development Store",
        description:
            "Custom Shopify theme. To access the store use code: SHOPIFY",
        technologies: [SiShopify],
        techNames: ["WebGL", "Typescript", "React"],
        techLinks: ["https://get.webgl.org/", "https://www.typescriptlang.org/", "https://reactjs.org/"],
        github: "https://github.com/tn-py/VRMALL",
        demo: "https://welcome-this-is.myshopify.com/",
        image: "/projects/welcome-this.is.png",
        available: true,
    },
    {
        id: 2,
        name: "Shopify Dummy Data Generator Scripts",
        description:
            "Google Apps Script for generating dummy shopify data for testing",
        technologies: [SiShopify],
        techNames: ["WebGL", "Typescript", "React"],
        techLinks: ["https://get.webgl.org/", "https://www.typescriptlang.org/", "https://reactjs.org/"],
        github: "https://github.com/tn-py/Google-Apps-Scripts",
        demo: "https://welcome-this-is.myshopify.com/",
        image: "/projects/Apps-Scripts-Dummy-Data.png",
        available: true,
    },
    {
        id: 3,
        name: "Coolify Self-Hosted Server",
        description:
            "Coolify Server Running Multiple Test Apps",
        technologies: [SiShopify],
        techNames: ["Coolify"],
        techLinks: ["https://coolify.io/"],
        github: "https://github.com/coollabsio/coolify",
        demo: "https://coolify.tirso-coolifyserver.tech/",
        image: "/projects/Coolify.png",
        available: true,
    },
];