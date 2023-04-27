import { useContext, useRef } from "react";
import { cartContext } from "../store/cartContext";
import FloatingLable from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
const SellerForm = () => {
  const { addItemToCart } = useContext(cartContext);
  const tshiretref = useRef(null);
  const decref = useRef(null);
  const priceref = useRef(null);
  const largerref = useRef(null);
  const medref = useRef(null);
  const smallref = useRef(null);

  const handledAdd = () => {
    addItemToCart(
      tshiretref.current.value,
      decref.current.value,
      priceref.current.value,
      largerref.current.value,
      medref.current.value,
      smallref.current.value
    );
  };
  return (
    <>
      <Row style={{ padding: "1rem" }}>
        <Col md>
          <FloatingLable
            controlId="floatingInput"
            label="Tshirtname"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="name@example.com"
              ref={tshiretref}
            />
          </FloatingLable>
        </Col>

        <Col md>
          <FloatingLable controlId="floatingInput" label="description">
            <Form.Control type="text" placeholder="description" ref={decref} />
          </FloatingLable>
        </Col>

        <Col md>
          <FloatingLable controlId="floatingInput" label="price">
            <Form.Control type="number" placeholder="price" ref={priceref} />
          </FloatingLable>
        </Col>

        <Col md>
          <FloatingLable controlId="floatingInput" label="Large">
            <Form.Control type="number" placeholder="Large" ref={largerref} />
          </FloatingLable>
        </Col>

        <Col md>
          <FloatingLable controlId="floatingInput" label="median">
            <Form.Control type="number" placeholder="Median" ref={medref} />
          </FloatingLable>
        </Col>

        <Col md>
          <FloatingLable controlId="floatingInput" label="small">
            <Form.Control type="number" placeholder="small" ref={smallref} />
          </FloatingLable>
        </Col>
        <Button variant="success" onClick={handledAdd}>
          Add
        </Button>
      </Row>
    </>
  );
};

export default SellerForm;
