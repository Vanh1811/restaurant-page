function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu')

    menu.appendChild(createMenuItem( "BEEF WELLINGTON", "beef fillet, olive oil,chestnut mushroom, butter, fresh thyme, white wine, prosciutto, flour, egg yolks"));

    menu.appendChild(createMenuItem("STUFFED PORK TENDERLOIN", "pork loin, Manchego cheese, membrillo, sage sprigs, Olive oil, garlic, thyme sprig, medium-dry sherry"));

    menu.appendChild(createMenuItem("STUFFED LAMB", "onion, garlic cloves, olive oil, pine nuts, young spinach, feta cheese, boned saddle of lamb, sumac"));

    menu.appendChild(createMenuItem("ROASTED ROOT VEGETABLES", "parsnips, stems, carrots, red onion, baby turnips, fresh ginger, chicken stock, chopped fresh herbs"));

    menu.appendChild(createMenuItem("MICHIGAN FRENCH TOAST SANDWICH", "eggs, granulated sugar, heavy cream, red apples, apple cognac, white sandwich bread, Thimbleberry jam"));

    menu.appendChild(createMenuItem("ROAST TURKEY", "free-range turkey, sea salt, ground black pepper, onions, lemon, garlic, bay leaves, smoked streaky bacon"));

    return menu;
}

    function createMenuItem(name, description){
        const menuItem = document.createElement("div");
        menuItem.classList.add('menuItems')

        const foodName = document.createElement('h2');
        foodName.textContent = name;

        const foodDescription = document.createElement('p');
        foodDescription.textContent = description;

        const foodImage = document.createElement("img");
        foodImage.src = `/restaurant_image.jpeg`;
        foodImage.alt = `${name}`;

        menuItem.appendChild(foodImage);
        menuItem.appendChild(foodName);
        menuItem.appendChild(foodDescription);

        return menuItem
    }

    function loadMenu() {
        const main = document.getElementById("main");
        main.textContent = "";
        main.appendChild(createMenu());
      }

export default loadMenu;