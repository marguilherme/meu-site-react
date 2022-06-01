import {Card} from 'react-bootstrap';

type Repository = {
    repo: {
        name: string
        login: string
        html_url: string
    };
};

export const CardComponent: React.FC<Repository> = ({ repo }) => {
    return(
        <Card className="col-12 m10">
        <Card.Body>
            <Card.Title>{repo.name}</Card.Title>
            <Card.Link href={repo.html_url} target="_blank">Card Link</Card.Link>
        </Card.Body>
        </Card>
    );
};