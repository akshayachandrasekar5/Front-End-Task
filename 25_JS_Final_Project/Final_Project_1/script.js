const countries = [
	{
			"name": "India",
			"capital": "New Delhi",
			"languages": [
                "Tamil",
					"Hindi",
					"English"
			],
			"population": 1380004385,
			"flag": "https://flagcdn.com/in.svg",
			"region": "Asia",
			"area": 3287590
	},
	{
			"name": "Indonesia",
			"capital": "Jakarta",
			"languages": [
					"Indonesian"
			],
			"population": 273523621,
			"flag": "https://flagcdn.com/id.svg",
			"region": "Asia",
			"area": 1904569
	},
	{
			"name": "Ireland",
			"capital": "Dublin",
			"languages": [
					"Irish",
					"English"
			],
			"population": 4994724,
			"flag": "https://flagcdn.com/ie.svg",
			"region": "Europe",
			"area": 70273
	},
	{
			"name": "Israel",
			"capital": "Jerusalem",
			"languages": [
					"Hebrew (modern)",
					"Arabic"
			],
			"population": 9216900,
			"flag": "https://flagcdn.com/il.svg",
			"region": "Asia",
			"area": 20770
	},
	{
			"name": "Italy",
			"capital": "Rome",
			"languages": [
					"Italian"
			],
			"population": 59554023,
			"flag": "https://flagcdn.com/it.svg",
			"region": "Europe",
			"area": 301336
	},
	{
			"name": "Japan",
			"capital": "Tokyo",
			"languages": [
					"Japanese"
			],
			"population": 125836021,
			"flag": "https://flagcdn.com/jp.svg",
			"region": "Asia",
			"area": 377930
	},
	{
			"name": "Jordan",
			"capital": "Amman",
			"languages": [
					"Arabic"
			],
			"population": 10203140,
			"flag": "https://flagcdn.com/jo.svg",
			"region": "Asia",
			"area": 89342
	},
    {
        "name": "Afghanistan",
        "capital": "Kabul",
        "languages": [
                "Pashto",
                "Uzbek",
                "Turkmen"
        ],
        "population": 40218234,
        "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
        "region": "Asia",
        "area": 652230
},
{
			"name": "Turkey",
			"capital": "Ankara",
			"languages": [
					"Turkish"
			],
			"population": 84339067,
			"flag": "https://flagcdn.com/tr.svg",
			"region": "Asia",
			"area": 783562
	},
	{
			"name": "Turkmenistan",
			"capital": "Ashgabat",
			"languages": [
					"Turkmen",
					"Russian"
			],
			"population": 6031187,
			"flag": "https://flagcdn.com/tm.svg",
			"region": "Asia",
			"area": 488100
	}
    // Add more countries as needed
];

const container = document.getElementById('container');

countries.forEach(country => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
        <img src="${country.flag}" alt="Flag of ${country.name}">
        <h3>${country.name}</h3>
        <p>Capital: ${country.capital}</p>
        <p>Population: ${country.population.toLocaleString()}</p>
        <p>Region: ${country.region}</p>
        <p>Languages: ${country.languages.join(', ')}</p>
    `;

    container.appendChild(card);
});
