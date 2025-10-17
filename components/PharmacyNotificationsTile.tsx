import Image from 'next/image'

interface pharmacyNotificationsTileProps {
    imgUrl: string
    userName: string
    position: string
    pharmacy: string
}

const PharmacyNotificationsTile: React.FC<pharmacyNotificationsTileProps> = ({ imgUrl, userName, position, pharmacy }) => {
    return (
        <div className='pharmacyNotificationsTile'>
            <Image
                width={22}
                height={22}
                src='/svgs/bell.svg'
                alt='notification_bell'
            />

            <div className='rounded-full size-16'>
                <Image
                    width={64}
                    height={64}
                    src={imgUrl}
                    alt='user_image'
                />
            </div>

            <div className='flex flex-col'>
                <h5 className='text-nameGrey text-sm font-medium mb-[0.1875rem]'>{userName}</h5>
                <h5 className='text-unimportant text-[10px] font-normal mb-[1px]'>{position}</h5>
                <h5 className='text-[11px] text-someBlueColor font-normal'>{pharmacy}</h5>
            </div>
        </div>
    )
}

export default PharmacyNotificationsTile