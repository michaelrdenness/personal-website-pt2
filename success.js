// After "success.html" is displayed for 5 seconds, this script redirects to "index.html" or the "home-page".
setTimeout(() => {
    window.location.href = window.location.origin
  }, 5000)