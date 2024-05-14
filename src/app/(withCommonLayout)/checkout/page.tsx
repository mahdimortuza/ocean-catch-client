"use client";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { Button, Col, Form, Input, Row } from "antd";

const CheckoutPage = () => {
  return (
    <Container>
      <SectionTitle title="Please fill" highlight="the form below" link="" />

      <Form className="py-10">
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <Form.Item
              label="Full Name"
              name="fullName"
              rules={[
                { required: true, message: "Please enter your full name" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please enter your email" }]}
            >
              <Input type="email" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <Form.Item
              label="Phone Number"
              name="phone"
              rules={[
                { required: true, message: "Please enter your phone number" },
              ]}
            >
              <Input type="tel" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: true, message: "Please enter your address" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <Form.Item
              label="Road"
              name="road"
              rules={[{ required: true, message: "Please enter your road" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              label="House Number"
              name="houseNo"
              rules={[
                { required: true, message: "Please enter your house number" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default CheckoutPage;
