import { css } from 'styled-components';

//Type of Flex Set
type TJustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

type TAlignItems = 'stretch' | 'flex-start' | 'space-between' | 'flex-end' | 'center' | 'baseline';

type TFlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

// Type of Font Weight
export type TFontWeight = 100 | 300 | 400 | 500 | 700 | 900;

//Flex Set
export const flexSet = (
  justifyContent?: TJustifyContent,
  alignItems?: TAlignItems,
  flexDirection?: TFlexDirection,
) => css`
  display: flex;
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  flex-direction: ${flexDirection};
`;

// Font Set
export const fontSet = (
  fontSize: number = 14,
  fontWeight: TFontWeight = 400,
  lineHeight?: number,
) => css`
  font-size: ${fontSize}px;
  font-weight: ${fontWeight};
  line-height: ${lineHeight}px;
`;

// Background Set
export const backgroundSet = (url: string, size: string = 'cover') => css`
  background-image: url(${url});
  background-size: ${size};
  background-repeat: no-repeat;
  background-position: center center;
`;

// Box Size Set
export const boxSet = (width: string, height: string, borderRadius: string) => css`
  width: ${width};
  height: ${height};
  border-radius: ${borderRadius};
`;

// Color Set
export const colorSet = (color: string, background: string) => css`
  color: ${color};
  background: ${background};
`;

export const skipText = css`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
