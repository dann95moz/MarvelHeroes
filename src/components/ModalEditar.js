import { useState } from 'react'
import { Modal, Stack, Form, Button } from 'react-bootstrap'
import añadirPersonaje from "../functions/añadirPersonaje"
function ModalEditar({
    isModalEditar,
    setIsModalEditar,
    actualizarHeroes,
    editarPersonaje, }) {
    function editarHeroeModal() {
        const nombre = document.getElementById("nombre").value
        const descripcion = document.getElementById("descripcion").value
        const foto = document.getElementById("foto").value
        const tipo = document.getElementById("tipo").value
        const condicion = document.getElementById("condicion").value
        const ciudad = document.getElementById("ciudad").value
        const poderes = document.getElementById("poderes").value
        const vehiculo = document.getElementById("vehiculo").value
        const id = document.getElementById("id").value
        //enviar info a fb
        const infoHeroe = { nombre, descripcion, foto, tipo, condicion, ciudad, poderes, vehiculo, id }
        añadirPersonaje(infoHeroe)
        //cerramos modal
        actualizarHeroes()
        setIsModalEditar(false)
    }
    const [heroesEstado, setHeroesEstado] = useState({ ...editarPersonaje, })
    return (

        <Modal show={isModalEditar} onHide={() => setIsModalEditar(false)}>

            <Modal.Header>
                <Modal.Title>Editar personaje</Modal.Title>

            </Modal.Header>
            <Modal.Body>
                <Form >
                    <Stack>
                        <Form.Control id="nombre" placeholder="Nombre" type="text" defaultValue={editarPersonaje.nombre} onChange={(e) => setHeroesEstado({ ...heroesEstado, nombre: e.target.value })} ></Form.Control>
                        <Form.Control id="descripcion" placeholder="descripcion" type="text" defaultValue={editarPersonaje.descripcion} onChange={(e) => setHeroesEstado({ ...heroesEstado, descripcion: e.target.value })} style={{ display: "none" }}></Form.Control>
                        <Form.Control id="foto" placeholder="Urlfoto" type="text" defaultValue={editarPersonaje.foto} onChange={(e) => setHeroesEstado({ ...heroesEstado, foto: e.target.value })} ></Form.Control>
                        <Form.Control id="tipo" placeholder="tipo" type="text" defaultValue={editarPersonaje.tipo} onChange={(e) => setHeroesEstado({ ...heroesEstado, tipo: e.target.value })} style={{ display: "none" }}></Form.Control>
                        <Form.Control id="condicion" placeholder="condicion" type="text" defaultValue={editarPersonaje.condicion} onChange={(e) => setHeroesEstado({ ...heroesEstado, condicion: e.target.value })} style={{ display: "none" }}></Form.Control>
                        <Form.Control id="ciudad" placeholder="ciudad" type="text" defaultValue={editarPersonaje.ciudad} onChange={(e) => setHeroesEstado({ ...heroesEstado, ciudad: e.target.value })}></Form.Control>
                        <Form.Control id="poderes" placeholder="poderes" type="text" defaultValue={editarPersonaje.poderes} onChange={(e) => setHeroesEstado({ ...heroesEstado, poderes: e.target.value })} style={{ display: "none" }}></Form.Control>
                        <Form.Control id="vehiculo" placeholder="vehiculo" type="text" defaultValue={editarPersonaje.vehiculo} onChange={(e) => setHeroesEstado({ ...heroesEstado, vehiculo: e.target.value })} style={{ display: "none" }}></Form.Control>
                        <Form.Control id="id" placeholder="id" type="text" value={editarPersonaje.id} onChange={(e) => setHeroesEstado({ ...heroesEstado, id: e.target.value })} readOnly style={{ display: "none" }}></Form.Control>


                    </Stack>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => setIsModalEditar(false)} variant="danger">cancelar</Button>
                <Button onClick={editarHeroeModal}>Editar</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalEditar