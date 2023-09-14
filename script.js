document.addEventListener("DOMContentLoaded", function() {
    const showFormButton = document.getElementById('showFormButton');
    const referralFormContainer = document.getElementById('referralFormContainer');

    showFormButton.addEventListener('click', function () {
      // Toggle the display style of the referralFormContainer
      if (referralFormContainer.style.display === 'none' || referralFormContainer.style.display === '') {
        referralFormContainer.style.display = 'block';
      } else {
        referralFormContainer.style.display = 'none';
      }
    });
  });
document.addEventListener("DOMContentLoaded", function() {
    const showFormButton = document.getElementById('showFormButton');
    const referralForm = document.getElementById('referralForm');

    showFormButton.addEventListener('click', function () {
      referralForm.style.display = 'block';
    });
  });
document.addEventListener("DOMContentLoaded", function() {
    // Your existing code for sharing buttons
    const floatingButtons = document.querySelectorAll(".sticky-button-container a");

    // Add event listeners to handle button clicks
    floatingButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default link behavior
            
            const shareType = button.getAttribute("data-share");
            
            if (shareType === "facebook") {
                shareOnFacebook();
            } else if (shareType === "sms") {
                shareViaSMS();
            } else if (shareType === "instagram") {
                shareOnInstagram();
            } else if (shareType === "twitter") {
                shareOnTwitter();
            }
        });
    });

    function shareOnFacebook() {
        // Get the current URL of the web page
        const currentUrl = window.location.href;
    
        // Construct the Facebook share URL with the current page's URL
        const facebookUrl = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(currentUrl)}`;
        
        // Open the Facebook share link in a new window
        window.open(facebookUrl, '_blank', 'width=600,height=400');
    }
    
    function shareOnInstagram() {
        // Get the current URL of the web page
        const currentUrl = window.location.href;
    
        // Construct the Instagram share URL with the current page's URL
        const instagramUrl = `https://www.instagram.com/?url=${encodeURIComponent(currentUrl)}`;
        
        // Open the Instagram share link in a new window
        window.open(instagramUrl, '_blank', 'width=600,height=400');
    }
    
    function shareOnTwitter() {
        // Get the current URL of the web page
        const currentUrl = window.location.href;
    
        // Construct the Twitter share URL with the current page's URL and a default text
        const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=Check out this referral link`;
        
        // Open the Twitter share link in a new window
        window.open(twitterUrl, '_blank', 'width=600,height=400');
    }
    
    
    function shareViaSMS() {
        // Prompt the user to enter the recipient's phone number
        const phoneNumber = prompt('Enter recipient\'s phone number:');
        
        if (phoneNumber === null) {
            // User clicked Cancel, do nothing
            return;
        }
        
        // Prompt the user to enter the message
        const message = prompt('Enter your message:');
        
        if (message === null) {
            // User clicked Cancel, do nothing
            return;
        }
        
        // Construct the SMS URL
        const smsUrl = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
        
        // Open the SMS link in a new window or send an SMS from a mobile device
        window.open(smsUrl);
    }
    
    


    // Add event listeners to handle button clicks for email validation
    const smsButton = document.querySelector('#smsButton');
    const fbButton = document.querySelector('#fbButton');
    const instaButton = document.querySelector('#instaButton');
    const twtButton = document.querySelector('#twtButton');

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
});
