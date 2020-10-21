import React, { useContext, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ListItems from './listItems';
import ListGroup from 'react-bootstrap/ListGroup'
import { SettingsContext } from '../../context/settings';

function TodoList(props) {
  const settingsContext = useContext(SettingsContext);
  const [render, setRender] = useState({ numberOfPagesArr: [], listArr: [] });
  const [shownItems, setShownItems] = useState({ listArr: [] })
  // useEffect(() => {
  //   let settings = { ...settingsContext.value }
  //   let listArr = [...props.list];
  //   if (settings.completedTasks === 'false') listArr.filter((val) => { if (!val.complete) return val });
  //   listArr.sort((a, b) => b.difficulty - a.difficulty);
  //   if (settings.sort === "descending") listArr.reverse();
  //   let numberOfPages;
  //   let numberOfPagesArr = [];
  //   numberOfPages = Math.ceil(listArr.length / settings.numberOfItems);
  //   numberOfPagesArr = [];
  //   for (let i = 0; i < numberOfPages; i++) {
  //     numberOfPagesArr[i] = i;
  //   }
  //   setRender({ numberOfPagesArr, listArr })
  //   console.log('render.listArr', listArr)
  // }, []);
  useEffect(() => {
    let settings = { ...settingsContext.value }
    let listArr = [...props.list];
    if (settings.completedTasks === 'false') listArr = [...listArr.filter((val) => { return !val.complete })];
    listArr.sort((a, b) => b.difficulty - a.difficulty);
    if (settings.sort !== "descending") listArr.reverse();
    let numberOfPages = Math.ceil(listArr.length / Number(settings.numberOfItems));
    let numberOfPagesArr = [];
    for (let i = 0; i < numberOfPages; i++) {
      numberOfPagesArr[i] = i;
    }
    console.log(
      `Number(settings.numberOfItems)`, Number(settings.numberOfItems),
      'numberOfPagesArr', numberOfPagesArr,
    )

    setRender({ numberOfPagesArr, listArr })
    let limitedListArr = [];
    for (let i = 0; i < listArr.length && i < Number(settings.numberOfItems); i++) {
      limitedListArr[i] = listArr[i];
    }
    setShownItems({ listArr: limitedListArr });
  }, [props.list, settingsContext]);
  function _handleOnClick(event) {
    // i < listArr.length && i <
    let limitedListArr = [];
    for (let i = 0; i < document.getElementsByClassName('itemsListGroup').length; i++) {
      document.getElementsByClassName('itemsListGroup')[i].innerHTML = '';
    }
    console.log('event.target.key', event.target.value)
    try {
      for (let i = 0, j = (event.target.value - 1) * Number(settingsContext.value.numberOfItems); i < Number(settingsContext.value.numberOfItems); i++) {
        limitedListArr[i] = render.listArr[j];
      }
    } catch (error) {

    }
    console.log('limitedListArr', limitedListArr)
    setShownItems({ listArr: limitedListArr });
  }
  /* 
  completedTasks: "true"
  ​
  numberOfItems: "374"
  ​
  sort: "descending"
  */


  return (
    <>
      <ListItems listArr={shownItems.listArr} />
      <Container>
        <Row >
          {render.numberOfPagesArr.map((val, indx) => <Button onClick={_handleOnClick} className="m-2" value={indx + 1} key={indx + 1}> {indx + 1}</Button>)}
        </Row>
      </Container>
    </>

  );
}

export default TodoList;
