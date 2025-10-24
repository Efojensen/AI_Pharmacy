interface DrugsUploadedTileProps {
    title: string
    change: string
    quantity: string
    changeSign: '+'| '-'
}

const DrugsUploadedTile:React.FC<DrugsUploadedTileProps> = ({ title, quantity, change, changeSign }) => {
    return (
        <section className='flex flex-col items-center gap-y-[0.625rem] mb-[1.6875rem]'>
            <h3 className='text-sm text-center leading-[1.5rem] tracking-[-.0175rem] roboto-font'>{title}</h3>
            <h4 className='roboto-font text-[1.75rem] font-bold text-center'>{quantity}</h4>
            <button className='px-[0.75rem] py-[0.4375rem] bg-[#005F73] rounded-[3.625rem]'>{changeSign} {change}</button>
        </section>
    )
}

export default DrugsUploadedTile