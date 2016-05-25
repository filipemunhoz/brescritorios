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
						categoria:["Agências Reguladoras","Agronegócios","Antitruste e Antidumping","Arbitragem","Auditoria Legal","Biotecnologia","Causas Previdenciárias","Cobrança","Comércio Exterior","Compra e Vendade Empresas","Concessão e Regulação de Serviços Públicos","Constencioso e Solução de Controvérsias","Contencioso","Contencioso Civil","Contencioso Civil e Comercial","Contenciosode Ações Especiais","Contencioso de Crédito","Contencioso de Massa (ou volume ou varejo)","Direito Administrativo","Direito Administrativo e Regulatório","Direito Ambiental","Direito Bancário","Direito Comercial","Direito Contratual","Direito Criminal Empresarial","Direito de Energia","Direito de Energia elétrica","Direito de Família e Sucessões","Direito deInformático e Lei do Software","Direito Desportivo","Direito do Consumidor","Direito do Trabalho","Direito Econômico","Direito Econômico e Concorrencial","Direito Imobiliário","Direito Internacional","Direito Minerário","Direito Previdenciário","Direito Securitário","Direito Societário","Direito Societário (constituição e encerramento de empresasatos Direito Societários)","Direito Tributário","Due Diligence","Fusões de Aquisições","Fusões e Aquisições","Imigração","Implantação e Reestruturação de DepartamentosJurídicos","Investimento Estrangeiro","Investimentos Estrangeiros","Licitações","Meio-ambiente","Mercado de Capitais","Mercado Financeiro e de Capitais","Mercado Financeiroe de Capitais e Investimentos Estrangeiros","Parcerias Público Privadas (PPP)","Planejamento Patrimonial e Sucessório","Previdência Complementar","Privatização","Pro bono","Project Finance","Propriedade Intelectual","Recuperação de Crédito","Regulatório","Seguros e Resseguros","Tecnologia da Informação","Tecnologia da Informação e Telecomunicações","Telecomunicações","Terceiro Setor","Terceiro Setor e Responsabilidade Social","Vigilância sanitária"], 
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
