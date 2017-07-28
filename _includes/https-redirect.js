if (window.location.protocol == 'http:') {
  window.location = window.location.toString().replace(/^http:/, "https:");
}
