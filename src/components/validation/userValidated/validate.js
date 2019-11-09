export default function validate(values) {
    let errors = [];
    if (!values.name) {
        errors.name = 'Name is required' 
    } else if (values.name.length < 3) {
        errors.name = 'Name must be 3 or more characters'
    }
    if (!values.email) {
        errors.email = 'Email address is required'
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalild'
    }
    if (!values.location) {
        errors.location = 'Location is required'
    }
    if (!values.phone) {
        errors.phone = 'Phone number is required'
    } else if (values.phone.length < 7 || values.phone.length > 12) {
        errors.phone = 'Phone number must be 7 to 12 numbers'
    }

    return errors;
};
