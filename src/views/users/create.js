import React, { useState } from 'react';
import moment  from 'moment';
import { connect } from 'react-redux';

// Action 
import { addUsers } from '../../action/users/usres';


const Create = props => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        location: '',
        phone: '',
        createdAt: moment(),
        error: ''
    });

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    };

    const handleSubmit = e => {
        e.preventDefault();

        if(!user.name || !user.email || !user.location || !user.phone) {
            // Validation inputs
            setUser({...user, error: 'Please complete forms'});
        }else {
            // Send Data
            props.addUser(user);
            setTimeout(() => {
                props.history.push('/users');
            }, 2000);
        }
    };

    return (
        <div>
            <h2 className="heading-secondary">Create Users</h2>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form__error">{user.error && user.error}</div>
                <div className="form__group">
                    <label form="name" className="form__label">name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={user.name} 
                        onChange={handleChange} 
                        placeholder="name"
                        className="form__input"
                        required
                    />
                </div>
                <div className="form__group">
                    <label form="email" className="form__label">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={user.email} 
                        onChange={handleChange}  
                        placeholder="Email"
                        className="form__input"
                        required
                    />
                </div>
                <div className="form__group">
                    <label form="location" className="form__label">Location</label>
                    <input 
                        type="text" 
                        id="location" 
                        name="location" 
                        value={user.location} 
                        onChange={handleChange}  
                        placeholder="location"
                        className="form__input"
                        required
                    />
                </div>
                <div className="form__group">
                    <label form="phone" className="form__label">Phone</label>
                    <input 
                        type="text" 
                        id="phone" 
                        name="phone" 
                        value={user.phone} 
                        onChange={handleChange}  
                        placeholder="Phone"
                        className="form__input"
                        required
                    />
                </div>
                <div className="form__group">
                    <button className="btn btn--info">Add</button>
                </div>
            </form>
        </div>
    )
};


// Dispatch
const mapDispatchToProps = dispatch => ({
    addUser: (user) => dispatch(addUsers(user))
});

export default connect(undefined, mapDispatchToProps)(Create);
