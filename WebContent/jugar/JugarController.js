function JugarController($scope) {
	$scope.tablero = [ [ 0 ] ];

	$scope.UpdateSize = function() {
		var tablero = new Array($scope.numCols);
		
		for ( var y = 0; y < $scope.numFilas; y++) {
			tablero[y] = new Array($scope.numCols);
			for ( var x = 0; x < $scope.numCols; x++) {
				tablero[y][x] = 0;
			}
		}
		$scope.tablero = tablero;
	};
	
	this.ReDraw = function(){
		
	};
	
	 setInterval(this.ReDraw(), 100);
}


