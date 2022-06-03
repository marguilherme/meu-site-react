import axios from "axios";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { CardComponent } from "../components/card.tsx";
import './pages.css';

export const HomePage = () => {
    const [repos, setRepos] = useState([])
    async function getData () {
        const response = await axios.get("https://api.github.com/users/marguilherme/repos")
        setRepos(response.data);
    };
    useEffect(() => {
        getData();
    });
    return (
        <>
            <div id="background1" className="container1">
                <div className="texto-container1">
                <h1 className="titulo">Bem-Vindo!</h1>
                <h2 className="mensagem">
                    Este site é um projeto realizado durante o Intlab, desenvolvido por Marcos Guilherme utilizando as tecnologias React e Ts
                </h2>
                </div>
            </div>
            
            <div id="background2" className="container2">
                <h2 className="titulo projeto-texto" >Meus Projetos</h2>
                <div className="projetos">
                    <Row xs={1} md={3} className="g-4">
                    {
                        repos.map((repo, index) => <CardComponent repo={repo} key={index} />)
                    }
                    </Row>
                </div>
            </div>
        </>
    );
};