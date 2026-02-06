//Problem-01: New Price for Eid Sale
function newPrice(currentPrice , discount ) {
    if (typeof currentPrice !== "number" || typeof discount !== 'number' || discount < 0 || discount > 100) {
        return "Invalid";
    }
    const discountAmount = (currentPrice * discount) / 100;
    const newPrice = currentPrice - discountAmount;
    return Number(newPrice.toFixed(3));
}
//Problem-02: OTP Validation for Zapshift
function validOtp(otp) {
    if( typeof otp !== 'string'){
        return 'Invalid'
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
    let total_questions = 0;
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

//Problem-04: Upcoming Gono Vote
function gonoVote(array) {
    if(!Array.isArray(array)){
        return 'Invalid'
    }
    let ha_vote = 0
    let na_vote = 0
    for (const vote of array){
        if (vote === 'ha'){
            ha_vote += 1     
        }else if (vote === 'na'){
            na_vote += 1
        }
    }
    if (ha_vote > na_vote){
        return true
    }else if(ha_vote === na_vote){
        return 'equal'
    }else{
        return false 
    }
}

//Problem-05: Text Analyzer for an AI Company
function  analyzeText(str) {
    if(typeof str !== 'string' || !str.trim()){
        return 'Invalid'
    }
    let longest_word = ""
    const words_array = str.split(' ')
    const text_summary = {}
    for(const words of words_array){
        if (words.length > longest_word.length){
            longest_word = words
        }
    }
    text_summary.longwords = longest_word
    text_summary.token = words_array.join("").length
    return text_summary
}








