import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
   apiKey: 'AIzaSyCxaOK3ojCPXLoV00Aozrj--u4UPkKEuls',
   authDomain: 'gift-list-j16d.firebaseapp.com',
   projectId: 'gift-list-j16d',
   storageBucket: 'gift-list-j16d.firebasestorage.app',
   messagingSenderId: '545792146675',
   appId: '1:545792146675:web:0fe20072f2c6da51654b86',
}

const app = initializeApp(firebaseConfig, 'gift-list-j16d')

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export { auth, provider }
