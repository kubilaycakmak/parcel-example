import home from "../pages/home/home.html";
import about from "../pages/about/about.html";
import contact from "../pages/contact/contact.html"

const routes = [
  {
    path: "/",
    page: home,
  },
  {
    path: "/about",
    page: about,
  },
  {
    path: "/contact",
    page: contact,
  },
];

function loadRouteContent(route) {
  console.log("Loading route:", route);
  fetch(route.page)
    .then((response) => {
      return response.text();
    })
    .then((content) => {
      console.log("content:", content);
      const container = document.querySelector("#root");
      container.innerHTML = content;
    })
    .catch((error) => {
      console.error("Error loading route content:", error);
    });
}

function loadComponentToDOM(element, component) {
  const headerContainer = document.querySelector(element);
  fetch(component).then((response) => {
    return response.text();
  }).then((content) => {
    headerContainer.innerHTML = content;
  }).catch((error) => {
    console.error("Error loading header content:", error);
  });
}

export { routes, loadRouteContent, loadComponentToDOM };
