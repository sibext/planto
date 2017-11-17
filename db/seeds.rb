# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

sibext = Organization.create name: 'Sibext Ltd.', url: 'sibext.com', email: 'contacts@sibext.com'

alex_cohen = User.create first_name: 'Alex',
                         last_name: 'Cohen',
                         email: 'alex.cohen@mail.com',
                         password: 111111

ally_bogard = User.create first_name: 'Ally',
                          last_name: 'Bogard',
                          email: 'ally.bogard@mail.com',
                          password: 111111

memory_miner = Project.create name: 'Memory miner',
                              organization: sibext

pin_pin = Project.create name: 'Pin Pin',
                         organization: sibext

Report.create [
    {
        text: "Обвязка данными из Api\n Тесты для Api",
        user: ally_bogard,
        project: pin_pin
    },
    {
        text: "Баги по авторизации.\n Логика контролов",
        user: alex_cohen,
        project: memory_miner
    },
    {
        text: "Подключение модуля\n Тестирование модуля",
        user: ally_bogard,
        project: pin_pin
    },
    {
        text: "Google авторизация.\n Визуализация сцен",
        user: alex_cohen,
        project: memory_miner
    },
]