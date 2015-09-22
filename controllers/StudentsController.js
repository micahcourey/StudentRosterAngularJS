studentRoster.controller('StudentsCtrl', function StudentsCtrl($scope) {
  $scope.students = StudentsFactory.students;
  $scope.StudentsFactory = StudentsFactory;
});
