'use client'
import { useEffect, useRef } from 'react'
import { useWindowListener } from '@/hooks/useWindowListener'

export default function VideoPlayer({ vdoSrc, isPlaying }: { vdoSrc: string, isPlaying: boolean }) {
    const vdoRef = useRef<HTMLVideoElement>(null)
    useWindowListener('resize', (e) => alert('Window width is ' + (e.target as Window).innerWidth))

    useEffect(() => {
        if (vdoRef.current) {
            if (isPlaying) {
                vdoRef.current.play()
            } else {
                vdoRef.current.pause()
            }
        }
    }, [isPlaying])
    return (
        <video className='w-[40%]' src={vdoSrc} ref={vdoRef} muted loop controls />
    )
}