# Словари Wordle

Основные источники догадок загружаются при запуске раунда. Из обоих берутся только слова из пяти букв.

- Русский — [danakt/russian-words](https://github.com/danakt/russian-words), словоформы в Windows-1251, лицензия MIT.
- Английский — [ENABLE1](https://github.com/dolph/dictionary/blob/master/enable1.txt), список M. Leo Cooper и Alan Beale, общественное достояние.

Загадки выбираются из отдельных списков распространённых слов в `wordle.js`.

## Резервный русский словарь

`guesses.js` содержит словоформы морфологического словаря [OpenCorpora](https://opencorpora.org/?page=downloads), ревизия 417150, в сборке [pymorphy3-dicts-ru 2.4.417150.4580142](https://pypi.org/project/pymorphy3-dicts-ru/2.4.417150.4580142/).

Для игры отобраны формы из пяти русских букв. Исключены помеченные словарём имена собственные, сокращения, опечатки и искажённые написания. Регистр приведён к верхнему, Ё заменена на Е, повторы удалены.

Производный список распространяется на условиях [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/), лицензии словарных данных OpenCorpora.
