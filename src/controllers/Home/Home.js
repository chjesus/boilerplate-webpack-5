import Abstract from "../Abstract";
import View from "../../views/home.hbs";

import logo from "../../assets/images/logo.svg";

export default class Home extends Abstract {
  constructor() {
    super();
    this.app.innerHTML = View({ logo });
    this.setTitlePage("Home");
  }

  init() {}
}
