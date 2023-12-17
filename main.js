//В лівій частині сторінки - перелік категорій.
// При натисканні на категорію в середній блок виводиться список товарів цієї категорії.
// Клік на товар - інформацію про товар у правому блоці.
// В інформації товару - кнопка “купити”.
// При натисканні на “купити” з'являється повідомлення, що товар куплений і повернення у вихідний стан програми ( коли відображається лише список категорій).

// Модифікувати інтернет-магазин таким чином, щоб була можливість переглянути всі збережені замовлення навіть після оновлення сторінки (використовувати localStorage).
// На сторінці спочатку крім списку категорій відображається також кнопка “мої замовлення”.
// При кліку на “мої замовлення” - пропадають категорії та відображається список усіх замовлень користувача (дата та ціна) - при кліку на замовлення - “розгортаються” деталі замовлення.
// Реалізувати можливість видалення замовлення зі списку.

const category = document.querySelector('ul')
categorу.addEventListener('click', chooseShop)

function chooseShop(event) {
    const choosenCatigory = Array.from(category.children)
    switch (event.target.textContent) {
        case  choosenCatigory[0].textContent:
            ShowShop.showCats();
            break;
        case  choosenCatigory[1].textContent:
            ShowShop.showDogs()
            break;
        case  choosenCatigory[2].textContent:
            ShowShop.showBirds()
            break;
        case  choosenCatigory[3].textContent:
            ShowShop.showRodents()
            break;

    }
}

class ShowGoods {
    static goods = document.querySelector('.shop')

    static showCats() {
        this.goods.innerHTML = '<h2>Товари</h2><ul><li>Feed</li><li>Health</li><li>Accesories</li><li>Wordrobe</li></ul>'
        this.goods.addEventListener('click', chooseCats)
    }

    static showDogs() {
        this.goods.innerHTML = '<h2>Товари</h2><ul><li>Feed</li><li>Health</li>Accesories<li>Wordrobe</li></ul>'
        this.goods.addEventListener('click', chooseDogs)
    }

    static showBirds() {
        this.goods.innerHTML = '<h2>Товари</h2><ul><li>Feed</li><li>Health</li><li>Accesories</li><li>Wordrobe</li></ul>'
        this.shop.addEventListener('click', chooseBirds())
    }

    static showRodents() {
        this.goods.innerHTML = '<h2>Товари</h2><ul><li>Feed</li><li>Health</li><li>Accesories</li><li>Wordrobe</li></ul>'
        this.goods.addEventListener('click', chooseRodents())
    }
}

function chooseCats(event) {
    switch (event.target.textContent) {
        case 'Feed':
            createInfo(goodsInfo.Feed)
            break;
        case 'Health':
            createInfo(goodsInfo.Health)
            break;
        case 'Accesories':
            createInfo(goodsInfo.Accesories)
            break;
        case 'Wordrobe':
            createInfo(goodsInfo.Wordrobe)
            break;

    }
}

function chooseDogs(event) {
    switch (event.target.textContent) {
        case 'Feed':
            createInfo(goodsInfo.Feed)
            break;
        case 'Health':
            createInfo(goodsInfo.Health)
            break;
        case 'Accesories':
            createInfo(goodsInfo.Accesories)
            break;
        case 'Wordrobe':
            createInfo(goodsInfo.Wordrobe)
            break;

    }
    buttonOn()
}

function chooseBirds(event) {
    switch (event.target.textContent) {
        case 'Feed':
            createInfo(goodsInfo.Feed)
            break;
        case 'Health':
            createInfo(goodsInfo.Health)
        case 'Accesories':
            createInfo(goodsInfo.Accesories)
            break;
        case 'Wordrobe':
            createInfo(goodsInfo.Wordrobe)
            break;

    }
}

function chooseRodents(event) {
    switch (event.target.textContent) {
        case 'Feed':
            createInfo(goodsInfo.Feed)
            break;
        case 'Health':
            createInfo(goodsInfo.Health)
            break;
        case 'Accesories':
            createInfo(goodsInfo.Accesories)
            break;
        case 'Wordrobe':
            createInfo(goodsInfo.Wordrobe)
            break;

    }

}

function createInfo(item) {
    const info = document.queryselector('•info');
    info.innerHTML = <h2>Інформація</h2>
    <h3 id='name'>${item.name}</h3>
    <img src=${item.picture}><h4 id='price'>${item.price}$</h4>
        <button class='button'>Купити
            buttonon(item)
            }


            const goodsInfo{
                cats:{
                Feed:{
                name:'Royal Canin Kitten',
                picture:'https://petchoice.ua/koshkam/suxoj-korm/royal-canin-kittent-dlya-kotyat'
            }
                Health:{
                name:'Vitamin',
                picture:'https://petchoice.ua/koshkam/vitaminyi-i-dobavki',
            }
                Accesories:{
                name:'Ammunition',
                picture: 'https://petchoice.ua/koshkam/povodki-shlei',
            }
                Wordrobe:{
                name:'c',
                picture:'https://petchoice.ua/koshkam/odezhda' ,
            }
            },
                dogs:{
                Feed:{
                name:'Royal Canin',
                picture: 'https://petchoice.ua/sobakam/suxoj-korm/royal-canin-maxi-adult-dlya-sobak-krupnyix-porod',
            }
                Health:{
                name:'Vitamin',
                picture:'https://petchoice.ua/sobakam/vitaminyi-i-dobavki',
            }
                Accesories:{
                name:'Ammunition',
                picture:'https://petchoice.ua/sobakam/povodki-ruletki-shlei',
            }
                Wordrobe:{
                name:'Set of clothes',
                picture:'https://petchoice.ua/sobakam/odezhda"',
            }
            },
                birds:{
                Feed:{
                name:'Versele-Laga Prestig',
                picture:'https://petchoice.ua/pticzam/korm/versele-laga-prestige-korm-dlya-volnistyix-popugajchikov',
            }
                Health:{
                name:'Vitamin',
                picture:'ttps://petchoice.ua/pticzam/vitaminyi-i-dobavki',
            }
                Accesories:{
                name:'Amunition',
                picture:'https://petchoice.ua/pticzam/aksessuaryi-dlya-kletok',
            }
                Wordrobe:{
                name:'Cells and Varieties',
                picture:'https://petchoice.ua/pticzam/kletki-i-perenoski',
            }
            },
                rodents:{
                Feed:{
                name:'Padovan Fieno',
                picture:'https://petchoice.ua/gryizunam/padovan-fieno-ha',
            }
                Health:{
                name:'Vitamin',
                picture:'https://petchoice.ua/gryizunam/vitaminyi-i-dobavki',
            }
                Accesories:{
                name:'Aminition',
                picture:'https://petchoice.ua/gryizunam/kormushki',
            }
                Wordrobe:{
                name:'Set of clothes',
                picture:'https://petchoice.ua/gryizunam/domiki-i-lezhanki',
            }
            }

                function button1(item) {
                const button = document.querySelector('button')
                button.addEventListener('click', purchase)
                function (purchase){
                const name = document.querySelector('h3')
                alert(`Ваша покупка ${name.textContent}`)
                const date =new Date()
                const date=Json.stringify([item.date.toUTString()])
                location.reload()
            }
            }

                const basket =document.querySelector('p')
                basket.addEventListener('click',showBuyList)

                function showBuyList(){
                const bylist=document.querySelector('category')
                buylist.innerHTML="";ShowGoods.innerHTML=<'ul id='boughtItems'><ul>'
                const info =document.querySelector('.info');
                info.innerHTML='';


                const boughtItems = document.querySelector ('#boughtItems')
                for (let i=0;i<localStorage.lenght;i++)
                const key = localStorage.key(i);
                const value = JSON. parse (localStorage. getItem (key))
                const li = document. createElement (li)
                li.className ='boughtItems'
                li.id = Key
                li.textContent = '${key}, ${value[0].price}$, ${value[1]}*)
                const button = document. createElement ('button')
                button.innerText='remove'
                li.appendChild(button)
                boughtItems. appendChild(li)

            }
                }
                



