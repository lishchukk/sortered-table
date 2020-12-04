import React from 'react';
import './inputs-container.css'

const InputsContainer = ({id, firstName, lastName, email, phone, onChangeInputValue}) => {

    return (
        <div className='inputs-container'>
            <legend>
                <label>ID:</label>
                <input type="text" className="form-control" placeholder="ID"
                       aria-label="Recipient's username" aria-describedby="basic-addon2"
                       name='id' onChange={onChangeInputValue} value={id} required/>
            </legend>

            <legend>
                <label>First Name:</label>
                <input type="text" className="form-control" placeholder="First Name"
                       aria-label="Recipient's username" aria-describedby="basic-addon2"
                       name='firstName' onChange={onChangeInputValue} value={firstName} required/>
            </legend>
            <legend>
                <label>Last Name:</label>
                <input type="text" className="form-control" placeholder="Last Name"
                       aria-label="Recipient's username" aria-describedby="basic-addon2"
                       name='lastName' onChange={onChangeInputValue} value={lastName} required/>
            </legend>
            <legend>
                <label>Email:</label>
                <input type="text" className="form-control" placeholder="Email"
                       aria-label="Recipient's username" aria-describedby="basic-addon2"
                       name='email' onChange={onChangeInputValue} value={email} required/>
            </legend>
            <legend>
                <label>Phone:</label>
                <input type="text" className="form-control" placeholder="Phone"
                       aria-label="Recipient's username" aria-describedby="basic-addon2"
                       name='phone' onChange={onChangeInputValue} value={phone} required/>
            </legend>
        </div>
    );
};

export default InputsContainer;