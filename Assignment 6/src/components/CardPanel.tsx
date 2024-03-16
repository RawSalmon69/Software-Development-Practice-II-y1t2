'use client'
import Card from '@/components/Card'
import { useReducer } from 'react'
import Divider from '@mui/material/Divider';

export default function CardPanel() {

    const ratingReducer = (ratingList: Map<string, number>, action: { type: string, hospitalName: string, rating: number }) => {
        switch (action.type) {
            case 'add': {
                return new Map(ratingList.set(action.hospitalName, action.rating));
            }
            case 'remove': {
                ratingList.delete(action.hospitalName);
                return new Map(ratingList);
            }
            default: return ratingList;
        }
    }
        const [hospitalRating, setHospitalRating] = useReducer(ratingReducer, new Map<string, number>());

        return (
            <div>
                <div className=' pt-10' style={{ margin: "20px", display: "flex", flexDirection: "row", alignContent: "space-around", justifyContent: "space-around", flexWrap: "wrap" }}>
                    <Card hospitalName='Chulalongkorn Hospital' imgSrc='/img/chula.jpg' onRating={(hospitalName: string, rating: number) => setHospitalRating({ type: 'add', hospitalName: hospitalName, rating: rating })} />
                    <Card hospitalName='Thammasat University Hospital' imgSrc='/img/thammasat.jpg' onRating={(hospitalName: string, rating: number) => setHospitalRating({ type: 'add', hospitalName: hospitalName, rating: rating })} />
                    <Card hospitalName='Rajavithi Hospital' imgSrc='/img/rajavithi.jpg' onRating={(hospitalName: string, rating: number) => setHospitalRating({ type: 'add', hospitalName: hospitalName, rating: rating })} />
                </div>
                <div className='w-full text-2xl font-bold text-white text-center py-5'>Rating List {hospitalRating.size}</div>
                { Array.from(hospitalRating).map(([hospitalName, rating]) => 
                <div key={hospitalName} data-testid={hospitalName} onClick={()=> setHospitalRating({ type: 'remove', hospitalName: hospitalName, rating: rating })} >
                    <div className='flex flex-row items-center justify-between mx-80 p-5 mb-2 bg-slate-500 rounded-full'>
                        <div className="">
                            <h5 className="text-xl font-bold tracking-tight text-white">{hospitalName}</h5>
                        </div>
                        <div className='text-xl font-bold tracking-tight text-white'>
                            <span>{rating}</span>
                        </div>
                    </div>
                </div>) }
            </div>
        )
    }
