import loadHome from "./homePage";
import loadMenu from "./menu";
import loadContact from "./contact";

function createHeader() {

    const header = document.createElement('header');
    header.classList.add('header')

    const caption = document.createElement('h1');
    caption.textContent = 'Restaurant Name';
    caption.classList.add('caption');

    header.appendChild(caption);
    header.appendChild(createNav());

    return header;
}

function createNav(){

    const navBar = document.createElement('div');
    navBar.classList.add('navigation');

    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    homeButton.classList.add('navButton');
    homeButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeButton);
        loadHome();
      });

    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    menuButton.classList.add('navButton');
    menuButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(menuButton);
        loadMenu();
      });

    const contactButton = document.createElement('button');
    contactButton.textContent = 'Contact';
    contactButton.classList.add('navButton');
    contactButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(contactButton);
        loadContact();
      });

    navBar.appendChild(homeButton);
    navBar.appendChild(menuButton);
    navBar.appendChild(contactButton);

    return navBar;
}
    function setActiveButton(button){
        const buttons = document.querySelectorAll('.navButton');

        buttons.forEach((btn) => {
            if (btn !== button) {
                btn.classList.remove("active");
            }
        });

        button.classList.add("active")
    }

    function createMain() {
        const main = document.createElement("main");
        main.setAttribute("id", "main");
        return main;
      }

    function createFooter(){

    const footer = document.createElement('div');
    footer.classList.add("footer");

    const copyright = document.createElement("p");
    copyright.textContent = `Copyright © ${new Date().getFullYear()} michalosman`;

    const githubLink = document.createElement("a");
    githubLink.href = "https://github.com/michalosman";

    const githubIcon = document.createElement("i");
    githubIcon.classList.add("fab");
    githubIcon.classList.add("fa-github");

    githubLink.appendChild(githubIcon);
    footer.appendChild(copyright);
    footer.appendChild(githubLink);

    return footer;
    }

    function initializeWebsite() {
        const content = document.getElementById("content");

        content.appendChild(createHeader());
        content.appendChild(createMain());
        content.appendChild(createFooter());

        setActiveButton(document.querySelector(".navButton"));
        loadHome();
      }

export default initializeWebsite;