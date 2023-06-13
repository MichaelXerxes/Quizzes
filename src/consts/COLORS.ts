export const DEFAULT_COLORS={
    primary:'#939393',
    secondary:'#D4901D',
    white:'#fff',
    dark:'#010101',
    yellow:'#F5E65E',
    grey:'#959595',
    lightBlue:'#C9DEEE',
    red:"#A33027",
    cream:"#F7F0AB",
    green:"green",
    silver:"#C0C0C0",
    darkBlack:'#010101'

};
export const BLACK_WHITE_COLORS={
    primary:'#010101',
    secondary:'#fff',
    white:'#010101',
    dark:'#fff',
    yellow:'#fff',
    grey:'#010101',
    lightBlue:'#fff',
    red:"#010101",
    cream:"#fff",
    green:"#fff",
    silver:"#C0C0C0",
    darkBlack:'#010101'

};
function randomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
}

export const getRandomColors=()=>{
    return {
        primary: randomColor(),
        secondary: randomColor(),
        white: randomColor(),
        dark: randomColor(),
        yellow: randomColor(),
        grey: randomColor(),
        lightBlue: randomColor(),
        red: randomColor(),
        cream: randomColor(),
        green: randomColor(),
        silver: randomColor(),
        darkBlack:randomColor(),
    };
}; 