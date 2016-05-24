//api.openweathermap.org/data/2.5/forecast/city?id=3461786&units=metric&APPID=a34fc68a89f70d121d8b5524eda79e82
angular.module("brEscritorios")	
	.constant("dataUrl","http://api.openweathermap.org/data/2.5/forecast/city?id=3461786&units=metric&APPID=a34fc68a89f70d121d8b5524eda79e82")
	.controller("escritorioCtrl", function ($filter, $scope, $http, dataUrl) {

		$scope.data = {"list": [{nome: "Escritorio de Direito", 
						categoria:["Trabalhista","Civel","Criminal"], 
						estado: "Sao Paulo", 
						cidade: "Guarulhos", 
						telefone:{"comercial": "(11) 2422-0272", 
								"celular": "(11) 98744-8578",
								"residencia": "(11) 4534-3131"
							}
					},
					{nome: "Escritorio da Lei", 
						categoria:["Civel"], 
						estado: "Sao Paulo", 
						cidade: "Guarulhos", 
						telefone:{"comercial": "(11) 4331-4321", 
								"celular": "(11) 98744-8578",
								"residencia": "(11) 4534-3131"
							}
					},
					{nome: "Escritorio 2 Irmãos", 
						categoria:["Criminal","Civel"], 
						estado: "Sao Paulo", 
						cidade: "Guarulhos", 
						telefone:{"comercial": "(11) 4422-4422", 
								"celular": "(11) 98744-8578",
								"residencia": "(11) 4534-3131"
							}
					},
					{nome: "Escritorio de Advocacia", 
						categoria:["Trabalhista", "Criminal"], 
						estado: "Sao Paulo", 
						cidade: "Guarulhos", 
						telefone:{"comercial": "(11) 5633-5534", 
								"celular": "(11) 98744-8578",
								"residencia": "(11) 4534-3131"
							}
					}


				]};
 
		
		//$scope.data = {};
		
 /*
		$http.get(dataUrl)
			.success(function(data){
				$scope.data = data;				
			})
			.error(function(error){
				$scope.data.error = error;
			});  */
			
	});
