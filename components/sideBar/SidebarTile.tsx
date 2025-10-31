'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { SubSidebarTile } from './SubSidebarTile'

interface SidebarTileProps {
    icon: string
    text: string
    href?: string
    active: boolean
    onClick: () => void
    dropdownArrow?: string
    dropdownItems?: string[]
    dropdownLinks?: string[]
}

const SidebarTile: React.FC<SidebarTileProps> = ({ icon, text, active, dropdownArrow, dropdownItems, dropdownLinks, href, onClick }) => {
    // To be studied
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [activeSubItem, setActiveSubItem] = useState<number | null>(null)

    const handleClick = () => {
        if (dropdownArrow) {
            setIsDropdownOpen(!isDropdownOpen)
        }
    }

    const handleSubItemClick = (index: number) => {
        setActiveSubItem(activeSubItem === index ? null : index)
    }

    return (
        <div onClick={onClick}>
            <Link
                href={href ?? ''}
                className={`
                    flex items-center gap-x-[1.1875rem] py-[0.6375rem] pl-[1rem] pr-[0.75rem] font-semibold
                    cursor-pointer text-sm transition-colors rounded-[0.625rem] text-black bg-gradient-to-b mx-[.25rem]
                    ${active ?
                        'bg-cyanText text-white'
                        :
                        'hover:bg-cyan-300'
                    }
                `}
                onClick={handleClick}
            >
                <Image
                    src={icon}
                    alt={icon}
                    width={20}
                    height={20}
                    className={active ? 'filter invert brightness-0' : ''}
                />
                <p className='mr-auto'>{text}</p>
                {
                    dropdownArrow && (
                        <Image
                            width={16}
                            height={16}
                            alt='dropdownArrow'
                            src={dropdownArrow}
                            className={`transition-transform ${active ? 'filter invert brightness-0' : ''
                                } ${isDropdownOpen ? 'rotate-180' : ''}`}
                        />
                    )
                }
            </Link>

            {isDropdownOpen && dropdownItems &&dropdownLinks && dropdownItems && <div className='mb-[0.8rem]'></div>}

            {/* Dropdown Items - rendered as siblings */}
            <div className="mt-[-0.5rem]">
                {isDropdownOpen && dropdownItems &&dropdownLinks && dropdownItems.map((itemText, index) => (
                    <div
                        key={index}
                        onClick={() => handleSubItemClick(index)}
                    >
                        <SubSidebarTile
                            index={index}
                            text={itemText}
                            href={dropdownLinks[index]}
                            active={activeSubItem === index} //AI
                            last={index === dropdownItems.length - 1}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SidebarTile