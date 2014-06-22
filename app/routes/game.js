    var mongo = require('mongodb');

    var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

    var server = new Server('localhost', 27017, {auto_reconnect: true});
    db = new Db('gameDB', server);

    db.open(function(err, db) {
        if(!err) {
            console.log("Connected to 'gamedb' database");
            db.collection('users', {strict:true}, function(err, collection) {
                if (err) {
                    console.log("The 'users' collection doesn't exist, creating it ...");
                    populateDBUsers();
                }
            });            
            db.collection('games', {strict:true}, function(err, collection) {
                if (err) {
                    console.log("The 'games' collection doesn't exist, creating it ...");
                    populateDBGames();
                }
            });
            db.collection('teams', {strict:true}, function(err, collection) {
                if (err) {
                    console.log("The 'teams' collection doesn't exist, creating it ...");
                    populateDBTeams();
                }
            });
            db.collection('rounds', {strict:true}, function(err, collection) {
                if (err) {
                    console.log("The 'rounds' collection doesn't exist, creating it ...");
                    populateDBRounds();
                }
            });
        }
    });

    exports.findById = function(req, res) {
        var id = req.params.id;
        console.log('Retrieving game: ' + id);
        db.collection('games', function(err, collection) {
            collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
                res.send(item);
            });
        });
    };

    exports.findAll = function(req, res) {
        db.collection('games', function(err, collection) {
            collection.find().toArray(function(err, items) {
                res.send(items);
            });
        });
    };

    exports.addGame = function(req, res) {
        var game = req.body;
        console.log('Adding game: ' + JSON.stringify(game));
        db.collection('games', function(err, collection) {
            collection.insert(game, {safe:true}, function(err, result) {
                if (err) {
                    res.send({'error':'An error has occurred'});
                } else {
                    console.log('Success: ' + JSON.stringify(result[0]));
                    res.send(result[0]);
                }
            });
        });
    }

    exports.updateGame = function(req, res) {
        var id = req.params.id;
        var game = req.body;
        console.log('Updating game: ' + id);
        console.log(JSON.stringify(game));
        db.collection('games', function(err, collection) {
            collection.update({'_id':new BSON.ObjectID(id)}, game, {safe:true}, function(err, result) {
                if (err) {
                    console.log('Error updating game: ' + err);
                    res.send({'error':'An error has occurred'});
                } else {
                    console.log('' + result + ' document(s) updated');
                    res.send(game);
                }
            });
        });
    }

    exports.deleteGame = function(req, res) {
        var id = req.params.id;
        console.log('Deleting game: ' + id);
        db.collection('games', function(err, collection) {
            collection.remove({'_id':new BSON.ObjectID(id)}, {safe:true}, function(err, result) {
                if (err) {
                    res.send({'error':'An error has occurred - ' + err});
                } else {
                    console.log('' + result + ' document(s) deleted');
                    res.send(req.body);
                }
            });
        });
    }

    var populateDBGames = function() {

    var games = [
        {
          "gameId": 1,
          "group": "A",
          "gameTime": "Thu Jun/12 17:00",
          "gameTitle": "Brazil - Croatia",
          "gamePlace": "São Paulo"
      },
      {
          "gameId": 2,
          "group": "A",
          "gameTime": "Fri Jun/13 13:00",
          "gameTitle": "Mexico - Cameroon",
          "gamePlace": "Natal"
      },
      {
          "gameId": 17,
          "group": "A",
          "gameTime": "Tue Jun/17 16:00",
          "gameTitle": "Brazil - Mexico",
          "gamePlace": "Fortaleza"
      },
      {
          "gameId": 18,
          "group": "A",
          "gameTime": "Wed Jun/18 18:00",
          "gameTitle": "Cameroon - Croatia",
          "gamePlace": "Manaus"
      },
      {
          "gameId": 33,
          "group": "A",
          "gameTime": "Mon Jun/23 17:00",
          "gameTitle": "Cameroon - Brazil",
          "gamePlace": "Brasília"
      },
      {
          "gameId": 34,
          "group": "A",
          "gameTime": "Mon Jun/23 17:00",
          "gameTitle": "Croatia  - Mexico",
          "gamePlace": "Recife"
      },
      {
          "gameId": 3,
          "group": "B",
          "gameTime": "Fri Jun/13 16:00",
          "gameTitle": "Spain - Netherlands",
          "gamePlace": "Salvador"
      },
      {
          "gameId": 4,
          "group": "B",
          "gameTime": "Fri Jun/13 18:00",
          "gameTitle": "Chile - Australia",
          "gamePlace": "Cuiabá"
      },
      {
          "gameId": 19,
          "group": "B",
          "gameTime": "Spain - Chile",
          "gamePlace": "Rio de Janeiro"
      },
      {
          "gameId": 20,
          "group": "B",
          "gameTime": "Wed Jun/18 13:00",
          "gameTitle": "Australia - Netherlands",
          "gamePlace": "Porto Alegre"
      },
      {
          "gameId": 35,
          "group": "B",
          "gameTime": "Mon Jun/23 13:00",
          "gameTitle": "Australia - Spain",
          "gamePlace": "Curitiba"
      },
      {
          "gameId": 36,
          "group": "B",
          "gameTime": "Mon Jun/23 13:00",
          "gameTitle": "Netherlands - Chile",
          "gamePlace": "São Paulo"
      },
      {
          "gameId": 5,
          "group": "C",
          "gameTime": "Sat Jun/14 13:00",
          "gameTitle": "Colombia - Greece",
          "gamePlace": "Belo Horizonte"
      },
      {
          "gameId": 6,
          "group": "C",
          "gameTime": "Sat Jun/14 22:00",
          "gameTitle": "Côte d'Ivoire - Japan",
          "gamePlace": "Recife"
      },
      {
          "gameId": 21,
          "group": "C",
          "gameTime": "Thu Jun/19 13:00",
          "gameTitle": "Colombia - Côte d'Ivoire",
          "gamePlace": "Brasília"
      },
      {
          "gameId": 22,
          "group": "C",
          "gameTime": "Thu Jun/19 19:00",
          "gameTitle": "Japan - Greece",
          "gamePlace": "Natal"
      },
      {
          "gameId": 37,
          "group": "C",
          "gameTime": "Tue Jun/24 16:00",
          "gameTitle": "Japan - Colombia",
          "gamePlace": "Cuiabá"
      },
      {
          "gameId": 38,
          "group": "C",
          "gameTime": "Tue Jun/24 17:00",
          "gameTitle": "Côte d'Ivoire - Greece",
          "gamePlace": "Fortaleza"
      },
      {
          "gameId": 7,
          "group": "D",
          "gameTime": "Sat Jun/14 16:00",
          "gameTitle": "Uruguay - Costa Rica",
          "gamePlace": "Fortaleza"
      },
      {
          "gameId": 8,
          "group": "D",
          "gameTime": "Sat Jun/14 18:00",
          "gameTitle": "England - Italy",
          "gamePlace": "Manaus"
      },
      {
          "gameId": 23,
          "group": "D",
          "gameTime": "Thu Jun/19 16:00",
          "gameTitle": "Uruguay - England",
          "gamePlace": "São Paulo"
      },
      {
          "gameId": 24,
          "group": "D",
          "gameTime": "Fri Jun/20 13:00",
          "gameTitle": "Italy - Costa Rica",
          "gamePlace": "Recife"
      },
      {
          "gameId": 39,
          "group": "D",
          "gameTime": "Tue Jun/24 13:00",
          "gameTitle": "Italy - Uruguay",
          "gamePlace": "Natal"
      },
      {
          "gameId": 40,
          "group": "D",
          "gameTime": "Tue Jun/24 13:00",
          "gameTitle": "Costa Rica - England",
          "gamePlace": "Belo Horizonte"
      },
      {
          "gameId": 9,
          "group": "E",
          "gameTime": "Sun Jun/15 13:00",
          "gameTitle": "Switzerland - Ecuador",
          "gamePlace": "Brasília"
      },
      {
          "gameId": 10,
          "group": "E",
          "gameTime": "Sun Jun/15 16:00",
          "gameTitle": "France - Honduras",
          "gamePlace": "Porto Alegre"
      },
      {
          "gameId": 25,
          "group": "E",
          "gameTime": "Fri Jun/20 16:00",
          "gameTitle": "Switzerland - France",
          "gamePlace": "Salvador"
      },
      {
          "gameId": 26,
          "group": "E",
          "gameTime": "Fri Jun/20 19:00",
          "gameTitle": "Honduras - Ecuador",
          "gamePlace": "Curitiba"
      },
      {
          "gameId": 41,
          "group": "E",
          "gameTime": "Wed Jun/25 16:00",
          "gameTitle": "Honduras - Switzerland",
          "gamePlace": "Manaus"
      },
      {
          "gameId": 42,
          "group": "E",
          "gameTime": "Wed Jun/25 17:00",
          "gameTitle": "Ecuador  - France",
          "gamePlace": "Rio de Janeiro"
      },
      {
          "gameId": 11,
          "group": "F",
          "gameTime": "Sun Jun/15 19:00",
          "gameTitle": "Argentina - Bosnia-Herzegovina",
          "gamePlace": "Rio de Janeiro"
      },
      {
          "gameId": 12,
          "group": "F",
          "gameTime": "Mon Jun/16 16:00",
          "gameTitle": "Iran - Nigeria",
          "gamePlace": "Curitiba"
      },
      {
          "gameId": 27,
          "group": "F",
          "gameTime": "Sat Jun/21 13:00",
          "gameTitle": "Argentina - Iran",
          "gamePlace": "Belo Horizonte"
      },
      {
          "gameId": 28,
          "group": "F",
          "gameTime": "Sat Jun/21 18:00",
          "gameTitle": "Nigeria - Bosnia-Herzegovina",
          "gamePlace": "Cuiabá"
      },
      {
          "gameId": 43,
          "group": "F",
          "gameTime": "Wed Jun/25 13:00",
          "gameTitle": "Nigeria - Argentina",
          "gamePlace": "Porto Alegre"
      },
      {
          "gameId": 44,
          "group": "F",
          "gameTime": "Wed Jun/25 13:00",
          "gameTitle": "Bosnia-Herzegovina - Iran",
          "gamePlace": "Salvador"
      },
      {
          "gameId": 13,
          "group": "G",
          "gameTime": "Mon Jun/16 13:00",
          "gameTitle": "Germany - Portugal",
          "gamePlace": "Salvador"
      },
      {
          "gameId": 14,
          "group": "G",
          "gameTime": "Mon Jun/16 19:00",
          "gameTitle": "Ghana - United States",
          "gamePlace": "Natal"
      },
      {
          "gameId": 29,
          "group": "G",
          "gameTime": "Sat Jun/21 16:00",
          "gameTitle": "Germany - Ghana",
          "gamePlace": "Fortaleza"
      },
      {
          "gameId": 30,
          "group": "G",
          "gameTime": "Sun Jun/22 18:00",
          "gameTitle": "United States - Portugal",
          "gamePlace": "Manaus"
      },
      {
          "gameId": 45,
          "group": "G",
          "gameTime": "Thu Jun/26 13:00",
          "gameTitle": "United States - Germany",
          "gamePlace": "Recife"
      },
      {
          "gameId": 46,
          "group": "G",
          "gameTime": "Thu Jun/26 13:00",
          "gameTitle": "Portugal - Ghana",
          "gamePlace": "Brasília"
      },
      {
          "gameId": 15,
          "group": "H",
          "gameTime": "Tue Jun/17 13:00",
          "gameTitle": "Belgium - Algeria",
          "gamePlace": "Belo Horizonte"
      },
      {
          "gameId": 16,
          "group": "H",
          "gameTime": "Tue Jun/17 18:00",
          "gameTitle": "Russia - South Korea",
          "gamePlace": "Cuiabá"
      },
      {
          "gameId": 31,
          "group": "H",
          "gameTime": "Sun Jun/22 13:00",
          "gameTitle": "Belgium - Russia",
          "gamePlace": "Rio de Janeiro"
      },
      {
          "gameId": 32,
          "group": "H",
          "gameTime": "Sun Jun/22 16:00",
          "gameTitle": "South Korea - Algeria",
          "gamePlace": "Porto Alegre"
      },
      {
          "gameId": 47,
          "group": "H",
          "gameTime": "Thu Jun/26 17:00",
          "gameTitle": "South Korea - Belgium",
          "gamePlace": "São Paulo"
      },
      {
          "gameId": 48,
          "group": "H",
          "gameTime": "Thu Jun/26 17:00",
          "gameTitle": "Algeria - Russia",
          "gamePlace": "Curitiba"
      }
      ]
  }

  var populateDBTeams = function() {

     var teams = [
     {
         "teamId": 31,
         "title": "Russia",
         "code": "RUS",
         "group": 8
     },
     {
         "teamId": 10,
         "title": "Greece",
         "code": "GRE",
         "group": 3
     },
     {
         "teamId": 6,
         "title": "Netherlands",
         "code": "NED",
         "group": 2
     },
     {
         "teamId": 25,
         "title": "Germany",
         "code": "GER",
         "group": 7
     },
     {
         "teamId": 26,
         "title": "Portugal",
         "code": "POR",
         "group": 7
     },
     {
         "teamId": 5,
         "title": "Spain",
         "code": "ESP",
         "group": 2
     },
     {
         "teamId": 16,
         "title": "Italy",
         "code": "ITA",
         "group": 4
     },
     {
         "teamId": 2,
         "title": "Croatia",
         "code": "CRO",
         "group": 1
     },
     {
         "teamId": 19,
         "title": "France",
         "code": "FRA",
         "group": 5
     },
     {
         "teamId": 15,
         "title": "England",
         "code": "ENG",
         "group": 4
     },
     {
         "teamId": 17,
         "title": "Switzerland",
         "code": "SUI",
         "group": 5
     },
     {
         "teamId": 29,
         "title": "Belgium",
         "code": "BEL",
         "group": 8
     },
     {
         "teamId": 22,
         "title": "Bosnia-Herzegovina",
         "code": "BIH",
         "group": 6
     },
     {
         "teamId": 30,
         "title": "Algeria",
         "code": "ALG",
         "group": 8
     },
     {
         "teamId": 11,
         "title": "Côte d'Ivoire",
         "code": "CIV",
         "group": 3
     },
     {
         "teamId": 27,
         "title": "Ghana",
         "code": "GHA",
         "group": 7
     },
     {
         "teamId": 4,
         "title": "Cameroon",
         "code": "CMR",
         "group": 1
     },
     {
         "teamId": 24,
         "title": "Nigeria",
         "code": "NGA",
         "group": 6
     },
     {
         "teamId": 3,
         "title": "Mexico",
         "code": "MEX",
         "group": 1
     },
     {
         "teamId": 28,
         "title": "United States",
         "code": "USA",
         "group": 7
     },
     {
         "teamId": 20,
         "title": "Honduras",
         "code": "HON",
         "group": 5
     },
     {
         "teamId": 14,
         "title": "Costa Rica",
         "code": "CRC",
         "group": 4
     },
     {
         "teamId": 21,
         "title": "Argentina",
         "code": "ARG",
         "group": 6
     },
     {
         "teamId": 1,
         "title": "Brazil",
         "code": "BRA",
         "group": 1
     },
     {
         "teamId": 7,
         "title": "Chile",
         "code": "CHI",
         "group": 2
     },
     {
         "teamId": 13,
         "title": "Uruguay",
         "code": "URU",
         "group": 4
     },
     {
         "teamId": 9,
         "title": "Colombia",
         "code": "COL",
         "group": 3
     },
     {
         "teamId": 18,
         "title": "Ecuador",
         "code": "ECU",
         "group": 5
     },
     {
         "teamId": 8,
         "title": "Australia",
         "code": "AUS",
         "group": 2
     },
     {
         "teamId": 12,
         "title": "Japan",
         "code": "JPN",
         "group": 3
     },
     {
         "teamId": 32,
         "title": "South Korea",
         "code": "KOR",
         "group": 8
     },
     {
         "teamId": 23,
         "title": "Iran",
         "code": "IRN",
         "group": 6
     }
     ]
 }

 var populateDBRounds = function() {

     var rounds = [
     {
         "pos": 1,
         "title": "Matchday 1",
         "start_at": "2014/06/12",
         "end_at": "2014/06/12"
     },
     {
         "pos": 2,
         "title": "Matchday 2",
         "start_at": "2014/06/13",
         "end_at": "2014/06/13"
     },
     {
         "pos": 3,
         "title": "Matchday 3",
         "start_at": "2014/06/14",
         "end_at": "2014/06/14"
     },
     {
         "pos": 4,
         "title": "Matchday 4",
         "start_at": "2014/06/15",
         "end_at": "2014/06/15"
     },
     {
         "pos": 5,
         "title": "Matchday 5",
         "start_at": "2014/06/16",
         "end_at": "2014/06/16"
     },
     {
         "pos": 6,
         "title": "Matchday 6",
         "start_at": "2014/06/17",
         "end_at": "2014/06/17"
     },
     {
         "pos": 7,
         "title": "Matchday 7",
         "start_at": "2014/06/18",
         "end_at": "2014/06/18"
     },
     {
         "pos": 8,
         "title": "Matchday 8",
         "start_at": "2014/06/19",
         "end_at": "2014/06/19"
     },
     {
         "pos": 9,
         "title": "Matchday 9",
         "start_at": "2014/06/20",
         "end_at": "2014/06/20"
     },
     {
         "pos": 10,
         "title": "Matchday 10",
         "start_at": "2014/06/21",
         "end_at": "2014/06/21"
     },
     {
         "pos": 11,
         "title": "Matchday 11",
         "start_at": "2014/06/22",
         "end_at": "2014/06/22"
     },
     {
         "pos": 12,
         "title": "Matchday 12",
         "start_at": "2014/06/23",
         "end_at": "2014/06/23"
     },
     {
         "pos": 13,
         "title": "Matchday 13",
         "start_at": "2014/06/24",
         "end_at": "2014/06/24"
     },
     {
         "pos": 14,
         "title": "Matchday 14",
         "start_at": "2014/06/25",
         "end_at": "2014/06/25"
     },
     {
         "pos": 15,
         "title": "Matchday 15",
         "start_at": "2014/06/26",
         "end_at": "2014/06/26"
     },
     {
         "pos": 16,
         "title": "Round of 16",
         "start_at": "1912/01/01",
         "end_at": "1912/01/01"
     },
     {
         "pos": 17,
         "title": "Quarter-finals",
         "start_at": "1912/01/01",
         "end_at": "1912/01/01"
     },
     {
         "pos": 18,
         "title": "Semi-finals",
         "start_at": "1912/01/01",
         "end_at": "1912/01/01"
     },
     {
         "pos": 19,
         "title": "Round 19  -  Match for third place",
         "start_at": "1912/01/01",
         "end_at": "1912/01/01"
     },
     {
         "pos": 20,
         "title": "Final",
         "start_at": "1912/01/01",
         "end_at": "1912/01/01"
     }
     ]
 }

 var populateDBUsers = function() {

    var users = [
    {
     "name": "lesoto",
     "email": "lesoto@lesoto.com"
 },
 {
     "name": "Dima Pesochin",
     "email": "dima@pesochin.com"
 }
 ]}

 /*db.collection('games', function(err, collection) {
    collection.insert(games, {safe:true}, function(err, result) {});
 });

 db.collection('teams', function(err, collection) {
    collection.insert(teams, {safe:true}, function(err, result) {});
});

 db.collection('rounds', function(err, collection) {
    collection.insert(rounds, {safe:true}, function(err, result) {});
});

 db.collection('users', function(err, collection) {
    collection.insert(users, {safe:true}, function(err, result) {});
});*/

