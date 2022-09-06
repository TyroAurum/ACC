import React from "react";
import {Card,
    CardBody,
    CardSubtitle,
    CardText,
    CardTitle} from 'reactstrap';

const CollegeCard = ({college:{Name,Location,Src,Content}}) => {
    return(
            <Card
            body
            color="light"
            outline
            style={{
                width: '18rem'
            }}
            >
            <img
                alt={Name}
                src={Src}
            />
            <CardBody>
                <CardTitle tag="h5">
                {Name}
                </CardTitle>
                <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
                >
                {Location}
                </CardSubtitle>
                <CardText>
                {Content}
                </CardText>
            </CardBody>
            </Card>
    )
}

export default CollegeCard ;