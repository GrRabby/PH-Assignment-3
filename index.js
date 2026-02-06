//Problem-01: New Price for Eid Sale
function newPrice(currentPrice , discount ) {
    if (typeof currentPrice === "string" || typeof discount === 'string' || discount < 0 || discount > 100) {
        return "Invalid string";
    }
    const discountAmount = (currentPrice * discount) / 100;
    const newPrice = currentPrice - discountAmount;
    return newPrice.toFixed(3);
}

