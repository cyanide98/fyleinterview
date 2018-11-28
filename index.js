<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.min.js"></script>
<style>
	body{
	
  font-family: Calibri;
	}
        table 
        {
            width: 100%;
			border-collapse: collapse; 
            font: 12px Calibri;
			
        }
        table, th, td 
        {
            border: solid 1px #DDD;
            border-collapse: collapse;
            padding: 2px 3px;
            text-align: center;
        }

</style>
</head>
<body>
<h1> BANK BRANCHES </h1>
<br>
    <div ng-app="myInterview" 
        ng-controller="myBanksController">
<label>Cities
    <select ng-model="search.city">
      <option value="MUMBAI">MUMBAI</option>
      <option value="BANGALORE">BANGALORE</option>
      <option value="CHENNAI">CHENNAI</option>
	   <option value="KOLKATA">KOLKATA</option>
	    <option value="HYDERABAD">HYDERABAD</option>
	  
    </select>
  </label>
  	<label>Search:
    <input ng-model="searchText">
  </label>
  <br>
  	<div ng-if="Result.length==0">
                    <span style="color:red;">No Records Found.</span>
               </div>
        <table id="searchObjResults">
            <tr>
                <th>IFSC</th>
                    <th>BANK_ID</th>
                        <th>BRANCH</th>
						<th>ADDRESS</th>
						<th>CITY</th>
						<th>DISTRICT</th>
						<th>STATE</th>
						<th>BANK_NAME</th>
						
            </tr>
            <tr ng-repeat="Banks in list | filter:search:strict | filter:searchText as Result">
						   <div ng-if="Result.length">
                    <br>
               </div>
                <td>{{Banks.ifsc}}</td>
                    <td>{{Banks.bank_id}}</td>
                        <td>{{Banks.branch}}</td>
						 <td>{{Banks.address}}</td>
						  <td>{{Banks.city}}</td>
						   <td>{{Banks.district}}</td>
						    <td>{{Banks.state}}</td>
							 <td>{{Banks.bank_name}}</td>
							 
            </tr>
	
        </table>
	
    </div>
</body>
<script>
    var app = angular.module('myInterview', []);
    app.controller('myBanksController',
        function ($scope, $http) {

            var request = {
                method: 'get',
                url: 'https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI',
                dataType: 'json',
                contentType: "application/json"
            };

            $scope.arrBanks = new Array;

            $http(request)
                .success(function (jsonData) {
                    $scope.arrBanks = jsonData;
                    $scope.list = $scope.arrBanks;
                })
                .error(function () {

                });
        });
</script>
</html>