let anglee = 5; // أقصى زاوية دوران

      let lerpp = (start, end, amount) => {
        return (1 - amount) * start + amount * end;
      };

    let remapp = (value, oldMax, newMax) => {
        let newValue =
          ((value + oldMax) * (newMax * 2)) / (oldMax * 2) - newMax;
        return Math.min(Math.max(newValue, -newMax), newMax);
      };

      window.addEventListener("DOMContentLoaded", () => {
        const containertwo = document.querySelector(".container-two");
        const imagetwo = document.querySelector(".image-two");

    containertwo.addEventListener("mousemove", (event) => {
          let rect = containertwo.getBoundingClientRect();
          let centerX = (rect.left + rect.right) / 2;
          let centerY = (rect.top + rect.bottom) / 2;
         let posX = event.pageX - centerX;
          let posY = event.pageY - centerY;

          // إعادة تعيين الموضع إلى زوايا دوران
          let x = remapp(posX, rect.width / 2, anglee);
          let  y = remapp(posY, rect.height / 2, anglee);

          // تطبيق دوران على الصورة
          imagetwo.style.transform = `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg)`;
        });
        containertwo.addEventListener("mouseout", () => {
          // إعادة الصورة إلى وضعها الطبيعي عند خروج الماوس
          imagetwo.style.transform = ` perspective(1000px) rotateX(0deg) rotateY(0deg)`;
        });
      });
