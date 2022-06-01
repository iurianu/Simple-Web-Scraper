
const feedDisplay = document.querySelector('#feed')

fetch('http://localhost:8000/results')
	.then(response => {return response.json()})
	.then(data => {
		data.forEach(article => {
			//const title = `<div><h3>` + article.title + `</h3><p>` + article.url + `</div>`
			const title = `<div><h3><a href="` + article.url + `" target="_blank" rel="tag">` + article.title + `</a></h3></div>`
			feedDisplay.insertAdjacentHTML("beforeend", title)
		})
	})
	.catch(err => console.log(err))

	