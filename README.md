<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello Kitty Valentine's Adventure</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="envelope-container">
        <div class="envelope">
            <div class="front"></div>
            <div class="card">
                <div class="text">Will You Be My Valentine?</div>
                <button onclick="startQuiz('Yes')">Yes</button>
                <button onclick="endGame('No')">No</button>
            </div>
            <div class="hearts">
                <div class="one"></div>
                <div class="two"></div>
                <div class="three"></div>
                <div class="four"></div>
                <div class="five"></div>
            </div>
        </div>
        <div class="shadow"></div>
    </div>

    <div id="quizContainer" class="container" style="display:none;">
