function includeFooter() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'include/footer.html', true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      var footer = xhr.responseText;
      document.getElementById('footer-container').innerHTML = footer;
    }
  };
  xhr.send();
}

function includeHeader() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'include/header.html', true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      var header = xhr.responseText;
      document.getElementById('header-container').innerHTML = header;
    }
  };
  xhr.send();
}
