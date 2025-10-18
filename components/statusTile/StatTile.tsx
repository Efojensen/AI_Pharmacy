import Image from 'next/image'
import { StatTileProps } from './StatTile.types'

const StatTile:React.FC<StatTileProps> = ({ imageUrl, stat, description}) => {
    return (
        <div className='statTile'>

            <div className='bg-statTileSvgBg rounded-[0.875rem] justify-center items-center flex size-[2.75rem] mr-[0.75rem]' >
                <Image
                    width={20}
                    height={20}
                    src={imageUrl}
                    alt={imageUrl}
                    className='size-[1.25rem]'
                />
            </div>

            <div className='flex flex-col max-w-[6.375rem] gap-y-[0,125rem]'>
                <strong className='text-someBlueColor text-base font-bold leading-[1.5rem] overflow-auto mb-[0.10437rem]'>{stat}</strong>
                <span className='text-statTileDescText text-[0.75rem] leading-[1rem] mt-0'>{description}</span>
            </div>
        </div>
    )
}

export default StatTile