'use client'

import { Pie, PieChart, Cell, Tooltip, Legend } from 'recharts'

const CustomLegend = (props) => {
    const { payload } = props;

    return (
        <div className='flex flex-col w-[19.375rem] mt-[3.65625rem]'>
            <span className='text-xl font-medium leading-[1.40625rem] justify-between tracking-[-0.025rem]'>List categories</span>
            <div className="grid grid-cols-2 gap-2 mt-4">
                {payload.map((entry, index) => (
                    <div key={`item-${index}`} className="flex items-center space-x-1">
                        <div
                            className='size-[1.25rem] rounded-[0.25rem]'
                            style={{ backgroundColor: entry.color }}
                        />
                        <span className="text-sm">{entry.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const CustomPieChart = () => {
    const data = [
        {
            name: 'Tablet',
            value: 400
        },
        {
            name: 'Cream',
            value: 300
        },
        {
            name: 'Injection',
            value: 300
        },
        {
            name: 'Syrup',
            value: 300
        },
        {
            name: 'Ointment',
            value: 300
        },
        {
            name: 'Gas',
            value: 200
        }
    ];

    const colors = ['#ECFCFF', '#00B4D8', '#0096C7', '#0077B6', '#023E8A', '#03045E'];

    return (
        <div className="w-full max-w-[22.5rem] mx-auto">
            <PieChart
                width={360}
                height={400}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
                <Pie
                    cx={120}
                    cy={80}
                    data={data}
                    dataKey="value"
                    outerRadius={80}
                >
                    {data.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend
                    content={<CustomLegend />}
                    verticalAlign="bottom"
                    height={180}
                />
            </PieChart>
        </div>
    );
};

export default CustomPieChart;