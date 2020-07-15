const items = [
    { item: "single", cost: 99, id: "single" },
    { item: "double", cost: 199, id: "double" },
    { item: "lux", cost: 299, id: "lux" },
    { item: "mix", cost: 399, id: "mix" }
];
const cart = {};

items.forEach(function (ele) {
    console.log(ele);
    let div = document.createElement('div');
    div.innerHTML = `<h3>${ele.item}</h3>$${ele.cost}`;
    div.style.border = "1px solid #ddd";
    div.style.display = "flex";
    div.style.width = "100px";
    document.body.appendChild(div);
    div.addEventListener('click', function () {
        let namer = ele.item.toLocaleLowerCase();
        console.log(namer);

        if (!cart[namer]) {
            cart[namer] = {
                name: ele.item,
                price: ele.cost,
                quantity: 1,
                subtotal: function () {
                    return this.price * this.quantity
                }
            }
        } else {
            cart[namer].quantity++
        }
    }
    )
