import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardBody
} from 'reactstrap';


export default function CharacterCard(props) {
  return (
    <div className="grid-view">
      <Card>
        <CardBody style={{borderRadius: "5%", backgroundColor:"black"}}>
          <Card style={{backgroundColor: "lightgreen"}}>
            <CardTitle>{props.char.name}</CardTitle>
            <CardImg src={props.char.image} />
            <CardText>Name: {props.char.name}</CardText>
            <CardText>Gender: {props.char.gender}</CardText>
            <CardText>Status: {props.char.status}</CardText>
            <CardText>Species: {props.char.species}</CardText>
          </Card>
        </CardBody>
      </Card>
    </div>
    
    )
}
