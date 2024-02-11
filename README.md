<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Before You Can Be My Valentine: How Well Do You Know MAHAS?</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="quizContainer">
        <h1>Before You Can Be My Valentine: How Well Do You Know MAHAS?</h1>
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
                <li><button onclick="checkAnswer('q3', 'zoya')">Zoya</button></li>
                <li><button onclick="checkAnswer('q3', 'zoya')">Zoya</button></li>
                <li><button onclick="checkAnswer('q3', 'zoya')">Zoya</button></li>
            </ul>
            <p id="q3"></p>
        </div>
        <div id="result" class="question" style="display:none;">
            <p id="resultMessage"></p>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
