import Image from 'next/image'

const PharmacistOverview = ({ contributions }: { contributions: number }) => {
    return (
        <section className='drugPharmacistOverview'>
            <div className='flex items-start mb-[1.5625rem]'>
                <div className='flex flex-col w-[16.25rem]'>
                    <h2 className='font-semibold text-[1.625rem]'>Top contributing pharmacists</h2>
                    <span className='text-[1rem] leading-[2.5rem] font-normal roboto-font'>{contributions} contributions in the last month</span>
                </div>
                <Image
                    width={18}
                    height={18}
                    alt='settings'
                    src='/svgs/settings_2.svg'
                    className='my-[0.625rem]'
                />
            </div>


        </section>
    )
}

export default PharmacistOverview