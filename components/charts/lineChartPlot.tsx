// src/components/LineChartPlot.js
"use client";

import { firstCardData, sampleData, secondCardData } from "./ConstChartData";
import { LineChart, Line, ResponsiveContainer, Area, AreaChart } from "recharts";

export const LineChartPlot = () => {
    return (
        <ResponsiveContainer width="100%" height={47} className='flex-1'>
            <LineChart data={sampleData} responsive>
                <Line type="monotone" dataKey="pv" stroke="#8884d8" dot={false} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" dot={false} />
            </LineChart>
        </ResponsiveContainer>
    );
};


export const CurvedLinePlot = () => {
    return (
        <ResponsiveContainer width="100%" height={131}>
            <AreaChart data={firstCardData}>
                <defs>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0096C7" stopOpacity={0.5} />
                        <stop offset="100%" stopColor="#0096C7" stopOpacity={0} />
                    </linearGradient>
                </defs>

                <Area
                    type="monotone"
                    dataKey="pv"
                    stroke="#0096C7"
                    fillOpacity={1}
                    fill="url(#colorPv)"
                />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export const LinearLinePlot = () => {
    return (
        <ResponsiveContainer width="100%" height={131}>
            <AreaChart data={secondCardData}>
                <defs>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0096C7" stopOpacity={0.5} />
                        <stop offset="100%" stopColor="#0096C7" stopOpacity={0} />
                    </linearGradient>
                </defs>

                <Area
                    type="linear"
                    dataKey="pv"
                    stroke="#0096C7"
                    fillOpacity={1}
                    fill="url(#colorPv)"
                />
            </AreaChart>
        </ResponsiveContainer>
    );
};

// export const FirstCardLinePlot = () => {
//     return (
//         <ResponsiveContainer width='100%' height={131}>
//             <LineChart data={firstCardData} responsive>
//                 <Line type='monotone' dataKey='pv' stroke='#0096C7'/>
//             </LineChart>
//         </ResponsiveContainer>
//     )
// }