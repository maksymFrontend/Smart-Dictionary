import { memo } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBook, faChessRook, faChartSimple, faCircleInfo, faGear, faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from "react-router-dom";
import { Logo } from '../../../components/Logo'

const menuContent = [
    {
        id:1,
        name:'Main',
        link:'./',
        icon:faHouse
    },
    {
        id:2,
        name:'Dictionaries',
        link:'./dictionaries',
        icon:faBook
    },
    {
        id:3,
        name:'Practice',
        link:'./practice',
        icon:faChessRook
    },
    {
        id:4,
        name:'Progress',
        link:'./progress',
        icon:faChartSimple
    },
    {
        id:5,
        name:'Help',
        link:'./help',
        icon:faCircleInfo
    },
    {
        id:6,
        name:'Settings',
        link:'./settings',
        icon:faGear
    },
]

export const MenuComputerVersion = memo(({}) => {

    return(
        <div className="menuComputerVersion">
            <Logo type='logoShortcut'/>
            <div className="linksMenuComputerVersion">
                {
                    menuContent.map(({id, name, link, icon}) => 
                        <NavLink to={link} key={id} className={(navData) => (navData.isActive ? "linkMenuComputerVersion_activ" : '') + ' linkMenuComputerVersion'}>
                            <FontAwesomeIcon icon={icon} />    
                        </NavLink>
                    )
                }
            </div>
            <Link to='' className='linkMenuComputerVersion'>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />      
            </Link>
        </div>
    )
})