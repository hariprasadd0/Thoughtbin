import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Thoughtbin",
  DESCRIPTION: "Thoughtbin is a journal.",
  EMAIL: "",
  NUM_POSTS_ON_HOMEPAGE: 5,
};

export const HOME: Metadata = {
  TITLE: "journal",
  DESCRIPTION: "Thoughtbin is a journal",
};

export const BLOG: Metadata = {
  TITLE: "journal",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const SOCIALS: Socials = [
  {
    ICON_NAME: "ion:logo-x",
    HREF: "https://twitter.com/hariiprasad0",
  },
  {
    ICON_NAME: "ion:logo-github",
    HREF: "https://github.com/hariprasadd0",
  },
  {
    ICON_NAME: "ion:logo-linkedin",
    HREF: "https://www.linkedin.com/in/hariprasadd0",
  },
];
