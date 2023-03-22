/**
 * Author : Ryan
 * Date : 2022-03-03
 * Desc : theme
 */

import baseStyled, { DefaultTheme, ThemedStyledInterface } from 'styled-components';
import { flexSet, fontSet, backgroundSet, boxSet, colorSet } from './mixin';

export const minMedia = (width: number) => `
  @media (min-width:${width}px)
  `;
export const maxMedia = (width: number) => `
  @media (max-width:${width}px)
  `;

export const mixMedia = (smallWidth: number, largeWidth: number) => `
  @media (min-width:${smallWidth}px) and (max-width:${largeWidth}px)
`;

const medias = {
  mobile: maxMedia(819),
  pad: mixMedia(820, 1439),
  desktop: minMedia(1440),
};

const myTheme: DefaultTheme = {
  medias,
  flexSet,
  fontSet,
  backgroundSet,
  boxSet,
  colorSet,
};

export type Theme = typeof myTheme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;

export default myTheme;
