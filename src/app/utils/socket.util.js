import { io } from 'socket.io-client';

// const URL = process.env. ? 'https://' : 'http://localhost:5173/';
const URL = 'http://localhost:4000'

export const socket =  io(URL, {
    autoConnect: false
});