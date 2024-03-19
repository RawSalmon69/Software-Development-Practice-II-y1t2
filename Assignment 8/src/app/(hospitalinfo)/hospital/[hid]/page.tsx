export default function HospitalDetailPage({ params }: { params: { hid: string } }) {
    const mockHospitalRepo = [{ hid: "001", hospitalName: 'Chulalongkorn Hospital', imgSrc: '/img/chula.jpg' },
    { hid: "002", hospitalName: 'Rajavithi Hospital', imgSrc: '/img/rajavithi.jpg' },
    { hid: "003", hospitalName: 'Thammasat University Hospital', imgSrc: '/img/thammasat.jpg' },
    ]

    const hidIndex = parseInt(params.hid, 10); // Parse 'hid' parameter as an integer

    return (
        <main className='bg-slate-700 min-h-screen'>
            <div className='flex flex-row items-center justify-between mx-40 pt-10'>
                <img className="rounded-lg" src={mockHospitalRepo[hidIndex-1].imgSrc} alt={mockHospitalRepo[hidIndex-1].hospitalName} />
                <div className='flex flex-col items-start justify-start'>
                    <div className="pt-5 mb-3">
                        <h5 className=" text-xl font-bold tracking-tight text-white">{mockHospitalRepo[hidIndex-1].hospitalName}</h5>
                    </div>
                    <div className='flex flex-col items-start justify-start'>
                        <div className='text-lg font-md tracking-tight text-white'>
                            <span>Rating: 5</span>
                        </div>
                        <div className='text-lg font-md tracking-tight text-white'>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis placerat quam, nec tincidunt felis.</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}