var questions = [
    {
        question: "1. Какое время года ты любишь больше всего?",
        options: ["Весна", "Лето", "Осень", "Зима", "Люблю все времена года"]
    },
    {
        question: "2. Какой цвет тебе нравится больше всего?",
        options: ["Красный", "Синий", "Зеленый", "Желтый", "Фиолетовый"]
    },
    {
        question: "3. Что ты предпочитаете делать в свободное время?",
        options: ["Рисование и творчество", "Путешествия и приключения", "Помогать другим", "Отдых и сон", "Краситься"]
    },
    {
        question: "4. Что ты обычно ешь на завтрак?",
        options: ["Каши и йогурт ", "Бутерброды и сок", "Мюсли и фрукты", "Хлопья и молоко", "Салат"]
    },
    {
        question: "5. Какую музыку ты предпочитаешь слушать?",
        options: ["Поп-музыка", "Классическая музыка", "Рок-музыка", "Электронная музыка"]
    },
    {
        question: "6. Какое свойство лучше всего описывает тебя?",
        options: ["Доброта", "Энергичность", "Умение общаться", "Спокойствие", "Дружелюбие"]
    },
    {
        question: "7. Какой вид спорта ты предпочитаешь?",
        options: ["Футбол", " Художественная гимнастика", "Плавание", "Бег", "Теннис"]
    },
    {
        question: "8. Как проводишь свободное время?",
        options: ["Читаешь книги", "Занимаешься физкультурой", "Играешь на музыкальных инструментах", "Готовишь вкусности", "Собираю фантики в альбом"]
    },
    {
        question: "9. Какую книгу ты предпочитаешь читать?",
        options: ["Приключения", "Фантастику", "Сказки", "Детективы", "Романтику"]
    },
    {
        question: "10. Какая погода тебе нравится?",
        options: ["Солнечная и теплая", "Дождливая и уютная", "Ветреная и свежая", "Снежная и холодная", "Люблю разную погоду"]
    },
    {
        question: "11. Какой предмет в школе тебе больше всего нравится?",
        options: ["Математика", "Искусство", "Литература", "Физкультура", "Мне нравятся все предметы"]
    },
    {
        question: "12. Какого домашнего питомца ты бы выбрал?",
        options: ["Собаку", "Кошку", "Рыбок", "Хомячка", "Я не хочу иметь домашнего питомца"]
    }
];

var results = [
    {character: "Крош", score: 0},
    {character: "Пин", score: 0},
    {character: "Нюша",score: 0},
    {character: "Бараш",score: 0},
    {character: "Ёжик",score: 0}
];


var characterImages = {
    "Крош": "url('krosh.jpg')",
    "Пин": "url('pin.jpg')",
    "Нюша": "url('nusha.jpg')",
    "Бараш": "url('barash.jpg')",
    "Ёжик": "url('ejik.jpg')"
};


var currentQuestion = 0;

var backgrounds = [
    "url('background1.jpg')",
    "url('background2.jpg')",
    "url('background3.jpg')",
    "url('background4.jpg')",
    "url('background5.jpg')"
];

function startGame() {
    var resultElement = document.getElementById("result");
    var restartButton = document.getElementById("restartButton");
    //Скрываем
    resultElement.style.display = "none";
    restartButton.style.display = "none";
    displayQuestion();
}

// Функция для отображения вопроса и вариантов ответов
function displayQuestion() {
    changeBackground();
    var questionElement = document.getElementById("question");
    var optionsElement = document.getElementById("options");
    // Очищаем
    questionElement.innerHTML = "";
    optionsElement.innerHTML = "";
    questionElement.innerHTML = questions[currentQuestion].question;    // Отображаем текущий вопрос
    // Отображаем варианты ответов
    for (var i = 0; i < questions[currentQuestion].options.length; i++) {
        var option = document.createElement("button"); // создали кнопку, присваиваем элемент
        option.innerHTML = questions[currentQuestion].options[i]; //элементу присвоили вопрос
        option.classList.add("option"); // для стилей
        option.addEventListener("click", selectOption); // при клике - функция
        optionsElement.appendChild(option); // добавили кнопку внуть "контейнера" вариантов ответа
        optionsElement.appendChild(document.createElement("br")); // перенос строки 
    }
}

function changeBackground() {
    var randomIndex = Math.floor(Math.random() * backgrounds.length);
    document.body.style.backgroundImage = backgrounds[randomIndex];
}

// Функция для выбора варианта ответа
function selectOption(event) {
    var selectedOption = event.target.innerHTML; //какой ответ
    switch (selectedOption) {
        case"Весна": results[0].score++;break;
        case"Лето": results[1].score++;break;
        case"Осень": results[2].score++;break; 
        case"Зима": results[3].score++;break; 
        case"Люблю все времена года": results[4].score++;break; 

        case"Красный": results[2].score++;break; 
        case"Синий": results[0].score++;break; 
        case"Зеленый": results[1].score++;break; 
        case"Желтый": results[3].score++;break; 
        case"Фиолетовый": results[4].score++;break;

        case"Рисование и творчество": results[0].score++;break; 
        case"Путешествия и приключения": results[1].score++;break; 
        case"Помогать другим": results[4].score++;break; 
        case"Отдых и сон": results[3].score++;break; 
        case"Краситься": results[2].score++;break;

        case"Каши и йогурт": results[2].score++;break;
        case"Салат": results[4].score++;break; 
        case"Бутерброды и сок": results[1].score++;break; 
        case"Мюсли и фрукты": results[0].score++;break;
         case"Хлопья и молоко": results[3].score++;break; 

        case"Поп-музыка": results[2].score++;break;
        case"Классическая музыка": results[3].score++; results[4].score++;break; 
        case"Рок-музыка": results[1].score++;break; 
        case"Электронная музыка": results[0].score++;break; 

        case"Доброта": results[2].score++;break; 
        case"Энергичность": results[0].score++;break; 
        case"Умение общаться": results[1].score++;break; 
        case"Спокойствие": results[3].score++;break; 
        case"Дружелюбие": results[4].score++;break; 

        case"Футбол": results[1].score++;break; 
        case" Художественная гимнастика": results[2].score++;break; 
        case"Плавание": results[3].score++;break; 
        case"Бег": results[0].score++;break; 
        case"Теннис": results[4].score++;break;

        case"Читаешь книги": results[3].score++;break; 
        case"Занимаешься физкультурой": results[0].score++;break; 
        case"Играешь на музыкальных инструментах": results[1].score++;break; 
        case"Готовишь вкусности": results[2].score++;break; 
        case"Собираю фантики в альбом": results[4].score++;break; 

        case"Приключения": results[1].score++;break; 
        case"Фантастику": results[0].score++;break; 
        case"Сказки": results[2].score++;break; 
        case"Детективы": results[3].score++;break; 
        case"Романтику": results[4].score++;break; 

        case"Солнечная и теплая": results[1].score++;break; 
        case"Дождливая и уютная": results[2].score++;break; 
        case"Ветреная и свежая": results[0].score++;break; 
        case"Снежная и холодная": results[3].score++;break; 
        case"Люблю разную погоду": results[4].score++;break;

        case"Математика": results[1].score++;break; 
        case"Искусство": results[0].score++;break;
        case"Литература": results[2].score++;break; 
        case"Физкультура": results[3].score++;break;
        case"Мне нравятся все предметы": results[4].score++;break; 

        case"Собаку": results[1].score++;break; 
        case"Кошку": results[2].score++;break;
        case"Рыбок": results[0].score++;break; 
        case"Хомячка": results[3].score++;break; 
        case"Я не хочу иметь домашнего питомца": results[4].score++;break;    
   }
    currentQuestion++;
    if (currentQuestion === questions.length) {
         showResult();
    } else {
        displayQuestion();
    }
}


// Функция для отображения результата
function showResult() {
    var resultElement = document.getElementById("result");
    var restartButton = document.getElementById("restartButton");

    // Отображаем результат и кнопку "Начать игру"
    resultElement.style.display = "block";
    restartButton.style.display = "block";
    var resultElement = document.getElementById("result");
    var maxScore = 0;
    var character = "";
    // Находим персонажа с наибольшим количеством баллов
    for (var i = 0; i < results.length; i++) {
        if (results[i].score > maxScore) {
            maxScore = results[i].score;
            character = results[i].character;
        }
    }
    // Результат
    resultElement.innerHTML = "Вы больше всего похожи на персонажа " + character + "!";

    // Отображаем картинку персонажа
    document.body.style.backgroundImage = characterImages[character];
    
    // Очищаем страницу
    var questionElement = document.getElementById("question");
    var optionsElement = document.getElementById("options");
    questionElement.innerHTML = "";
    optionsElement.innerHTML = "";

    // Создаем кнопку "Начать игру"
    var restartButton = document.getElementById("restartButton");
    restartButton.addEventListener("click", restartGame);
    restartButton.style.display = "block";
}

// Функция для начала игры заново
function restartGame() {
    for (var i = 0; i < results.length; i++) {
        results[i].score = 0;
    }
    currentQuestion = 0;
    document.body.style.backgroundImage = "none"; // Удаляем фоновое изображение
    startGame(); // Начинаем игру заново
}


