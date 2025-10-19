import Image from 'next/image'

const PharmacistOverview = ({ contributions }: { contributions: number }) => {
    return (
        <section className='drugPharmacistOverview'>
            <div className='flex'>
                <div className='flex flex-col'>
                    <h2>Top contributing pharmacists</h2>
                    {/* TODO: Change font to Roboto */}
                    <span className='text-[1rem] leading-[2.5rem] font-normal'>{contributions} contributions in the last month</span>
                </div>
                <Image
                    width={18}
                    height={18}
                    alt='settings'
                    src='/svgs/settings_2.svg'
                />
            </div>
        </section>
    )
}

export default PharmacistOverview