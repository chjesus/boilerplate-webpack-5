export default class {
  constructor() {
    this.root = "root";
    this.app = document.getElementById(this.root);
  }

  setTitlePage(title) {
    document.title = title;
  }
}
