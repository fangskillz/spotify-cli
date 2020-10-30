#!/usr/bin/env node
import express from 'express';
import { args, Command } from 'commander';
import axios from 'axios';
import path from 'path';
import SpotifyWebApi from 'spotify-web-api-node';

import config from './config'

const app = express();

const program = new Command();
program.version('0.0.1');

var spotify = new SpotifyWebApi({
    clientId: config.spotify.client_id,
    clientSecret: config.spotify.client_secret,
    redirectUri: 'http://localhost:7070/callback/'
})

//Login session - Spotify
program.command('login')
    .description('Login to Spotify!')
    .action(() => {
        //log spotify login link
        // const scopes = 'user-read-email user-read-private user-read-currently-playing user-read-playback-state user-modify-playback-state';
        // console.log(`https://accounts.spotify.com/authorize?response_type=code&client_id=${config.spotify.client_id}&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent('http://localhost:7070/callback/')}`);
        spotify.getMe().then(data => {
            console.log(data)
        }).catch(err => {
            console.log(err)
        })
    });

program.parse(args);

app.get('/callback', (req, res) => {
    res.sendFile((path.join(__dirname + '/index.html')));
})

app.listen(7070, () => console.log("Done!"));