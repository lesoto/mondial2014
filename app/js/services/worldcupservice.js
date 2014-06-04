angular.module('mondial2014.services.worldcup', [])
  .factory('WorldCup', function() {
    var WorldCup = {};
    WorldCup.teams = [
      { "teamId" : 31, "title" : "Russia", "code" : "rus", "group" : 8, "ranking": 903 }, 
      { "teamId" : 10, "title" : "Greece", "code" : "gre", "group" : 3, "ranking": 1082 }, 
      { "teamId" : 6, "title" : "Netherlands", "code" : "ned", "group" : 2, "ranking": 967 }, 
      { "teamId" : 25, "title" : "Germany", "code" : "ger", "group" : 7, "ranking": 1340 }, 
      { "teamId" : 26, "title" : "Portugal", "code" : "por", "group" : 7, "ranking": 1245 }, 
      { "teamId" : 5, "title" : "Spain", "code" : "esp", "group" : 2, "ranking": 1460 }, 
      { "teamId" : 16, "title" : "Italy", "code" : "ita", "group" : 4, "ranking": 1115 }, 
      { "teamId" : 2, "title" : "Croatia", "code" : "cro", "group" : 1, "ranking": 871 }, 
      { "teamId" : 19, "title" : "France", "code" : "fra", "group" : 5, "ranking": 935 }, 
      { "teamId" : 15, "title" : "England", "code" : "eng", "group" : 4, "ranking": 1043 }, 
      { "teamId" : 17, "title" : "Switzerland", "code" : "sui", "group" : 5, "ranking": 1161 }, 
      { "teamId" : 29, "title" : "Belgium", "code" : "bel", "group" : 8, "ranking": 1039 }, 
      { "teamId" : 22, "title" : "Bosnia-Herzegovina", "code" : "bih", "group" : 6, "ranking": 795 }, 
      { "teamId" : 30, "title" : "Algeria", "code" : "alg", "group" : 8, "ranking": 795 }, 
      { "teamId" : 11, "title" : "C\u00f4te d'Ivoire", "code" : "civ", "group" : 3, "ranking": 830 }, 
      { "teamId" : 27, "title" : "Ghana", "code" : "gha", "group" : 7, "ranking": 713 }, 
      { "teamId" : 4, "title" : "Cameroon", "code" : "cmr", "group" : 1, "ranking": 583 }, 
      { "teamId" : 24, "title" : "Nigeria", "code" : "nga", "group" : 6, "ranking": 631 }, 
      { "teamId" : 3, "title" : "Mexico", "code" : "mex", "group" : 1, "ranking": 877 }, 
      { "teamId" : 28, "title" : "United States", "code" : "usa", "group" :7, "ranking": 1015 }, 
      { "teamId" : 20, "title" : "Honduras", "code" : "hon", "group" : 5, "ranking": 759 }, 
      { "teamId" : 14, "title" : "Costa Rica", "code" : "crc", "group" : 4, "ranking": 748 }, 
      { "teamId" : 21, "title" : "Argentina", "code" : "arg", "group" : 6, "ranking": 1178 }, 
      { "teamId" : 1, "title" : "Brazil", "code" : "bra", "group" : 1, "ranking": 1210 }, 
      { "teamId" : 7, "title" : "Chile", "code" : "chi", "group" : 2, "ranking": 1037 }, 
      { "teamId" : 13, "title" : "Uruguay", "code" : "uru", "group" : 4, "ranking": 1181 }, 
      { "teamId" : 9, "title" : "Colombia", "code" : "col", "group" : 3, "ranking": 1186 }, 
      { "teamId" : 18, "title" : "Ecuador", "code" : "ecu", "group" : 5, "ranking": 794 }, 
      { "teamId" : 8, "title" : "Australia", "code" : "aus", "group" : 2, "ranking": 545 }, 
      { "teamId" : 12, "title" : "Japan", "code" : "jpn", "group" : 3, "ranking": 613 }, 
      { "teamId" : 32, "title" : "South Korea", "code" : "kor", "group" : 8, "ranking": 551 }, 
      { "teamId" : 23, "title" : "Iran", "code" : "irn", "group" : 6, "ranking": 715 }
    ];

//    WorldCup.groups = [
//      {"abbr":"Group A", { "teamName" : "Brazil"}, { "teamName" : "Croatia"}, { "teamName" : "Mexico"}, { "teamName" : "Cameroon"} },
//      {"abbr":"Group B", { "teamName" : "Spain"}, { "teamName" : "Netherlands"}, { "teamName" : "Chile"}, { "teamName" : "Australia"} },
//      {"abbr":"Group C", { "teamName" : "Colombia"}, { "teamName" : "Greece"}, { "teamName" : "Côte d''Ivoire  Japan"} },
//      {"abbr":"Group D", { "teamName" : "Uruguay"}, { "teamName" : "Costa Rica"}, { "teamName" : "England"}, { "teamName" : "Italy"} },
//      {"abbr":"Group E", { "teamName" : "Switzerland  Ecuador"}, { "teamName" : "France"}, { "teamName" : "Honduras"} },
//      {"abbr":"Group F", { "teamName" : "Argentina"}, { "teamName" : "Bosnia-Herzegovina"}, { "teamName" : "Iran"}, { "teamName" : "Nigeria"} },
//      {"abbr":"Group G", { "teamName" : "Germany"}, { "teamName" : "Portugal"}, { "teamName" : "Ghana"}, { "teamName" : "United States"} },
//      {"abbr":"Group H", { "teamName" : "Belgium"}, { "teamName" : "Algeria"}, { "teamName" : "Russia"}, { "teamName" : "South Korea"} }
//      ];
    
  return WorldCup;
  
  });