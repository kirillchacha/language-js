# Creating a language translation on pages.
To change the language on the page we need a `js`, `json` file and write in `html`.

### index.html:
```HTML
<div class="page__language">
	<select data-scroll id="language-select" class="page__language-select" onchange="selectLanguage()" data-class-modif="test">
		<option value="German" selected>German</option>
		<option value="English">English</option>
		<option value="Italian">Italian</option>
	</select>
</div>
```
id=`"language-select"` - Needed for `js` to work. <br>
`<option value="German" selected>German</option>` - The default language. <br>
`<option value="English">English</option>` - to change the language to any other language.

In the `json` folder, create the `language.json` file.
### language.json:
```json
{
	"German": {},
	"English": {},
	"Italian":{}
}
```
Where we will actually enter what we need to translate, Example:
```json
{
	"German": {
		"menuText": [
			"Hauptseite",
			"Über mich",
			"Kursprogramm",
			"Galerie"
		],
		"mainPageBlock": [
			{
				"p1": "Inmitten der Natur, auf dem schönen Dietelsberg befindet sich dieser Ort, der zum Gestalten von vielseitigen Kreationen anregt und der gleichzeitig Raum bietet für Begegnungen und Gespräche.",
				"p2": "Aus unserem alten Hühnerstall ist ein Atelier entstanden, in welchem Kreativität und Kommunikation gelebt werden kann.",
				"p3": "In den <a href=\"#\" class=\"block-main__parahraph-link\">Kreativkursen</a> gestalten wir zum Beispiel individuelle Mosaikkugeln aus Keramikfliesen.",
				"p4": "In den <a href=\"#\" class=\"block-main__parahraph-link\">Kommunikationskursen</a> wird ein Elternbildungstraining nach Thomas Gordon angeboten.",
				"p5": "In einem persönlichen <a href=\"#\" class=\"block-main__parahraph-link\">Coaching</a> finden Sie individuelle Lösungen zu Ihrer aktuellen Herausforderung.",
				"p6": "Ich freue mich auf eine Begegnung mit Ihnen."
			}
		],
		"gordonPageHeadlineList2": "Mögliche Themen:"
	},
	"English": {
		"menuText": [
			"Homepage",
			"About us",
			"Program of courses",
			"Gallery"
		],
		"mainPageBlock": [
			{
				"p1": "In the middle of nature, on the beautiful Dietelsberg, you will find this place that inspires the design of versatile creations and at the same time offers space for encounters and conversations.",
				"p2": "Our old chicken coop has been transformed into a studio where creativity and communication can be lived.",
				"p3": "In the <a href=\"#\" class=\"block-main__parahraph-link\">Creative courses</a> for example, we design individual mosaic balls from ceramic tiles",
				"p4": "In the <a href=\"#\" class=\"block-main__parahraph-link\">Communication courses</a> we offer parent education training according to Thomas Gordon.",
				"p5": "In a personal <a href=\"#\" class=\"block-main__parahraph-link\">Coaching</a> you will find individual solutions to your current challenge.",
				"p6": "I look forward to meeting you."
			}
		],
		"gordonPageHeadlineList2": "Possible themes:"
	},
}
```
`menuText` is a class that is in `html`. <br>
Переходим теперь в папку `js` создаем `script.js`.
### script.js:
```JS
async function loadLanguageData() {
	try {
		const response = await fetch('json/language.json'); // Be sure to designate a file
		if (!response.ok) {
			throw new Error('Failed to load language data');
		}
		return await response.json();
	} catch (error) {
		console.error(error);
		return null;
	}
}
```
The first `js` script directs and searches for the `language.json` file. <br>

Next, we need to do a check. If there will be multiple pages and request what we wrote in `html`, id=`"language-select"`:
```JS
async function selectLanguage() {
	const languageData = await loadLanguageData();
	if (!languageData) return;

	const languageSelect = document.querySelector("#language-select");
	const language = languageSelect ? languageSelect.value : 'German';

	const selectedLanguageData = languageData[language];
	if (!selectedLanguageData) return;

	const updateElementContent = (selector, content, property = 'textContent') => {
		const element = document.querySelector(selector);
		if (element) {
			element[property] = content;
		}
	};
}
```
After checking, we write what we want to translate:
```JS
async function selectLanguage() {
	// Code
const updateElementContent = (selector, content, property = 'textContent') => {
		const element = document.querySelector(selector);
		if (element) {
			element[property] = content;
		}
	};
	// Our language translation.
	// Example:
	selectedLanguageData.menuText.forEach((menuLink, i) => {
			if (menuLinks[i]) {
				menuLinks[i].textContent = menuLink;
			}
		});
		const mainPageBlockArray = selectedLanguageData.mainPageBlock;
	if (mainPageBlockArray) {
		let mainPageBlock;
		mainPageBlockArray.forEach((content, index) => {
			mainPageBlock = `<p class="block-main__parahraph">${content.p1}</p>
			<div class="block-main__parahraph">${content.p2}</div>
			<div class="block-main__parahraph">${content.p3}</div>
			<div class="block-main__parahraph">${content.p4}</div>
			<div class="block-main__parahraph">${content.p5}</div>
			<div class="block-main__parahraph">${content.p6}</div>
			<p class="block-main__name">Eleonora Zingg-Gasser</p>`;
		});

		updateElementContent('.main-page__block', mainPageBlock, 'innerHTML');
	};
	updateElementContent('.gordon-page__headline-list--2', selectedLanguageData.gordonPageHeadlineList2);
}
```
It is mandatory to write at the end:
```JS
async function selectLanguage() {
	// Code
	// language translation code.
}
document.addEventListener("DOMContentLoaded", function () {
	selectLanguage();
});

document.addEventListener("selectCallback", function (e) {
	selectLanguage();
});
```
License: [CC-BY](https://creativecommons.org/licenses/by/4.0/deed.en)