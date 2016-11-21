var superagent = require('superagent');
//var data = require('./data');

module.exports = function (app) {
	app.get('/api', function (req, res) {

		console.log(req.query)
		superagent
			.get('http://api.tvmaze.com/search/shows?q=' + req.query.name)
			/*.get('http://www.tvmaze.com/shows/1370/' + req.query.details)*/
			.query({ format: "json" })
			.end(function (err, response) {
				if (err) {
					return res.send(err);
				}
				res.json(response.body);
			});

});

	app.get('/api/show/:id', function (req, res) {

		
		superagent
			.get(' http://api.tvmaze.com/shows/'+ req.params.id +'?embed=cast')
			/*.get('http://www.tvmaze.com/shows/1370/' + req.query.details)*/
			.query({ format: "json" })
			.end(function (err, response) {
				if (err) {
					return res.send(err);
				}
				res.json(response.body);
			});

	});
};