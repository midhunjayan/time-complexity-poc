const calculateTimeComplexity = (type) => {
  const value = document.getElementById('arrayTextArea').value;

  let inputedValue;
  if (!value) {
    inputedValue = Array.from({ length: 1000000 }, () => Math.floor(Math.random() * 1000000));
  } else {
    inputedValue = JSON.parse(value);
  }

  if (Array.isArray(inputedValue)) {
    const elem = document.getElementById('errorMessage');
    elem.style.visibility = 'hidden';

    if (type === 'push') {
      const timeTaken = pushToArray(inputedValue);
      displayTimeComplexity(timeTaken);
    } else if (type === 'unshift') {
      const timeTaken = unshiftFromArray(inputedValue);
      displayTimeComplexity(timeTaken);
    }
  } else {
    const elem = document.getElementById('errorMessage');
    elem.style.visibility = 'visible';
    elem.innerHTML = 'Please enter a valid array';
  }
};

const pushToArray = (array) => {
  const startTime = performance.now();
  if (array.length) {
    array.push(100);
  }
  const endTime = performance.now();

  return endTime - startTime;
};

const displayTimeComplexity = (time) => {
  const elem = document.getElementById('resultBox');
  elem.innerHTML = `Time complexity: ${time} milliseconds`;
};

const unshiftFromArray = (array) => {
  const startTime = performance.now();
  if (array.length) {
    array.unshift(100);
  }
  const endTime = performance.now();

  return endTime - startTime;
};
