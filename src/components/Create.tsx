import { useState } from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';          
import Alert from 'react-bootstrap/Alert'
import type { Task } from "../models/Task";
import { useTaskContext } from "../models/Context";
import { useNavigate } from 'react-router-dom';

function Create(){

const today: Date = new Date();
const mo: number = today.getMonth() + 1;
const day: number = today.getDate();
const yr: number = today.getFullYear();
const currentDate: string = `${mo}/${day}/${yr}`;

const {tasks} = useTaskContext();
const idNumber: number = tasks.length + 1;

const [taskItem, setTaskItem] = useState<Task>({
  id: idNumber,
  created: currentDate,
  title: "Task Title",
  info: "relevant information",
  status: "preliminary",
  category: "personal",
  priority: "normal",
  duration: 1,
});

useEffect(() => {
  const newId = tasks.length + 1;
  setTaskItem(prevItem => ({
    ...prevItem,
    id: newId,
  }));
}, [tasks]);

const [submitted, setSubmitted] = useState<boolean>(false);

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void =>{
  e.preventDefault();
  
  const {name, value} = e.target;

  setTaskItem(prevItem => ({
    ...prevItem,
    [name]: value}));
};

const validated:boolean = true;
const { dispatch } = useTaskContext();

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
  e.preventDefault();
  dispatch({type: "NEW", payload: taskItem});
  setSubmitted(true);
};

const navigate = useNavigate();

const handleDone = () => {
  navigate('/dashboard');
}

return (
  <Container className="mt-5">
    {submitted && <Alert variant="success" dismissible>{taskItem.title} created successfully!</Alert>}

    <h2 className="mb-5">New Task</h2>

    <Form onSubmit={handleSubmit} noValidate validated={validated}>
      <Row>
        <Col md="5">
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Task ID"
              name="id"
              value={taskItem.id}
              readOnly
              required
            />
          </Form.Group>
        </Col>

        <Col md="7">
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Created</Form.Label>
            <Form.Control
              type="text"
              placeholder="Created Date"
              name="created"
              value={taskItem.created}
              readOnly
              required
            />
          </Form.Group>
        </Col>
          
      </Row>

      <Row>

        <Col md="5">
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Select
              name="category"
              value={taskItem.category}
              onChange={handleChange}
              required
            >
              <option value="personal">personal</option>
              <option value="business">business</option>
            </Form.Select>.
            <Form.Control.Feedback type="invalid">
              Please provide a task category
            </Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Col md="7">
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter a task title"
              name="title"
              value={taskItem.title}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a task title
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
          
      </Row>

      <Row>
        <Col md="5">
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Priority</Form.Label>
            <Form.Select
              name="priority"
              value={taskItem.priority}
              onChange={handleChange}
              required
            >
              <option value="low">low</option>
              <option value="normal">normal</option>
              <option value="normal">high</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide a task priority level
            </Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Col md="7">
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Select
              name="status"
              value={taskItem.status}
              onChange={handleChange}
              required
            >
              <option value="preliminary">preliminary</option>
              <option value="in progress">in progress</option>
              <option value="completed">completed</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide a task status
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md="5">
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Duration (days)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter a duration"
              name="duration"
              value={taskItem.duration}
              onChange={handleChange} />
          </Form.Group>
        </Col>

        <Col md="7">
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Information</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter task information"
              name="info"
              value={taskItem.info}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md="5">
          <Button variant="success" type="submit" className="mt-3">
            Submit
          </Button>
        </Col>
        <Col md="7">
          <Button onClick={ handleDone } variant="btn btn-primary" type="button" className="btn-block mt-3">
            Done
          </Button>
        </Col>
      </Row> 
    </Form>
  </Container>
);
}

export default Create;