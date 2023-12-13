/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import { ThemeType } from 'grommet';

const theme = {
  'name': 'Pragmatic Works',
  'rounding': 4,
  'spacing': 20,
  'defaultMode': 'light',
  'global': {
    'colors': {
      'brand': {
        'dark': '#1B76B2',
        'light': '#1B76B2',
      },
      'dark-brand': {
        'dark': '#00639f',
        'light': '#00639f',
      },
      'brand-subtle': {
        'dark': '#00639f',
        'light': '#74afdf',
      },
      'background': {
        'dark': '#0d1012',
        'light': '#FFFFFF',
      },
      'background-invert': {
        'dark': '#EEEEEE',
        'light': '#222222',
      },
      'background-back': {
        'dark': '#111111',
        'light': '#EEEEEE',
      },
      'background-back-special': {
        'dark': '#1d2022',
        'light': '#EEEEEE',
      },
      'background-front': {
        'dark': '#005189',
        'light': '#e2e5e6',
      },
      'background-contrast': {
        'dark': '#FFFFFF11',
        'light': '#11111111',
      },
      'background-meter': {
        'dark': '#FFFFFF11',
        'light': '#CCC',
      },
      'background-cards': {
        'dark': '#FFFFFF11',
        'light': '#FFF',
      },
      'background-new-cards': {
        'dark': '#222222', /* #2F2E2E */
        'light': '#f7f7f7', /* #FAFAFA */
      },
      'background-disabled': {
        'dark': '#ffffff40',
        'light': '#adadad',
      },
      'simple-text': '#f8f9f9',
      'text': {
        'dark': '#f8f9f9',
        'light': '#232e37',
      },
      'text-strong': {
        'dark': '#f8f9f9',
        'light': '#232e37',
      },
      'text-weak': {
        'dark': '#CCCCCC',
        'light': '#444444',
      },
      'text-xweak': {
        'dark': '#999999',
        'light': '#666666',
      },
      'border': {
        'dark': '#474e54',
        'light': '#e2e5e6',
      },
      'control': {
        'light': 'brand',
        'dark': 'brand',
      },
      'selected-checkbox': {
        'dark': 'red',
        'light': 'blue',
      },
      'stripe-cards': {
        'dark': '#99ACD2',
        'light': '#1B76B2',
      },
      'player-background': {
        'dark': '#202c3a',
        'light': '#FFF',
      },
      'player-strong-background': {
        'dark': '#121921',
        'light': '#FFF',
      },
      'border-strong': {
        'dark': '#000',
        'light': '#CCC',
      },
      // NEW UI COLORS
      'trophy': {
        'dark': '#93C2E9',
        'light': '#05cb42',
      },
      'disabled-brand': {
        'dark': '#7bbb98',
        'light': '#6f7f9d',
      },
      'new-brand': {
        'dark': '#93C2E9',
        'light': '#324873',
      },
      'background-new-ui': {
        'light': '#F7F7F7',
        'dark': '#FFFFFF11',
      },
      'skeleton': {
        'dark': '#333333',
        'light': '#F1F1F1',
      },
      'new-card-background-meter': {
        'dark': '#000',
        'light': '#222',
      },
      'new-text': {
        'dark': '#E3E3E3',
        'light': '#444444',
      },
      'new-card-meter': {
        'dark': '#93C2E9',
        'light': '#1EA7FD',
      },
      'sidebar': '#191E21',
      'active-background': 'background-contrast',
      'active-text': 'text-strong',
      'selected-background': 'brand',
      'selected-text': 'text-strong',
      'status-critical': '#b30b0b',
      'status-critical-intense': '#cd1010',
      'status-warning': '#FFAA15',
      'status-anchor': {
        'dark': '#93c2e9',
        'light': '#00639f',
      },
      'status-ok': '#00C781',
      'status-success': '#05cb42',
      'status-info': '#1EA7FD',
      'status-disabled': '#CCCCCC',
      'background-accordion': {
        'dark': '#121921',
        'light': '#FFF',
      },
      'graph-0': {
        'light': 'brand',
        'dark': 'brand',
      },
      'graph-1': {
        'light': 'status-warning',
        'dark': 'status-warning',
      },
      'focus': {
        'dark': '#424242',
        'light': '#e5e2e2',
      },
    },
    'font': {
      'family': '"Open Sans"',
      'size': '15px',
      'height': '20px',
      'maxWidth': '300px',
      'face': "/* cyrillic-ext */\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw0aXpsog.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw9aXpsog.woff2) format('woff2');\n  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw2aXpsog.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw3aXpsog.woff2) format('woff2');\n  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw5aXo.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-stretch: 100%;\n  src: url(https://fonts.gstatic.com/s/opensans/v35/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4taVIGxA.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-stretch: 100%;\n  src: url(https://fonts.gstatic.com/s/opensans/v35/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4kaVIGxA.woff2) format('woff2');\n  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-stretch: 100%;\n  src: url(https://fonts.gstatic.com/s/opensans/v35/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4saVIGxA.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-stretch: 100%;\n  src: url(https://fonts.gstatic.com/s/opensans/v35/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4jaVIGxA.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* hebrew */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-stretch: 100%;\n  src: url(https://fonts.gstatic.com/s/opensans/v35/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4iaVIGxA.woff2) format('woff2');\n  unicode-range: U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-stretch: 100%;\n  src: url(https://fonts.gstatic.com/s/opensans/v35/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4vaVIGxA.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-stretch: 100%;\n  src: url(https://fonts.gstatic.com/s/opensans/v35/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4uaVIGxA.woff2) format('woff2');\n  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-stretch: 100%;\n  src: url(https://fonts.gstatic.com/s/opensans/v35/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4gaVI.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw0aXpsog.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw9aXpsog.woff2) format('woff2');\n  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw2aXpsog.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw3aXpsog.woff2) format('woff2');\n  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw5aXo.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-stretch: 100%;\n  src: url(https://fonts.gstatic.com/s/opensans/v35/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4taVIGxA.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-stretch: 100%;\n  src: url(https://fonts.gstatic.com/s/opensans/v35/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4kaVIGxA.woff2) format('woff2');\n  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-stretch: 100%;\n  src: url(https://fonts.gstatic.com/s/opensans/v35/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4saVIGxA.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-stretch: 100%;\n  src: url(https://fonts.gstatic.com/s/opensans/v35/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4jaVIGxA.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* hebrew */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-stretch: 100%;\n  src: url(https://fonts.gstatic.com/s/opensans/v35/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4iaVIGxA.woff2) format('woff2');\n  unicode-range: U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-stretch: 100%;\n  src: url(https://fonts.gstatic.com/s/opensans/v35/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4vaVIGxA.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-stretch: 100%;\n  src: url(https://fonts.gstatic.com/s/opensans/v35/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4uaVIGxA.woff2) format('woff2');\n  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-stretch: 100%;\n  src: url(https://fonts.gstatic.com/s/opensans/v35/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4gaVI.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n",
    },
    'active': {
      'background': 'active-background',
      'color': 'active-text',
    },
    'hover': {
      'background': 'active-background',
      'color': 'active-text',
    },
    'selected': {
      'background': 'selected-background',
      'color': 'selected-text',
    },
    'borderSize': {
      'xsmall': '1px',
      'small': '2px',
      'medium': '3px',
      'large': '10px',
      'xlarge': '20px',
    },
    'breakpoints': {
      // 'screen325': {
      //   'value': 325,
      // },
      // 'screen375': {
      //   'value': 375,
      // },
      // 'screen425': {
      //   'value': 425,
      // },
      'small': {
        'value': 640,
        'borderSize': {
          'xsmall': '1px',
          'small': '2px',
          'medium': '3px',
          'large': '5px',
          'xlarge': '10px',
        },
        'edgeSize': {
          'none': '0px',
          'hair': '1px',
          'xxsmall': '2px',
          'xsmall': '3px',
          'small': '5px',
          'medium': '10px',
          'large': '20px',
          'xlarge': '40px',
        },
        'size': {
          'xxsmall': '20px',
          'xsmall': '40px',
          'small': '80px',
          'medium': '160px',
          'large': '320px',
          'xlarge': '640px',
          'full': '100%',
        },
      },
      'screen768': {
        'value': 768,
      },
      'screen1024': {
        'value': 1024,
      },
      'screen1440': {
        'value': 1440,
      },
      'screen4k': {
        'value': 2560,
      },
      'medium': {
        'value': 1536,
      },
      'large': {},
    },
    'edgeSize': {
      'none': '0px',
      'hair': '1px',
      'xxsmall': '3px',
      'xsmall': '5px',
      'small': '10px',
      'medium': '20px',
      'large': '40px',
      'xlarge': '80px',
      'responsiveBreakpoint': 'small',
    },
    'input': {
      'padding': '10px',
      'weight': 600,
      'font': {
        'size': '14px',
      },
    },
    'spacing': '20px',
    'size': {
      'xxsmall': '40px',
      'xsmall': '80px',
      'small': '160px',
      'medium': '320px',
      'large': '640px',
      'xlarge': '960px',
      'xxlarge': '1280px',
      'full': '100%',
    },
    'control': {
      'border': {
        'radius': '4px',
      },
    },
    'drop': {
      'border': {
        'radius': '4px',
      },
    },
  },
  'chart': {},
  'diagram': {
    'line': {},
  },
  'meter': {},
  'button': {
    'border': {
      'width': '2px',
      'radius': '6px',
    },
    'padding': {
      'vertical': '7px',
      'horizontal': '20px',
    },
    'active': {
      'background': {
        'color': '#555',
      },
    },
    'extend': 'font-size: 16px',
  },
  // 'tab': {
  //   'color': 'text-strong',
  //   'active': {
  //     'background': 'background-contrast',
  //   },
  //   'border': {
  //     'side': 'bottom',
  //     'color': 'border',
  //     'active': {
  //       'color': 'text-strong',
  //     },
  //     'disabled': {
  //       'color': 'border-weak',
  //     },
  //     'hover': {
  //       'color': 'border',
  //     },
  //   },
  //   'disabled': {
  //     'color': 'text-weak',
  //   },
  //   'hover': {
  //     'background': 'background-contrast',
  //     'color': 'text',
  //   },
  //   'pad': 'small',
  //   'margin': {
  //     'horizontal': 'none',
  //   },
  // },
  'tabs': {
    'gap': '8px',
    'header': {
      'alignSelf': 'start',
    },
    'extend': `
      width: 100%;
    `,
  },
  'tab': {
    'pad': '12px',
    'color': 'new-brand',
    'margin': {
      'horizontal': 'none',
      'vertical': 'none',
    },
    'border': {
      'color': 'transparent',
      'active': {
        'color': {
          'dark': '#FFF',
          'light': '#333333',
        },
      },
      'hover': {
        'color': 'transparent',
      },
    },
    'active': {
      'background': 'transparent',
      'color': {
        'dark': '#FFF',
        'light': '#333333',
      },
    },
    'hover': {
      'background': 'transparent',
      'color': {
        'dark': '#FFF',
        'light': 'brand',
      },
    },
  },
  'calendar': {
    'small': {
      'fontSize': '11.666666666666666px',
      'lineHeight': 1.375,
      'daySize': '22.86px',
    },
    'medium': {
      'fontSize': '15px',
      'lineHeight': 1.45,
      'daySize': '45.71px',
    },
    'large': {
      'fontSize': '25px',
      'lineHeight': 1.11,
      'daySize': '91.43px',
    },
  },
  'checkBox': {
    'size': '20px',
    'color': '#008000',
    'toggle': {
      'radius': '4px',
      'size': '40px',
    },
    'hover': {
      'border': {
        'color': 'undefined',
      },
    },
    'check': {
      'extend': {
        '& svg': {
          'backgroundColor': '#FFF',
          'width': '15px',
          'borderRadius': 2,
        },
      },
      'radius': '4px',
    },
  },
  'clock': {
    'analog': {
      'hour': {
        'width': '7px',
        'size': '20px',
      },
      'minute': {
        'width': '3px',
        'size': '10px',
      },
      'second': {
        'width': '3px',
        'size': '8px',
      },
      'size': {
        'small': '60px',
        'medium': '80px',
        'large': '120px',
        'xlarge': '180px',
        'huge': '240px',
      },
    },
    'digital': {
      'text': {
        'xsmall': {
          'size': '8.333333333333332px',
          'height': 1.5,
        },
        'small': {
          'size': '11.666666666666666px',
          'height': 1.43,
        },
        'medium': {
          'size': '15px',
          'height': 1.375,
        },
        'large': {
          'size': '18.333333333333332px',
          'height': 1.167,
        },
        'xlarge': {
          'size': '21.666666666666668px',
          'height': 1.1875,
        },
        'xxlarge': {
          'size': '28.333333333333336px',
          'height': 1.125,
        },
      },
    },
  },
  'heading': {
    'level': {
      '1': {
        'small': {
          'size': '28px',
          'height': '33px',
          'maxWidth': '567px',
        },
        'medium': {
          'size': '42px',
          'height': '47px',
          'maxWidth': '833px',
        },
        'large': {
          'size': '68px',
          'height': '73px',
          'maxWidth': '1367px',
        },
        'xlarge': {
          'size': '95px',
          'height': '100px',
          'maxWidth': '1900px',
        },
      },
      '2': {
        'small': {
          'size': '25px',
          'height': '30px',
          'maxWidth': '500px',
        },
        'medium': {
          'size': '35px',
          'height': '40px',
          'maxWidth': '700px',
        },
        'large': {
          'size': '45px',
          'height': '50px',
          'maxWidth': '900px',
        },
        'xlarge': {
          'size': '55px',
          'height': '60px',
          'maxWidth': '1100px',
        },
      },
      '3': {
        'small': {
          'size': '22px',
          'height': '27px',
          'maxWidth': '433px',
        },
        'medium': {
          'size': '28px',
          'height': '33px',
          'maxWidth': '567px',
        },
        'large': {
          'size': '35px',
          'height': '40px',
          'maxWidth': '700px',
        },
        'xlarge': {
          'size': '42px',
          'height': '47px',
          'maxWidth': '833px',
        },
      },
      '4': {
        'small': {
          'size': '18px',
          'height': '23px',
          'maxWidth': '367px',
        },
        'medium': {
          'size': '22px',
          'height': '27px',
          'maxWidth': '433px',
        },
        'large': {
          'size': '25px',
          'height': '30px',
          'maxWidth': '500px',
        },
        'xlarge': {
          'size': '28px',
          'height': '33px',
          'maxWidth': '567px',
        },
      },
      '5': {
        'small': {
          'size': '13px',
          'height': '18px',
          'maxWidth': '267px',
        },
        'medium': {
          'size': '13px',
          'height': '18px',
          'maxWidth': '267px',
        },
        'large': {
          'size': '13px',
          'height': '18px',
          'maxWidth': '267px',
        },
        'xlarge': {
          'size': '13px',
          'height': '18px',
          'maxWidth': '267px',
        },
      },
      '6': {
        'small': {
          'size': '12px',
          'height': '17px',
          'maxWidth': '233px',
        },
        'medium': {
          'size': '12px',
          'height': '17px',
          'maxWidth': '233px',
        },
        'large': {
          'size': '12px',
          'height': '17px',
          'maxWidth': '233px',
        },
        'xlarge': {
          'size': '12px',
          'height': '17px',
          'maxWidth': '233px',
        },
      },
    },
    'font': {
      'family': '"Montserrat"',
    },
  },
  'paragraph': {
    'small': {
      'size': '13px',
      'height': '18px',
      'maxWidth': '267px',
    },
    'medium': {
      'size': '15px',
      'height': '20px',
      'maxWidth': '300px',
    },
    'large': {
      'size': '18px',
      'height': '23px',
      'maxWidth': '367px',
    },
    'xlarge': {
      'size': '22px',
      'height': '27px',
      'maxWidth': '433px',
    },
    'xxlarge': {
      'size': '28px',
      'height': '33px',
      'maxWidth': '567px',
    },
  },
  'radioButton': {
    'size': '20px',
    'check': {
      'extend': {
        '& svg': {
          'backgroundColor': '#FFF',
          'width': '16px',
          'borderRadius': '50%',
        },
      },
      'radius': '50%',
    },
  },
  'text': {
    'xsmall': {
      'size': '12px',
      'height': '17px',
      'maxWidth': '233px',
    },
    'small': {
      'size': '13px',
      'height': '18px',
      'maxWidth': '267px',
    },
    'medium': {
      'size': '15px',
      'height': '20px',
      'maxWidth': '300px',
    },
    'large': {
      'size': '18px',
      'height': '23px',
      'maxWidth': '367px',
    },
    'xlarge': {
      'size': '22px',
      'height': '27px',
      'maxWidth': '433px',
    },
    'xxlarge': {
      'size': '28px',
      'height': '33px',
      'maxWidth': '567px',
    },
  },
  'formField': {
    'border': {
      'color': {
        'dark': '#424242',
        'light': '#e5e2e2',
      },
      'error': {
        'color': {
          'dark': 'status-critical',
          'light': 'status-critical',
        },
      },
      'position': 'inner',
      'side': 'all',
    },
    'content': {
      'pad': 'small',
    },
    'disabled': {
      'background': {
        'color': 'status-disabled',
        'opacity': 'medium',
      },
    },
    'error': {
      'color': 'status-critical',
      'margin': {
        'vertical': 'xsmall',
        'horizontal': 'small',
      },
    },
    'help': {
      'color': 'dark-3',
      'margin': {
        'start': 'small',
      },
      'size': 'small',
    },
    'info': {
      'color': 'text-xweak',
      'margin': {
        'vertical': 'xsmall',
        'horizontal': 'small',
      },
    },
    'label': {
      'margin': {
        'vertical': 'xsmall',
        'horizontal': 'small',
      },
    },
    'margin': {
      'bottom': 'small',
    },
    'round': '4px',
  },
  'layer': {
    'background': {
      'dark': '#111111',
      'light': '#FFFFFF',
    },
  },
  'accordion': {
    'icons': {
      'color': {
        'light': '#000',
        'dark': '#EEEEEE',
      },
    },
    'border': {
      'color': 'transparent',
    },
  },
} as unknown as ThemeType;

export default theme;
