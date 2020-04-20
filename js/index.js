const URL = 'https://api.jsonbin.io/b/5e905926172eb643896166e7';

const fields = [
	"var1",
	"var2",
	"var3",
	"var4",
	"var5",
	"var6",
	"speach"
];

function getFormValues() {
	return fields.reduce((acc, field) => {
  	acc[field] = $("#" + field).val()
    return acc
  }, {});
}

function handleData(data) {
	const formValues = getFormValues()
  const text = data.text
	let finalMessage = ""
  
  
	text.forEach(function(line) {
		for (let key in formValues) {
			line = line.replace("{" + key + "}", formValues[key]);
		}
		finalMessage += `<span>${line}</span> <br>`;	
	})

	$('.result').html(finalMessage);
}

function handleButton () {
	$.getJSON(URL, handleData);
}

$('.btn').click(handleButton);