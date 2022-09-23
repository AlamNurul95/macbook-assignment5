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
}
//8gb memory set
document.getElementById('8gb-memory-btn').addEventListener('click', function () {
    getMemoryBtn(true);
});
//16gb Memory set
document.getElementById('16gb-memory-btn').addEventListener('click', function () {
    getMemoryBtn(false);
});
//256 gb storage
document.getElementById('storage-256gb').addEventListener('click', function () {
    storageBtn('storage-256gb');
})
//512 gb storage
document.getElementById('storage-512gb').addEventListener('click', function () {
    storageBtn('storage-512gb');
});
//1tb storage
document.getElementById('storage-1tb').addEventListener('click', function () {
    storageBtn('storage-1tb');
});
//delivery
document.getElementById('free').addEventListener('click', function () {
    deliveryUpdate(true);
});
document.getElementById('delivery-cost').addEventListener('click', function () {
    deliveryUpdate(false);
});





