import React from "react";
import styled from "styled-components";
function Pagination({ data, stateIndex, setstateIndex }) {
  return (
    <StyledPagination>
      <div id="pagination" className="space-x-2 space-y-2">
        <button
          className={`md:p-2 rounded py-2  text-white p-2 ${
            stateIndex === 1 ? "bg-gray-300" : "bg-yellow-800"
          }`}
          disabled={stateIndex === 1}
          onClick={() => setstateIndex(stateIndex - 1)}
        >
          {" "}
          Previous
        </button>
        <button
          className={`md:p-2 rounded py-2 text-white p-2 ${
            stateIndex === (data && data?.pagination.pageCount)
              ? "bg-gray-300"
              : "bg-yellow-800"
          }`}
          disabled={stateIndex === (data && data?.pagination.pageCount)}
          onClick={() => setstateIndex(stateIndex + 1)}
        >
          Next
        </button>
        <span>{`${stateIndex} of ${data && data?.pagination?.pageCount}`}</span>
      </div>
    </StyledPagination>
  );
}

export default Pagination;

const StyledPagination = styled.section`
  padding: 20px;
  display: flex;
  justify-content: end;
  padding-top: 40px;

  button {
    cursor: pointer;
  }

  button:hover {
    /* background-color: #d9ab22; */
    color: #fff;
  }
`;
