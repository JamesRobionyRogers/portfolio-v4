'use client'

import { useEffect, useRef, useState } from 'react'

const CAN_REVEAL = '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)'

// Fades a decorative 16:9 video in, centred over the blurred card image, while its parent link is hovered or focused.
// Nothing loads until the first reveal, and touch or reduced-motion users never trigger one.
const ProjectCardVideo = ({ src, poster }: { src: string; poster?: string }) => {
  const ref = useRef<HTMLVideoElement>(null)
  const [loaded, setLoaded] = useState(false)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const card = ref.current?.closest('a')
    if (!card) return

    const show = () => {
      if (!window.matchMedia(CAN_REVEAL).matches) return
      setLoaded(true)
      setActive(true)
    }
    const onPointerEnter = (e: PointerEvent) => {
      if (e.pointerType === 'mouse') show()
    }
    const hide = () => setActive(false)

    card.addEventListener('pointerenter', onPointerEnter)
    card.addEventListener('pointerleave', hide)
    card.addEventListener('focus', show)
    card.addEventListener('blur', hide)
    return () => {
      card.removeEventListener('pointerenter', onPointerEnter)
      card.removeEventListener('pointerleave', hide)
      card.removeEventListener('focus', show)
      card.removeEventListener('blur', hide)
    }
  }, [])

  useEffect(() => {
    const video = ref.current
    if (!video || !loaded) return
    if (active) video.play().catch(() => {})
    else video.pause()
  }, [active, loaded])

  return (
    <video
      ref={ref}
      src={loaded ? src : undefined}
      poster={loaded ? poster : undefined}
      muted
      loop
      playsInline
      preload="none"
      disablePictureInPicture
      aria-hidden
      tabIndex={-1}
      // Enters after the image's 800ms blur finishes; leaves at once and faster
      className={`pointer-events-none absolute top-1/2 left-1/2 w-5/6 aspect-video -translate-1/2 rounded-lg lg:rounded-xl object-cover shadow-2xl shadow-black/60 transition-[opacity,scale] ease-out ${active ? 'opacity-100 scale-100 duration-1000 delay-800' : 'opacity-0 scale-95 duration-500'}`}
    />
  )
}

export default ProjectCardVideo
