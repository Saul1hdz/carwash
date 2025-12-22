document.addEventListener('DOMContentLoaded', function () {
  var placeholder = document.getElementById('navbar-placeholder');
  if (!placeholder) return;
  fetch('navbar.html')
    .then(function (res) {
      if (!res.ok) throw new Error('Network response was not ok');
      return res.text();
    })
    .then(function (html) {
      placeholder.innerHTML = html;
      var hamburger = document.getElementById('hamburger');
      var nav = document.getElementById('nav-menu');
      if (hamburger && nav) {
        hamburger.addEventListener('click', function() {
          nav.classList.toggle('open');
          hamburger.classList.toggle('open');
        });
      }
    })
    .catch(function (err) {
      console.error('Error loading navbar:', err);
    });
});
