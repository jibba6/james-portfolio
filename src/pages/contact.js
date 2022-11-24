import {Form,
Row,
Col,
FormGroup,
Label,
Input,
Button,
} from "reactstrap" 
function Contact () {
    
    return (
        <div>
            <Form>
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="exampleEmail">
          Email
        </Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="with a placeholder"
          type="email"
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="name">
          Name
        </Label>
        <Input
          id="name"
          name="name"
        />
      </FormGroup>
    </Col>
  </Row>
  <FormGroup>
    <Label for="message">
      Message
    </Label>
    <Input
      id="message"
      name="message"
      type="textarea"
    />
  </FormGroup>
 
  <Button>
    Submit
  </Button>
</Form>
        </div>
    )
};
export default Contact