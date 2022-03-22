let mouseOverBtn = false;
let mouseOverToggleNav = false;
let toggled = false;

let enterMouseBtn = function () {
  mouseOverBtn = true;

  if (toggled === false) {
    // Het is niet nodig om de volgende stappen keer op keer te doorlopen, dus
    //daarom heb ik 'toggled' om aan te geven of the toggle-bar al zichtbaar
    // is. Levert het echt voordeel op om deze check te doen, of maakt het qua
    // computer'energie' niet zoveel uit, en maak ik het onnodig complex?
    let getToggleNav = document.querySelector(".toggle-nav");
    let getSidebarOptions = document.querySelectorAll(".toggle-nav li");
    let arrayLength = getSidebarOptions.length;

    let color_buttonList = document.getElementsByName("color_button");

    for (i = 0; i < arrayLength; i++) {
      getSidebarOptions[i].style.backgroundColor = color_buttonList[i].value;
    }

    getToggleNav.style.height = arrayLength * 64 + "px";
    toggled = true;
  }
};

let enterMouseNav = function () {
  mouseOverToggleNav = true;
};

let leaveMouseBtn = function () {
  mouseOverBtn = false;

  let delayinMilliseconds = 100;
  // is dit de beste manier om ervoor te zorgen dat de
  // 'enterMouseNav functie wordt uitgevoerd voordat de
  // leaveMouseBtn de togglebar weg haalt?
  setTimeout(function () {
    if (mouseOverToggleNav === false) {
      let getToggleNav = document.querySelector(".toggle-nav");
      getToggleNav.style.height = 0;
      toggled = false;
    }
  }, delayinMilliseconds);
};

let leaveMouseNav = function () {
  mouseOverToggleNav = false;

  if (mouseOverBtn === false) {
    let getToggleNav = document.querySelector(".toggle-nav");
    getToggleNav.style.height = 0;
    toggled = false;
  }
};

let changeBackgroundColor = function () {
  let selection = document.querySelector('input[name="color_button"]:checked');

  let colorSelected = selection.value;
  let colorSelectedName = selection.id;

  document.body.style.backgroundColor = colorSelected;

  let textLine = document.getElementById("text_line");
  textLine.innerHTML = "The current colour is " + colorSelectedName;

  mouseOverToggleNav = false;
  mouseOverBtn = false;
  let getToggleNav = document.querySelector(".toggle-nav");
  getToggleNav.style.height = 0;
  toggled = false;
};

const keyBoard = document.querySelector("body");
keyBoard.addEventListener("keydown", (e) => {
  let color_buttonList = document.getElementsByName("color_button");
  color_buttonList[e.key - 1].checked = true;
  changeBackgroundColor();
  //   document.getElementById("toggle-btn").focus();
  // Als de kleur eerst met de muis geselecteerd wordt, en daarna via
  // het toetsenbord, dan komt er een zwart-witte ring om de radio-button
  // die als laatste met de muis geselecteerd was. Ik dacht dat het een
  // 'focus' probleem was, maar de bovenstaande poging om de fucus op
  // the toggle-btn te zetten, hielp niet.
});
