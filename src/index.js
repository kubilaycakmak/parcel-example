import { routes, loadRouteContent, loadComponentToDOM } from './route/route.js';
import header from "./components/header/header.html"
import footer from "./components/footer/footer.html"

function handleNavigation() {
    const currentPath = window.location.pathname;
    console.log('currentPath:', currentPath);
  
    const matchingRoute = routes.find((route) => route.path === currentPath);
  
    console.log('matchingRoute:', matchingRoute);

    if (matchingRoute) {
      loadRouteContent(matchingRoute);
    } else {
      // Handle 404 page or redirect to a default route
      window.location.href = '/'; // Redirect to the home page for unknown routes
    }
}

window.addEventListener('DOMContentLoaded', handleNavigation);

// Add an event listener for navigation events (e.g., clicking on links)
window.addEventListener('popstate', handleNavigation);

loadComponentToDOM("#header", header);
loadComponentToDOM("#footer", footer);