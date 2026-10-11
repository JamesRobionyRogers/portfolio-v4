'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { projectHref } from '@/lib/projects'
import type { Project } from '@/types/project'

const STAGE_MS = 5000

// Full-bleed showreel for the hero frame: hard-cuts between every project video, one stage every STAGE_MS.
// Pauses off-screen or in a hidden tab; reduced-motion users get the first poster and manual controls.
export function ProjectReel({ projects }: { projects: Project[] }) {
  const reel = projects.filter((p) => p.video)
  const frameRef = useRef<HTMLDivElement>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const [active, setActive] = useState(0)
  const [running, setRunning] = useState(false)

  // Run only while the frame is visible, the tab is focused and motion is allowed
  useEffect(() => {
    const frame = frameRef.current
    if (!frame) return
    const motionOk = window.matchMedia('(prefers-reduced-motion: no-preference)')
    let visible = false
    const update = () => setRunning(visible && !document.hidden && motionOk.matches)

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      update()
    }, { threshold: 0.25 })
    observer.observe(frame)
    document.addEventListener('visibilitychange', update)
    motionOk.addEventListener('change', update)
    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', update)
      motionOk.removeEventListener('change', update)
    }
  }, [])

  useEffect(() => {
    if (!running || reel.length < 2) return
    const timer = setTimeout(() => setActive((i) => (i + 1) % reel.length), STAGE_MS)
    return () => clearTimeout(timer)
  }, [active, running, reel.length])

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return
      if (running && i === active) video.play().catch(() => {})
      else video.pause()
    })
  }, [active, running])

  if (reel.length === 0) return null
  const current = reel[active]

  return (
    <div
      ref={frameRef}
      className="absolute inset-0"
      // The progress bar's fill duration reads this, so the bar always matches the cut
      style={{ '--stage': `${STAGE_MS}ms` } as React.CSSProperties}
    >
      {reel.map((project, i) => (
        <video
          key={project.slug}
          ref={(el) => { videoRefs.current[i] = el }}
          src={project.video}
          poster={project.poster}
          muted
          loop
          playsInline
          preload={i === 0 ? 'auto' : 'metadata'}
          disablePictureInPicture
          aria-hidden
          tabIndex={-1}
          className={`absolute inset-0 size-full object-cover object-top ${i === active ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-transparent" />

      <Link
        href={projectHref(current)}
        className="group absolute inset-0 flex flex-col justify-start gap-1 p-4 pt-16 lg:p-8 lg:pt-20 text-ink-fg rounded-xl lg:rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
      >
        <span className="text-sm font-medium uppercase tracking-wide text-ink-muted">
          {current.type} · {current.year}
        </span>
        <span className="text-[clamp(2rem,7vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tight transition-colors duration-200 group-hover:text-accent-on-ink">
          {current.title}
        </span>
        <span className="sr-only">, view project</span>
      </Link>

      <div className="absolute top-4 inset-x-4 lg:top-8 lg:inset-x-8 flex gap-2">
        {reel.map((project, i) => (
          <button
            key={project.slug}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show ${project.title}`}
            aria-current={i === active}
            className="group flex-1 min-h-11 flex items-start cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
          >
            <span className="relative block h-1 w-full overflow-hidden rounded-full bg-white/25">
              <span
                // Re-keyed per stage so the fill restarts from empty on every cut
                key={i === active ? `${active}-${running}` : 'idle'}
                className={`absolute inset-0 origin-left rounded-full bg-ink-fg ${
                  i < active ? 'scale-x-100' : i === active ? (running ? 'animate-reel-progress' : 'scale-x-100') : 'scale-x-0'
                }`}
              />
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
