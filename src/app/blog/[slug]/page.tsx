import React from 'react';
import { notFound } from 'next/navigation';
import { getAllBlogSlugs, getBlogPostBySlug } from '@/lib/mdx';
import { compileMDX } from 'next-mdx-remote/rsc';
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
        <article className="mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-8 pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-28 flex flex-col gap-10 lg:gap-16">
            <PostHeader post={post} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div id={POST_BODY_ID} className="prose blog-prose lg:col-span-8 break-words">
                    {content}
                </div>

                <aside className="hidden lg:block lg:col-span-3 lg:col-start-10">
                    <TableOfContents containerId={POST_BODY_ID} />
                </aside>
            </div>
        </article>
    );
}
