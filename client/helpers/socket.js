import { io } from 'socket.io-client';

const isDev = process.env.NODE_ENV === 'development';

const socket = io(isDev ? 'ws://13.201.38.154:8080' : '/');
export default socket;
