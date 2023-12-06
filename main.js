//В лівій частині сторінки - перелік категорій.
// При натисканні на категорію в середній блок виводиться список товарів цієї категорії.
// Клік на товар - інформацію про товар у правому блоці.
// В інформації товару - кнопка “купити”.
// При натисканні на “купити” з'являється повідомлення, що товар куплений і повернення у вихідний стан програми ( коли відображається лише список категорій).


const category =document.querySelector('li')
categorу.addEventListener('click',chooseCateg)
function chooseCateg(event){
    const choosenCatigory = Array.from(category.children)
    switch (event. target. textContent){
        case choosenCatigory[0].textContent:
            ChooseShop.showCats;
            break;
        case choosenCatigory[1].textContent:
            ChooseShop.showDogs;
            break;
            case choosenCatigory[2].textContent:
                ChooseShop.showBirds;
                break;
        case choosenCatigory[3].textContent:
            ChooseShop.showRodents;
            break;

    }
}
function chooseCats(event) {
    const info = document.querySelector('.info');
    switch (event.target.textContent) {
        case 'Feed':
            createInfo(shopInfo.cats.feed)
            break;
        case 'Health':
            createInfo(shopInfo.cats.health)
            break;
        case 'Accesories':
            createInfo(shopInfo.cats.accessories)
            break;
        case 'Wordrobe':
            createInfo(shopInfo.cats.wordrobe)
            break;
    }
}
    buttonOn()

function chooseDogs(event) {
    const info = document.querySelector('.info');
    switch (event.target.textContent) {
        case 'Feed':
            createInfo(shopInfo.dogs.feed)
            break;
        case 'Health':
            createInfo(shopInfo.dogs.health)
            break;
        case 'Accesories':
            createInfo(shopInfo.dogs.accessories)
            break;
        case 'Wordrobe':
            createInfo(shopInfo.dogs.wordrobe)
            break;
    }
}
buttonOn()

function chooseBirds(event) {
    const info = document.querySelector('.info');
    switch (event.target.textContent) {
        case 'Feed':
            createInfo(shopInfo.birds.feed)
            break;
        case 'Health':
            createInfo(shopInfo.birds.health)
            break;
        case 'Accesories':
            createInfo(shopInfo.birds.accessories)
            break;
        case 'Wordrobe':
            createInfo(shopInfo.birds.wordrobe)
            break;
    }
}
buttonOn()

function chooseRodents(event) {
    const info = document.querySelector('.info');
    switch (event.target.textContent) {
        case 'Feed':
            createInfo(shopInfo.rodentss.feed)
            break;
        case 'Health':
            createInfo(shopInfo.rodents.health)
            break;
        case 'Accesories':
            createInfo(shopInfo.rodents.accessories)
            break;
        case 'Wordrobe':
            createInfo(shopInfo.rodents.wordrobe)
            break;
    }
}
buttonOn()


const shopInfo{

    cats:{
        Feed:{
            name:'Royal Canin Kitten'
            picture:'https://petchoice.ua/koshkam/suxoj-korm/royal-canin-kittent-dlya-kotyat'

        }
        Health:{
            name:'Vitamin'
            picture:'https://petchoice.ua/koshkam/vitaminyi-i-dobavki'

        }
        Accessories:{
            name:'Ammunition'
            picture:'https://petchoice.ua/koshkam/povodki-shlei'

        }
        Wordrobe:{
            name:'Set of clothes'
            picture:'https://petchoice.ua/koshkam/odezhda'
        }

    },
,
    dogs:{
        Feed:{
            name:'Royal Canin'
            picture:'https://petchoice.ua/sobakam/suxoj-korm/royal-canin-maxi-adult-dlya-sobak-krupnyix-porod'

        }
        Health:{
            name:'Vitamin'
            picture:'https://petchoice.ua/sobakam/vitaminyi-i-dobavki'

        }
        Accessories:{
            name:'Ammunition'
            picture:'https://petchoice.ua/sobakam/povodki-ruletki-shlei'

        }
        Wordrobe:{
            name:'Set of clothes'
            picture:'https://petchoice.ua/sobakam/odezhda'
        }

    },

    birds:{
        Feed:{
            name:'Versele-Laga Prestige'
            picture:'https://petchoice.ua/pticzam/korm/versele-laga-prestige-korm-dlya-volnistyix-popugajchikov'

        }
        Health:{
            name:'Vitamin'
            picture:'https://petchoice.ua/pticzam/vitaminyi-i-dobavki'

        }
        Accessories:{
            name:'Ammunition'
            picture:'https://petchoice.ua/pticzam/aksessuaryi-dlya-kletok'

        }
        Wordrobe:{
            name:'Cells and Varieties'
            picture:'https://petchoice.ua/pticzam/kletki-i-perenoski'
        }

    },
    rodents:{
        Feed:{
            name:'Padovan Fieno-Hay '
            picture:'https://petchoice.ua/gryizunam/padovan-fieno-hay'

        }
        Health:{
            name:'Vitamin'
            picture:'https://petchoice.ua/gryizunam/vitaminyi-i-dobavki'

        }
        Accessories:{
            name:'Ammunition'
            picture:'https://petchoice.ua/gryizunam/kormushki'

        }
        Wordrobe:{
            name:'Set of clothes'
            picture:'https://petchoice.ua/gryizunam/domiki-i-lezhanki'
        }
    }
}

    function createInfo(item){
        const info = document.querySelector('.info');
        info.innerHTML =`<h2>Інформация</h2><h3>${item.name}</h3><img src=${item.picture}><button>Купити</button>;`;
        buttonOn()
