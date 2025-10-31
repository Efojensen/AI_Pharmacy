import Image from 'next/image'
import SidebarTile from './SidebarTile'

const Sidebar = () => {
    return (
        <aside className='sideBar'>
            <div className='mt-[2.3125rem] flex gap-x-[0.375rem] items-center mb-[2.6875rem] ml-[1.28375rem]'>
                <Image
                    width={37}
                    height={35}
                    alt='company_logo'
                    src='/svgs/sidebar/mortar.svg'
                />
                <h1 className='text-xl text-black font-normal'>
                    AI PHARMACY
                </h1>
            </div>

            <p className='text-sm leading-[1.125rem] font-normal ml-4 mb-[0.625rem] text-sideBarGrey'>Home</p>
            <nav className='flex flex-col gap-y-[1.25rem] ml-1'>
                <SidebarTile icon='/svgs/sidebar/dashboard.svg' text='Overview' active={false} />
                <SidebarTile
                    icon='/svgs/sidebar/inventory.svg'
                    text='Inventory'
                    active={true}
                    dropdownArrow='/svgs/sidebar/dropdown.svg'
                    dropdownItems={['Database', 'Statistics', 'Pending Approvals']}
                />
                <SidebarTile icon='/svgs/sidebar/upload.svg' text='Upload' active={false} />
                <SidebarTile icon='/svgs/sidebar/team.svg' text='Team' active={false} />
            </nav>

            <p className='text-sm leading-[1.125rem] font-normal ml-4 mb-[0.625rem] text-sideBarGrey mt-[1.5rem]'>Preferences</p>
            <nav className='flex flex-col gap-y-[1.25rem] ml-1'>
                <SidebarTile
                    text='Settings'
                    active={false}
                    icon='/svgs/sidebar/settings.svg'
                    dropdownArrow='/svgs/sidebar/dropdown.svg'
                    dropdownItems={['Edit Profile', 'Privacy Policy', 'Notifications', 'Logout']}
                />
                <SidebarTile icon='/svgs/sidebar/about.svg' text='About' active={false} />
                <SidebarTile icon='/svgs/sidebar/help.svg' text='Help' active={false} />
            </nav>
        </aside>
    )
}

export default Sidebar