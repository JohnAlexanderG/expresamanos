import { initializeApp } from 'firebase/app'
import {
    getFirestore,
    collection,
    addDoc,
    getDocs
} from 'firebase/firestore'
import {
    getStorage,
    ref,
    getDownloadURL
} from 'firebase/storage'

const firebaseApp = initializeApp({
    apiKey: "AIzaSyD9JhT6BZU_8-GUZnfYs14qTwpUvXidEac",
    authDomain: "expresamanos.firebaseapp.com",
    databaseURL: "https://expresamanos-default-rtdb.firebaseio.com",
    projectId: "expresamanos",
    storageBucket: "expresamanos.appspot.com",
    messagingSenderId: "865883131105",
    appId: "1:865883131105:web:93ba570dec0127e01f7ba0"
});

const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export const storageRoot = ref(storage);
// export const storageRef = ref(storageRoot, 'videos/0010.mp4');

export const getVideo = (_storageRoot: any) => getDownloadURL(_storageRoot)
    .then(_metadata => _metadata)
    .catch(_err => {
        console.log("Error: ", _err)
        throw new Error(_err);
    });

export const addUsers = async (payload: object) => {
    const docRef = await addDoc(collection(db, 'usuarios'), payload);
    console.log('addUsers.docRef.id:', docRef.id);
}

export const getUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "usuarios"));
    querySnapshot.forEach((doc) => {
        console.log(doc.id, doc.data());
    });
} 
