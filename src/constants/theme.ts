export const theme = {
    colors: {
      primary: '#00D2BE',    // Petronas Teal
      primaryLight: '#27F4D2', // Lighter teal for gradients
      secondary: '#C4C4C4',  // Mercedes Silver
      dark: '#0B1221',       // Dark blue-black
      darkLight: '#1A2332',  // Lighter version for cards
      background: {
        from: '#0B1221',
        via: '#131B2E',
        to: '#0B1221'
      },
      text: {
        primary: '#FFFFFF',
        secondary: '#94A3B8',
        accent: '#00D2BE',
        muted: '#6B7280'
      },
      accent: {
        primary: '#00D2BE',
        secondary: '#27F4D2'
      },
      gradient: {
        primary: 'linear-gradient(to right, #00D2BE, #27F4D2)',
        secondary: 'linear-gradient(135deg, #00D2BE 0%, #27F4D2 100%)'
      },
      glass: {
        background: 'rgba(11, 18, 33, 0.7)',
        border: 'rgba(0, 210, 190, 0.2)'
      }
    },
    transitions: {
      duration: '0.3s',
      timing: 'cubic-bezier(0.23, 1, 0.32, 1)'
    },
    gradients: {
      primary: 'bg-gradient-to-r from-[#00D2BE] to-[#27F4D2]',
      hover: 'hover:bg-gradient-to-r hover:from-[#27F4D2] hover:to-[#00D2BE]',
      text: 'bg-gradient-to-r from-[#00D2BE] to-[#27F4D2] bg-clip-text text-transparent'
    }
  }; 