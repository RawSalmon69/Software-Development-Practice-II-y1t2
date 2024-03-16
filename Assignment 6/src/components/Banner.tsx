import styles from './banner.module.css';
import Image from 'next/image';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <Image src={'/img/adam.jpg'}
            alt='cover'
            fill={true}
            priority={true}
            objectFit='cover'/>
            
            <div className={styles.bannerText}>
                <h1 className='text-6xl font-bold shadow skew-y-12'>Vaccine Service Center</h1>
                <p className='text-3xl mt-3 skew-y-12'>hospital lorem ipsum</p>
            </div>
        </div>
    )
}