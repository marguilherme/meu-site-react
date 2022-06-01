import axios from "axios";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { CardComponent } from "../components/card.tsx";

export const HomePage = () => {
    const [repos, setRepos] = useState([])
    async function getData () {
        const response = await axios.get("https://api.github.com/users/marguilherme/repos")
        setRepos(response.data)
    }
    useEffect(() => {
        getData()
    })
    return (
        <>
            <h1>Meus repositórios</h1>
            <Row>
            {
                repos.map((repo, index) => <CardComponent repo={repo} key={index} />)
            }
            </Row>
        </>
    );
}