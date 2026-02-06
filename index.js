//Problem-01: New Price for Eid Sale
function newPrice(currentPrice , discount ) {
    if (typeof currentPrice === "string" || typeof discount === 'string' || discount < 0 || discount > 100) {
        return "Invalid";
    }
    const discountAmount = (currentPrice * discount) / 100;
    const newPrice = currentPrice - discountAmount;
    return newPrice.toFixed(3);
}

//Problem-02: OTP Validation for Zapshift
function validOtp(otp) {
    if( typeof otp !== 'string'){
        return 'Invalid '
    }
    if(otp.length === 8 && otp.startsWith("ph-")){
        return true
    }
    return false
}

//Problem-03: BCS Final Score Calculator
function finalScore (omr) {
    if (typeof omr !== 'object' || Array.isArray(omr)){
        return 'Invalid';
    }
    total_questions = 0;
    for (const [key,value] of Object.entries(omr)){
        if (typeof value !== 'number'){
            return 'Invalid'
        }
        total_questions += value;
    }
    if (total_questions > 100){
        return "Invalid";
    } 
    const final_score = (omr.right * 1) - (omr.wrong * 0.5)
    return Math.round(final_score)
}
console.log(finalScore({ right: 30, wrong: 30, skip: 40 }))




