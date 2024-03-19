'use client'
import DateReserve from "@/components/DateReserve";
import { Select, MenuItem, Menu, Card, TextField } from '@mui/material'

export default function Booking() {
    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-4xl mt-4 font-bold">Vaccine Reservation</div>
            <div className="bg-slate-100 rounded-2xl space-x-5 space-y-2 w-fit px-10 py-5">
                {/* bad code but flex broken */}
                <br></br>
                <TextField className='m-3 w-[321px]' name='Name-Lastname' label='Name-Lastname'></TextField>
                <br></br>
                <TextField className='m-3 w-[321px]' name='Citizen ID' label='Citizen ID'></TextField>
                <br></br>
                <Select variant='standard' name="location" id="location" className="h-[2em] w-[300px]">
                    <MenuItem value="chula">Chulalongkorn Hospital</MenuItem>
                    <MenuItem value="rajavithi">Rajavithi Hospital</MenuItem>
                    <MenuItem value="thammasat">Thammasat University Hospital</MenuItem>
                </Select>
                <DateReserve />
            </div>
            <button className="rounded-full bg-blue-200 p-3" name='Book Vaccine'>Vaccine Booking</button>
        </main>
    )
}

