import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <StyledCard>
      <div className="card-inner">
        <div className="card-front">
          <p>front side</p>
        </div>
        <div className="card-back">
          <p>Back side</p>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card;

const StyledCard = styled.div`
  width: 300px;
  height: 200px;
  perspective: 100px;

  .card-inner {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.999s;

    &:hover {
      transform: rotateY(180deg);
    }

    .card-front,
    .card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 24px;
    }

    .card-front {
      background-color: #3498db; // 앞면 배경색
      transform: rotateY(0deg);
    }

    .card-back {
      background-color: #e74c3c; // 뒷면 배경색
      transform: rotateY(180deg);
    }
  }
`;
