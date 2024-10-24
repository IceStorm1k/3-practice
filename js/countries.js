const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
]


document.addEventListener('DOMContentLoaded', () => {
  const container = document.createElement('div');
  let body = document.querySelector('body');
  container.id = 'numberContainer';
  document.body.appendChild(container);
  let text = document.createElement('h3');
  let text2 = document.createElement('h3');
  let text3 = document.createElement('h3');
  let text4 = document.createElement('h3');
  container.style.display = 'flex';
  container.style.flexWrap = 'wrap';
  container.style.justifyContent = 'center';
  container.style.alignItems = 'center';
  container.style.width = '100%';
  container.style.flexDirection = 'column';
  text4.textContent = 'Author: Vlad Sinyakovskiy';
  text3.textContent = '30DaysOfJavascript: DOM Day 2';
  text2.textContent = 'Total Number of countries: 193';
  text.textContent = 'WORLD COUNTRIES LIST';
  text4.style.textAlign = 'center';
  text4.style.fontWeight = '300';
  text4.style.fontSize = '1em';
  text4.style.margin = '0';
  text3.style.textAlign = 'center';
  text3.style.fontWeight = '300';
  text3.style.fontSize = '1em';
  text3.style.margin = '0';
  text3.style.marginTop = '-23px';
  text2.style.textAlign = 'center';
  text2.style.fontWeight = '300';
  text2.style.width = '100%';
  text2.style.marginTop = '-33px';
  text2.style.fontSize = '1.2em';
  text.style.textAlign = 'center';
  text.style.width = '100%';
  text.style.fontSize = '2.5em';
  text.style.letterSpacing = '8px';
  container.appendChild(text);
  container.appendChild(text2);
  container.appendChild(text3);
  container.appendChild(text4)

  let countryDiv = document.createElement('div')
  countryDiv.classList.add('countryDiv')
   countryDiv.style.width = '80%'
   countryDiv.style.display = 'flex'
   countryDiv.style.flexWrap = 'wrap'
   countryDiv.style.justifyContent = 'center'
   countryDiv.style.alignItems = 'center'
   countryDiv.style.marginLeft = '150px'
   countries.forEach(country => {
   body.appendChild(countryDiv)
    let chields = document.createElement('div')
    chields.textContent = country
    countryDiv.appendChild(chields)
    chields.style.border = '1px solid black'
    chields.style.padding = '10px'
    chields.style.margin = '10px'
    chields.style.display = 'inline-block'
    chields.style.fontSize = '16px'
    chields.style.width = '130px'
    chields.style.height = '150px'
    chields.style.display = 'flex'
    chields.style.justifyContent = 'center'
    chields.style.alignItems = 'center'
    chields.style.textTransform = 'uppercase'
    chields.style.textAlign = 'center'
    chields.style.fontWeight = '700'
  })
})