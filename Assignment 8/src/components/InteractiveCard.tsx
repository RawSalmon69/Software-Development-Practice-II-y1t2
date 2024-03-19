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
            event.currentTarget.classList.remove('bg-gray-900');
            event.currentTarget.classList.add('shadow-2xl');
            event.currentTarget.classList.add('bg-gray-700');
        }else{
            event.currentTarget.classList.remove('shadow-2xl');
            event.currentTarget.classList.remove('bg-gray-700');
            event.currentTarget.classList.add('shadow-lg');
            event.currentTarget.classList.add('bg-gray-900');
        }
    }

    return (
        <div className="max-w-sm bg-gray-900 border-gray-800 rounded-lg shadow-lg transition duration-300 ease-in-out hover:scale-105" 
        // onClick={() => onCardSelected()}
        onMouseOver={(e) => onCardMouseAction(e)}
        onMouseOut={(e) => onCardMouseAction(e)}
        >
            {children}
        </div>

    )
}