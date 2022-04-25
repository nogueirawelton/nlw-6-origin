export default class Menu {
  constructor(menu, buttons) {
    this.buttons = document.querySelectorAll(buttons);
    this.menu = document.querySelector(menu);
    this.links = this.menu.querySelectorAll('a');
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.menu.classList.toggle('header__nav__menu--active');
  }

  addLinksEvent() {
    this.links.forEach((link) => {
      link.addEventListener('click', this.handleClick);
    });
  }

  addMenuEvent() {
    this.buttons.forEach((button) => {
      button.addEventListener('click', this.handleClick);
    });
  }

  init() {
    if (this.menu && this.buttons) {
      this.addMenuEvent();
      this.addLinksEvent();
    }
    return this;
  }
}
