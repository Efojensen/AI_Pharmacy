interface SubSideBarConnectorProps {
    last: boolean
    index: number
    active: boolean
}

export const SubSidebarConnector: React.FC<SubSideBarConnectorProps> = ({ index, active, last }) => {
    const getConnectorContent = () => {
        if (index === 0) {
            return (
                <div className="flex flex-col items-center justify-center space-y-1">
                    ●
                    <PipeConnector />
                </div>
            )
        } else if (last) {
            return (
                <>
                    <PipeConnector />
                    ●
                </>
            )
        } else {
            return (
                <>
                    <PipeConnector />
                    ●
                    <PipeConnector />
                </>
            )
        }
    }

    return (
        <div className={`flex flex-col ${active ? 'text-cyanText' : 'text-inactiveGrey'}`}>
            {getConnectorContent()}
        </div>
    )
}

export const PipeConnector = () => {
    return (
        <span className='my-[-.8375rem]'>
            |
        </span>
    )
}