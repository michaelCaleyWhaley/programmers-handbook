// document.getElementByClassName();

document.getElementsByClassName = function (className) {
  const elementsWithClass = [];

  function checkForClassName(eleList) {
    for (const currentEle of eleList) {
      if (currentEle?.classList?.contains?.(className)) {
        elementsWithClass.push(currentEle);
      }

      if (currentEle.childNodes) {
        checkForClassName(currentEle.childNodes);
      }
    }
  }

  checkForClassName([this.body]);

  return elementsWithClass;
};

document.getElementsByClassName("question-page");
