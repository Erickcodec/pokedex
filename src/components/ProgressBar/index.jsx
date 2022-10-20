import React, { useMemo } from "react";
import styled, { keyframes } from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  color: #302f2f;
  font-size: 1.25rem;
  line-height: 1.465rem;
  font-weight: 700;
`;

const Label = styled.h5`
  font-size: 1.5rem;
  line-height: 1.758125rem;
`;

const SlideAnimation = keyframes`
  0% {
    width: 0%;
    opacity: 0.5;
  }

  100% {
    width: ${(props) => props.percent + "%"};
    opacity: 1;
  }
`;

const Bar = styled.div`
  height: 2.125rem;
  background-color: #f6f6f6;
  border-radius: 4px;

  &::before {
    content: "";
    height: 100%;
    width: ${(props) => props.percent + "%"};
    display: inline-block;
    border-radius: 4px;
    background: linear-gradient(90deg, #fcd676 -2.25%, #e6901e 133.18%);
    animation-name: ${SlideAnimation};
    animation-duration: 500ms;
    animation-timing-function: ease-out;
  }
`;

export const ProgressBar = ({ from, to, value, label }) => {
  const percent = useMemo(() => {
    return (value / (to - from) - from) * 100;
  }, [from, to, value]);

  return (
    <div>
      <Header>
        <Label>{label}</Label>
        {value} / {to}
      </Header>
      <Bar percent={percent} />
    </div>
  );
};
