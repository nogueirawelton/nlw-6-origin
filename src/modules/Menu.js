export default class Menu {
  constructor(menu, buttons) {
    this.buttons = document.querySelectorAll(buttons);
    this.menu = document.querySelector(menu);
    this.links = this.menu.querySelectorAll('a');
    this.handleClick = this.handleClick.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleClick() {
    this.menu.classList.toggle('show');
  }

  handleRemove() {
    this.menu.classList.remove('show');
  }

  addLinksEvent() {
    this.links.forEach((link) => {
      link.addEventListener('click', this.handleRemove);
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
