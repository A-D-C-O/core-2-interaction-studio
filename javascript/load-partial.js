// Example usage to load the head partial into the <head> element:
// loadPartial("path/to/head-partial.html", "head");

function loadPartial(partialPath, targetSelector, insertPosition = "beforeend") {
  let fullPath;

  // Check if site is running on localhost for development
  if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
    fullPath = `http://localhost:3000/${partialPath}`;
  } else {
    // Use window.location.origin to get the dynamic hostname and protocol
    // Use window.location.pathname to ensure we include the path if it's running in a subdirectory
    fullPath = `${window.location.origin}${window.location.pathname}${partialPath}`;
  }

  fetch(fullPath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then(html => {
      document.querySelector(targetSelector).insertAdjacentHTML(insertPosition, html);
    })
    .catch(error => {
      console.error('Error loading the partial:', error);
    });
}
