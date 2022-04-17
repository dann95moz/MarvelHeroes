import firebaseApp from '../firebase/firebaseConfig'
import { getFirestore, collection, getDocs } from 'firebase/firestore'


const db = getFirestore(firebaseApp);

export default async function getAllHeroes() {
    const heroes = [];
    const collectionRef = collection(db, "Superheroes");
    const snapshot = await getDocs(collectionRef);
    snapshot.forEach(doc => {
        heroes.push(doc.data());
    });
    return heroes;
}
