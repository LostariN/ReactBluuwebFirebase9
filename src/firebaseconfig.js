
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAP8WfSKgnDpJ0VwKMXJyoHpXTdugx0O5o",
    authDomain: "reactdebluuweb.firebaseapp.com",
    projectId: "reactdebluuweb",
    storageBucket: "reactdebluuweb.appspot.com",
    messagingSenderId: "1001374815218",
    appId: "1:1001374815218:web:3d7c13d5e7ba00a50d516b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export {
    auth
}