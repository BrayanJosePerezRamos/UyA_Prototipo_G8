function includeFooter() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'footer.html', true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      var footer = xhr.responseText;
      document.getElementById('footer-container').innerHTML = footer;
    }
  };
  xhr.send();
}
