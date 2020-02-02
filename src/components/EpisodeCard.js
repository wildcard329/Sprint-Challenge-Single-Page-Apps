import React from 'react';
import {
    Card,
    CardTitle,
    CardText,
    CardBody
} from 'reactstrap';

export default function EpisodeCard(props) {
    return (
        <div className="gridview">
            <Card>
                <CardBody>
                    <Card>
                        <CardTitle>Episode Name: {props.episode.name}</CardTitle>
                        <CardText>Episode ID: {props.episode.id}</CardText>
                        <CardText>Episode Air Date: {props.episode.air_date}</CardText>
                        <CardText>Episode Creation: {props.episode.created}</CardText>
                    </Card>
                </CardBody>
            </Card>
        </div>
    )
}