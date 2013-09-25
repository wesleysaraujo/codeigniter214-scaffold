var obj = {
	init	: 	function(){
		$('#servico-search').typeahead({                                
		  name: 'servicos',                                                          
		  prefetch: 'assets/data/servicos.json',
		  limit: 10                                                                   
		});
		var texto_cidade = $('#cidade-search').val();
		$('#cidade-search').typeahead({
		 	name: texto_cidade,                                                          
		 	prefetch: 'assets/data/cidades.json',
		});
	}
}

$(function () {
	obj.init();
});
