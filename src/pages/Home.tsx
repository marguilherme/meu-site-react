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
            <div className="container1">
                <div className="texto-container1">
                <h1 className="msg-boas-vindas">Boas-Vindas!</h1>
                <p>
                    Este é um site que está sendo desenvolvido por Marcos Guilhermes,<br/>está sendo desenvolvido usando as tecnoligas React Typescript
                    </p>
                </div>
            </div>
            <div className="container2">
                <h2>Meus Projetos</h2>
                <Row>
                {
                    repos.map((repo, index) => <CardComponent repo={repo} key={index} />)
                }
                </Row>
            </div>
        </>
    );
};