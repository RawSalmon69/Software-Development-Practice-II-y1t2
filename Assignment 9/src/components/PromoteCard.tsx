'use client'
import VideoPlayer from "./VideoPlayer";
import { use, useEffect, useState } from 'react';
import { useWindowListener } from "@/hooks/useWindowListener";

export default function PromoteCard() {
    const [isPlaying, setIsPlaying] = useState(true);
    const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 });

    useWindowListener('pointermove', (e) => { setPointerPosition({ x: (e as PointerEvent).clientX, y: (e as PointerEvent).clientY }) })
    useWindowListener('contextmenu', (e) => { e.preventDefault(); })

    return (
        <div className='flex flex-row w-[80%] shadow-lg mx-[10%] my-10 p-10 rounded-lg bg-gray-200'>
            <VideoPlayer vdoSrc='/vdo/getvaccine.mp4' isPlaying={isPlaying} />
            <div className="m-5">
                Get Vaccinated Today ({pointerPosition.x}, {pointerPosition.y})
                <button className='block bg-blue-500 text-white p-2 rounded-md hover:bg-indigo-600 px-3 py-2 shadow-sm'
                onClick={() => setIsPlaying(!isPlaying)}>
                    {isPlaying ? 'Pause' : 'Play'}
                </button>
            </div>
            
        </div>
    )
}