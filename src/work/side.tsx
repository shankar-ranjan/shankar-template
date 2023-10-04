import React from 'react';
import logo from './logo.svg';
import '../App.css';
import { Button, Col, Row } from 'antd';
import { Container } from 'react-bootstrap';
import { Input } from 'antd';
import { FilterFilled, SearchOutlined } from '@ant-design/icons';

// export const BidCardsSection = () => {

const Side = () => {
    function activateLasers(): void {
        throw new Error("Function not implemented.");
    }
    return (

        <>
            {/* <Container>
                <Row>
                    <Col>1 of 1</Col>
                    <Col>kfdgndfkg</Col>
                </Row>
            </Container> */}

            <Row>
                <h5 className='manage'>Manage • Contact</h5>
            </Row>
            <Row className='contact-line'>
                <h3 className='Manage-contacts '>Manage contacts</h3>

            </Row>

            <Row className='search-button buttom-line'>
                <Col span={8}>
                    <Input placeholder="Search Name or Contact Type…" className='search' suffix={<SearchOutlined className='icon' />} />
                </Col>
                <Col>
                    <Button className="button" onClick={activateLasers} >
                        <FilterFilled className='icon-filter' />
                        FILTER
                    </Button>
                </Col>



            </Row>


        </>
    );
}

export default Side;
