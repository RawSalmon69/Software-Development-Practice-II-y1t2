'use client'
import React, { Children } from 'react';
import styles from './card.module.css';
import Image from 'next/image';

export default function Card({ children, contentName }: { children: React.ReactNode, contentName: string }) {
    function onCardSelected() {
        alert("You select " + contentName);
    }

    function onCardMouseAction(event: React.SyntheticEvent) {
        if (event.type === 'mouseover') {
            event.currentTarget.classList.remove('shadow-lg');
            event.currentTarget.classList.remove('bg-white');
            event.currentTarget.classList.add('shadow-2xl');
            event.currentTarget.classList.add('bg-neutral-200');
        }else{
            event.currentTarget.classList.remove('shadow-2xl');
            event.currentTarget.classList.remove('bg-neutral-200');
            event.currentTarget.classList.add('shadow-lg');
            event.currentTarget.classList.add('bg-white');
        }
    }

    return (
        <div className="max-w-sm bg-white border-gray-800 rounded-lg shadow-lg transition duration-300 ease-in-out hover:scale-105" 
        onClick={() => onCardSelected()}
        onMouseOver={(e) => onCardMouseAction(e)}
        onMouseOut={(e) => onCardMouseAction(e)}
        >
            {children}
        </div>

    )
}

// export default function Card({hospitalName, imgSrc}:{hospitalName:string, imgSrc:string}) {
//     return (
//         <div classNameNameName={styles.card}>
//             <div classNameName={styles.cardimg}>
//                 <Image src={imgSrc}
//                 alt='Product Picture'
//                 fill={true}
//                 objectFit='contain'/>
//             </div>
//             <div classNameName={styles.cardtext}>
//                 {hospitalName}
//             </div>
//         </div>
//     )
// }