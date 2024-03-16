import styles from './topmenu.module.css';
import Image from 'next/image';
import TopMenuItem from './TopMenuItem';

export default function TopMenu() {
    return (
        <nav className=" border-gray-200 bg-gray-900">
            <div className="max-w-screen-4xl flex flex-wrap items-center justify-between mx-auto p-4"  style={{justifyContent:'flex-end'}}>
                <TopMenuItem title='Booking' pageRef='/booking'/>
                <Image className="flex items-center space-x-3 rtl:space-x-reverse h-8" src="/img/logo.png" alt="logo" width={100} height={100} />
            </div>
        </nav>

    )
}

// export default function TopMenu() {
//     return (
//         <div classNameName={styles.menucontainer} style={{justifyContent:'flex-end'}}>
//             <TopMenuItem title='Booking' pageRef='/booking'/>
//             <Image src={'/img/logo.png'} classNameName={styles.logoimg}
//             alt = 'logo' width={0} height={0} sizes='100vh'/>
//         </div>
//     )
// } 