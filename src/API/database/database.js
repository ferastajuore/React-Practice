import axios from 'axios';

/**
 *  DataBase - Firebase
 */
const database = axios.create({
        baseURL: `https://react-practice-c7dc2.firebaseio.com`
    });

export default database;