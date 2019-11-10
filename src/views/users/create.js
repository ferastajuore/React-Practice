import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'


import Aux from '../../hoc/Aux';    // hoc - aux
import { addUsers } from '../../action/users/usres';    // Action 
import { useForm } from './useForm';
import { Spinner } from '../../components/UI';

/**
 * Componet User - Create
 */
const Create = props => {

    const { handleChange, handleSubmit, user, errors, loading, isSubmit } = useForm(submit, props);

    function submit() {
        props.addUser(user);
        setTimeout(() => {
            props.history.push('/users');
        }, 4000);
    }

    return (
        <Aux>
            {loading && <Spinner/>}
            <h2 className="heading-secondary">Create Users</h2>
            <form className="form" onSubmit={handleSubmit} noValidate>
                <div className="form__group">
                    <label form="name" className="form__label">name</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={user.name} 
                        onChange={handleChange} 
                        placeholder="name"
                        className="form__input"
                        required
                    />
                    {errors.name && <span className="form__error">{errors.name}</span>}
                </div>
                <div className="form__group">
                    <label form="email" className="form__label">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={user.email} 
                        onChange={handleChange}  
                        placeholder="Email"
                        className="form__input"
                        required
                    />
                    {errors.email && <span className="form__error">{errors.email}</span>}
                </div>
                <div className="form__group">
                    <label form="location" className="form__label">Location</label>
                    <input 
                        type="text" 
                        name="location" 
                        value={user.location} 
                        onChange={handleChange}  
                        placeholder="location"
                        className="form__input"
                        required
                    />
                    {errors.location && <span className="form__error">{errors.location}</span>}
                </div>
                <div className="form__group">
                    <label form="phone" className="form__label">Phone</label>
                    <input 
                        type="text" 
                        name="phone" 
                        value={user.phone} 
                        onChange={handleChange}  
                        placeholder="Phone"
                        className="form__input"
                        required
                    />
                    {errors.phone && <span className="form__error">{errors.phone}</span>}
                </div>
                <div className="form__group">
                    <button className="btn btn--info" disabled={!isSubmit}>Add</button>
                </div>
            </form>
        </Aux>
    )
};


/**     Dispatch
 * 
 * @param {*} dispatch 
 */
const mapDispatchToProps = dispatch => ({
    addUser: (user) => dispatch(addUsers(user))
});


/**
 * Validate props
 */
Create.propType = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired,
    createdAt: PropTypes.number.isRequired
}

export default connect(undefined, mapDispatchToProps)(Create);