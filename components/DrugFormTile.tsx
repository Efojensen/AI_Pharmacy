'use client'

import { useState } from 'react'

interface DrugFormTileProps {
    label: string
    options?: string[]
}

const DrugFormTile: React.FC<DrugFormTileProps> = ({ label, options }) => {
    const [value, setValue] = useState('')

    return (
        <div className="flex gap-[0.5rem]">
            {/* Label */}
            <div className="flex items-center justify-center px-[1.3125rem] py-[0.625rem] rounded-[0.3125rem] border border-lightGrey bg-white font-medium text-sm text-gray-700 whitespace-nowrap">
                {label}
            </div>

            {/* Input or Dropdown */}
            <div className="flex items-center p-[0.625rem] rounded-[0.3125rem] border border-lightGrey w-full bg-white">
                {options && options.length > 0 ? (
                    <select
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="w-full outline-none bg-transparent text-gray-700"
                    >
                        <option value="" disabled>
                            Select...
                        </option>
                        {options.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                ) : (
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="w-full outline-none bg-transparent text-gray-700"
                        placeholder="Enter value..."
                    />
                )}
            </div>
        </div>
    )
}

export default DrugFormTile
