import React from 'react';
import { notFound } from 'next/navigation';
import { getAllBlogSlugs, getBlogPostBySlug } from '@/lib/mdx';
import { compileMDX } from 'next-mdx-remote/rsc';
import BlogShell from '@/components/blog/BlogShell';
import PostHeader from '@/components/blog/PostHeader';
import TableOfContents from '@/components/blog/TableOfContents';

export async function generateStaticParams() {
    const slugs = getAllBlogSlugs();
    return slugs.map((slug) => ({
        slug: slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: post.title,
        description: post.description,
    };
}

const POST_BODY_ID = 'post-body';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const { content } = await compileMDX({
        source: post.content,
        options: { parseFrontmatter: false },
    });

    return (
        <BlogShell as="article" className="gap-8 lg:gap-12 px-4 lg:px-6 pt-16 lg:pt-20 pb-8 lg:pb-12">
            <PostHeader post={post} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:px-12">
                <div id={POST_BODY_ID} className="prose blog-prose max-w-none lg:col-span-8 break-words">
                    {content}
                </div>

                <aside className="hidden lg:block lg:col-span-2 lg:col-start-11">
                    <TableOfContents containerId={POST_BODY_ID} />
                </aside>
            </div>
        </BlogShell>
    );
}
