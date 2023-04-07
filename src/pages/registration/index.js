import { memo } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { BackgroundFixed } from '../../components/BackgroundFixed'
import { RegistrationForm } from '../../components/RegistrationForm'
import { Logo } from '../../components/Logo'

const Registration = memo(({registration}) => {


    return(
        <>
            <Logo type='logoFully'/>
            <BackgroundFixed>
                <div className="wrapForm">
                    <h1>
                        Sign in
                    </h1>
                    <p className="subtitleMain">
                        Hi, I haven't seen you for a while
                    </p>
                    <p className="subtitle">
                        Are you newbie? <Link to="/authorization">Sign up</Link>
                    </p>
                    <RegistrationForm onSubmit={registration}/>
                </div>
                <div className="agreement">
                    By creating an account, you agree to <Link to=''>the Terms of Service</Link>. For more information about Smart Dictionary's privacy practices, see <Link to=''>the Smart Dictionary Privacy Statement</Link>. 
                </div>
            </BackgroundFixed>
        </>
    )
})


export const CRegistration = connect(store => (({})),{registration: (x) => console.log(x)})(Registration)