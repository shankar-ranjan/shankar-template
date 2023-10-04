import { CaretDownOutlined, DashOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import { Image } from 'antd';

export const Design = () => {
    return (
        <>
            <Row>
                <Col >
                    <Card >
                        <Row>
                            <Col>
                                <Image
                                    width={50}
                                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                />
                            </Col>
                            <Col className="img-left-text">
                                <h5 className="neeraj">Neeraj Sharma</h5>
                                <h5 className="project">Project Manger</h5>
                            </Col>
                            <Col>
                                <DashOutlined />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h6>PHONE NO:</h6>
                                <h6>+91 1234567890</h6>
                            </Col>
                            <Col>
                                <h6>CONTACT TYPE</h6>
                                <h6>Individual</h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h6>EMAIL</h6>
                                <h6>neeraj@cyclops.com</h6>
                            </Col>
                            <Col>
                                <h6>ROLE</h6>
                                <h6>Employee</h6><CaretDownOutlined />
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </>
    );
}