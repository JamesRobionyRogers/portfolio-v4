import { cn } from '@/lib/utils'

const variants = {
    'on-ink': 'px-2.5 py-1 rounded-md bg-ink-raised text-ink-muted',
    'on-raised': 'px-2.5 py-1 rounded-md bg-ink-chip text-ink-fg',
    glass: 'px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white',
}

type TagVariant = keyof typeof variants

export const Tag = ({ children, variant = 'on-ink', className }: { children: React.ReactNode, variant?: TagVariant, className?: string }) => (
    <span className={cn('inline-flex items-center text-sm font-medium', variants[variant], className)}>
        {children}
    </span>
)

// Shows the first `max` tags, then a "+N more" tag for the rest
export const TagList = ({ tags, max, variant, className }: { tags: string[], max?: number, variant?: TagVariant, className?: string }) => {
    const shown = max === undefined ? tags : tags.slice(0, max)
    const hidden = tags.length - shown.length

    return (
        <div className={cn('flex flex-wrap gap-2', className)}>
            {shown.map((tag) => <Tag key={tag} variant={variant}>{tag}</Tag>)}
            {hidden > 0 && <Tag variant={variant}>+{hidden} more</Tag>}
        </div>
    )
}
