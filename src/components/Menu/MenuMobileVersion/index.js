import { memo } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faHouse, faBook, faChessRook, faChartSimple, faCircleInfo, faGear, faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink} from "react-router-dom";
import { CAvatar } from '../../Avatar'

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

export const MenuMobileVersion = memo(({changeStateMenu}) => {

    return(
        <div className="menuMobileVersionv disableComputerVersion">
            <div className="infoBlockMenu">
                <CAvatar style={{height: '70px'}} />
                <div>
                    <div>
                        Maksym
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faLocationDot}/>
                        Ukraine
                    </div>
                </div>
            </div>
            <div className="linksMenuMobileVersion">
                {
                    menuContent.map(({id, name, link, icon}) => 
                        <NavLink to={link} key={id} onClick={changeStateMenu} className={(navData) => (navData.isActive ? "linkMenuMobileVersion_activ" : '') + ' linkMenuMobileVersion'}>
                            <FontAwesomeIcon icon={icon} />   
                            {name} 
                        </NavLink>
                    )
                }
            </div>

            <div onClick={changeStateMenu} className='linkMenuMobileVersion exitMobileVersion'>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />   
                Sing out
            </div>
        </div>
    )
})