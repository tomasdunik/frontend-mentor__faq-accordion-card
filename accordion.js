/****************************/
/* Accordion */
/****************************/

const questionBoxes = document.querySelectorAll('div.question-and-arrow');
const answers = document.querySelectorAll('.answer');
const arrowRotates = document.querySelectorAll('.arrow');

questionBoxes.forEach(function (questionBox, index) {
  questionBox.addEventListener('click', function () {
    answers.forEach(function (answer, answerIndex) {
      if (answerIndex === index && !answer.classList.contains('show')) {
        answer.classList.add('show');
      } else {
        answer.classList.remove('show');
      }
    });

    arrowRotates.forEach(function (arrowRotate, arrowIndex) {
      if (
        arrowIndex === index &&
        !arrowRotate.classList.contains('arrow-rotate')
      ) {
        arrowRotate.classList.add('arrow-rotate');
      } else {
        arrowRotate.classList.remove('arrow-rotate');
      }
    });
  });
});
