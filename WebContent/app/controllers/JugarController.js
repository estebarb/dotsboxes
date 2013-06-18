function JugarController($scope) {
	$scope.tablero = [ [ 0 ] ];

	$scope.UpdateSize = function() {
		var tablero = new Array($scope.numCols * $scope.numCols);
		
		for ( var y = 0; y < $scope.numFilas; y++) {
			tablero[y] = new Array($scope.numCols);
			for ( var x = 0; x < $scope.numCols; x++) {
				tablero[y][x] = 0;
			}
		}
		$scope.tablero = tablero;
	};
}



dotsboxes.directive('gameCanvas', function(){
	function link($scope, element, attributes){
		var datosJuego = attributes.gamedata;
		
		// Aquí tomo el elemento actual y le añado un SVG
		var vis = d3.select(element[0])
        .append("svg")
          .attr("width", "100%")
          .attr("height", "100%");
		
		$scope.$watch(
				datosJuego,
				function(newValue, oldValue){
					// Aquí modifico el estado de la canva según sea necesario...
					if(newValue == oldValue){
						return;
					}
					
					// clear the elements inside of the directive
			        vis.selectAll('*').remove();

			        // if 'val' is undefined, exit
			        if (!newVal) {
			          return;
			        }
			        
			        // Ahora estoy "listo" para generar los datos...
			        var arregloDibujo = new Array();
			        for ( var y = 0; y < $scope.numFilas; y++) {
						for ( var x = 0; x < $scope.numCols; x++) {
							arregloDibujo[y * $scope.numCols + x + 0] = {}
						}
					}
				}
				
				); //fin $scope.$watch
		
		// Configuración de la directiva
		return({
            link: link,
            restrict: "A"
        });
		
	} // fin link
});


