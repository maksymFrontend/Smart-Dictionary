import { memo, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";


export const Input = memo(({type, className, style={}, recoveryPassword=false, nameInput='', validationAbility=false, placeholder='', amountInput=0, name='', dataInput, errors={}}) => {
    const [validation, setValidation] = useState(2)
    const [value, setValue] = useState('')
    let inputs = []

    const onValidation = (value) =>{
        if(value?.length){
            if(type == 'text'){
                setValidation(value?.length > 2?1:0)
            }
        }else{
            setValidation(2)
        }

    }

    const onChange = (e) =>{
        setValue(e.target.value.trim());
        onValidation(e.target.value.trim());
    }

    return(

        <>
            {
                (type=='text' || type=='email' || type=='password')&&

                <div className={`defaultInput ${className}`} style={style}>
                    <label>
                        {nameInput}
                        {recoveryPassword?<Link to=''>Forgot password?</Link>:''}
                    </label>
                    <input type={type} {...dataInput}/>

                    {
                        Object.keys(errors[name] || {}).length != 0 && <FontAwesomeIcon icon={faXmark} className={'red'}/> 
                    }
                </div>
            }

            {
                type=='url'&&

                <div className={`defaultInput urlInput ${className}`} style={style}>
                    <label>{nameInput}</label>
                    <div>
                        https://&nbsp;
                    </div>
                    <input type='url' value={value} onChange={e=>onChange(e)}/>

                    {
                        validationAbility && validation!=2 && <FontAwesomeIcon icon={validation?faCheck:faXmark} className={validation?`green`:'red'}/> 
                    }
                </div>
            }

            {
                type=='proNumber'&& <ProNumber className={className} style={style} nameInput={nameInput} amountInput={amountInput} />
            }





            {
                Object.keys(errors[name] || {}).length != 0 &&
                <div className="requirementsInputBlock">
                    <div>Requirements</div>
                    <ul>
                        <li>
                           {errors[name].message}
                        </li>
                    </ul>
                </div>
            }

        </>

    )
})


export const ProNumber = memo(({className, style, nameInput, amountInput}) => {
    let inputs = []
    let inputId = []
    for(let i = 0; i<amountInput; i++){
        inputs.push("")
        inputId.push(i)
    } 
    const [inputValues, setInputValues] = useState(inputs);
    const handleChange = (event, index) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = event.target.value;
        setInputValues(newInputValues);
    }

    const handleSubmit = (event) => {
        console.log("Input values:", inputValues);
    }



    return(
        <div className={`proNumberInput ${className}`} style={style}>
            <label>{nameInput}</label>
            <div>
                {
                    inputId.map((id) => <div>
                                            <input maxLength="1" type='number' value={inputValues[id]} onChange={(event) => handleChange(event, id)}  key={id}/>
                                        </div>
                    )
                }
            </div>
        </div>
    )
})