const size = {
    phablet: '420px',
    tablet: '700px',
    laptop: '1024px',
    laptopLarge: '1440px',
    desktop: '1600px',
    fourK: '2560px'
  }
  
  export const device = {
    phablet: `(min-width: ${size.phablet})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopLarge: `(min-width: ${size.laptopLarge})`,
    desktop: `(min-width: ${size.desktop})`,
    fourK: `(min-width: ${size.fourK})`
  };

// Way to use in css:

// @media ${device.desktop} {

// }