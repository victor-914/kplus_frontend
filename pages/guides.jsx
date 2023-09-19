import React from "react";
import styled from "styled-components";
import Talktous from "../components/TalkToUs/Talktous";

function Rent_guides() {
  return (
    <>
      <Container>
        <Title>Buying Guides for Land Properties in Nigeria</Title>
        <SectionTitle>
          1. <span className="define-objectives">Define Your Objectives:</span>
        </SectionTitle>
        <SectionContent>
          Clearly outline your purpose for buying land. Are you buying for
          residential, commercial, agricultural, or investment purposes? Knowing
          your objectives will guide your search and decision-making.
        </SectionContent>
        <SectionTitle>
          2. <span className="research-locations">Research Locations:</span>
        </SectionTitle>
        <SectionContent>
          Research different locations in Nigeria to find the one that suits
          your needs. Consider factors like proximity to amenities,
          infrastructure development, security, and potential for future growth.
        </SectionContent>
        <SectionTitle>
          3. <span className="budget-planning">Budget Planning:</span>
        </SectionTitle>
        <SectionContent>
          Determine your budget and be realistic about your financial
          capabilities. Consider not only the cost of the land but also
          additional expenses such as legal fees, survey costs, and any
          applicable taxes.
        </SectionContent>
        <SectionTitle>
          4.{" "}
          <span className="engage-real-estate-agent">
            Engage a Real Estate Agent:
          </span>
        </SectionTitle>
        <SectionContent>
          Working with a reputable real estate agent can simplify the buying
          process. They have local knowledge, can help you find suitable
          properties, and negotiate on your behalf.
        </SectionContent>
        <SectionTitle>
          5. <span className="land-verification">Land Verification:</span>
        </SectionTitle>
        <SectionContent>
          Before proceeding, verify the authenticity of the land and all
          relevant documents. Ensure the land is free from disputes,
          encumbrances, or legal issues. Engage a legal professional or a
          surveyor for this purpose.
        </SectionContent>
        <SectionTitle>
          6. <span className="title-documents">Title Documents:</span>
        </SectionTitle>
        <SectionContent>
          Request and review all relevant title documents, such as the
          Certificate of Occupancy (C of O), Deed of Assignment, Survey Plan,
          and Gazette. These documents prove land ownership and legal status.
        </SectionContent>
        <SectionTitle>
          7. <span className="survey-inspection">Survey and Inspection:</span>
        </SectionTitle>
        <SectionContent>
          Conduct a land survey to confirm boundaries and dimensions. Physically
          visit the land to assess its suitability and verify if it matches the
          information provided in the documents.
        </SectionContent>
        <SectionTitle>
          8. <span className="negotiation-offer">Negotiation and Offer:</span>
        </SectionTitle>
        <SectionContent>
          Engage in negotiations with the seller. Make an offer based on market
          research and property valuation. Be prepared for counteroffers and
          ensure all terms are agreed upon in writing.
        </SectionContent>
        <SectionTitle>
          9.{" "}
          <span className="payment-documentation">
            Payment and Documentation:
          </span>
        </SectionTitle>
        <SectionContent>
          After reaching an agreement, make a down payment or initial deposit.
          Ensure that all payments are made through secure and legal channels.
          Collect and retain copies of all payment receipts.
        </SectionContent>
        <SectionTitle>
          10.{" "}
          <span className="legal-due-diligence">
            11. Transfer of Ownership:
          </span>
        </SectionTitle>
        <SectionContent>
          Complete the legal transfer of ownership by signing the Deed of
          Assignment and other relevant documents in the presence of a notary
          public. This step is crucial for securing your rights to the property.
        </SectionContent>{" "}
        <SectionTitle>
          11.{" "}
          <span className="legal-due-diligence">
            {" "}
            Payment of Statutory Fees:
          </span>
        </SectionTitle>
        <SectionContent>
          Pay all applicable government fees and taxes, including stamp duties
          and registration fees, to ensure your land ownership is recognized by
          the authorities.
        </SectionContent>{" "}
        <SectionTitle>
          12. <span className="legal-due-diligence">Community Engagement:</span>
        </SectionTitle>
        <SectionContent>
          If your land purchase involves communal land or ancestral land, engage
          with the community leaders to seek their approval and secure a
          community consent letter, if necessary.
        </SectionContent>{" "}
        <SectionTitle>
          13.{" "}
          <span className="legal-due-diligence">
            {" "}
            Get Receipts and Certificates:
          </span>
        </SectionTitle>
        <SectionContent>
          Obtain receipts and certificates for all payments made, including tax
          receipts, and keep them safely for future reference.
        </SectionContent>
        <SectionTitle>
          14. <span className="legal-due-diligence">Community Engagement:</span>
        </SectionTitle>
        <SectionContent>
          If your land purchase involves communal land or ancestral land, engage
          with the community leaders to seek their approval and secure a
          community consent letter, if necessary.
        </SectionContent>
        <SectionTitle>
          15.{" "}
          <span className="legal-due-diligence">Post-Purchase Inspection:</span>
        </SectionTitle>
        <SectionContent>
          Conduct a final inspection of the land after all transactions are
          complete to ensure there are no surprises or discrepancies.
        </SectionContent>
        <SectionTitle>
          16. <span className="legal-due-diligence"> Registration:</span>
        </SectionTitle>
        <SectionContent>
          Register your land with the appropriate government land registry to
          secure your legal ownership rights and prevent disputes.
        </SectionContent>
        <SectionTitle>
          17.{" "}
          <span className="legal-due-diligence">
            Infrastructure and Development Plans:
          </span>
        </SectionTitle>
        <SectionContent>
          Be aware of any future infrastructure and development plans in the
          area, as they can affect the value and use of your land.
        </SectionContent>
        <SectionTitle>
          18.{" "}
          <span className="legal-due-diligence"> Continuous Monitoring:</span>
        </SectionTitle>
        <SectionContent>
          Regularly monitor your property and stay informed about changes in
          land laws, regulations, and property values in the area.
        </SectionContent>
        <SectionTitle>
          19. <span className="legal-due-diligence">Legal Protection:</span>
        </SectionTitle>
        <SectionContent>
          - Consider obtaining title insurance or consulting with a legal
          professional to protect your investment and property rights.
        </SectionContent>
        <SectionTitle>
          20.{" "}
          <span className="legal-due-diligence">
            Resale Value and Exit Strategy:
          </span>
        </SectionTitle>
        <SectionContent>
          Plan for the future by considering the resale value of your land and
          having an exit strategy in case you need to sell it.
        </SectionContent>
      </Container>
      <Talktous />
    </>
  );
}

export default Rent_guides;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
`;

const SectionContent = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;
