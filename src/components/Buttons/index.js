import { memo } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const DefaultButtonFull = memo(({text='', style={}, className='', onClick}) => {

    return(
        <button style={style} className={`defaultButtonFull ${className}`} onClick={onClick}>
            {text}
        </button>
    )
})

export const DefaultButtonEmpty = memo(({text='', style={}, className='', onClick}) => {

    return(
        <button style={style} className={`defaultButtonEmpty ${className}`} onClick={onClick}>
            {text}
        </button>
    )
})

export const DefaultButtonEmptyIcon = memo(({text='', style={}, className='', icon={}, onClick}) => {

    return(
        <button style={style} className={`defaultButtonEmptyIcon ${className}`} onClick={onClick}>
            {text}
            <FontAwesomeIcon icon={icon} />  
        </button>
    )
})

export const TestButton = memo(({text='', style={}, className='', state}) => {

    return(
        
        <button style={style} className={`testButton ${state==1?'correctAnswer':state==0?'wrongAnswer':''}  ${className}`}>
            {text}
        </button>
    )
})

export const MiniButton = memo(({text='', style={}, className=''}) => {

    return(
        
        <button style={style} className={`miniButton ${className}`}>
            {text}
        </button>
    )
})

export const DefaultButtonWithoutBorders = memo(({text='', style={}, className=''}) => {

    return(
        
        <button style={style} className={`defaultButtonWithoutBorders ${className}`}>
            {text}
        </button>
    )
})

export const IconButton = memo(({icon='', style={}, className=''}) => {

    return(
        <FontAwesomeIcon icon={icon}  style={style} className={`iconButton ${className}`}/>  
    )
})