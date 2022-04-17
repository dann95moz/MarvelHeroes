import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
const db = getFirestore();
async function filtrarDatos(stringBusqueda) {

    const perFiltrados = []
    const collectionRef = collection(db, "Superheroes")
    const queryNombre = query(collectionRef, where("nombre", "==", stringBusqueda))
    const queryOperacion = query(collectionRef, where("ciudad", "==", stringBusqueda))

    const arraySnapshots = await Promise.all([getDocs(queryNombre), getDocs(queryOperacion)])
    arraySnapshots.forEach((snapshot) => {
        snapshot.forEach((doc) => {
            perFiltrados.push(doc.data());
        })

    })
    console.log(perFiltrados, "personajes filtrados");
    if (perFiltrados.length < 1) {
        console.log("vacio")




    } else {
        return perFiltrados
    }

}
export default filtrarDatos