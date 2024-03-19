'use client'
import styles from './banner.module.css';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Banner() {
    const covers = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg', '/img/cover4.jpg']
    const [index, setIndex] = useState(0)

    const router = useRouter()

    return (
        <div className={styles.banner} onClick={()=> setIndex(index+1)}>
            <Image src={covers[index%4]}
            alt='cover'
            fill={true}
            priority={true}
            objectFit='cover'/>
            
            <div className={styles.bannerText}>
                <h1 className='text-6xl font-bold shadow skew-y-12'>Vaccine Service Center</h1>
                <p className='text-3xl mt-3 skew-y-12'>hospital lorem ipsum</p>
                <button 
                className='bg-white text-black px-5 py-2 mt-5 rounded-full'
                onClick={(e) => {e.stopPropagation(); router.push('/hospital')}}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'lightgray'}
                >
                    Select Hospital
                    </button>
            </div>
        </div>
    )
}