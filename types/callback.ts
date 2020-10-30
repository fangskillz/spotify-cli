import axios from 'axios';
import config from './config';

var urlParams = window.location.search.split('=')[1];

var loginAccess = function () {
    axios.post('https://accounts.spotify.com/api/token', {
        headers: {
            'accept': 'application/x-www-form-urlencoded',
            'authorization': `Bearer ${urlParams}`
        },
        params: {
            grant_type: "client_credentials"
        }
    })
};

loginAccess();