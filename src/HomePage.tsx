import { Col, Container } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Button from 'react-bootstrap/Button';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleDash = (e: React.MouseEvent<HTMLButtonElement>) =>{
      e.preventDefault();
      navigate('/dashboard');
    };

  return (
    <Container>
        <Col>
          <h1>Welcome to the Task Manager Application</h1>
          <LoginButton />
          <LogoutButton />
          <Button onClick={handleDash} className="btn btn-md mx-2" variant="secondary">
            Task Manager Dashboard
          </Button>
        </Col>
    </Container>
  );
};

export default HomePage;