function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  let ranks = document.querySelectorAll('.ranked-list li');
  ranks.forEach((node) => {
    node.innerHTML = parseInt(node.innerHTML) + n;
  });
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}