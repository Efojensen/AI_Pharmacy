const StatusTile = ({ status }: { status: 'Approved' | 'Rejected' | 'Pending' }) => {
    const statusStyles = (status: 'Approved' | 'Rejected' | 'Pending') => {
        switch (status) {
            case 'Approved':
                return 'bg-approved text-approvedText'
            case 'Pending':
                return 'bg-pending text-pendingText'
            default:
                return 'bg-rejected text-rejectedText'
        }
    }

    return (
        <div className={`
            flex inter-font text-[0.8rem] font-medium leading-[1.125rem] max-w-[5.25rem]
            rounded-[1rem] py-[0.125rem] pr-[0.5rem] pl-[0.375rem] ${statusStyles(status)}`
        }>
            • {status}
        </div>
    )
}

export default StatusTile