import Image from 'next/image'

interface ButtonProps {
    icon?: string
    label: string
}

export const NormalButton:React.FC<ButtonProps> = ({ label, icon }) => {
    return (
        <button className='normalButton inter-font'>
            {
                icon && (
                    <Image
                        src={icon}
                        alt={icon.slice(14)}
                        width={20}
                        height={20}
                        className='mr-[0.5rem]'
                    />
                )
            }
            {label}
        </button>
    )
}

export const OutlinedButton:React.FC<ButtonProps> = ({ label, icon }) => {
    return (
        <button className='outlinedButton'>
            {
                icon && (
                    <Image
                        src={icon}
                        alt={icon.slice(14)}
                        width={20}
                        height={20}
                        className='mr-[0.5rem]'
                    />
                )
            }
            {label}
        </button>
    )
}

export const FilledButton:React.FC<ButtonProps> = ({ label, icon }) => {
    return (
        <button className='filledButton'>
            {
                icon && (
                    <Image
                        src={icon}
                        alt={icon.slice(14)}
                        width={20}
                        height={20}
                        className='mr-[0.5rem]'
                    />
                )
            }
            {label}
        </button>
    )
}