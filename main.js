function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function (element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function (element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

function reduce(array, f, acc) {
  if (acc === undefined) {
    acc = array[0];
    array = array.slice(1);
  }
  each(array, function (element, i) {
    acc = f(acc, element, i);
  });
  return acc;
}
var products = [
  { name: 'Ikea', link: 'https://stardust.tn/12-rangements-kallax' },
  { name: 'Geant', link: 'https://www.geant.tn/' },
  { name: 'Graiet', link: 'https://www.graiet.tn/' },
  { name: 'Darty', link: 'https://www.darty.tn/' }
];
var nav = document.querySelector('.navigator');


products.forEach(product => {
  var listItem = document.createElement('li');
  var link = document.createElement('a')
  link.href = product.link;
  link.textContent = product.name;
  listItem.appendChild(link);
  nav.appendChild(listItem);

});





