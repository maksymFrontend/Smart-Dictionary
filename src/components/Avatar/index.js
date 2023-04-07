import { memo } from "react";
import { connect } from "react-redux";
import myPhoto from '../../img/myPhoto.jpg'


export const Avatar = memo(({userAvatar, style={}, className=''}) => {

    return(
        <img src={userAvatar} style={style} className={`userAvatarDefault ${className}`}/>
    )
})

export const CAvatar = connect(store => (({userAvatar: myPhoto})),{})(Avatar)