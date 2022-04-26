export default class AddPageStatus {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.activateMenuChange = this.activateMenuChange.bind(this);
  }

  static verify({ sectionId, checkpointStart, checkpointEnd }) {
    if (checkpointStart && checkpointEnd) {
      document
        .querySelector(`nav ul li a[href*=${sectionId}]`)
        .classList.add('active');
    } else {
      document
        .querySelector(`nav ul li a[href*=${sectionId}]`)
        .classList.remove('active');
    }
  }

  activateMenuChange() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;
    this.sections.forEach((section) => {
      const data = {
        sectionId: section.getAttribute('id'),
        checkpointStart: checkpoint >= section.offsetTop,
        checkpointEnd: checkpoint <= section.offsetTop + section.offsetHeight,
      };
      AddPageStatus.verify(data);
    });
  }

  addSectionsEvent() {
    window.addEventListener('scroll', this.activateMenuChange);
  }

  init() {
    if (this.sections.length > 0) {
      this.addSectionsEvent();
    }
    return this;
  }
}
