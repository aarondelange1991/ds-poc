const plugin = require('tailwindcss/plugin');

const colors = {
    // primary: '#F58220',
    primary: '#58595B',
    secondary: '#58595B',
};

const fontWeight = {
    regular: '400',
    bold: '800',
};

const borderRadius = {
    default: '4px',
};

const screens = {
    sm: { max: '640px' },
    md: { min: '641px', max: '960px' },
    lg: { min: '961px', max: '1280px' },
    xl: { min: '1281px', max: '1600px' },
    xxl: { min: '1601px' },
};

const opacity = {
    100: '100%',
    50: '50%',
};

const variants = {
    alignContent: [],
    alignItems: [],
    alignSelf: [],
    appearance: [],
    backgroundAttachment: [],
    backgroundColor: [],
    backgroundPosition: [],
    backgroundRepeat: [],
    backgroundSize: [],
    borderCollapse: [],
    borderColor: [],
    borderRadius: [],
    borderStyle: [],
    borderWidth: [],
    boxShadow: [],
    cursor: [],
    display: [],
    fill: [],
    flex: [],
    flexDirection: [],
    flexGrow: [],
    flexShrink: [],
    flexWrap: [],
    float: [],
    fontFamily: [],
    fontSize: [],
    fontSmoothing: [],
    fontStyle: [],
    fontWeight: [],
    gridTemplateColumns: ['responsive'],
    height: [],
    inset: [],
    justifyContent: [],
    letterSpacing: [],
    lineHeight: [],
    listStylePosition: [],
    listStyleType: [],
    margin: [],
    maxHeight: [],
    maxWidth: [],
    minHeight: [],
    minWidth: [],
    objectFit: [],
    objectPosition: [],
    opacity: [],
    order: [],
    outline: [],
    overflow: [],
    padding: [],
    pointerEvents: [],
    position: [],
    resize: [],
    stroke: [],
    tableLayout: [],
    textAlign: [],
    textColor: [],
    textDecoration: [],
    textTransform: [],
    userSelect: [],
    verticalAlign: [],
    visibility: [],
    whitespace: [],
    width: [],
    wordBreak: [],
    zIndex: [],
};

const corePlugins = {
    fontSmoothing: false,
};

module.exports = {
    theme: {
        colors,
        fontWeight,
        borderRadius,
        screens,
        opacity,
    },
    variants,
    corePlugins,
    plugins: [
        require('./tailwind-scss-variables')(
            [
                'theme.colors',
                'theme.fontWeight',
                'theme.borderRadius',
                'theme.opacity',
                'theme.screens',
            ],
            './src/global/ds-poc-styling.variables.scss',
        ),
    ],
};
