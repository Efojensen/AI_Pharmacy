import Image from 'next/image'
import { months } from '@components/pharmacistOverview/constants';
import MonthButton from '@components/pharmacistOverview/MonthButton';

const PharmacistOverview = ({ contributions }: { contributions: number }) => {
    return (
        <section className='drugPharmacistOverview'>
            <div className='flex items-start mb-[1.5625rem]'>
                <div className='flex flex-col w-[16.25rem] justify-start'>
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

            <div className='flex max-w-[22.5rem] h-[1.9375rem] overflow-x-scroll gap-x-[0.625rem] px-[24.625px] mb-[0.625rem]'
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {
                    months.map((month, idx) => (
                        <MonthButton
                            key={idx}
                            month={month}
                        />
                    ))
                }
            </div>

            <span className='text-[1rem] leading-[1.4375rem] tracking-[0.5125px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati laboriosam</span>
        </section>
    )
}

export default PharmacistOverview