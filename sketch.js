var basket, basket_img;
var fruit, fruit_img;

function preload() {
    basket_img = loadImage("images/basket2.png");
    fruit_img = loadImage("images/apple2.png");
}

function setup() {
    createCanvas(500,600);
    basket = createSprite(450,300,20,20);
    basket.scale = 0.3;
    basket.addImage(basket_img);
    fruit = createSprite(50,300,20,20);
    fruit.scale = 0.3;
}

function draw() {
    drawSprites();
}