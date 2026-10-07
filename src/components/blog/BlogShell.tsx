import { cn } from '@/lib/utils'

// Full-page ink panel; `.blog-shell` in globals.css stretches it to the screen's bottom edge
const BlogShell = ({ as: Tag = 'div', children, className }: { as?: 'div' | 'article', children: React.ReactNode, className?: string }) => (
    <Tag className={cn('blog-shell grow mx-4 sm:mx-6 lg:mx-8 mt-4 lg:mt-8 mb-4 lg:mb-8 flex flex-col gap-8 lg:gap-12 bg-ink rounded-2xl lg:rounded-3xl px-4 sm:px-6 pt-16 pb-8 lg:p-16', className)}>
        {children}
    </Tag>
)

export default BlogShell
