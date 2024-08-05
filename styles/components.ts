import styled from "styled-components";

export const Page = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Row = styled.div<{ gap?: string }>`
  display: flex;
  align-items: center;
  gap: ${({ gap }) => gap && gap};
`;

export const Col = styled.div<{ gap?: string }>`
  display: flex;
  flex-direction: column;
`;
