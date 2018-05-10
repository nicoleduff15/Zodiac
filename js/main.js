// console.log("connected");
var zodiac = [
{
  sign: "Aquarius",
  image: "img/aquarius.png",
  description: "Aquarius-born are shy and quiet , but on the other hand they can be eccentric and energetic. However, in both cases, they are deep thinkers and highly intellectual people who love helping others. They are able to see without prejudice, on both sides, which makes them people who can easily solve problems."
},
{
  sign: "Aries",
  image: "img/aries.png",
  description: "As the first sign in the zodiac, the presence of Aries always marks the beginning of something energetic and turbulent. They are continuously looking for dynamic, speed and competition, always being the first in everything - from work to social gatherings."
},
{
  sign: "Cancer",
  image: "img/cancer.png",
  description: "Deeply intuitive and sentimental, Cancer can be one of the most challenging zodiac signs to get to know. They are very emotional and sensitive, and care deeply about matters of the family and their home."
},
{
  sign: "Capicorn",
  image: "img/capicorn.png",
  description: "Capricorn is a sign that represents time and responsibility, and its representatives are traditional and often very serious by nature. These individuals possess an inner state of independence that enables significant progress both in their personal and professional lives."
},
{
  sign: "Gemini",
  image: "img/gemini.png",
  description: "Expressive and quick-witted, Gemini represents two different personalities in one and you will never be sure which one you will face. They are sociable, communicative and ready for fun, with a tendency to suddenly get serious, thoughtful and restless."
},
{
  sign: "Leo",
  image: "img/leo.png",
  description: "People born under the sign of Leo are natural born leaders. They are dramatic, creative, self-confident, dominant and extremely difficult to resist, able to achieve anything they want to in any area of life they commit to."
},
{
  sign: "Libra",
  image: "img/libra.png",
  description: "People born under the sign of Libra are peaceful, fair, and they hate being alone. Partnership is very important for them, as their mirror and someone giving them the ability to be the mirror themselves."
},
{
  sign: "Pisces",
  image: "img/pisces.png",
  description: "Pisces are very friendly, so they often find themselves in a company of very different people. Pisces are selfless, they are always willing to help others, without hoping to get anything back."
},
{
  sign: "Sagittarius",
  image: "img/sagittarius.png",
  description: "Curious and energetic, Sagittarius is one of the biggest travelers among all zodiac signs. Their open mind and philosophical view motivates them to wander around the world in search of the meaning of life."
},
{
  sign: "Scorpio",
  image: "img/scorpio.png",
  description: "Scorpio-born are passionate and assertive people. They are determined and decisive, and will research until they find out the truth. Scorpio is a great leader, always aware of the situation and also features prominently in resourcefulness."
},
{
  sign: "Taurus",
  image: "img/taurus.png",
  description: "Practical and well-grounded, Taurus is the sign that harvests the fruits of labor. They feel the need to always be surrounded by love and beauty, turned to the material world, hedonism, and physical pleasures."
},
{
  sign: "Virgo",
  image: "img/virgo.png",
  description: "Virgos are always paying attention to the smallest details and their deep sense of humanity makes them one of the most careful signs of the zodiac. Their methodical approach to life ensures that nothing is left to chance, and although they are often tender, their heart might be closed for the outer world."
}
];

var header = document.getElementById("h1");
var paragraph = document.getElementById("p");
var img = document.getElementById("img");
var input = document.getElementById("input");

function getSign() {
  for (i=0; i<zodiac.length; i++) {
    if (input.value.toLowerCase() === signs[i].sign) {
      header.innerHTML = signs[i].sign.toUpperCase();
      img.src = signs[i].image;
      paragraph.innerHTML = signs[i].description;
      return;
    }
  }
}
