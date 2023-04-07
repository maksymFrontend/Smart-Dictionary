import { memo } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { BackgroundFixed } from '../../components/BackgroundFixed'
import { AuthorizationForm } from '../../components/AuthorizationForm'
import { Logo } from '../../components/Logo'


const Authorization = memo(({authorizatio}) => {


    return(
        <>
            <Logo type='logoFully'/>
            <BackgroundFixed>
                <div className="wrapForm">
                    <h1>
                        Sing up
                    </h1>
                    <p className="subtitleMain">
                        Hi, let's create your user account
                    </p>
                    <p className="subtitle">
                        Already have an account? <Link to="/registration">Sign in</Link>
                    </p>
                    <AuthorizationForm onSubmit={authorizatio}/>
                </div>
            </BackgroundFixed>
        </>

    )
})


export const CAuthorization = connect(store => (({})),{authorizatio: (x) => console.log(x)})(Authorization)