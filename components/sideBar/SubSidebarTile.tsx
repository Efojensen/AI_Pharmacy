import { SubSidebarConnector } from "./SubSidebarConnector"

interface SubSidebarTileProps {
    text: string
    index: number
    last: boolean
    active: boolean
}

export const SubSidebarTile: React.FC<SubSidebarTileProps> = ({ text, active, index, last }) => {
    return (
        <li className={`
            flex items-center gap-x-[0.75rem] py-[.8375rem] pl-[2rem] pr-[0.75rem] font-semibold
            cursor-pointer text-sm transition-colors rounded-[0.75rem] text-black
            ${active ?
                'bg-someBlueColor text-cyanText'
                :
                'hover:bg-gray-100'
            }
        `}>
            <SubSidebarConnector
                index={index}
                last={last}
                active={active}
            />
            <span>{text}</span>
        </li>
    )
}