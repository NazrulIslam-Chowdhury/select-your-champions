function recruitmentCost(fieldId) {
    const recruitmentPriceField = document.getElementById(fieldId);
    const recruitmentPriceString = recruitmentPriceField.value;
    const recruitmentPrice = parseInt(recruitmentPriceString);
    if (isNaN(recruitmentPrice)) {
        alert("Input only numbers!");
        return;
    }
    return recruitmentPrice;
}

function setTextElementById(elementId, newValue) {
    const totalPlayerPriceElement = document.getElementById(elementId);
    totalPlayerPriceElement.innerText = newValue;
}

document.getElementById('calculation').addEventListener('click', function () {
    const recruitmentPlayerPrice = recruitmentCost('perP-cost');

    const totalPlayerPrice = recruitmentPlayerPrice * 5;
    setTextElementById('player-expenses', totalPlayerPrice);
})

document.getElementById('total-calculation').addEventListener('click', function () {
    const recruitmentManagerPrice = recruitmentCost('manager-cost');
    const recruitmentCoahPrice = recruitmentCost('coach-cost');

    const recruitmentPlayerPrice = recruitmentCost('perP-cost');
    const totalPlayerPrice = recruitmentPlayerPrice * 5;

    const finalRecruitmentCost = totalPlayerPrice + recruitmentManagerPrice + recruitmentCoahPrice;
    setTextElementById('calculate-total', finalRecruitmentCost);
})