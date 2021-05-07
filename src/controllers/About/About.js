import Abstract from "../Abstract";
import View from "../../views/about.hbs";

export default class About extends Abstract {
  constructor() {
    super();
    this.app.innerHTML = View();
    this.setTitlePage("About");
  }

  init() {}
}
