import React, { useEffect, useState } from 'react';
import TodoForm from './form';
import TodoList from './list';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import './todo.scss';

function ToDo(props) {

  const [list, setList] = useState([]);

  const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setList([...list, item]);
  };

  const toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let listArr = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(listArr);
    }

  };

  useEffect(() => {
    let listArr = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A' },
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A' },
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B' },
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C' },
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B' },
    ];

    setList(listArr);
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col>
          </Col>
        </Row>
      </Container>
      <section className="todo">
        <Container className="board-color" >
          <Row className=' p-3 mb-3 bg-dark text-white '>
            <Col>
              <h2>
                There are  <Badge pill variant={list.filter(item => !item.complete).length ? "success" : "danger"}> {list.filter(item => !item.complete).length} </Badge> Items To Complete
                </h2>
            </Col>
          </Row>
          <Row className="pl-3 pr-3">
            <Col md={4} className="p-sm-0">
              <TodoForm handleSubmit={addItem} />
            </Col>
            <Col md={8} className="justify-content-center p-sm-0 pl-md-5">
              <TodoList
                list={list}
                handleComplete={toggleComplete}
              />
            </Col>
          </Row>
        </Container>
      </section>


    </>
  );
}

export default ToDo;
