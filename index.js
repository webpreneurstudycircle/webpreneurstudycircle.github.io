
document.addEventListener('DOMContentLoaded', (event) => {
    function setFontSize() {
      if (window.innerWidth <= 1920 && window.innerWidth >= 768) {
        document.body.style.fontSize = window.innerWidth / 1440 + "rem";
      } else {
        if (document.body.style.removeProperty) {
          document.body.style.removeProperty("font-size");
        } else {
          document.body.style.removeAttribute("font-size");
        }
      }
    }
    window.addEventListener("resize", function () { setFontSize(); });
    setFontSize();
  });






      //remove smooth scroll from touch devices
      var isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);

      $(document).ready(function () {
  
        if (!isMobile) {
  
          luxy.init({
            wrapper: '#luxy',
            wrapperSpeed: 0.065,
  
          });
  
        }
      });




      window.addEventListener('load', (event) => {
        document.getElementById('p-hardt-studio').addEventListener('click', () => {
          fathom.trackGoal('0KMNK7UH', 0);
        });
        document.getElementById('p-true-origins').addEventListener('click', () => {
          fathom.trackGoal('FHA2MN3G', 0);
        });
        document.getElementById('p-saol').addEventListener('click', () => {
          fathom.trackGoal('6SMIGBS0', 0);
        });
        document.getElementById('p-bernard-dickinson').addEventListener('click', () => {
          fathom.trackGoal('7QKFWXZS', 0);
        });
        document.getElementById('p-bare').addEventListener('click', () => {
          fathom.trackGoal('G9BQV9LX', 0);
        });
        document.getElementById('p-ohmie-go').addEventListener('click', () => {
          fathom.trackGoal('2OLETFRC', 0);
        });
      });