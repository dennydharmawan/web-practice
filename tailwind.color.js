const colors = {
  slate: {
    25: '#F8FAFC',
    50: '#F1F5F9',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
    950: '#020617'
  },
  'gray-blue': {
    25: '#FCFCFD',
    50: '#F8F9FC',
    100: '#EAECF5',
    200: '#D5D9EB',
    300: '#B3B8DB',
    400: '#717BBC',
    500: '#4E5BA6',
    600: '#3E4784',
    700: '#363F72',
    800: '#293056',
    900: '#101323',
    950: '#0D0F1C'
  },
  'gray-cool': {
    25: '#FCFCFD',
    50: '#F9F9FB',
    100: '#EFF1F5',
    200: '#DCDFEA',
    300: '#B9C0D4',
    400: '#7D89B0',
    500: '#5D6B98',
    600: '#4A5578',
    700: '#404968',
    800: '#30374F',
    900: '#111322',
    950: '#0E101B'
  },
  // gray: {
  //   25: '#FCFCFD',
  //   50: '#F9FAFB',
  //   100: '#F2F4F7',
  //   200: '#EAECF0',
  //   300: '#D0D5DD',
  //   400: '#98A2B3',
  //   500: '#667085',
  //   600: '#475467',
  //   700: '#344054',
  //   800: '#1D2939',
  //   900: '#101828',
  //   950: '#0C111D'
  // },
  gray: {
    // using slate palette
    25: '#F8FAFC',
    50: '#F1F5F9',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
    950: '#020617'
  },
  'gray-modern': {
    25: '#FCFCFD',
    50: '#F8FAFC',
    100: '#EEF2F6',
    200: '#E3E8EF',
    300: '#CDD5DF',
    400: '#9AA4B2',
    500: '#697586',
    600: '#4B5565',
    700: '#364152',
    800: '#202939',
    900: '#121926',
    950: '#0D121C'
  },
  'gray-neutral': {
    25: '#FCFCFD',
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D2D6DB',
    400: '#9DA4AE',
    500: '#6C737F',
    600: '#4D5761',
    700: '#384250',
    800: '#1F2A37',
    900: '#111927',
    950: '#0D121C'
  },
  'gray-iron': {
    25: '#FCFCFC',
    50: '#FAFAFA',
    100: '#F4F4F5',
    200: '#E4E4E7',
    300: '#D1D1D6',
    400: '#A0A0AB',
    500: '#70707B',
    600: '#51525C',
    700: '#3F3F46',
    800: '#26272B',
    900: '#18181B',
    950: '#131316'
  },
  'gray-true': {
    25: '#FCFCFC',
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D6D6D6',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#424242',
    800: '#292929',
    900: '#141414',
    950: '#0F0F0F'
  },
  'gray-warm': {
    25: '#FDFDFC',
    50: '#FAFAF9',
    100: '#F5F5F4',
    200: '#E7E5E4',
    300: '#D7D3D0',
    400: '#A9A29D',
    500: '#79716B',
    600: '#57534E',
    700: '#44403C',
    800: '#292524',
    900: '#1C1917',
    950: '#171412'
  },
  moss: {
    25: '#FAFDF7',
    50: '#F5FBEE',
    100: '#E6F4D7',
    200: '#CEEAB0',
    300: '#ACDC79',
    400: '#86CB3C',
    500: '#669F2A',
    600: '#4F7A21',
    700: '#3F621A',
    800: '#335015',
    900: '#2B4212',
    950: '#1A280B'
  },
  'green-light': {
    25: '#FAFEF5',
    50: '#F3FEE7',
    100: '#E4FBCC',
    200: '#D0F8AB',
    300: '#A6EF67',
    400: '#85E13A',
    500: '#66C61C',
    600: '#4CA30D',
    700: '#3B7C0F',
    800: '#326212',
    900: '#2B5314',
    950: '#15290A'
  },
  green: {
    25: '#F6FEF9',
    50: '#EDFCF2',
    100: '#D3F8DF',
    200: '#AAF0C4',
    300: '#73E2A3',
    400: '#3CCB7F',
    500: '#16B364',
    600: '#099250',
    700: '#087443',
    800: '#095C37',
    900: '#084C2E',
    950: '#052E1C'
  },
  teal: {
    25: '#F6FEFC',
    50: '#F0FDF9',
    100: '#CCFBEF',
    200: '#99F6E0',
    300: '#5FE9D0',
    400: '#2ED3B7',
    500: '#15B79E',
    600: '#0E9384',
    700: '#107569',
    800: '#125D56',
    900: '#134E48',
    950: '#0A2926'
  },
  cyan: {
    25: '#F5FEFF',
    50: '#ECFDFF',
    100: '#CFF9FE',
    200: '#A5F0FC',
    300: '#67E3F9',
    400: '#22CCEE',
    500: '#06AED4',
    600: '#088AB2',
    700: '#0E7090',
    800: '#155B75',
    900: '#164C63',
    950: '#0D2D3A'
  },
  'blue-light': {
    25: '#F5FBFF',
    50: '#F0F9FF',
    100: '#E0F2FE',
    200: '#B9E6FE',
    300: '#7CD4FD',
    400: '#36BFFA',
    500: '#0BA5EC',
    600: '#0086C9',
    700: '#026AA2',
    800: '#065986',
    900: '#0B4A6F',
    950: '#062C41'
  },
  blue: {
    25: '#F5FAFF',
    50: '#EFF8FF',
    100: '#D1E9FF',
    200: '#B2DDFF',
    300: '#84CAFF',
    400: '#53B1FD',
    500: '#2E90FA',
    600: '#1570EF',
    700: '#175CD3',
    800: '#1849A9',
    900: '#194185',
    950: '#102A56'
  },
  'blue-dark': {
    25: '#F5F8FF',
    50: '#EFF4FF',
    100: '#D1E0FF',
    200: '#B2CCFF',
    300: '#84ADFF',
    400: '#528BFF',
    500: '#2E90FA',
    600: '#155EEF',
    700: '#004EEB',
    800: '#0040C1',
    900: '#00359E',
    950: '#002266'
  },
  'blue-navy': {
    25: '#F5FAFF', // 6.86 AA
    50: '#F1F8FE', // 6.72 AA
    100: '#E1EFFD', // 6.16 AA
    200: '#BDDFFA', // 5.18 AA
    300: '#83C5F6', // 1.86
    400: '#41A9EF', // 2.57
    500: '#188DDF', // 3.55 AA
    600: '#0B6FBE', // 5.2 AA
    700: '#0E599A', // 7.2 AAA
    800: '#0D4C7F', // 8.9 AAA
    900: '#10406A', // 10.69 AAA
    950: '#0A2540' // 15.53 AAA
  },
  indigo: {
    25: '#F5F8FF',
    50: '#EEF4FF',
    100: '#E0EAFF',
    200: '#C7D7FE',
    300: '#A4BCFD',
    400: '#8098F9',
    500: '#6172F3',
    600: '#444CE7',
    700: '#3538CD',
    800: '#2D31A6',
    900: '#2D3282',
    950: '#1F235B'
  },
  violet: {
    25: '#FBFAFF',
    50: '#F5F3FF',
    100: '#ECE9FE',
    200: '#DDD6FE',
    300: '#C3B5FD',
    400: '#A48AFB',
    500: '#875BF7',
    600: '#7839EE',
    700: '#6927DA',
    800: '#5720B7',
    900: '#491C96',
    950: '#2E125E'
  },
  purple: {
    25: '#FAFAFF',
    50: '#F4F3FF',
    100: '#EBE9FE',
    200: '#D9D6FE',
    300: '#BDB4FE',
    400: '#9B8AFB',
    500: '#7A5AF8',
    600: '#6938EF',
    700: '#5925DC',
    800: '#4A1FB8',
    900: '#3E1C96',
    950: '#27115F'
  },
  'purple-heart': {
    50: '#ECF0FF',
    100: '#DDE3FF',
    200: '#C2CBFF',
    300: '#9CA7FF',
    400: '#7578FF',
    500: '#635BFF',
    600: '#4E36F5',
    700: '#432AD8',
    800: '#3725AE',
    900: '#302689',
    950: '#1E1650'
  },
  fuchsia: {
    25: '#FEFAFF',
    50: '#FDF4FF',
    100: '#FBE8FF',
    200: '#F6D0FE',
    300: '#EEAAFD',
    400: '#E478FA',
    500: '#D444F1',
    600: '#BA24D5',
    700: '#9F1AB1',
    800: '#821890',
    900: '#6F1877',
    950: '#47104C'
  },
  pink: {
    25: '#FEF6FB',
    50: '#FDF2FA',
    100: '#FCE7F6',
    200: '#FCCEEE',
    300: '#FAA7E0',
    400: '#F670C7',
    500: '#EE46BC',
    600: '#DD2590',
    700: '#C11574',
    800: '#9E165F',
    900: '#851651',
    950: '#4E0D30'
  },
  rose: {
    25: '#FFF5F6',
    50: '#FFF1F3',
    100: '#FFE4E8',
    200: '#FECDD6',
    300: '#FEA3B4',
    400: '#FD6F8E',
    500: '#F63D68',
    600: '#E31B54',
    700: '#C01048',
    800: '#A11043',
    900: '#89123E',
    950: '#510B24'
  },
  'orange-dark': {
    25: '#FFF9F5',
    50: '#FFF4ED',
    100: '#FFE6D5',
    200: '#FFD6AE',
    300: '#FF9C66',
    400: '#FF692E',
    500: '#FF4405',
    600: '#E62E05',
    700: '#BC1B06',
    800: '#97180C',
    900: '#771A0D',
    950: '#57130A'
  },
  coral: {
    50: '#fff4ed',
    100: '#ffe6d4',
    200: '#ffc9a8',
    300: '#ffa471',
    400: '#ff8552',
    500: '#fe4d11',
    600: '#ef3307',
    700: '#c62108',
    800: '#9d1d0f',
    900: '#7e1b10',
    950: '#440906'
  },
  orange: {
    25: '#FEFAF5',
    50: '#FEF6EE',
    100: '#FDEAD7',
    200: '#F9DBAF',
    300: '#F7B27A',
    400: '#F38744',
    500: '#EF6820',
    600: '#E04F16',
    700: '#B93815',
    800: '#932F19',
    900: '#772917',
    950: '#511C10'
  },
  'orange-light': {
    25: '#FFFCFA',
    50: '#FFF4ED',
    100: '#FFE6D5',
    200: '#FECCAA',
    300: '#FDAC74',
    400: '#FB8A3C',
    500: '#F97316',
    600: '#EA670C',
    700: '#C2570C',
    800: '#9A4A12',
    900: '#7C3D12',
    950: '#432007'
  },
  amber: {
    25: '#FFFBEB',
    50: '#FEF3C7',
    100: '#FDE68A',
    200: '#FDE68A',
    300: '#FCD34D',
    400: '#FBBF24',
    500: '#F59E0B',
    600: '#D97706',
    700: '#B45309',
    800: '#92400E',
    900: '#78350F',
    950: '#451A03'
  },
  yellow: {
    25: '#FEFDF0',
    50: '#FEFBE8',
    100: '#FEF7C3',
    200: '#FEEE95',
    300: '#FDE272',
    400: '#FAC515',
    500: '#EAAA08',
    600: '#CA8504',
    700: '#A15C07',
    800: '#A15C07',
    900: '#713B12',
    950: '#542C0D'
  },
  red: {
    25: '#FEF2F2',
    50: '#FEE2E2',
    100: '#FECACA',
    200: '#FCA5A5',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#EF4444',
    600: '#DC2626',
    700: '#B91C1C',
    800: '#991B1B',
    900: '#7F1D1D',
    950: '#450A0A'
  },

  // color extensions
  // #595A4A
  background: {
    DEFAULT: '#00120B',
    50: '#ffffff',
    100: '#e6e6e7',
    200: '#cecece',
    300: '#b5b5b6',
    400: '#848485',
    500: '#848485',
    600: '#6b6b6d',
    700: '#535354',
    800: '#3a3a3c',
    900: '#222223',
    950: '#09090b'
  },
  // primary: {
  //   DEFAULT: '#3c70ab',
  //   50: '#f3f6fc',
  //   100: '#e7edf7',
  //   200: '#c9d9ee',
  //   300: '#9abadf',
  //   400: '#6495cc',
  //   500: '#3c70ab',
  //   600: '#2f5e9a',
  //   700: '#274b7d',
  //   800: '#244168',
  //   900: '#223858',
  //   950: '#17243a'
  // },
  // primary: {
  //   DEFAULT: '#0E7090',
  //   25: '#F5FEFF',
  //   50: '#ECFDFF',
  //   100: '#CFF9FE',
  //   200: '#A5F0FC',
  //   300: '#67E3F9',
  //   400: '#22CCEE',
  //   500: '#06AED4',
  //   600: '#088AB2',
  //   700: '#0E7090',
  //   800: '#155B75',
  //   900: '#164C63',
  //   950: '#0D2D3A'
  // },
  primary: {
    DEFAULT: '#833ab4',
    50: '#fbf6fe',
    100: '#f4ebfc',
    200: '#ebdbf9',
    300: '#dbbff3',
    400: '#c595eb',
    500: '#ae6ce0',
    600: '#9a4dd0',
    700: '#833ab4',
    800: '#6f3495',
    900: '#5b2b78',
    950: '#3d1457'
  },
  secondary: {
    DEFAULT: '#fdc557',
    50: '#fff9eb',
    100: '#feedc7',
    200: '#feda89',
    300: '#fdc557',
    400: '#fca923',
    500: '#f6860a',
    600: '#da6105',
    700: '#b54108',
    800: '#93320d',
    900: '#792a0e',
    950: '#451303'
  },
  accent: {
    DEFAULT: '#D0FCE8',
    50: '#ebfef6',
    100: '#d0fce8',
    200: '#a3f7d5',
    300: '#68edc0',
    400: '#2cdba5',
    500: '#08c18f',
    600: '#009d75',
    700: '#007d60',
    800: '#02634e',
    900: '#035141',
    950: '#002e26'
  },
  error: {
    DEFAULT: '#F04438',
    foreground: '#FFFFFF',
    25: '#FFFBFA',
    50: '#FEF3F2',
    100: '#FEE4E2',
    200: '#FECDCA',
    300: '#FDA29B',
    400: '#F97066',
    500: '#F04438',
    600: '#D92D20',
    700: '#B42318',
    800: '#912018',
    900: '#7A271A',
    950: '#55160C'
  },
  warning: {
    DEFAULT: '#F79009',
    foreground: '#FFFFFF',
    25: '#FFFCF5',
    50: '#FFFAEB',
    100: '#FEF0C7',
    200: '#FEDF89',
    300: '#FEC84B',
    400: '#FDB022',
    500: '#F79009',
    600: '#DC6803',
    700: '#B54708',
    800: '#93370D',
    900: '#7A2E0E',
    950: '#4E1D09'
  },
  success: {
    DEFAULT: '#12B76A',
    foreground: '#ffffff',
    25: '#F6FEF9',
    50: '#ECFDF3',
    100: '#DCFAE6',
    200: '#ABEFC6',
    300: '#75E0A7',
    400: '#47CD89',
    500: '#17B26A',
    600: '#079455',
    700: '#067647',
    800: '#085D3A',
    900: '#074D31',
    950: '#053321'
  }
};

export default colors;
