/*
 * Serve JSON to our AngularJS client
 */

// For a real app, you'd make database requests here.
// For this example, "data" acts like an in-memory "database"
var data = {
  "teams": [
    
  {
  "teamId" : 31,
  "title" : "Russia",
  "code" : "RUS",
  "group" : 8
}, {           
  "teamId" : 10,
  "title" : "Greece",
  "code" : "GRE",
  "group" : 3
}, {
  "teamId" : 6,
  "title" : "Netherlands",
  "code" : "NED",
  "group" : 2
}, {
  "teamId" : 25,
  "title" : "Germany",
  "code" : "GER",
  "group" : 7
}, {
  "teamId" : 26,
  "title" : "Portugal",
  "code" : "POR",
  "group" : 7
}, {
  "teamId" : 5,
  "title" : "Spain",
  "code" : "ESP",
  "group" : 2
}, {
  "teamId" : 16,
  "title" : "Italy",
  "code" : "ITA",
  "group" : 4
}, {
  "teamId" : 2,
  "title" : "Croatia",
  "code" : "CRO",
  "group" : 1
}, {
  "teamId" : 19,
  "title" : "France",
  "code" : "FRA",
  "group" : 5
}, {
  "teamId" : 15,
  "title" : "England",
  "code" : "ENG",
  "group" : 4
}, {
  "teamId" : 17,
  "title" : "Switzerland",
  "code" : "SUI",
  "group" : 5
}, {
  "teamId" : 29,
  "title" : "Belgium",
  "code" : "BEL",
  "group" : 8
}, {
  "teamId" : 22,
  "title" : "Bosnia-Herzegovina",
  "code" : "BIH",
  "group" : 6
}, {
  "teamId" : 30,
  "title" : "Algeria",
  "code" : "ALG",
  "group" : 8
}, {
  "teamId" : 11,
  "title" : "C\u00f4te d'Ivoire",
  "code" : "CIV",
  "group" : 3
}, {
  "teamId" : 27,
  "title" : "Ghana",
  "code" : "GHA",
  "group" : 7
}, {
  "teamId" : 4,
  "title" : "Cameroon",
  "code" : "CMR",
  "group" : 1
}, {
  "teamId" : 24,
  "title" : "Nigeria",
  "code" : "NGA",
  "group" : 6
}, {
  "teamId" : 3,
  "title" : "Mexico",
  "code" : "MEX",
  "group" : 1
}, {
  "teamId" : 28,
  "title" : "United States",
  "code" : "USA",
  "group" : 7
}, {
  "teamId" : 20,
  "title" : "Honduras",
  "code" : "HON",
  "group" : 5
}, {
  "teamId" : 14,
  "title" : "Costa Rica",
  "code" : "CRC",
  "group" : 4
}, {
  "teamId" : 21,
  "title" : "Argentina",
  "code" : "ARG",
  "group" : 6
}, {
  "teamId" : 1,
  "title" : "Brazil",
  "code" : "BRA",
  "group" : 1
}, {
  "teamId" : 7,
  "title" : "Chile",
  "code" : "CHI",
  "group" : 2
}, {
  "teamId" : 13,
  "title" : "Uruguay",
  "code" : "URU",
  "group" : 4
}, {
  "teamId" : 9,
  "title" : "Colombia",
  "code" : "COL",
  "group" : 3
}, {
  "teamId" : 18,
  "title" : "Ecuador",
  "code" : "ECU",
  "group" : 5
}, {
  "teamId" : 8,
  "title" : "Australia",
  "code" : "AUS",
  "group" : 2
}, {
  "teamId" : 12,
  "title" : "Japan",
  "code" : "JPN",
  "group" : 3
}, {
  "teamId" : 32,
  "title" : "South Korea",
  "code" : "KOR",
  "group" : 8
}, {
  "teamId" : 23,
  "title" : "Iran",
  "code" : "IRN",
  "group": 6
}
  ]
};

// GET

exports.teams = function (req, res) {
  var teams = [];
  data.teams.forEach(function (team, i) {
    teams.push({
      id: team.TeamId,
      title: team.title,
      group: team.group,
    });
  });
  res.json({
    teams: teams
  });
};

exports.team = function (req, res) {
  var id = req.params.id;
  if (id >= 0 && id < data.teams.length) {
    res.json({
      team: data.teams[id]
    });
  } else {
    res.json(false);
  }
};

// POST

exports.addTeam = function (req, res) {
  data.teams.push(req.body);
  res.json(req.body);
};

// PUT

exports.editTeam = function (req, res) {
  var id = req.params.id;

  if (id >= 0 && id < data.teams.length) {
    data.teams[id] = req.body;
    res.json(true);
  } else {
    res.json(false);
  }
};

// DELETE

exports.deleteTeam = function (req, res) {
  var id = req.params.id;

  if (id >= 0 && id < data.teams.length) {
    data.teams.splice(id, 1);
    res.json(true);
  } else {
    res.json(false);
  }
};