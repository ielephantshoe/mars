import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC0LCHhzVbZ7oQUIXQXBiHzPqfuVApmOog",
  authDomain: "intel-aws-reinvent-1904.firebaseapp.com",
  projectId: "intel-aws-reinvent-1904",
  storageBucket: "intel-aws-reinvent-1904.appspot.com",
  messagingSenderId: "91397230053",
  appId: "1:91397230053:web:03a3da1fe1a18a3862330c",
}

export const firebaseApp = initializeApp(firebaseConfig)

export const auth = getAuth(firebaseApp)
