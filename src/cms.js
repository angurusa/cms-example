import axios from 'axios';
import localforage from 'localforage';

export class CMS {

    static cms;

    static route(component, contentName) {
        return CMS.getInstance()._route(component, contentName);
    }

    static get(localData, contentName) {
        return CMS.getInstance()._get(localData, contentName);
    }
    
    static getInstance() {
        if (!CMS.cms) {
            CMS.cms = new CMS();
        }
        
        return CMS.cms;
    }

    constructor() {
        this.content = {};
    }

    _route(component, contentName) {

        localforage.getItem('cms').then(value => {
            if (value) {
                this.content = value;
                component.forceUpdate();
            } else {
                console.log('value is undefined');
            }
        });

        axios.get('http://localhost:8080/cms').then(result => {
            this.content = result.data;
            localforage.setItem('cms', result.data);
            component.forceUpdate();
        });

    }

    _get(localData, contentName) {
        let content = {};
        
        // if (localData) {
        //     content = localData;
        // }

        if (Object.keys(this.content).length) {
            content = this.content;
        }

        return content;
    }

}