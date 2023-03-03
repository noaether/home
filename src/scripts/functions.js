function extractContent(s, query) {
  var span = document.createElement('span');
  span.innerHTML = s;
  return span.querySelector(query).innerHTML;
}

function includeHTML(date, element) {
  var span = document.createElement('span');
  span.innerHTML = '';
}
