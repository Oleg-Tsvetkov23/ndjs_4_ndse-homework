# ndjs_4_ndse-homework
homework1.js - Задание 1. Утилита получения текущей даты и времени
homework2.js - Задание 2. утилита-игра "Загадай число"

Установка.

Выполнить команду
git clone https://github.com/Oleg-Tsvetkov23/ndjs_4_ndse-homework.git

Далее, перейти в папку ndjs_4_ndse-homework командой
cd ./ndjs_4_ndse-homework

Линковка

Если операционная система - LINUX, изменить права доступа к файлам homework1.js и homework2.js
с помощью команды chmod +x ./homework1.js, chmod +x ./homework1.js.

Далее, выполнить команду npm link.

Запуск

Для запуска задания 1 домашней работы выполнить команду:

myDateUtil -h или --help вывод помощи;
myDateUtil current - для получения текущей даты и времени в формате ISO;
myDateUtil current --year или myDateUtil current -y для получения текущего года;
myDateUtil current --month или myDateUtil current -m для получения текущего месяца;
myDateUtil current --date или myDateUtil current -d для получения даты в календарном месяце;
myDateUtil add -d 2 для получения даты и времени на 2 дня больше текущей даты и времени в формате ISO;
myDateUtil sub --month 2 или myDateUtil sub -m 2 для получения даты и времени на 2 месяца меньше текущей даты и времени в формате ISO;

Для запуска задания 2 домашней работы выполнить команду myGame и вводя числа от 0 до 100 отгадать загаданное число, следуя подсказкам.