1//////////////////////////////////////////////////////////////////////////////
const submissions = [
    {
      name: "Jane",
      score: 95,
      date: "test",
      passed: true,
    },
    {
      name: "Joe",
      score: 77,
      date: "test",
      passed: true,
    },
    {
      name: "Jack",
      score: 59,
      date: "test",
      passed: false,
    },
    {
      name: "Jill",
      score: 88,
      date: "test",
      passed: true,
    },
  ];
  2/////////////////////////////////////////////////////////////////////////////
  const addSubmission = (array, newName, newScore, newDate) => {
    const newObject = {
      name: newName,
      score: newScore,
      date: newDate,
      passed: newScore >= 60,
    };
    array.push(newObject);
  };

  // test : addSubmission (submissions, "Mitch", 1, "test");
  console.log(submissions);
3/////////////////////////////////////////////////////////////////////////////
  const deleteSubmissionByIndex = (array, index) => {
        array.splice(index, 1);
  };
  deleteSubmissionByIndex(submissions, 0);
  console.log(submissions);

4////////////////////////////////////////////////////////////////////////////
  const deleteSubmissionByName = (array, name) => {
    const index = array.findIndex((item) => item.name === name);
    array.splice[index, 1];
  };

5////////////////////////////////////////////////////////////////////////////
  const editSubmission = (array, index,score) => {
    array[index].score = score;
    array [index].passed = score >= 60;
  };

  //test: editSubmission(submissions, 0, 1);
  console.log(submissions);
6////////////////////////////////////////////////////////////////////////////////
const findSubmissionByName = (array, name) => {
    return array.find ((item) => {
        return item.name === name;
    });
};

console.log(findSubmissionByName, "Joe")
7////////////////////////////////////////////////////////////////////////////////
const findLowestScore = (array) => {
    array.Foreach ((number) => {
  
    });
};

8/////////////////////////////////////////////////////////////////////////////////
const findAverageScore = (arrayOfScores) => {
    return arrayOfScores.reduce ((item, element) => {
        return item + element.score
    }, 0)
};

9//////////////////////////////////////////////////////////////////////////////////

const filterPassing = (arrayOfScores) => arrayOfScores.filter ((element)) => element.passed;

10///////////////////////////////////////////////////////////////////////////////////////////

const filter90AndAbove = (array) => 