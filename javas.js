document.addEventListener("DOMContentLoaded", function() {
    // ا الأول
    const counter1Element = document.getElementById('counter1');
    let count1 = 0;
    const target1 = 27;
    const speed1 = 80;
  
    //  الثاني
    const counter2Element = document.getElementById('counter2');
    let count2 = 0;
    const target2 = 145;
    const speed2 = 30;
  
    //  الثالث
    const counter3Element = document.getElementById('counter3');
    let count3 = 0;
    const target3 = 25;
    const speed3 = 80;
  
    //  الرابع
    const counter4Element = document.getElementById('counter4');
    let count4 = 0;
    const target4 = 130;
    const speed4 = 30;
  
    // الزيادة  للعداد الأول
    function updateCounter1() {
      if (count1 < target1) {
        count1++;
        counter1Element.textContent = count1;
        setTimeout(updateCounter1, speed1 );
      }
    }
  
    //  الزيادة للعداد الثاني
    function updateCounter2() {
      if (count2 < target2) {
        count2++;
        counter2Element.textContent = count2;
        setTimeout(updateCounter2, speed2);
      }
    }
  
    // الزيادة للعداد الثالث
    function updateCounter3() {
      if (count3 < target3) {
        count3++;
        counter3Element.textContent = count3;
        setTimeout(updateCounter3, speed3);
      }
    }
  
    // الزيادة  للعداد الرابع
    function updateCounter4() {
      if (count4 < target4) {
        count4++;
        counter4Element.textContent = count4;
        setTimeout(updateCounter4, speed4);
      }
    }
  

    updateCounter1();
    updateCounter2();
    updateCounter3();
    updateCounter4();
  });






  // animation
 