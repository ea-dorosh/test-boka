'use strict';

var languageButtons = document.querySelectorAll('.language-navigation a');
var menuButtons = document.querySelectorAll('.main-navigation-list li')

var changeLanguage = function (element) {
	for (var i = 0; i < element.length; i++) {
      element[i].addEventListener("click", function(evt) {
        var current = this;
        for (var i = 0; i < element.length; i++) {
          if (current !== element[i]) {
            element[i].classList.remove('language-selected');
		}
		// можно добавить если нужно снимать класс при клике на элемент уже с этим классом
		// else if (current.classList.contains('language-selected') === true) {
        //    current.classList.remove('language-selected');
        // }
		  else {
            current.classList.add('language-selected')
          }
        }
        evt.preventDefault();
      });
    }
};

var changeFooterMenu = function (element) {
	for (var i = 0; i < element.length; i++) {
		element[i].addEventListener("click", function(evt) {
          var current = this;
          for (var i = 0; i < element.length; i++) {
            if (current !== element[i]) {
              element[i].classList.remove('active');
  		} else {
              current.classList.add('active')
            }
          }
          evt.preventDefault();
        });
	}
}

changeLanguage (languageButtons);
changeFooterMenu (menuButtons);
