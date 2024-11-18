import Guide from "../components/Guide";
import GetStarted from "../components/GetStarted";
import React from "react";
import Talktous from "../components/TalkToUs/Talktous";
import FAQ from "../components/faq/FAQ";
import styled from "styled-components";
import Hero from "../components/new/components/Hero";
import PropertyCategories from "../components/new/components/PropertyCategories";
import FeaturedProperties from "../components/new/components/FeaturedProperties";
import TeamSection from "../components/new/components/Team";
import PropertyTabs from "../components/new/components/Tab";
import CommentSection from "../components/new/components/Comment";
import WhyChooseUs from "../components/new/components/WhyChooseUs";

export default function Home() {
 

  return (
    <StyledHome>
      <Hero/>
      <Guide />
 <PropertyCategories/>
<WhyChooseUs/>
<FeaturedProperties/>
<PropertyTabs/>
<TeamSection/>
<GetStarted />
<FAQ />
<CommentSection/>
<Talktous />
    </StyledHome>
  );
}

const StyledHome = styled.section`

  .panel{
    height:auto;
    padding: 10px 0px 50px 0px;
    width:100%;
  }
  
`;
