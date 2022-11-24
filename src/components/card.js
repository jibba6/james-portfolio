import {Card, CardBody, CardTitle, CardText,Button} from "reactstrap"
const CardContainer = (props) => {
    return (
        <Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src="https://picsum.photos/300/200"
  />
  <CardBody>
    <CardTitle tag="h5">
      {props.title}
    </CardTitle>
   
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
    <Button>
      live site
    </Button>
    <Button>
     code site
    </Button>
  </CardBody>
</Card>
    )
}
export default CardContainer