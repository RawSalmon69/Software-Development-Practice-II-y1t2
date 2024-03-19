import InteractiveCard from './InteractiveCard';
import { Rating } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';

export default function Card({ hospitalName, imgSrc, onRating }: { hospitalName: string, imgSrc: string, onRating: Function }) {
    const [rating, setRating] = useState<number | null>(5);

    function handleRatingChange(newValue: number) {
        setRating(newValue);
        onRating(hospitalName, newValue);
    }
    return (
        <InteractiveCard contentName={hospitalName}>
            <img className="rounded-t-lg" src={imgSrc} alt={hospitalName} />
            <div className='flex flex-col items-center justify-center'>
                <div className="pt-5 mb-3">
                    <h5 className=" text-xl font-bold tracking-tight text-white">{hospitalName}</h5>
                </div>
                <Rating
                    className='mb-5'
                    id={hospitalName + " Rating"}
                    name={hospitalName + " Rating"}
                    data-testid={hospitalName + " Rating"}
                    value={rating}
                    precision={0.5}
                    onChange={(event, newValue) => {
                        event.stopPropagation(); event.nativeEvent.stopImmediatePropagation(); handleRatingChange(newValue as number)
                    }}
                    onClick={(event) => event.stopPropagation()}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
            </div>

        </InteractiveCard>
    )
}