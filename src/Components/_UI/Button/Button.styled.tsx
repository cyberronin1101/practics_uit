import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { ButtonPropsType, SizesType, VariantsType } from "./Button.types";

const variants: Record<VariantsType, FlattenSimpleInterpolation> = {
  primary: css`
    color: #fff;
    border-color: #1677ff;
    background: #1677ff;

    &:not(:disabled):hover {
      background: #4096ff;
    }
  `,
  ghost: css`
    border-color: #d9d9d9;
    color: #333;
    background: transparent;

    &:not(:disabled):hover {
      color: #4096ff;
    }
  `,
};

const sizes: Record<SizesType, FlattenSimpleInterpolation> = {
  small: css`
    font-size: 12px;
    line-height: 14px;
    height: 22px;
  `,
  default: css`
    font-size: 14px;
    line-height: 18px;
    height: 26px;
  `,
  big: css`
    font-size: 20px;
    line-height: 30px;
    height: 38px;
  `,
};

export const StyledButton = styled.button<ButtonPropsType>`
  box-shadow: 0 2px 0 rgb(5 145 255 / 10%);
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid;
  transition: all 0.1s 0s ease-in;
  &:not(:disabled):hover {
    cursor: pointer;
    border-color: #4096ff;
  }

  ${({ wade = false }) =>
    wade
      ? css`
          display: block;
          width: 100%;
        `
      : css`
          display: inline-block;
        `};
  ${({ size = "default" }) => sizes[size]}
  ${({ variant = "primary" }) => variants[variant]}
  &:disabled {
    opacity: 0.6;
  }
`;
