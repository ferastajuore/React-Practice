import { useState, useEffect } from 'react';
import moment from 'moment';

import validate from '../../components/validation/userValidated/validate';
import axios from '../../API/database/database';

export const useForm = (callback, props) => {
    const [user, setUser] = useState({
        id: props.user ? props.user.id : '',
        name: props.user ? props.user.name : '',
        email: props.user ? props.user.email : '',
        location: props.user ? props.user.location : '',
        phone: props.user ? props.user.phone : '',
        createdAt: props.user ? moment(props.user.createdAt) : moment()
    });
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
        setIsSubmit(true);
    };

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(user));
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmit) {
            callback();
            setLoading(true);

            // Send data to firebase
            const data = {
                name: user.name,
                email: user.email,
                location: user.location,
                phone: user.phone,
                createdAt: user.createdAt
            }
            const postData = async () => {
                try {
                    const result = await axios.post('/users.json', data);
                    console.log(result)
                } catch (error) {
                    console.log(error)
                }
            }
            postData();
        }
    }, [errors])

    return {
        handleChange,
        handleSubmit,
        user,
        errors,
        loading,
        isSubmit
    }
}