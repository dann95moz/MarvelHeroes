// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app";

// Añade aquí tus credenciales
const firebaseConfig = {
  apiKey: "AIzaSyAB8OW8qPVLcw2a8YHZksM-uqVDRix2ekc",

  authDomain: "superheroes-109c2.firebaseapp.com",

  projectId: "superheroes-109c2",

  storageBucket: "superheroes-109c2.appspot.com",

  messagingSenderId: "711280072269",

  appId: "1:711280072269:web:d3962efe8c41a2f4f36e04"

};

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;
