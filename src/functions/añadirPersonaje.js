import { getFirestore, collection, doc, setDoc } from "firebase/firestore"
const db = getFirestore()
function añadirPersonaje(infoHeroe) {
    const collectionRef = collection(db, "Superheroes")
    const docRef = doc(collectionRef, infoHeroe.id)
    setDoc(docRef, infoHeroe)
}
export default añadirPersonaje