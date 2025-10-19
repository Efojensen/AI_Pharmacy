import Image from 'next/image'
import DatePopulateGraph from "@components/drugOverview/DatePopulateGraph";
import CustomPieChart from '@components/charts/PieChart';

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
        </section>
    )
}

export default DrugOverview