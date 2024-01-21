// document.getElementByClassName();

document.getElementsByClassName = function (className) {
  const elementsWithClass = [];

  //   if (this.body.classList.contains(className)) {
  //     elementsWithClass.push(this.body);
  //   }

  function checkForClassName(eleList) {
    for (const currentEle of eleList) {
      if (currentEle.classList.contains(className)) {
        elementsWithClass.push(currentEle);
      }
    }
  }

  checkForClassName([element]);

  return elementsWithClass;
};

document.getElementsByClassName();
