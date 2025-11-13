//import { useState } from 'react';
//import { useEffect } from 'react';
//import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';          
//import Alert from 'react-bootstrap/Alert';
import type { Task } from "../models/Task";
import { useTaskContext } from "../models/Context";
import { useNavigate } from 'react-router-dom';
//import styles from './styles.css';

function Details() {

    const { tasks, i } = useTaskContext();
    const { dispatch } = useTaskContext();
    const detailTask: Task = tasks.find(t=>t.id === i);
    const navigate = useNavigate();

    const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) =>{
      e.preventDefault();
      navigate("/tasks/edit");
    };

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) =>{
      e.preventDefault();
      dispatch({type: "REMOVE", payload: detailTask.id});
      navigate("/dashboard");
    };

    const handleBack = (e: React.MouseEvent<HTMLButtonElement>) =>{
      e.preventDefault();
      navigate('/dashboard');
    };

    const handleHome = (e: React.MouseEvent<HTMLButtonElement>) =>{
      e.preventDefault();
      navigate('/');
    };

    return (
      <div className="container border border-secondary border-1 rounded-5 p-4 mt-5 mx-300">
        <div>
          <span style={{ display: 'inline-block', marginRight: '10px' }}>
            <h2>Task Details:</h2>
          </span>
          <span style={{ display: 'inline-block'}}>
            <h2>{detailTask.title}</h2>
          </span>
        </div>
        <Row>
          <Col>
            <h4>Task Created on: {detailTask.created}</h4>
          </Col>
          <Col>
            <h4>Expected Duration: {detailTask.duration} days</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Task Priority Level: {detailTask.priority}</h4>
          </Col>
          <Col>
            <h4>Current Status: {detailTask.status}</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Task Category: {detailTask.category}</h4>
          </Col>
          <Col>
            <span style={{ display: 'inline-block', marginRight: '10px' }}>
              <h4>Comments:</h4>
            </span>
            <span style={{ display: 'inline-block'}}>
              <h5>{detailTask.info}</h5>
            </span>
          </Col>
        </Row>
        <Button onClick={handleEdit} className="btn btn-lg mt-5" variant="primary" >
          Edit
        </Button>
        <Button onClick={handleDelete} className="btn btn-lg mx-5 mt-5" variant="danger">
          Delete
        </Button>
        <Button onClick={handleBack} className="btn btn-lg mx-5 mt-5" variant="secondary">
          Back
        </Button>
        <Button onClick={handleHome} className="btn btn-lg mx-2 mt-5" variant="dark">
          Back to Home Page
        </Button>
      </div>
    );
};

export default Details;