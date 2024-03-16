import styles from './card.module.css';
import Image from 'next/image';
import InteractiveCard from './InteractiveCard';

export default function Card({ hospitalName, imgSrc }: { hospitalName: string, imgSrc: string }) {
    function onHospitalSelected(){
        alert("You select " + hospitalName);
    }

    return (
        <InteractiveCard contentName={hospitalName}>
        <div className="max-w-sm bg-gray-900 border border-gray-800 rounded-lg shadow-lg">
            <a href="#">
                <img className="rounded-t-lg" src={imgSrc} alt={hospitalName} />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{hospitalName}</h5>
                </a>
            </div>
        </div>
        </InteractiveCard>
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