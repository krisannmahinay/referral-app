// Function to validate email format
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Add event listeners to handle button clicks
smsButton.addEventListener('click', function () {
  shareViaSMS();
});

fbButton.addEventListener('click', function () {
  shareOnFacebook();
});

instaButton.addEventListener('click', function () {
  shareOnInstagram();
});

twtButton.addEventListener('click', function () {
  shareOnTwitter();
});


function shareViaSMS() {
  // Get the phone number of the person you want to refer.
  phone_number = input("Enter the phone number of the person you want to refer: ");

  // Get the text of the referral message.
  referral_message = input("Enter the text of your referral message: ");

  // Send the SMS message.
  send_sms(phone_number, referral_message);
}

function shareOnFacebook() {
  const referralUrl = window.location.href;
  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralUrl)}`;
  window.open(shareUrl, '_blank', 'width=600,height=400');
}

function shareOnInstagram() {
  // Replace this with your logic to share the app via Instagram
}

function shareOnTwitter() {
  const referralUrl = window.location.href;
  const tweetText = `Check out this website: ${referralUrl}`;
  const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
  window.open(shareUrl);
}
