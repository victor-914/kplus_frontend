import React from "react";
import { Typography } from "@mui/material";
import { termsAndConditions } from "../../utils/terms";
const TermsAndConditions = () => {
  return (
    <div>
      <Typography variant="h6" gutterBottom className="header">
        Terms and Conditions
      </Typography>
      <ol>
        {termsAndConditions.map((item, indx) => (
          <li>
            <Typography 
             sx={{
                padding:"10px 0px 10px 0px"
             }}
            className="section-header">{item.title}</Typography>
            <Typography
              sx={{
                fontSize: "12px",
              }}
            >
              {item.content}
            </Typography>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TermsAndConditions;
