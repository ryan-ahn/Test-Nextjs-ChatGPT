/**
 * Author : Ryan
 * Date : 2022-03-03
 * Desc : style Type Set
 */

import 'styled-components';
import { minMedia, maxMedia } from './theme';
import { backgroundSet, boxSet, flexSet, fontSet } from './mixin';
import { colors } from './colors';

declare module 'styled-components' {
  export interface DefaultTheme {
    medias: {
      mobile: any;
      pad: any;
      desktop: any;
    };
    flexSet: typeof flexSet;
    fontSet: typeof fontSet;
    backgroundSet: typeof backgroundSet;
    boxSet: typeof boxSet;
    colorSet: typeof colorSet;
  }
}
