Template.questionSet.helpers({
  question: function () {
    return questions.find();
  },
  answer: function () {
    return Answers.find();
  }

});
