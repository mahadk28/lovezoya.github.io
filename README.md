<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello Kitty Valentine's Adventure</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="introContainer" class="container">
        <h1>By Your MAHAS</h1>
        <p>Hey Zoya, will you be my Valentine?</p>
        <button onclick="startQuiz('Yes')">Yes</button>
        <button onclick="endGame('No')">No</button>
    </div>

    <div id="quizContainer" class="container" style="display:none;">
        <h1>How Well Do You Know MAHAS?</h1>
        <div id="question1" class="question">
            <p>What's his favorite color?</p>
            <ul>
                <li><button onclick="checkAnswer('q1', 'purple')">Purple</button></li>
                <li><button onclick="checkAnswer('q1', 'blue')">Blue</button></li>
                <li><button onclick="checkAnswer('q1', 'green')">Green</button></li>
                <li><button onclick="checkAnswer('q1', 'red')">Red</button></li>
            </ul>
            <p id="q1"></p>
        </div>

        <div id="question2" class="question" style="display:none;">
            <p>Who's his favorite artist?</p>
            <ul>
                <li><button onclick="checkAnswer('q2', 'drake')">Drake</button></li>
                <li><button onclick="checkAnswer('q2', 'daniel')">Daniel Caesar</button></li>
                <li><button onclick="checkAnswer('q2', 'kanye')">Kanye</button></li>
                <li><button onclick="checkAnswer('q2', 'weeknd')">The Weeknd</button></li>
            </ul>
            <p id="q2"></p>
        </div>

        <div id="question3" class="question" style="display:none;">
            <p>Who does he love the most in the whole wide world?</p>
            <ul>
                <li><button onclick="checkAnswer('q3', 'zoya')">Zoya</button></li>
                <li><button onclick="checkAnswer('q3', 'zara')">Zara</button></li>
                <li><button onclick="checkAnswer('q3', 'zoey')">Zoey</button></li>
                <li><button onclick="checkAnswer('q3', 'zain')">Zain</button></li>
            </ul>
            <p id="q3"></p>
        </div>

        <div id="question4" class="question" style="display:none;">
            <p>What's his favorite food?</p>
            <ul>
                <li><button onclick="checkAnswer('q4', 'sushi')">Sushi</button></li>
                <li><button onclick="checkAnswer('q4', 'pizza')">Pizza</button></li>
                <li><button onclick="checkAnswer('q4', 'tacos')">Tacos</button></li>
                <li><button onclick="checkAnswer('q4', 'pasta')">Pasta</button></li>
            </ul>
            <p id="q4"></p>
        </div>

        <div id="result" class="question" style="display:none;">
            <p id="resultMessage"></p>
            <p>Now, here's a special message for you:</p>
            <p>Dear Zoya,</p>
            <p>I love you more than words can express. You mean the world to me, and I am grateful to have you in my life. Happy Valentine's Day!</p>
            <!-- Add baby pictures here -->
            <div>
                <img src="mahas_baby_picture.jpg" alt="Mahas Baby Picture" style="max-width: 100%; margin-top: 20px;">
                <img src="zoya_baby_picture.jpg" alt="Zoya Baby Picture" style="max-width: 100%; margin-top: 20px;">
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
