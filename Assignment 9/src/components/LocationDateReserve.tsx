'use client'
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Select, MenuItem, Menu, Card, TextField } from '@mui/material'

export default function LocationDateReserve() {
    return (
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex flex-row justify-center">
            <TextField name='Name-Lastname' label='Name-Lastname'></TextField>
            <TextField name='Citizen ID' label='Citizen ID'></TextField>
            <Select variant='standard' name="location" id="location" className="h-[2em] w-[200px]">
                <MenuItem value="chula">Chulalongkorn Hospital</MenuItem>
                <MenuItem value="rajavithi">Rajavithi Hospital</MenuItem>
                <MenuItem value="thammasat">Thammasat University Hospital</MenuItem>
            </Select>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white" />
            </LocalizationProvider>
            <button name='Book Vaccine'>Book Vaccine</button>
        </div>
    )
}
