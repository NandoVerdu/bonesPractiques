Reveal.addEventListener('covert', function(){
const randomX = random(1, 2);
const randomY = random(2, 3);
const randomDelay = random(0, 1);
const randomTime = random(3, 5);
const randomTime2 = random(5, 10);
const randomAngle = random(8, 12);

gsap.set(circle, {
x: randomX(-1),
y: randomX(1),
rotation: randomAngle(-1)
});

moveX(circle, 1);
moveY(circle, -1);
rotate(circle, 1);

function rotate(target, direction) {

gsap.to(target, randomTime2(), {
rotation: randomAngle(direction),
// delay: randomDelay(),
ease: Sine.easeInOut,
onComplete: rotate,
onCompleteParams: [target, direction * -1]
});
}

function moveX(target, direction) {

gsap.to(target, randomTime(), {
x: randomX(direction),
ease: Sine.easeInOut,
onComplete: moveX,
onCompleteParams: [target, direction * -1]
});
}

function moveY(target, direction) {

gsap.to(target, randomTime(), {
y: randomY(direction),
ease: Sine.easeInOut,
onComplete: moveY,
onCompleteParams: [target, direction * -1]
});
}

function random(min, max) {
const delta = max - min;
return (direction = 1) => (min + delta * Math.random()) * direction;
}
});