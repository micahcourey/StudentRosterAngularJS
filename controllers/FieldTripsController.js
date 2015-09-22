studentRoster.controller('FieldTripsCtrl', function FieldTripsCtrl($scope, StudentsFactory) {
  $scope.students = StudentsFactory.students;
  $scope.addStudentWithPermissionSlip = function(student) {
    students.permissionSlip = true;
  };
});
