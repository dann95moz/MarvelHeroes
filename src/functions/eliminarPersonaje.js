import firebaseApp from "../firebase/firebaseConfig";
import { getFirestore, deleteDoc, collection, doc } from "firebase/firestore"

const db = getFirestore(firebaseApp)

export default async function eliminarPersonaje(heroes) {
    const collectionRef = collection(db, "Superheroes")
    const docuRef = doc(collectionRef, heroes.id)
    const eliminado = await deleteDoc(docuRef)
    return eliminado;
}