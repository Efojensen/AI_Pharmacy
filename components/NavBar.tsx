'use client'

import PharmacyNotificationsTile from './PharmacyNotificationsTile'
import SearchBox from './SearchBox'

const NavBar = () => {
    return (
        <nav className='navBar'>
            <SearchBox placeholder='Mother Earth day is coming' />

            <PharmacyNotificationsTile
                imgUrl='/images/avatar.png'
                userName='John Doe'
                position='Manager'
                pharmacy='AB Pharmacy'
            />
        </nav>
    )
}

export default NavBar