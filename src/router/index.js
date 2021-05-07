import Navigo from "navigo";
import Routes from "./Routes";

function App() {
  const router = new Navigo("/", false);

  Routes.forEach((route) => {
    router.on(route.path, ({ data, params, queryString }) => {
      const component = new route.View(data, params, queryString);
      component.init();
    });
  });

  router.resolve();
  router.updatePageLinks();
}

export default App;
