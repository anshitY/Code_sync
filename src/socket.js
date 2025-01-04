// import { io } from 'socket.io-client';

// export const initSocket = async () => {
//     const options = {
//         'force new connection': true,
//         reconnectionAttempt: 'Infinity',
//         timeout: 10000,
//         transports: ['websocket'],
//     };
//     return io(process.env.REACT_APP_BACKEND_URL, options);
// };
import { io } from 'socket.io-client';

export const initSocket = async () => {
    const options = {
        'force new connection': true,
        reconnectionAttempts: Infinity,  // Corrected from 'reconnectionAttempt'
        timeout: 10000,                   // Timeout in ms before trying again
        transports: ['websocket'],        // Enforce WebSocket transport
        debug: true,                      // Enable debugging for better error insights
    };

    const socket = io(process.env.REACT_APP_BACKEND_URL, options);

    // Debugging connection events
    socket.on('connect_error', (err) => {
        console.error('Connection error:', err);
    });

    socket.on('connect_timeout', () => {
        console.error('Connection timeout');
    });

    socket.on('disconnect', () => {
        console.log('Socket disconnected');
    });

    return socket;
};
