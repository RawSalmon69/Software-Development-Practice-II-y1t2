import InteractiveCard from './InteractiveCard';
import { Rating } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';

export default function Card({ hospitalName, imgSrc, onRating }: { hospitalName: string, imgSrc: string, onRating: Function }) {
    return (
        <InteractiveCard contentName={hospitalName}>
            <div className="max-w-sm bg-gray-900 border border-gray-800 rounded-lg shadow-lg">
                <a href="#">
                    <img className="rounded-t-lg" src={imgSrc} alt={hospitalName} />
                </a>
                <div className='flex flex-row items-center justify-center'>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{hospitalName}</h5>
                        </a>
                    </div>
                    <Rating
                        className='mb-3'
                        id={hospitalName + " Rating"}
                        name={hospitalName + " Rating"}
                        data-testid={hospitalName + " Rating"}
                        defaultValue={5}
                        precision={0.5}
                        onClick={(e) => onRating(hospitalName, (e.target as HTMLInputElement).value)}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                </div>
            </div>
        </InteractiveCard>
    )
}