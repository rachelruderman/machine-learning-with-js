const outputs = [];

function onScoreUpdate(dropPosition, bounciness, size, bucketLabel) {
  outputs.push([dropPosition, bounciness, size, bucketLabel]);
  console.log({outputs});
}

function runAnalysis() {
  const predictionPoint = 300;
  const k = 3;

  const getDistance = (point) => Math.abs(point - predictionPoint);

  const analysis = 
    outputs
      .map(([dropPosition, size]) => [getDistance(dropPosition), size])
      .sort((a, b) => (a[0] - b[0]))
      .slice(0, k)
      .countBy(([size]) => size);
    // Write code here to analyze stuff

  console.log({analysis})
}

runAnalysis();

function countBy(arr, applicator) {
  const classes = {};

  arr.forEach((element) => {
    // class is a reserved word that should not be overidden.
    let class_ = null;
    if (typeof applicator !== 'function') {
      class_ = element[applicator];
    } else {
      class_ = applicator(element);
    }

    classes[class_] = (classes[class_] || 0) + 1
  });

  return classes;
}