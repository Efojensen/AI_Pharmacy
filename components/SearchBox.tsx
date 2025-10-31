'use client'

import Image from 'next/image'
import { useState } from "react"

const SearchBox = ({ placeholder }: { placeholder: string }) => {
    const [inputText, setInputText] = useState('')

    return (
        <div className='searchBox'>
            <Image
                width={24}
                height={24}
                alt='search_icon'
                src='/svgs/nav/search-normal.svg'
                className='mr-[1.375rem]'
            />

            <input
                value={inputText}
                placeholder={placeholder}
                className='w-full h-[2rem] border-none focus:outline-none focus:ring-0'
                onChange={(e) => setInputText(e.target.value)}
            />

        </div>
    )
}

export default SearchBox