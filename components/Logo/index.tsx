import React from 'react';
import { useTheme } from '@mui/joy';

import RawLogo from '~/images/nile.svg'; // https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping

export default function Logo({ width = 131 }: {width?: number}) {
  const theme = useTheme();
  const { colorSchemes } = theme;
  return (
    <RawLogo
      style={{ fill: colorSchemes.dark.palette.common.white }}
      width={`${width}px`}
    />
  );
}