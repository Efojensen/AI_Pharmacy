import React from 'react'

const MonthButton = ({ month }: { month: string }) => {
    return (
        <button className='monthButton'>
            {month}
        </button>
    )
}

export default MonthButton