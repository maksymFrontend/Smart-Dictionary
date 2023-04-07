import { memo, useState } from "react";
import { connect } from "react-redux";
import { Logo } from '../../components/Logo'
import { MenuComputerVersion } from '../../components/Menu/MenuComputerVersion'
import { MenuMobileVersion } from '../../components/Menu/MenuMobileVersion'
import { Workspace } from '../../components/Workspace'


const Account = memo(({authorizatio}) => {
    const[stateMenu, setStateMenu] = useState(false)
    const changeStateMenu = () => setStateMenu(!stateMenu)

    return(
        
        <div className="boxAccount">
            <MenuComputerVersion />
            <MenuMobileVersion changeStateMenu={changeStateMenu} />
            <Workspace changeStateMenu={changeStateMenu} stateMenu={stateMenu} className={stateMenu && 'collapsedWorkspace'}/>
        </div>
        

    )
})

export const CAccount = connect(store => (({})),{authorizatio: (x) => console.log(x)})(Account)