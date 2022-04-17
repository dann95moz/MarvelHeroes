import React, { useEffect, useState } from 'react'
import { Stack, Form } from "react-bootstrap"
import { Link } from 'react-router-dom'
import eliminarPersonaje from '../functions/eliminarPersonaje'
import filtrarDatos from '../functions/filtrarDatos'
import getAllHeroes from '../functions/getAllHeroes'
import { CustomButton, Card, ButtonsContainer, Tipo, H3Tipo, H3Ciudad, H1Nombre, CustomInput, Title, Search, SearchButton, ClearButton, Container, Header, AddChar, CustomForm } from '../styles/Cards'
import ModalAñadir from './ModalAñadir'
import ModalEditar from './ModalEditar'
import ModalInfo from './ModalInfo'

const Home = () => {

    const [heroes, setHeroes] = useState([]);
    const [isModalAñadir, setIsModalAñadir] = useState(false);
    const [isModalEditar, setIsModalEditar] = useState(false);
    const [isModalInfo, setIsModalInfo] = useState(false);
    const [editarPersonaje, setEditarPersonaje] = useState({});


    async function busquedaFormHandler(e) {
        e.preventDefault();
        const busqueda = e.target.busqueda.value;
        const nuevosHeroes = await filtrarDatos(busqueda)
        setHeroes(nuevosHeroes)
    }
    function actualizarHeroes() {
        getAllHeroes().then((heroes) => {
            setHeroes(heroes);
        });
    }
    function añadirPersonaje() {
        setIsModalAñadir(true);

    }
    useEffect(() => {
        actualizarHeroes()
    }, []);


    if (heroes === undefined) {
        console.log("no hay heroes");

        document.getElementById("e404").click();

    }


    return (
        <div >
            <Link to="/404" id="e404" style={{ display: 'none' }}></Link>
            <center>
                <img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1650149016/e42b72121ac11b1997e99977b21daf2a_dfakmx.jpg" alt="" height="100px" />
            </center>
            <ModalAñadir
                isModalAñadir={isModalAñadir}
                setIsModalAñadir={setIsModalAñadir}
                actualizarHeroes={actualizarHeroes}
            />
            {editarPersonaje && (<ModalEditar
                isModalEditar={isModalEditar}
                setIsModalEditar={setIsModalEditar}
                actualizarHeroes={actualizarHeroes}
                editarPersonaje={editarPersonaje}
            />)}
            <ModalInfo
                isModalInfo={isModalInfo}
                setIsModalInfo={setIsModalInfo}
                actualizarHeroes={actualizarHeroes}
                editarPersonaje={editarPersonaje}
            />
            <center>
                <CustomForm onSubmit={busquedaFormHandler}>
                    <Stack direction="horizontal">

                        <Form.Group controlId="busqueda" className='w-75 m-3'>

                            <Search>
                                <CustomInput type="text" placeholder="buscar por nombre o lugar de operacion"
                                />

                                <SearchButton type="submit" > <img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1650149637/Vector_oqe5nd.svg" alt="" /></SearchButton>
                                <ClearButton variant="danger" onClick={() => {
                                    const input = document.getElementById("busqueda");
                                    input.value = ""
                                    actualizarHeroes()
                                }}>Limpiar</ClearButton>

                            </Search>


                        </Form.Group>

                    </Stack>
                </CustomForm>
            </center>

            <Header>
                <Title>Personajes</Title>
                <AddChar onClick={(añadirPersonaje)}>Añadir Personaje</AddChar>
            </Header>
            <Container>
                {heroes && heroes.map((heroes, index) => (
                    <Card key={index}


                        style={{
                            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 41.15%, #000000 100%), url(${heroes.foto})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",

                        }}>
                        <Tipo>
                            <H3Tipo onClick={() => {
                                setEditarPersonaje(heroes);
                                setIsModalInfo(true);
                            }}>{heroes.tipo}
                            </H3Tipo>
                        </Tipo>
                        <H3Ciudad
                            onClick={() => {
                                setEditarPersonaje(heroes);
                                setIsModalInfo(true);
                            }}>{heroes.ciudad}
                        </H3Ciudad>
                        <H1Nombre
                            onClick={() => {
                                setEditarPersonaje(heroes);
                                setIsModalInfo(true);
                            }}> {heroes.nombre}
                        </H1Nombre>

                        <ButtonsContainer>
                            <CustomButton onClick={() => {
                                eliminarPersonaje(heroes).then(() => {
                                    actualizarHeroes();
                                });

                            }}><img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1650143299/Vector_ui0wly.svg" alt="" />
                            </CustomButton>
                            <CustomButton onClick={() => {
                                setEditarPersonaje(heroes);
                                setIsModalEditar(true)
                            }}><img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1650143299/Vector-1_divrku.svg" alt="" />
                            </CustomButton>

                        </ButtonsContainer>

                    </Card>

                ))}



            </Container>



        </div>
    )
}

export default Home