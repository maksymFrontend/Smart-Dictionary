import { memo } from "react";
import detailLeft from '../../img/BackgroundFixed/detail-left.svg' 
import detailRight from '../../img/BackgroundFixed/detail-right.svg' 

export const BackgroundFixed = memo(({children}) => {

    return(

        <div className="backgroundFixed">
            <img src={detailLeft} className="backgroundFixed_detailLeft"/>
            {children}
            <img src={detailRight} className="backgroundFixed_detailRigh"/>
        </div>
    )
})