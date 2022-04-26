export default class BackToTopButton {
  constructor(button) {
    this.button = document.querySelector(button);
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    if (window.scrollY >= 560) {
      this.button.classList.add('show');
    } else {
      this.button.classList.remove('show');
    }
  }

  addButtonEvent() {
    document.addEventListener('scroll', this.handleScroll);
  }

  init() {
    if (this.button) {
      this.addButtonEvent();
    }
    return this;
  }
}
