function getMemoryBtn(isfree) {
    const memoryCost = document.getElementById('memory-cost');
    const PreviousMemoryTotal = parseFloat(memoryCost.innerText);
    let newMemoryTotal;

    if (isfree == true) {
        newMemoryTotal = 0;
    }
    else {
        newMemoryTotal = 100;
    }
    memoryCost.innerText = newMemoryTotal;
    return newMemoryTotal;
}
function storageBtn(btnName) {
    const storageCost = document.getElementById('storage-cost');
    const previousStorageTotal = parseFloat(storageCost.innerText);
    let newStorageTotal;
    if (btnName == 'storage-256gb') {
        newStorageTotal = 0;

    }
    else if (btnName == 'storage-512gb') {
        newStorageTotal = 250;
    }
    else if (btnName == 'storage-1tb') {
        newStorageTotal = 500;
    }
    storageCost.innerText = newStorageTotal;
    return newStorageTotal;

}
function deliveryUpdate(isfree) {
    const deliveryCost = document.getElementById('del-charge');
    let delCostValue = parseFloat(deliveryCost.innerText);
    if (isfree == true) {
        delCostValue = 0;
    }
    else {
        delCostValue = 20;
    }
    deliveryCost.innerText = delCostValue;
    return delCostValue;
}
function getElementById(elementId) {
    const elementValue = document.getElementById(elementId);
    const value = parseFloat(elementValue.innerText);
    elementValue.innerText = value;
    return value;

}
function totalCost() {
    const totalCost = document.getElementById('total-price');
    const totalCostValue = 1299;
    const memory = getElementById('memory-cost');
    const storage = getElementById('storage-cost');
    const delivery = getElementById('del-charge');
    const updateTotal = totalCostValue + memory + storage + delivery;
    totalCost.innerText = updateTotal;
}
//8gb memory set
document.getElementById('8gb-memory-btn').addEventListener('click', function () {
    getMemoryBtn(true);
    totalCost();
});
//16gb Memory set
document.getElementById('16gb-memory-btn').addEventListener('click', function () {
    getMemoryBtn(false);
    totalCost();
});
//256 gb storage
document.getElementById('storage-256gb').addEventListener('click', function () {
    storageBtn('storage-256gb');
    totalCost();
});
//512 gb storage
document.getElementById('storage-512gb').addEventListener('click', function () {
    storageBtn('storage-512gb');
    totalCost();
});
//1tb storage
document.getElementById('storage-1tb').addEventListener('click', function () {
    storageBtn('storage-1tb');
    totalCost();
});
//delivery
document.getElementById('free').addEventListener('click', function () {
    deliveryUpdate(true);
    totalCost();
});
document.getElementById('delivery-cost').addEventListener('click', function () {
    deliveryUpdate(false);
    totalCost();
});





