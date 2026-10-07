import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getAllProjectSlugs } from "@/lib/projects";
import { getAllBlogSlugs } from "@/lib/mdx";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/projects",
    "/blog",
    ...getAllProjectSlugs().map((slug) => `/projects/${slug}`),
    ...getAllBlogSlugs().map((slug) => `/blog/${slug}`),
  ];

  return paths.map((path) => ({ url: `${siteConfig.url}${path}` }));
}
