import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getAllBlogSlugs, getBlogPostBySlug } from '@/lib/mdx';
import { compileMDX } from 'next-mdx-remote/rsc';
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
        // <main className="flex flex-col gap-15 min-h-screen bg-neutral-900 rounded-3xl m-4 lg:m-8 p-6 pt-10">

            <div className="min-h-screen px-4 lg:px-8 py-28">

                <div className="max-w-7xl mx-auto">
            
                    {/* Breadcrumb back to the blog selection page /blogs  */}
                    <nav className="mb-8 text-neutral-400" aria-label="Breadcrumb">
                        <ol className="list-reset flex text-sm">
                            <li>
                                <Link href="/blog" className="hover:underline">
                                    Blogs
                                </Link>
                            </li>
                            <li>
                                <span className="mx-2">/</span>
                            </li>
                            <li aria-current="page" className="font-semibold">
                                {post.title}
                            </li>
                        </ol>
                    </nav>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-8">
                        {/* Main article */}
                        <article className="max-w-3xl">
                            <header className="mb-8">
                                <h1 className="text-4xl font-bold mb-6 text-neutral-900">{post.title}</h1>
                                <div className="flex items-center gap-4 mb-6">
                                    <time className="text-sm text-neutral-500">
                                        {new Date(post.date).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        })}
                                    </time>
                                    {post.tags && post.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2">
                                            {post.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-xs bg-neutral-700 px-3 py-1 rounded-full text-neutral-100"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                {post.image && (
                                    // <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg mb-8">
                                    <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-8">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                )}
                            </header>
                        <div className="prose prose-neutral max-w-none prose-headings:font-semibold prose-h2:text-2xl prose-h3:text-xl prose-p:text-neutral-900 prose-p:leading-relaxed">
                                {content}
                            </div>
                        </article>

                        {/* Table of Contents sidebar */}
                        <aside className="hidden lg:block">
                            <TableOfContents />
                        </aside>
                    </div>
                </div>
            </div>
        // </main>
    );
}