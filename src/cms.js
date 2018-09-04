import axios from 'axios';
import localforage from 'localforage';

export const getCms = async() => {

    const data = await Promise.race([getCmsIndex(), getCmsNetwork()]);
    console.log(data);
    return data;
};

const getCmsNetwork = () => {
    return axios.get('http://localhost:8080/cms').then(result => {
        console.log(result.data);
        return result.data;
    });
}

const getCmsIndex = () => {
    return localforage.getItem('cms').then(value => {
        // This code runs once the value has been loaded
        // from the offline store.
        console.log(value);
        if (value) {
            return value;
        } else {
            console.log('value is undefined');
        }
    })
}

export class CMS {
    
}