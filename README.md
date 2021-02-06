# Planetary Age Calculator

#### Class project that converts Earth age into ages on different planets

#### By Geof Rosenmund

## Technologies Used

* Jest
* NPM
* JavaScript
* HTML
* CSS

## Description
  This logic will take in 2 arguments (age of user and life expectancy). It will convert them into ages based on that planets solar rotation. If they are younger than the expectancy, it will return how many years left until they reach the expectancy. If they are older than the expectancy, it will tell them how many years older than the expectancy they are.


## Setup/Installation Requirements

* Clone repository to your desktop
* Move to top level of the directory in your terminal
* Run [$ npm install] to recreate the environment
* Run [$ npm run build]
* Open dist/index.html in a browser

## GitHub Link
Repository: https://github.com/CrankyJones/agecalc

## Known Bugs

* I had issues using CSS. I was able to create a colored border box for the results, but if I hid it and then tried to re-show upon retrieving the results, it would never reappear. It is communicating, because I added a margin to my buttons, But it seems like I cannot do much more in terms of styling the HTML.
* It should not return values when entering letters because the inputs are for numbers only, but it does not filter out negative numbers. It also brings up results if the inputs are blanks, counting them as 0.

## License
[MIT](https://opensource.org/licenses/MIT)
Copyright (c) [2021] [Geof Rosenmund]

## Contact Information
Geof Rosenmund (geof.rosenmunds.email@gmail.com)