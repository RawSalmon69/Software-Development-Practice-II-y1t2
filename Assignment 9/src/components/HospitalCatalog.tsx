'use client'
import Link from "next/link"
import Card from "./Card"

export default async function HospitalCatalog({ hospitalsJson }: { hospitalsJson: Promise<HospitalJson> }) {
    const hospitalJsonReady:HospitalJson = await hospitalsJson;

    return (
            <div className="m-20 flex flex-row justify-around wrap p-10">
                {
                    hospitalJsonReady?.data.map((hospital: HospitalItem) => (
                        <Link key={hospital.id} href={`/hospital/${hospital.id}`}>
                            <Card key={hospital.id} hospitalName={hospital.name} imgSrc={hospital.picture} />
                        </Link>
                    ))
                }
            </div>
    )
}
