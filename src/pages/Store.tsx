import { Col, Row } from "react-bootstrap";
import { StoreItems } from "../component/StoreItems";
import storeItems from "../data/items.json";
export function Store() {
  return (
    <>
      <h1>Store</h1>
      <Row xm={1} md={2} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItems {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
