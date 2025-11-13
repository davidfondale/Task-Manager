import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';          
import { useTaskContext } from '../models/Context';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Dashboard(){
  const { tasks, dispatch } = useTaskContext();
  const navigate = useNavigate();

  const handleDetails = (index: number, e: React.MouseEvent<HTMLButtonElement>)=> {
      e.preventDefault(); 
      dispatch({type: "INDEX", payload: index})
      navigate("/tasks/details");
    };

  const handleNew = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/tasks/new")
  }

  const handleHome = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/")
  }

  return(

      <div>
        <Button onClick={handleNew} className= "btn, btn-lg, m-2" variant="success">
          Add a New Task
        </Button>
        <Button onClick={handleHome} className= "btn, btn-lg, m-4" variant="secondary">
          Back to Home Page
        </Button>
        <Row className="g-0 m-4">
          <h2>Current Task List:</h2>
          {tasks.map((task, j) => (
            <Col key= {task.id} xs={12} className="mt-1">
              <Card style={{ height: '5rem'}} >
                <Card.Body>
                  <Row>
                    <Col>
                      <h3>{j+1}. {task.title}</h3>
                    </Col>
                    <Col xs="auto">
                      <Button onClick={(e)=>handleDetails(task.id, e)} >
                        Details
                      </Button>
                    </Col>
                  </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>  
    </div>
  )
}

export default Dashboard;