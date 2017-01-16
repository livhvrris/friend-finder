var friends = [{
	name: "J. Cole",
	photo: "http://static.vibe.com/files/2016/02/J-Cole-Obama-DNC-Fundraiser.jpg",
	scores: [ "1", "1", "1", "1", "1", "1", "1", "1", "1", "1" ]
},
{
	name: "Beyonce",
	photo: "http://cosmouk.cdnds.net/15/18/1600x800/landscape_nrm_1430565303-beyonce_at_the_brit_awards.jpg",
	scores: [ "2", "2", "2", "2", "2", "2", "2", "2", "2", "2"]
			 
},
{
	name: "Zayn",
	photo: "http://www.onedirection.info/wp-content/uploads/2013/01/zayn-003-e1359384960461.png?ba4058",
	scores: [ "3", "3", "3", "3", "3", "3", "3", "3", "3", "3"]
			 
},
{
	name: "Adele",
	photo: "http://www.billboard.com/files/styles/article_main_image/public/media/Adele-2015-Alasdair-McLellan-billboard-650.jpg",
	scores: [ "4", "4", "4", "4", "4", "4", "4", "4", "4", "4"]
			 
},
{
	name: "Rihanna",
	photo: "http://blameebro.com/wp-content/uploads/2016/10/Rihanna-2015.jpg",
	scores: [ "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
}];


module.exports = friends;


function findFriend() {

	var totalScore = [];

	for (var i = 0; i < friends[friends.length - 1].scores.length; i++) {
	    var latestInput = parseInt((friends[friends.length - 1].scores[i]))
	}

	for (var k = 0; k < friends.length - 1; k++) {
		var result = (friends[k].scores)
		var total = 0;

			for (var j = 0; j < result.length; j++) {
	        var subtract = Math.abs(parseInt(result[j]) - latestInput)
			var difference = total += subtract;
	        }
			totalScore.push(difference)
	}

	var min = Math.min.apply( null, totalScore )
	
	var index = totalScore.indexOf(Math.min(...totalScore));
	
	var friendMatch = friends[index];
		return friendMatch;
	}
	

findFriend();