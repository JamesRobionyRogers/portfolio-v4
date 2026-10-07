'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface Heading {
  id: string;
  text: string;
  level: number;
}

const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');

// Lists the h2/h3 headings inside `containerId` and highlights the one in view
export default function TableOfContents({ containerId }: { containerId: string }) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const elements = Array.from(container.querySelectorAll<HTMLElement>('h2, h3'));
    elements.forEach((element) => {
      if (!element.id) element.id = slugify(element.textContent || '');
    });

    setHeadings(elements.map((element) => ({
      id: element.id,
      text: element.textContent || '',
      level: Number(element.tagName[1]),
    })));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-100px 0px -66%', threshold: 1 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [containerId]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    e.preventDefault();
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // The heading's scroll-margin-top (set in globals.css) clears the sticky nav
    element.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
    history.replaceState(null, '', `#${id}`);
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav aria-labelledby="toc-heading" className="sticky top-28 flex flex-col gap-2">
      <h2 id="toc-heading" className="text-sm sm:text-base font-semibold uppercase tracking-wide text-ink-subtle">
        On this page
      </h2>
      <ul>
        {headings.map((heading) => (
          <li key={heading.id} className={cn(heading.level === 3 && 'pl-4')}>
            <a
              href={`#${heading.id}`}
              onClick={(e) => handleClick(e, heading.id)}
              aria-current={activeId === heading.id ? 'location' : undefined}
              className={cn(
                'flex items-center min-h-11 py-1 text-base transition-colors duration-200 hover:text-ink-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus',
                activeId === heading.id ? 'text-ink-fg underline underline-offset-4 decoration-2' : 'text-ink-subtle'
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
