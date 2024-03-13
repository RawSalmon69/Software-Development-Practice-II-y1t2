import styles from './topmenu.module.css';
import Link from 'next/link';

export default function TopMenuItem({title, pageRef} : {title:string, pageRef:string}) {
    return (
        <Link className={styles.itemcontainer} href={pageRef}>
            <h4 style={{color:"white"}}>{title}</h4>
        </Link>
    )
}