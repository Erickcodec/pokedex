import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.column && "column"};
  gap: ${(props) => `${props.gap}rem` ?? 0};
  align-items: ${(props) => props["align-items"]};
  justify-content: ${(props) => props["justify-content"]};
  flex: ${(props) => props["flex"]};
`;
