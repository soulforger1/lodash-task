import React from "react";
import { Row, Col, Stack } from "react-bootstrap";
import logo from "../assets/icon/teamWhite.svg";
import Facebook from "../assets/icon/Facebook.svg";
import Instagram from "../assets/icon/Instagram.svg";
import Twitter from "../assets/icon/Twitter.svg";

export const Footer = () => {
  return (
    <div style={{ backgroundColor: "#252B3B" }} className="p-5 mt-5">
      <Row>
        <Col></Col>
        <Col xs={1}>
          <Stack gap={3}>
            <img src={logo} alt="" color="white" />
            <Stack direction="horizontal" gap={2}>
              <img src={Facebook} alt="" color="white" width={"20px"} />
              <div className="text-white">Facebook</div>
            </Stack>
            <Stack direction="horizontal" gap={2}>
              <img src={Instagram} alt="" color="white" width={"20px"} />
              <div className="text-white">Instagram</div>
            </Stack>
            <Stack direction="horizontal" gap={2}>
              <img src={Twitter} alt="" color="white" width={"20px"} />
              <div className="text-white"> Twitter</div>
            </Stack>
            <Stack direction="horizontal" gap={2}>
              <img src={Facebook} alt="" color="white" width={"20px"} />
              <div className="text-white">Facebook</div>
            </Stack>
            <Stack direction="horizontal" gap={2}>
              <img src={Instagram} alt="" color="white" width={"20px"} />
              <div className="text-white">Instagram</div>
            </Stack>
            <Stack direction="horizontal" gap={2}>
              <img src={Twitter} alt="" color="white" width={"20px"} />
              <div className="text-white"> Twitter</div>
            </Stack>
          </Stack>
        </Col>
        <Col></Col>
        <Col xs={2}>
          <Stack gap={4}>
            <div className="fw-bold text-white">Use Cases</div>
            <Stack gap={3}>
              <div className="text-white"> UI Design</div>
              <div className="text-white">UX Design</div>
              <div className="text-white"> Prototyping</div>
              <div className="text-white"> UI Design</div>
              <div className="text-white">UX Design</div>
              <div className="text-white"> Prototyping</div>
            </Stack>
          </Stack>
        </Col>
        <Col xs={2}>
          <Stack gap={4}>
            <div className="fw-bold text-white">Explore</div>
            <Stack gap={3}>
              <div className="text-white"> Figma</div>
              <div className="text-white">Customers</div>
              <div className="text-white"> Why I Love Figma</div>
              <div className="text-white"> Figma</div>
              <div className="text-white">Customers</div>
              <div className="text-white"> Why I Love Figma</div>
            </Stack>
          </Stack>
        </Col>
        <Col xs={2}>
          <Stack gap={4}>
            <div className="fw-bold text-white">Resources</div>
            <Stack gap={3}>
              <div className="text-white"> Community Resources Hub</div>
              <div className="text-white">Support</div>
              <div className="text-white"> Education</div>
              <div className="text-white"> Community Resources Hub</div>
              <div className="text-white">Support</div>
              <div className="text-white"> Education</div>
            </Stack>
          </Stack>
        </Col>
        <Col xs={2}>
          <Stack gap={3}>
            <h6 className="text-white">Subscribe to our newsletter</h6>
            <Stack direction="horizontal" style={{ width: "320px" }} gap={2}>
              <div className="d-flex align-items-center pe-4 border rounded bg-white">
                <input
                  className="ps-4"
                  type="text"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon2"
                  placeholdercolor="red"
                  style={{
                    width: "100%",
                    height: "60px",
                    boxShadow: "none",
                    border: 0,
                  }}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#4DA0FD"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </div>
            </Stack>
          </Stack>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};
