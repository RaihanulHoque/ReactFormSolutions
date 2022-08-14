import React, { useRef, useState } from 'react'

export default function ControlledForm() {
    const [userData, setUserData]=useState({
        firstName: '',
        lastName: '',
        email:'',
        phone:'',
        profession:'',
        gender:'male'
    })
    //will use these "distractured" variables to save STATE's data (now data will controlled by STATE)
    const [errors, setErrors]=useState({
        firstName: '',
        lastName: '',
        email:'',
        phone:'',
        profession:'',
    });
    const [submitted, setSubmitted] = useState(false);
    
    const handleChange = (evt) => {
        console.log(evt.target.name, evt.target.value)
        // console.log(firstName.length, '........First Name Length')
        setUserData({
            ...userData,
            [evt.target.name]:evt.target.value,
        })

        setErrors({
            ...errors,
            [evt.target.name]:'',
        })

    }

    const handleSubmit = (evt) =>{
        const {firstName, lastName, email, phone, profession, gender} = userData;
        evt.preventDefault()
        
        const userErrors = {
            firstName: '',
            lastName: '',
            email:'',
            phone:'',
            profession:'',
        }

        let isError = false;

        if(firstName === ''){
            isError = true
            userErrors.firstName = 'FirstName is Required'
         }
        if(firstName.length < 3){
            isError = true
            userErrors.firstName = 'First Name should have at least 3 characters'
        }
        /*
        if(gender === ''){
            setErrors({
                ...errors,
                gender : 'Please tell us, you are a Male or Female'
            })
        }
        */
        const regexPhone = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        // if(phone==='' || !regexPhone.test(phone)){
        if(phone==='' ){
            isError = true
            userErrors.phone = "Provide a valid Bangladeshi Phone Number"
        }

        const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(email==='' || !regexEmail.test(email)){
            isError = true
            userErrors.email = "Provide a valid email address"
        }

        if(profession === ''){
            isError = true
            userErrors.profession = 'Profession is required'
        }

        setErrors(userErrors)
        //Checking for errors, if error is there, form will note be submitted
        //some() -> show true or false 
        
        //Method 1
        /*
        if(userErrors.values().some(elm => elm.length > 0)){
            return
        }
        */
       if(isError) return
        //if form is valid, now we can submit the form
        setSubmitted(true)
    }

    const {firstName, lastName, email, phone, profession, gender} = userData;
    // const {firstName, lastName, email, phone, profession} = errors;
    const firstNameRef = useRef(null);
    console.log(firstNameRef, '......firstNameRef')
  return (
    <div>
        {submitted && <h3>Form submitted successfully!</h3>}
        {!submitted && 
            (
                <form onSubmit={handleSubmit} noValidate>
                    <div>
                        <label htmlFor='firstName'>First Name </label>
                        <input 
                        type="text" 
                        required
                        ref={firstNameRef}
                        className='form-control' 
                        name='firstName' 
                        value={firstName}
                        onChange={handleChange}
                        id='firstName' 
                        />
                    </div>
                    <p style={{ color:"red", fontSize:".9rem", margin:0, padding:0 }}>{errors.firstName}</p>
                    <div>
                        <label htmlFor='lastName'>Last Name </label>
                        <input 
                        type="text" 
                        className='form-control' 
                        name='lastName' 
                        value={lastName}
                        onChange={handleChange}
                        id='lastName' 
                        />
                    </div>
                    <p style={{ color:"red", fontSize:".9rem", margin:0, padding:0 }}>{errors.lastName}</p>
                    <div>
                        <label htmlFor='gender'>
                            Gender: 
                        </label>
                        <input type='radio'
                        name='gender'   
                        value='male'
                        checked={gender === 'male'}
                        onChange={handleChange}
                        />Male
                        <input type='radio'
                        name='gender'   
                        value='female'
                        checked={gender === 'female'}
                        onChange={handleChange}
                        />Female
                    </div>
                    <div>
                        <label htmlFor='email'>Email </label>
                        <input 
                        type="email" 
                        className='form-control' 
                        name='email' 
                        value={email}
                        onChange={handleChange}
                        id='email' 
                        />
                    </div>
                    <p style={{ color:"red", fontSize:".9rem", margin:0, padding:0 }}>{errors.email}</p>

                    <div>
                        <label htmlFor='phone'>Phone </label>
                        <input 
                        type="phone" 
                        className='form-control' 
                        name='phone'                
                        value={phone} 
                        onChange={handleChange}
                        id='phone' 
                        />
                    </div>
                    <p style={{ color:"red", fontSize:".9rem", margin:0, padding:0 }}>{errors.phone}</p>

                    <div>
                        <label htmlFor='profession'>Profession </label>
                        <select 
                        className='form-control' 
                        name='profession'                
                        value={profession} 
                        onChange={handleChange}
                        id='profession' 
                        >
                            <option value='' selected disabled>--Select Profession--</option>
                            <option value='webDeveloper'>Web Developer</option>
                            <option value='SoftwareDeveloper'>Software Developer</option>
                            <option value='designer'>Designer</option>
                        </select>
                    </div>
                    <p style={{ color:"red", fontSize:".9rem", margin:0, padding:0 }}>{errors.profession}</p>

                    <button className='mt-3'>Submit</button> 
                </form>
            )
        }
        
    </div>
  )
}
