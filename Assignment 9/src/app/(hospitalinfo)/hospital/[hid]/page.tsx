import getHospital from "@/libs/getHospital";
import Image from "next/image";

export default async function HospitalDetailPage({ params }: { params: { hid: string } }) {
    // const mockHospitalRepo = [{ hid: "001", hospitalName: 'Chulalongkorn Hospital', imgSrc: '/img/chula.jpg' },
    // { hid: "002", hospitalName: 'Rajavithi Hospital', imgSrc: '/img/rajavithi.jpg' },
    // { hid: "003", hospitalName: 'Thammasat University Hospital', imgSrc: '/img/thammasat.jpg' },
    // ]
    // const hidIndex = parseInt(params.hid, 10); // Parse 'hid' parameter as an integer

    const hospitalDetail = await getHospital(params.hid);

    return (
        <main className='bg-slate-700 min-h-screen'>
            <div className='flex flex-row items-center justify-around mx-40 pt-10'>
                <Image 
                    src={hospitalDetail.data.picture}
                    alt={hospitalDetail.data.name}
                    width={600}
                    height={400}
                    className='object-cover rounded-t-lg'
                />
                <div className='flex flex-col items-start justify-start'>
                    <div className="pt-5 mb-3">
                        <h5 className=" text-xl font-bold tracking-tight text-white">{hospitalDetail.data.name}</h5>
                    </div>
                    <div className='flex flex-col items-start justify-start'>
                        <div className='text-lg font-md tracking-tight text-white'>
                            <span>{hospitalDetail.data.address}</span>
                        </div>
                        <div className='text-lg font-md tracking-tight text-white'>
                            <span>{hospitalDetail.data.tel}</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}