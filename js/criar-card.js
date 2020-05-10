const ul = document.getElementById('lista-cribs');

function criarCard(photo, property_type, name, price) {
    const li = document.createElement('li');
    li.classList.add('card');

    const img = document.createElement('img');
    img.classList.add('card-img');
    img.src = photo;

    const div = document.createElement('div');
    div.classList.add('card-info');

    const h3 = document.createElement('h3');
    h3.classList.add('crib-title');
    if(name.length > 30) {
        h3.innerText = name
            .substring(0, 30)
            .concat('...')
            .toLowerCase();
    } else {
        h3.innerText = name.toLowerCase();
    }


    const h4 = document.createElement('h4');
    h4.classList.add('crib-type');
    h4.innerText = property_type;

    const p = document.createElement('p');
    p.classList.add('crib-price');
    p.innerText = `R$${price},00/dia`;

    ul.appendChild(li);
    li.appendChild(img);
    li.appendChild(div);
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(p);
}
