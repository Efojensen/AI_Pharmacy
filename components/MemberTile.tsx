import Image from 'next/image'

interface MemberTileProps {
    src: string
    alt: string
    name: string
    email: string
    title: string
    color?: string
}

const MemberTile: React.FC<MemberTileProps> = ({
    src,
    alt,
    name,
    email,
    title,
    color = '#03045E',
}) => {
    return (
        <div className="teamTile">
            <Image
                src={src}
                alt={alt}
                width={64}
                height={64}
                className="object-contain rounded-md mb-[0.85437rem]"
            />

            <p className="leading-[1.25rem] text-sm text-center text-someBlueColor mb-[0.25rem]">
                {name}
            </p>
            <p className="text-statTileDescText text-[0.75rem] leading-[1rem] text-center mb-[1.8125rem]">
                {email}
            </p>

            <div className={`roboto-font rounded-[0.5625rem] text-[0.8125rem] leading-[1.04556rem] text-white py-[0.625rem] px-[0.9375rem] mb-[1.375rem]`}
                style={{
                    backgroundColor: color,
            }}
            >
                &nbsp;{title}&nbsp;
            </div>

            <div className="flex">
                <ContactMemberButton
                    src="/svgs/team/mail.svg"
                    alt="email"
                    text="EMAIL"
                />
                <ContactMemberButton
                    src="/svgs/team/telephone.svg"
                    alt="phone"
                    text="CALL"
                />
            </div>
        </div>
    )
}

export default MemberTile


interface ContactMemberButtonProps {
    src: string
    alt: string
    text: string
    color?: string // optional, defaults to base color
}

interface ContactMemberButtonProps {
    src: string
    alt: string
    text: string
    color?: string
}

export const ContactMemberButton: React.FC<ContactMemberButtonProps> = ({
    src,
    alt,
    text,
}) => {
    return (
        <div
            className="flex justify-center items-center pl-[2.1875rem] pr-[2.3125rem] pt-[1.5rem] pb-[1.4375rem] h-[4.1875rem] border-solid rounded-md hover:cursor-pointer transition-all duration-200"
        >
            <Image
                src={src}
                alt={alt}
                width={20}
                height={20}
                className="mr-[0.3125rem]"
            />
            <p className="font-medium text-[0.8125rem] leading-[1.04556rem]">
                {text}
            </p>
        </div>
    )
}
