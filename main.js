const messages = {
    1: [
      'Remember, it\'s okay to ask for help.',
      'Don\'t forget to take care of yourself today.',
      'Rest and recharge, tomorrow is a new day.'
    ],
    2: [
      'You\'re stronger than you think.',
      'Believe in yourself and all that you are.',
      'You have within you right now, everything you need to deal with whatever the world can throw at you.'
    ],
    3: [
      'Tough times never last, but tough people do.',
      'The pain you feel today will be the strength you feel tomorrow.',
      'There is no success without hardship.'
    ],
    4: [
      'Small steps every day.',
      'You don\'t have to see the whole staircase, just take the first step.',
      'Every journey begins with a single step.'
    ],
    5: [
      'Stay strong, make them wonder how you\'re still smiling.',
      'Challenges are what make life interesting, overcoming them is what makes life meaningful.',
      'Stay positive, work hard, make it happen.'
    ],
    6: [
      'Keep looking up, that\'s the secret of life.',
      'Stay close to anything that makes you glad you are alive.',
      'Life is short, live it. Love is rare, grab it.'
    ],
    7: [
      'Life is better when you\'re laughing.',
      'Look for something positive in each day, even if some days you have to look a little harder.',
      'Smile, it\'s the key that fits the lock on everyone\'s hearts.'
    ],
    8: [
      'Happiness is not out there, it\'s in you.',
      'The happier you are the more beautiful you become.',
      'Happiness is not by chance, but by choice.'
    ],
    9: [
      'Live the Life of Your Dreams.',
      'You deserve to be happy. You deserve to live a life you are excited about. Don\'t let others make you forget that.',
      'Life is short, and it\'s up to you to make it sweet.'
    ],
    10: [
      'Enjoy the little things, for one day you may look back and realize they were the big things.',
      'Live life to the fullest, and focus on the positive.',
      'Spread love everywhere you go. Let no one ever come to you without leaving happier.'
    ],
  };
  

  function displayMessage() {
    const rating = document.getElementById('rating').value;
    const relevantMessages = messages[rating];
    const wellnessMessageElement = document.getElementById('wellnessMessage');

    if (relevantMessages) {
        const randomIndex = Math.floor(Math.random() * relevantMessages.length);
        const message = relevantMessages[randomIndex];
        wellnessMessageElement.innerText = message;
        wellnessMessageElement.style.display = 'block';
        wellnessMessageElement.style.backgroundColor = 'rgb(64, 228, 146)';
    } else {
        wellnessMessageElement.innerText = 'Please enter a valid rating (1-10).';
        wellnessMessageElement.style.backgroundColor = 'pink';
        wellnessMessageElement.style.display = 'block';

    }
  }
  