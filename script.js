const allBtn = document.getElementsByClassName('btn');

// console.log(allBtn);
let count = 0;
for (let btn of allBtn) {
    btn.addEventListener('click', function (e) {
        count = count + 1;
        setInnerText('count', count);
        const placeName = e.target.parentNode.childNodes;
console.log(placeName)

    })
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}