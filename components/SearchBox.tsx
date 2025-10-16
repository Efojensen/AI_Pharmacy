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
                src='/svgs/search-normal.svg'
                className='mr-[1.375rem]'
            />

            <input
                value={inputText}
                placeholder={placeholder}
                onChange={(e) => setInputText(e.target.value)}
            />

        </div>
    )
}

export default SearchBox