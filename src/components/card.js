import {Card, CardBody, CardTitle, CardText,Button} from "reactstrap"
const CardContainer = (props) => {
    return (
        <Card
  style={{
    width: '18rem'
  }}
>
 
  <CardBody>
    <CardTitle tag="h5">
      {props.title}
    </CardTitle>
   
    <CardText>
    Portfolio Works
    </CardText>
    <a href={props.live}>
    <Button>
      live site
    </Button>
    </a>
    <a href={props.github}>
    <Button>
     code site
    </Button>
    </a>
  </CardBody>
</Card>
    )
}
export default CardContainer