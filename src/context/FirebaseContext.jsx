import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';

const firebaseConfig = {
  apiKey: "AIzaSyA8Utesgb0DY93uSBu_S8sIfDWchticK9c",
  authDomain: "shoppy-9221b.firebaseapp.com",
  databaseURL:
    "https://shoppy-9221b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "shoppy-9221b",
  storageBucket: "shoppy-9221b.appspot.com",
  messagingSenderId: "1026271116553",
  appId: "1:1026271116553:web:63ab0bd87779203d1f67d8",
  measurementId: "G-H2ERDW7D18",
};

const app = initializeApp(firebaseConfig);

export function writeNewProduct(name, price, option, gender, detail) {
  const db = getDatabase(app);
  const id = uuidv4();
  set(ref(db, 'products/' + id), {
    name,
    price,
    option,
    gender,
    detail,
    id,
  });
}
