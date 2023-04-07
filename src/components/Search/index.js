import { memo } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faMicrophone } from '@fortawesome/free-solid-svg-icons'


export const Search = memo(({}) => {

    return(
        <div className="search">
            <FontAwesomeIcon icon={faMagnifyingGlass}/> 
            <input  placeholder="Find a word"/>
            <button className="buttonMicrophone">
                <FontAwesomeIcon icon={faMicrophone}/> 
            </button>
        </div>
    )
})