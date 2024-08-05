import { css } from "styled-components";

export const row = css`
  display: flex;
`;

export const column = css`
  display: flex;
  flex-direction: column;
`;

export const justifyCenter = css`
  display: flex;
  justify-content: center;
`;

export const alignCenter = css`
  display: flex;
  align-items: center;
`;

export const center = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const preventDrag = css`
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
`;

export const ellipsis = css`
  width: 100%;
  overflow: hidden;
  white-space: nowrap; // 줄바꿈 X
  text-overflow: ellipsis; // 말줄임표 처리
`;

export const rotate = css`
  @keyframes rotate {
    from {
      transform: rotate(0deg);
      -o-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
      -o-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
    }
  }
`;
