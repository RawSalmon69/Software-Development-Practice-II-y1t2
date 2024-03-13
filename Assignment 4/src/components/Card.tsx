import styles from './card.module.css';
import Image from 'next/image';

export default function Card({hospitalName, imgSrc}:{hospitalName:string, imgSrc:string}) {
    return (
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image src={imgSrc}
                alt='Product Picture'
                fill={true}
                objectFit='contain'/>
            </div>
            <div className={styles.cardtext}>
                {hospitalName}
            </div>
        </div>
    )
}