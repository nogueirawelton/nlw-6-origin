export default class HeaderScroll {
  constructor(header) {
    this.header = document.querySelector(header);
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    if (window.scrollY > this.header.offsetHeight) {
      this.header.classList.add('header--scrolled');
    } else {
      this.header.classList.remove('header--scrolled');
    }
  }

  addHeaderScrollEvent() {
    window.addEventListener('scroll', this.handleScroll);
  }

  init() {
    if (this.header) {
      this.addHeaderScrollEvent();
    }
    return this;
  }
}
