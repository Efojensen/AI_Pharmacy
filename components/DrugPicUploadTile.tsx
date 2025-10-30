import Image from 'next/image';

const DrugPicUploadTile = ({ imgUrl, alt }: {imgUrl: string, alt: string}) => {
    return (
        <div className='flex gap-[1.6875rem] mx-auto mb-[1.9375rem]'>
            <div className='flex border-dashed rounded-[0.625rem] border-dashedBorderColor size-[6.25rem] items-center'>
                <Image
                    alt={alt}
                    width={100}
                    src={imgUrl}
                    height={100}
                    className='object-contain'
                />
            </div>

            <div className='flex flex-col justify-center items-center w-[6.875rem] text-center'>
                <p className='inter-font text-sm leading-[1.25rem]'>Drag image here or <br/><span className='hover:cursor-pointer text-browseImgColor'>Browse image</span></p>
            </div>
        </div>
    )
}

export default DrugPicUploadTile