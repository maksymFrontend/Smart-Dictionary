import { memo } from "react";
import {H1} from '../../../components/H1'
import {H2} from '../../../components/H2'
import IconCat from '../../../img/iconCat.png'
import IconApple from '../../../img/IconApple.png'
import LT from '../../../img/LT.svg'
import Weather from '../../../img/weather.png'
import Star from '../../../img/star.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare, faStar, faLinesLeaning } from '@fortawesome/free-solid-svg-icons'
import { MiniButton } from '../../../components/Buttons'
import Book from '../../../img/book.svg'
import { CAvatar } from '../..//../components/Avatar'

export const MainPage = memo(({}) => {

    return(
        <>
            <div>
                <div className="personal-information">
                    <div>
                        <h1>Hi, Maksym !</h1>
                        <progress className="progress" max={100} value={25} />
                        <div className="personal-information-word"><mark>125</mark> words</div>
                    </div>
                    <CAvatar style={{height: '70px'}} />
                </div>

                <H1 text='Hi, Maksym !' className='disableMobileVersion'/>
                <div className="dashboard">
                    <div className="dashboard-container dashboardElement_redBackground adviceBlock">
                        <img src={IconCat} className="image-container"/> 
                        <div>
                            <div className="tagText">ADVICE</div>
                            <p className="heading-container">Repeat words regularly</p>
                        </div>
                    </div>
                    <div className="dashboard-container">
                        <img src={IconApple} /> 
                        <div className="centerText">
                            <p className="heading-container">apple</p>
                            <div className="text-container">[ˈapəl]</div>
                        </div>
                    </div>
                    <div className="dashboard-container weatherBlock">
                        <img src={Weather} className="image-container"/> 
                        <div>
                            <div className="tagText">motivation</div>
                            <p className="heading-container">Nice weather, let's study!</p>
                        </div>
                    </div>
                    <div className="dashboard-container dashboardElement_darckBackground">
                        <img src={LT} /> 
                        <div className="dashboardElementText">
                            <p className="heading-container lines-leaning-icon">Check spelling <FontAwesomeIcon icon={faLinesLeaning} className='disableComputerVersion'/></p>
                            <div className="text-container disableMobileVersion">Grammar and spelling</div>
                            
                        </div>        
                    </div>

                </div>

                <H2 text='Bookmarks' className='disableMobileVersion'/>
                <div className="dashboard striped-div-container">
                    <div className="dashboard-container-mini">
                        <img src={Star} />
                       
                        <div className="heading-container-mini lines-leaning-icon-mini">
                            Add<br/>label
                            <FontAwesomeIcon icon={faShare}/>
                        </div>
                        
                    </div>
                </div>

            </div>
            <div className="quickAccessForm">
                <div className="speedRunBlock">
                    <img src={Book} />
                    <div className="speedRunBlockHeader">
                        Speed run
                    </div>
                    <div className="speedRunBlockSubtitle">
                        You can repeat words if the word is considered a scientist
                    </div>
                    <MiniButton text='Start' style={{}}/>
                </div>

                <div>
                    <div className="tagTextTypeTwo">
                        Progress
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faStar}/>
                        125 words
                    </div>
                    <progress className="progress" max={100} value={25} />
                    
                </div>
            </div>
        </>
    )
})