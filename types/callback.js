"use strict";
exports.__esModule = true;
console.log("hi")
var queryString = window.location.search;
var loginAccess = function () {
    var urlParams = new URLSearchParams(queryString);
    console.log(urlParams);
    // axios.post('https://accounts.spotify.com/api/token', {
    //     params: {
    //         client_id: config.spotify.client_id,
    //         grant_type: "authorization_code",
    //         code: "",
    //         redirect_uri: "http://localhost:7070/callback/",
    //         code_verifier: ""
    //     }
    // })
};
loginAccess();
