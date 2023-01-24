import React from "react";
import styled from "styled-components";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
export default function Services() {
  const data = [
    {
      image: service1,
      title: "choose Destinstion",
      description: "twerfbnmcyui  fhgytf fweu7yffr fuiweffbc f",
    },
    {
      image: service2,
      title: "Explore The Place",
      description: "twerfbnmcyui  fhgytf fweu7yffr fuiweffbc f",
    },
    {
      image: service3,
      title: "Start Your Journey",
      description: "twerfbnmcyui  fhgytf fweu7yffr fuiweffbc f",
    },
    {
      image: service4,
      title: "Let's Enjoy",
      description: "twerfbnmcyui  fhgytf fweu7yffr fuiweffbc f",
    },
  ];
  return (
    <Section id="Services">
      <div className="services">
        {data.map(({ image, title, description }) => {
          return (
            <div className="service" key={title}>
              <img src={image} alt="Service" />
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 8rem 4rem;
  .services {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    .service {
      padding: 1.5rem 2rem;
      text-align: center;
      background-color: var(--card-grey);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      h3 {
        color: var(--primary-text);
      }
      p {
        color: var(--secondary-text);
      }
      img {
        height: 128px;
        width: 128px;
      }
      transition: var(--default-transition);
      &:hover {
        background-color: white;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px){
    margin: 3rem;
    .services{
      grid-template-columns: 1fr;
    }
  }
`;
