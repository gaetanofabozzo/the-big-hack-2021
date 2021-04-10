import React from "react";

export const retrieveRTMood = (rt: number) => {
  let symbol = 0x1f641;
  if (rt < 0.8) symbol = 0x1f620;
  else if (rt > 1.3) symbol = 0x1f642;

  return (
    <span role="img" style={{marginLeft: '13px'}}>
      {String.fromCodePoint(symbol)}
    </span>
  );
}