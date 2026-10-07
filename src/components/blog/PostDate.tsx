import { cn } from '@/lib/utils'

const formatDate = (date: string) =>
    new Date(date).toLocaleDateString('en-NZ', { year: 'numeric', month: 'long', day: 'numeric' })

// The `meta` role date line shared by the listing card and the post header
export const PostDate = ({ date, className }: { date: string, className?: string }) => (
    <time dateTime={date} className={cn('text-sm font-medium uppercase tracking-wide', className)}>
        {formatDate(date)}
    </time>
)
