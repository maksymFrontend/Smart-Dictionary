import { memo } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'

export const NotificationIcon = memo(({amountNotification}) => {

    return(
        <Link to='' className="notificationIcon">
            <FontAwesomeIcon icon={faBell}/> 
            <label>{amountNotification}</label>
        </Link>
    )
})

export const CNotificationIcon = connect(store => (({amountNotification: 3})),{})(NotificationIcon)