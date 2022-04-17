import { Modal, Stack, Form, Button } from 'react-bootstrap'
import añadirPersonaje from "../functions/añadirPersonaje"
function ModalAñadir({ isModalAñadir, setIsModalAñadir, actualizarHeroes }) {
    const id = Math.floor(Math.random() * 100000) + 1;
    function añadirHeroeModal() {
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
        setIsModalAñadir(false)
    }
    return (

        <Modal
            show={isModalAñadir}
            onHide={() => setIsModalAñadir(false)}>
            {console.log(isModalAñadir)}
            <Modal.Header>
                <Modal.Title>Añadir personaje</Modal.Title>

            </Modal.Header>
            <Modal.Body>
                <Form >
                    <Stack>
                        <Form.Control id="nombre" placeholder="Nombre" type="text"></Form.Control>
                        <Form.Control id="descripcion" placeholder="descripcion" type="text"></Form.Control>
                        <Form.Control id="foto" placeholder="Urlfoto" type="text"></Form.Control>
                        <Form.Control id="tipo" placeholder="tipo" type="text"></Form.Control>
                        <Form.Control id="condicion" placeholder="condicion" type="text"></Form.Control>
                        <Form.Control id="ciudad" placeholder="ciudad" type="text"></Form.Control>
                        <Form.Control id="poderes" placeholder="poderes" type="text"></Form.Control>
                        <Form.Control id="vehiculo" placeholder="vehiculo" type="text"></Form.Control>
                        <Form.Control id="id" placeholder="id" type="text" value={id} readOnly ></Form.Control>


                    </Stack>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => setIsModalAñadir(false)}>cancelar</Button>
                <Button onClick={añadirHeroeModal}>Añadir</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalAñadir