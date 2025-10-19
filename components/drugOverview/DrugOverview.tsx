import Image from 'next/image'
import CustomPieChart from '@components/charts/PieChart';
import { months } from '@components/pharmacistOverview/constants';
import MonthButton from '@components/pharmacistOverview/MonthButton';
import DatePopulateGraph from "@components/drugOverview/DatePopulateGraph";

const date = new Date()

const DrugOverview = () => {
    return (
        <section className='drugPharmacistOverview'>
            <h2 className='mb-[1.5625rem] font-medium text-[1.1875rem] leading-[1.71875rem] flex items-center'>
                <Image
                    width={24}
                    height={24}
                    alt='overview_icon'
                    src='/svgs/overview.svg'
                    className='mr-[0.625rem] size-[1.5rem]'
                />
                Drug Categories Overview
            </h2>

            <DatePopulateGraph
                someDate={date}
                something={56}
            />

            <CustomPieChart/>

            <div className='flex max-w-[22.5rem] h-[1.9375rem] overflow-x-scroll'>
                {
                    months.map((month, idx) => (
                        <MonthButton
                            key={idx}
                            month={month}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default DrugOverview