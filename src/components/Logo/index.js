import { memo } from "react";
import logoFully from '../../img/Logo/logoFully.svg' 
import logoShortcut from '../../img/Logo/logoShortcut.svg' 
import logoMobile from '../../img/Logo/logoMobile.svg' 

export const Logo = memo(({type}) => {

    return(
        <>
            {
                type == 'logoFully' && <img src={logoFully} className='logoFully'/>
            }
            {
                type == 'logoShortcut' && <img src={logoShortcut} className='logoShortcut'/>
            }
            {
                type == 'logoMobile' && <img src={logoMobile} className='logoShortcut'/>
            }
        </> 
    )
})