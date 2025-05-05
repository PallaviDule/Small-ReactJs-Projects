const symbolToValue = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

export const convertRomanValueToInteger = (romNum) => {
    let intValue = 0;

    if(!romNum) return intValue;

    for(let i=0; i<romNum.length; i++) {
        let curValue = symbolToValue[romNum[i]]; 
        let nextValue = symbolToValue[romNum[i+1]];
        
        if(nextValue > curValue) {
            intValue -= curValue;
        } else  {
            intValue += curValue;
        } 
    }
    return intValue;
}

export const convertIntegerToRoman = (intValue) => {
    let value = ''; 

    if(!intValue) return null;
}