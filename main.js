//В лівій частині сторінки - перелік категорій.
// При натисканні на категорію в середній блок виводиться список товарів цієї категорії.
// Клік на товар - інформацію про товар у правому блоці.
// В інформації товару - кнопка “купити”.
// При натисканні на “купити” з'являється повідомлення, що товар куплений і повернення у вихідний стан програми ( коли відображається лише список категорій).


const category =document.querySelector('ul')
categorу.addEventListener('click',chooseShop)
function chooseShop(event){
    const choosenCatigory = Array.from(category.children)
    switch (event.target.textContent){
        case  choosenCatigory[0].textContent:
            ShowGoods.showCats();
            break;
        case  choosenCatigory[1].textContent:
            ShowGoods.showDogs()
            break;
        case  choosenCatigory[2].textContent:
            ShowGoods.showBirds()
            break;
        case  choosenCatigory[3].textContent:
            ShowGoods.showRodents()
            break;

    }
}
class ShowShop{
    static shop = document.querySelector('.shop')
    static showCats(){
        this.shop.innerHTML ='<h2>Товари</h2><ul><li>Feed</li><li>Health</li><li>Accesories</li><li>Wordrobe</li></ul>'
        this.shop.addEventListener('click', chooseCats)
    }
    static showDogs(){
        this.shop.innerHTML ='<h2>Товари</h2><ul><li>Feed</li><li>Health</li>Accesories<li>Wordrobe</li></ul>'
        this.goods.addEventListener('click', chooseDogs)
    }
    static showBirds(){
        this.shop.innerHTML ='<h2>Товари</h2><ul><li>Feed</li><li>Health</li><li>Accesories</li><li>Wordrobe</li></ul>'
        this.shop.addEventListener('click', chooseBirds())
    }
    static showRodents(){
        this.shop.innerHTML ='<h2>Товари</h2><ul><li>Feed</li><li>Health</li><li>Accesories</li><li>Wordrobe</li></ul>'
        this.shop.addEventListener('click', chooseRodents())
    }
}

function chooseCats(event){
    const info = document.querySelector('.info');
    switch(event.target.textContent){
        case 'Feed':
            info.innerHTML = '<h2>Інформация</h2><h3>Royal Canin Kitten</h3><img src="https://petchoice.ua/koshkam/suxoj-korm/royal-canin-kittent-dlya-kotyat"><button>Купить</button>;'
            break;
        case 'Health':
            info.innerHTML = '<h2>Інформация</h2><h3>Vitamin</h3><img src="https://petchoice.ua/koshkam/vitaminyi-i-dobavki"><button>Купить</button>;'
            break;
        case 'Accesories':
            info.innerHTML = '<h2>Інформация</h2><h3>Ammunition</h3><img src="https://petchoice.ua/koshkam/povodki-shlei"><button>Купить</button>;'
            break;
        case 'Wordrobe':
            info.innerHTML = '<h2>Інформация</h2><h3>Set of clothes</h3><img src="https://petchoice.ua/koshkam/odezhda"><button>Купить</button>;'
            break;

    }
    buttonOn()
}
function chooseDogs(event){
    const info = document.querySelector('.info');
    switch(event.target.textContent){
        case 'Feed':
            info.innerHTML = '<h2>Інформация</h2><h3>Royal Canin </h3><img src="https://petchoice.ua/sobakam/suxoj-korm/royal-canin-maxi-adult-dlya-sobak-krupnyix-porod"><button>Купить</button>;'
            break;
        case 'Health':
            info.innerHTML = '<h2>Інформация</h2><h3>Vitamin</h3><img src="https://petchoice.ua/sobakam/vitaminyi-i-dobavki"><button>Купить</button>;'
            break;
        case 'Accesories':
            info.innerHTML = '<h2>Інформация</h2><h3>Ammunition</h3><img src="https://petchoice.ua/sobakam/povodki-ruletki-shlei"><button>Купить</button>;'
            break;
        case 'Wordrobe':
            info.innerHTML = '<h2>Інформация</h2><h3>Set of clothes</h3><img src="https://petchoice.ua/sobakam/odezhda"><button>Купить</button>;'
            break;

    }
    buttonOn()
}

function chooseBirds(event){
    const info = document.querySelector('.info');
    switch(event.target.textContent){
        case 'Feed':
            info.innerHTML = '<h2>Інформация</h2><h3>Versele-Laga Prestig </h3><img src="https://petchoice.ua/pticzam/korm/versele-laga-prestige-korm-dlya-volnistyix-popugajchikov"><button>Купить</button>;'
            break;
        case 'Health':
            info.innerHTML = '<h2>Інформация</h2><h3>Vitamin</h3><img src="https://petchoice.ua/pticzam/vitaminyi-i-dobavki"><button>Купить</button>;'
            break;
        case 'Accesories':
            info.innerHTML = '<h2>Інформация</h2><h3>Ammunition</h3><img src="https://petchoice.ua/pticzam/aksessuaryi-dlya-kletok"><button>Купить</button>;'
            break;
        case 'Wordrobe':
            info.innerHTML = '<h2>Інформация</h2><h3>Cells and Varieties</h3><img src="https://petchoice.ua/pticzam/kletki-i-perenoski"><button>Купить</button>;'
            break;

    }
    buttonOn()
}

function chooseRodents(event) {
    const info = document.querySelector('.info');
    switch (event.target.textContent) {
        case 'Feed':
            info.innerHTML = '<h2>Інформация</h2><h3>Padovan Fieno-Hay</h3><img src="https://petchoice.ua/gryizunam/padovan-fieno-hay"><button>Купить</button>;'
            break;
        case 'Health':
            info.innerHTML = '<h2>Інформация</h2><h3>Vitamin</h3><img src="https://petchoice.ua/gryizunam/vitaminyi-i-dobavki"><button>Купить</button>;'
            break;
        case 'Accesories':
            info.innerHTML = '<h2>Інформация</h2><h3>Ammunition</h3><img src="https://petchoice.ua/gryizunam/kormushki"><button>Купить</button>;'
            break;
        case 'Wordrobe':
            info.innerHTML = '<h2>Інформация</h2><h3>Set of clothes</h3><img src="https://petchoice.ua/gryizunam/domiki-i-lezhanki"><button>Купить</button>;'
            break;

    }
    buttonOn()
}
function buttonOn() {
    const button = document.querySelector('button')
    button.addEventListener('click', onchase)
    function onchase(){
        const name = document.querySelector('h3')
        alert(`Ваша покупка ${name.textContent}`)
        location.reload()
    }
}


