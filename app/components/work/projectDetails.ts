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
            "open-source animated components built with React, Typescript, Tailwind CSS, and Framer Motion. 100% open-source, and customizable.",
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
        image: "/projects/project2.png",
        available: true,
    },
];
