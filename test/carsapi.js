const request = require("request");
request.get({
	url: "https://carapi.app/api/makes",
}, function(error, response, body) {
	if (error) console.error("Request failed", error);
	else if (response.statusCode != 200) return console.error("Error: ", response.statusCode, body.toString("utf8"));
	else console.log(JSON.parse(body).data.sort((a, b) => a.id - b.id));
});