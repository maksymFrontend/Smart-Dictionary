import { memo } from "react";
import { Search } from '../Search'
import { CNotificationIcon } from '../NotificationIcon'
import { CAvatar } from '../Avatar'
import { Logo } from '../Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons'

export const WorkSpaceHeader = memo(({changeStateMenu, stateMenu}) => {

    return(
        <>
          <header className='disableMobileVersion'>
                <Search />
                <div>
                    <CNotificationIcon />
                    <CAvatar />
                </div>
            </header>
            <header className='disableComputerVersion'>
                <FontAwesomeIcon icon={!stateMenu?faBarsStaggered:faXmark} className='menuIcon' onClick={changeStateMenu}/> 
                <Logo type='logoMobile'/>
                <CNotificationIcon />
            </header>      
        </>

    )
})