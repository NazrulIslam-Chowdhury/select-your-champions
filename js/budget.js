function recruitmentCost(fieldId) {
    const recruitmentCostField = document.getElementById(fieldId);
    const recruitmentCostString = recruitmentCostField.value;
    const recruitmentCost = parseInt(recruitmentCostString);
    if (isNaN(recruitmentCost)) {
        alert("Input only numbers!");
        return recruitmentCost();
    }
    return recruitmentCost;
}

function setTextElementById(elementId, newValue) {
    const totalPlayerCostElement = document.getElementById(elementId);
    totalPlayerCostElement.innerText = newValue;
}

document.getElementById('calculation').addEventListener('click', function () {
    const recruitmentPlayerCost = recruitmentCost('perP-cost');

    const totalPlayerCost = recruitmentPlayerCost * 5;
    setTextElementById('player-expenses', totalPlayerCost);
})

document.getElementById('total-calculation').addEventListener('click', function () {
    const recruitmentManagerCost = recruitmentCost('manager-cost');
    const recruitmentCoahCost = recruitmentCost('coach-cost');

    const recruitmentPlayerCost = recruitmentCost('perP-cost');
    const totalPlayerCost = recruitmentPlayerCost * 5;

    const finalRecruitmentCost = totalPlayerCost + recruitmentManagerCost + recruitmentCoahCost;
    setTextElementById('calculate-total', finalRecruitmentCost);
})