import React from "react";
import styled from "styled-components";
import LandProperties from "../components/landProperties/LandProperties";
import Properties from "../components/Properties";
import Image from "next/image";
function Sales() {
  return (
    <StyledSales>
      <header className="saleHeader">
        <div>
          <Image alt="" width={50} height={50} src="/running.gif" />
        </div>{" "}
        <div>On Track! to financial freedom</div>
      </header>
      <main className="saleText">
        <p>
          We all live in a world where we desire wisdom, comfort and freedom.
          Now, imagine a world where you can do whatever you wish within the
          law.
        </p>

        <p>
          A world where everything is possible _ you can travel anywhere you
          want and finance all your desires.
        </p>
        <p>
          A world where you don't need to work to survive, nor even manage
          life's comfort.
        </p>
        <p>
          A world where you're sure of tomorrow's comfort and{" "}
          <h1>
            LIVING THE LIFE OF YOUR DREAM. WELCOME TO YOUR IDEAL WORLD WHERE
            FINANCIAL FREEDOM ABOUND!
          </h1>
        </p>
        <p>
          All you need is that first step to financial freedom through{" "}
          <h1>REAL ESTATE INVESTMENT! </h1>
        </p>
        <p>
          Our Real Estate offers are affordable, sustainable and have great
          returns! With Jeff Realty and Trades Solutions, there is no need to
          fear losing property because we provide you with the best! Our Estates
          are Government-owned, with supporting documents like the General C of
          O.
        </p>
        <p>
          Tomorrow belongs to those who make sustainable plans today! Now is the
          time to take action and invest in your future with our amazing offers.
          Your journey to financial freedom starts NOW through this link!
        </p>
      </main>

      <main>
        <LandProperties />
      </main>

      <main>
        <Properties />
      </main>
    </StyledSales>
  );
}

export default Sales;

const StyledSales = styled.section`
  .saleHeader {
    width: 100%;
    display: flex;
    font-size: 20px;
    align-items: center;
    line-height: 1.4;
    justify-content: center;
    font-weight: 600;
    text-transform: uppercase;
    text-decoration-line: underline;
    text-decoration-color: #d9ab22;
    text-decoration-style: double;
    flex-wrap: wrap;
  }

  .saleText {
    width: 80%;
    margin: auto;
  }

  .saleText p {
    padding: 10px;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
  }

  .saleText p h1 {
    font-weight: 800;
  }
`;
