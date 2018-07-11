import React, { Component } from "react";

import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";

import styled from "styled-components";
import Slider from "../Slider";

const Repair = styled.div`
  color: #ffffff;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  span {
    display: block;
    font-size: 24px;
    line-heigh: 30px;
  }
`;

const LightText = styled.div`
  color: #ffffff;
  font-size: 18px;
  font-weight: 300;
  line-height: 28px;
  margin-top: 54px;
`;

const CallBtn = styled.button`
  width: 247px;
  height: 67px;
  background-color: #ffa14b;
  border-radius: 35px;
  color: #ffffff;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  margin-top: 32px;
  border: 2px solid #ffa14b;
  transition: all 0.2s;
  &:hover {
    color: #ffa14b;
    border: 2px solid #ffa14b;
    background-color: #fff;
  }
`;

export default class Main extends Component {
  render() {
    return (
      <Row>
        <Col lg={5}>
          <Repair>
            Качественный ремонт
            <span> iphone за 35 минут и гарантия 1 год </span>
          </Repair>
          <LightText>
            Оставьте заявку на бесплатную диагностику без очереди, и получите
            защитное стекло, стоимостью 1000 рублей, с установкой в подарок!
          </LightText>
          <CallBtn>Отправить заявку!</CallBtn>
        </Col>
        <Col lg={6} lgOffset={1}>
          <Slider />
        </Col>
      </Row>
    );
  }
}
