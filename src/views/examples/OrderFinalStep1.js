import React from "react";
import { Button, Col, FormGroup, Input, Label, Row, Table } from "reactstrap";

const OrderFinalStep1 = ({
  nextStep,
  prevStep,
  values,
  handleChange,
  validation,
}) => {
  const { address, bedroom, bathroom, description } = values;

  return (
    <div className="container mt-5">
      <div className="mt-5 text-center">
        <Row style={{marginTop: "5%", textAlign: "center", color: "black"}}>
          <Col md="12" sm="7" style={{marginTop:"2%"}}>
            <Table responsive striped>
              <thead>
                <tr>
                  <th className="text-center">#</th>
                  <th />
                  <th className="text-center">Address</th>
                  <th className="text-center">City</th>
                  <th className="text-center">State</th>
                  <th className="text-center">Country</th>
                  <th className="text-center">Postal Code</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">1</td>
                  <td>
                    <FormGroup check>
                      <Label check>
                        <Input
                          defaultValue=""
                          type="checkbox"
                        />
                        <span className="form-check-sign" />
                      </Label>
                    </FormGroup>
                  </td>
                  <td className="text-center">Address 1</td>
                  <td className="text-center">Mazraa</td>
                  <td className="text-center">Beirut</td>
                  <td className="text-center">Lebanon</td>
                  <td className="text-center">111</td>
                </tr>
                <tr>
                  <td className="text-center">2</td>
                  <td>
                    <FormGroup check>
                      <Label check>
                        <Input
                          defaultValue=""
                          type="checkbox"
                        />
                          <span className="form-check-sign" />
                      </Label>
                    </FormGroup>
                  </td>
                  <td className="text-center">Address 2</td>
                  <td className="text-center">Hamra</td>
                  <td className="text-center">Beirut</td>
                  <td className="text-center">Lebanon</td>
                  <td className="text-center">111</td>
                </tr>
              </tbody>
            </Table>
          </Col>
      </Row>
      <Row className="buttons-row">
        <Col md="3" sm="3">
          <Button
            block
            className="btn-round"
            color="danger"
            type="submit"
            href="/settings"
          >
            New Address
          </Button>
        </Col>
      </Row>
      <Row className="buttons-row">
        <Col md="6" sm="6">
          <Button
            block
            className="btn-round"
            onClick={nextStep}
            color="primary"
            type="submit"
            style={{marginTop: "15%", marginLeft: "50%"}}
          > 
            Next
          </Button>
        </Col>
      </Row>
        
      </div>
    </div>
  );
};

export default OrderFinalStep1;
