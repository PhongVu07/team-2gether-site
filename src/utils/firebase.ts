import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
import {
  uploadBytesResumable,
  getDownloadURL,
  ref,
  getStorage,
  list,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDFWaX7eAzJxtHRw3haXMIY7S7tKHhnMaE",
  authDomain: "team2gether-2023.firebaseapp.com",
  projectId: "team2gether-2023",
  storageBucket: "team2gether-2023.appspot.com",
  messagingSenderId: "636310132187",
  appId: "1:636310132187:web:6fa66dbd11dd2d98a983fe",
  measurementId: "G-70L6WEGV3H",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export const listImages = async (folder: string) => {
    const listRef = ref(storage, `${folder}/`);

    const firstPage = await list(listRef, { maxResults: 100 });
    const images = await Promise.all(firstPage.items.map(item => getDownloadURL(item)))
    const imagesWithId = images.map((image, id) => ({id, url: image}))

    return imagesWithId;
}
