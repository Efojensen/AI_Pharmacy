interface CardProps {
    className?: string
    children?: React.ReactNode
}

const Card:React.FC<CardProps> = ({ className, children}) => {
    return (
        <article className={`flex flex-col bg-white rounded-2xl ${className}`}>{children}</article>
    )
}

export default Card