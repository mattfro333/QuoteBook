angular.module('quoteBook').controller('mainController', function($scope, mainService){


  $scope.getQuotes = function() {
    $scope.quotes = mainService.getQuotes();
  }

  $scope.getQuotes();

  $scope.deleteMe = function(textToDelete){
  mainService.removeData(textToDelete);
}

$scope.addQuote = function(){
  var newQuote = {
    text:$scope.newQuoteText,
    author:$scope.newQuoteAuthor
  }
  if(mainService.addData(newQuote))
  {
    $scope.newQuoteText = '';
    $scope.newQuoteAuthor= '';
  }
}
})
