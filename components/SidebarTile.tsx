import Image from 'next/image'

interface SidebarTileProps {
    icon: string
    text: string
    active: boolean
}

const SidebarTile: React.FC<SidebarTileProps> = ({ icon, text, active }) => {
    return (
        <li className={`
            flex items-center gap-x-[1.1875rem] py-[0.4375rem] pl-[1rem] pr-[0.75rem]
            cursor-pointer text-sm transition-colors rounded-[0.625rem] text-black bg-gradient-to-b
            ${active ?
                'bg-cyanText text-white'
                :
                'hover:bg-cyan-300'
            }
            `
        }>
            <Image
                src={icon}
                alt={icon}
                width={20}
                height={20}
            />
            <p>{text}</p>
        </li>
    )
}

export default SidebarTile