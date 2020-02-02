import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardBody
} from 'reactstrap';

export default function LocationCard(props) {
  return (
    <div className="grid-view">
      <Card>
        <CardBody style={{borderRadius: "5%", backgroundColor:"black"}}>
          <Card style={{backgroundColor: "purple"}}>
            <CardTitle>Name: {props.loc.name}</CardTitle>
            <CardTitle>ID: {props.loc.id}</CardTitle>
            <CardText>Type:{props.loc.type}</CardText>
            <CardText>Dimension: {props.loc.dimension}</CardText>
            {/* <CardText>{props.loc.residents}</CardText> */}
          </Card>
        </CardBody>
      </Card>
    </div>
    )
}
