import CardPanel from '@/components/CardPanel'
import HospitalCatalog from '@/components/HospitalCatalog';
import getHospitals from '@/libs/getHospitals';
import { Suspense } from 'react';
import { LinearProgress } from '@mui/material';

export default function Hospital() {
    const hospitals = getHospitals();
    return (
        <main className='bg-slate-700 min-h-screen'>
            <div className='text-3xl pt-10 text-center font-bold text-white'>Hospitals</div>
            <Suspense fallback={<p>Loading...<LinearProgress /></p>}>
                <HospitalCatalog hospitalsJson={hospitals} />
            </Suspense>
        </main>
    )
}