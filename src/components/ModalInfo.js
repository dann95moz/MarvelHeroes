import { Modal } from 'react-bootstrap'
import { CustomModal } from '../styles/Cards'
import { BackNClose, ModalContainer } from '../styles/modalInfoStyle'
function ModalInfo({
    isModalInfo,
    setIsModalInfo,
    editarPersonaje, }) {

    return (

        <CustomModal show={isModalInfo} onHide={() => setIsModalInfo(false)}>


            <Modal.Body
                style={{
                    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 41.15%, #000000 100%), url(${editarPersonaje.foto})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: "600px",
                }}>

                <BackNClose
                    onClick={() => setIsModalInfo(false)}>
                    <img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1650207715/Vector_1_sxaw7x.svg" alt="" height="12" width="20" />


                </BackNClose>
                <ModalContainer>
                    <h5>{editarPersonaje.tipo}</h5>
                    <h1>{editarPersonaje.nombre}</h1>
                    <h5>{editarPersonaje.descripcion}</h5>
                    <h4>Ciudad de operacion:</h4>
                    <h5>{editarPersonaje.ciudad}</h5>
                    <h4>Condición:</h4>
                    <h5>{editarPersonaje.condicion}</h5>
                    <h4>Super poder:</h4>
                    <h5>{editarPersonaje.poderes}</h5>
                    <h4>Vehículo:</h4>
                    <h5>{editarPersonaje.vehiculo}</h5>

                </ModalContainer>

            </Modal.Body>



        </CustomModal>
    )
}

export default ModalInfo