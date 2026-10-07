import { cn } from '@/lib/utils'

// Full-page ink panel, matching the project detail shell
const BlogShell = ({ as: Tag = 'div', children, className }: { as?: 'div' | 'article', children: React.ReactNode, className?: string }) => (
    <Tag className={cn('mx-4 sm:mx-6 lg:mx-8 mt-4 lg:mt-8 mb-4 lg:mb-8 flex flex-col gap-10 lg:gap-16 bg-ink rounded-2xl lg:rounded-3xl px-4 sm:px-6 lg:px-8 pt-24 lg:pt-28 pb-12 lg:pb-16', className)}>
        {children}
    </Tag>
)

export default BlogShell
