import {Card, CardGroup, Col} from 'react-bootstrap';


type Repository = {
    repo: {
        name: string
        login: string
        html_url: string
    };
};

export const CardComponent: React.FC<Repository> = ({ repo }) => {
    return(
        <CardGroup>
            <Col>
                <Card border="info" className="col-12 m10 ">
                <Card.Body>
                    <Card.Title>{repo.name}</Card.Title>
                    <Card.Link href={repo.html_url} target="_blank">Ir Para o Projeto</Card.Link>
                </Card.Body>
                </Card>
            </Col>
        </CardGroup>
    );
};