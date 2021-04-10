
import { TypographyOptions } from "@material-ui/core/styles/createTypography";
import { pxToRem } from './utils';

const typography:TypographyOptions = {
  fontFamily: 'Milo,BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif',
  fontSize: 16,
  h1: {
    fontSize: pxToRem(28),
    fontWeight: 500,
    lineHeight: pxToRem(33),
    fontVariantNumeric: 'lining-nums'
  },
  h2: {
    fontSize: pxToRem(23),
    fontWeight: 500,
    lineHeight: pxToRem(23),
    fontVariantNumeric: 'lining-nums',
  },
  h3: {
    fontSize: pxToRem(19),
    fontWeight: 500,
    lineHeight: pxToRem(23),
    fontVariantNumeric: 'lining-nums',
  },
  h4: {
    fontSize: pxToRem(16),
    fontWeight: 500,
    lineHeight: pxToRem(19),
    fontVariantNumeric: 'lining-nums',
  },
  h5: {
    fontSize: pxToRem(13),
    fontWeight: 500,
    lineHeight: pxToRem(16),
    fontVariantNumeric: 'lining-nums',
  },
  h6: {
    fontSize: pxToRem(13),
    fontWeight: 500,
    lineHeight: pxToRem(16),
    fontFamily: 'Helvetica,Arial,sans-serif',
  },
  subtitle1: {
    fontSize: pxToRem(16),
    fontWeight: 400,
    lineHeight: pxToRem(19),
    fontVariantNumeric: 'lining-nums',
  },
  subtitle2: {
    fontSize: pxToRem(13),
    fontWeight: 600,
    lineHeight: pxToRem(16),
    fontFamily: 'Helvetica,Arial,sans-serif',
  },
  body1: {
    fontSize: pxToRem(16),
    fontWeight: 400,
    lineHeight: pxToRem(19),
    fontVariantNumeric: 'lining-nums',
  },
  body2: {
    fontSize: pxToRem(13),
    fontWeight: 400,
    lineHeight: pxToRem(16),
    fontVariantNumeric: 'lining-nums',
  },
  button: {
    fontSize: pxToRem(16),
    fontWeight: 500,
    lineHeight: pxToRem(19),
    fontVariantNumeric: 'lining-nums',
  },
  caption: {
    fontSize: pxToRem(13),
    fontWeight: 400,
    lineHeight: pxToRem(16),
    fontVariantNumeric: 'lining-nums',
  },
  overline: {
    fontSize: pxToRem(16),
    fontWeight: 500,
    lineHeight: pxToRem(19),
    fontVariantNumeric: 'lining-nums',
  },
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
};

export default typography;