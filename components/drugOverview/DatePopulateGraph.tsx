import Image from 'next/image'
import { LineChartPlot } from "@components/charts/lineChartPlot"

interface DatePopulateGraphProps {
    someDate: Date
    something: number
}

const DatePopulateGraph: React.FC<DatePopulateGraphProps> = ({ someDate, something }) => {
    return (
        <div className='flex justify-between items-center h-[2.9375rem] mb-[1.5625rem]'>
            <div className='flex flex-col justify-between'>
                <span className="text-drugOverviewGrey text-[0.8125rem] leading-[1.5rem] tracking-[-0.01625rem]">  {someDate.toLocaleDateString('en-US', { month: 'long' })}, {someDate.getDate()}</span>
                <span className='text-[0.9375rem] font-medium leading-[1.40625rem] tracking-[-0.01875rem]'>More densely populate</span>
            </div>
            <div className='flex flex-col items-start'>
                <span className='text-drugOverviewClr flex'>
                    <Image
                        width={9}
                        height={8}
                        alt='arrow'
                        className='mr-[0.1875rem]'
                        src='/svgs/root/arrow.svg'
                    />
                    {something}%
                </span>
                <LineChartPlot/>
            </div>
        </div>
    )
}

export default DatePopulateGraph