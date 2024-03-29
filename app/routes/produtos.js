module.exports = function(app){
  app.get('/produtos', function(req, res){

    var connection = app.infra.connectionFactory();

    var produtosDAO = new app.infra.ProdutosDAO(connection);

    produtosDAO.lista(function(erros,resultados){
      res.render('produtos/lista', {lista:resultados});
    });
    connection.end();
  });

  app.get('/produtos/form', function(req, res){
        res.render('produtos/form');
  });

  app.post('/produtos/salva', function(req, res){
  		var produto = req.body;

        		var connection = app.infra.connectionFactory();
        		var produtosDAO = new app.infra.ProdutosDAO(connection);
        		produtosDAO.salva(produto,function(erros,resultados){
            produtosDAO.lista(function(erros,resultados){
            res.render('produtos/lista', {lista:resultados});
      	});
    	});
  	});
}
