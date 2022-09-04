
// Check in the Local Storage
let mainColor = localStorage.getItem("mainColor"),
  colorList = document.querySelectorAll(".color-list li");

if (!mainColor) {
  localStorage.setItem("mainColor", "#e91e63");
} else {
  document.documentElement.style.setProperty("--main-color", mainColor);
  colorList.forEach((el) => {
    el.classList.remove("active");
    if (el.dataset.color === mainColor) {
      el.classList.add("active");
    }
  })
}


/* Start Option List */


// Options Colors
let options = document.querySelector(".options"),
  landing = document.querySelector(".landign-page");

document.querySelector(".options .icon-gear").onclick = () => {

  document.querySelector(".options .icon-gear").firstElementChild.classList.toggle("fa-spin");

  options.classList.toggle("open");
}
document.querySelector(".landign-page").onclick = () => {
  options.classList.remove("open");
  document.querySelector(".options .icon-gear").firstElementChild.classList.remove("fa-spin");
}

colorList.forEach((li) => {

  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty("--main-color", li.dataset.color);
    localStorage.setItem("mainColor", li.dataset.color);
    handleActive(e);
  });

});

//Options Background
let randomBackground = true,
  randomInterval;

let spansLogic = document.querySelectorAll(".background-options .btns span")

// Locale Storage
let mainBackground = localStorage.getItem("background_options");

if (mainBackground) {

  spansLogic.forEach((span) => {
    span.classList.remove("active");
    if (span.dataset.background === mainBackground) {
      span.classList.add("active");
    }
  });

  if (mainBackground === "yes") {
    randomBackground = true;
  } else {
    randomBackground = false;
  }

}

spansLogic.forEach((span) => {

  span.addEventListener("click", (e) => {

    handleActive(e);

    if (e.target.dataset.background === "yes") {
      randomBackground = true;
      randomBack();
      localStorage.setItem("background_options", "yes");
    } else {
      randomBackground = false;
      clearInterval(randomInterval);
      localStorage.setItem("background_options", "no");
    }

  })
})


/* End Option List */


/* Start Nav Bullets */

// bullet.addEventListener("mouseenter", () => {
//   let span = document.createElement("span");
//   span.className = "over";
//   bullet.appendChild(span);
// })

// bullet.addEventListener("mouseleave", () => {
//   navBullets.forEach((b) => {
//     Array.from(b.children).forEach((s) => {
//       if (s.classList.contains("over")) {
//         s.remove();
//       }
//     })
//   })
// })

let navBullets = document.querySelectorAll(".nav-bullets .bullet");
let linsk = document.querySelectorAll(".links a");


function scrollToSection(elements, eles) {

  elements.forEach((ele) => {

    ele.addEventListener("click", e => {

      e.preventDefault();

      elements.forEach((b) => { b.classList.remove("active") })

      eles.forEach((b) => {
        b.classList.remove("active")
        if (b.dataset.section === e.target.dataset.section) {
          b.classList.add("active");
        }
      })

      ele.classList.add("active");

      document.querySelector(e.target.dataset.section).scrollIntoView({

        behavior: "smooth"

      })

    })

  });
}

scrollToSection(navBullets,linsk);
scrollToSection(linsk,navBullets)

/* End Nav Bullets */

// Select Landing Page Elements
let landingPage = document.querySelector(".landign-page"),
  headerLinks = document.querySelectorAll(".links a");

let imgsArr = ["01", "02", "03", "04", "05"],
  random;

function randomBack() {

  if (randomBackground === true) {

    randomInterval = setInterval(() => {
      random = Math.floor(Math.random() * imgsArr.length);
      landingPage.style.backgroundImage = `url('../images/${imgsArr[random]}.jpg')`;
    }, 1000);

  }
}
randomBack();

/* Start About Us */
let readMoreBtn = document.querySelector("#read-more");

readMoreBtn.onclick = () => {
  let paragraphe = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta at ullam ducimus possimus neque sunt dolor recusandae inventore ipsa illum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta at ullam ducimus possimus neque sunt dolor recusandae inventore ipsa illum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta at ullam ducimus possimus neque sunt dolor recusandae inventore ipsa illum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta at ullam ducimus possimus neque sunt dolor recusandae inventore ipsa illum.  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta at ullam ducimus possimus neque sunt dolor recusandae inventore ipsa illum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta at ullam ducimus possimus neque sunt dolor recusandae inventore ipsa illum."
  readMore(paragraphe, "About Us", "")
}

document.addEventListener("click", (e) => {

  if (e.target.classList.contains("close")) {
    e.target.parentElement.remove();
    document.querySelector(".overlay").remove();
  }
})
/* End About Us */


/* Start Skills */
let progress = document.querySelectorAll(".skills .progress");
let dataProgress = document.querySelectorAll(".skills .data-progress");

progress.forEach((prog) => {
  prog.firstElementChild.innerHTML = prog.dataset.progress;
})
/* End Skills */

let ourSkills = document.querySelector(".our-skills");
let boxes = document.querySelectorAll(".timeline .boxe");
let containerTimeline = document.querySelector(".timeline");
let scrolling = 150;

window.onscroll = () => {

  let ourSkillTop = ourSkills.offsetTop,
    ourSkillHeight = ourSkills.offsetHeight,
    windowHeight = this.innerHeight,
    windowScrollY = this.scrollY;
  timelineTop = containerTimeline.offsetTop;

  if (windowScrollY >= (ourSkillTop + ourSkillHeight - windowHeight)) {
    progress.forEach((prog) => {
      prog.style.width = prog.dataset.progress;
    })
  }

  boxes.forEach((box) => {
    // box.lastElementChild.classList.remove("show");
    if (windowScrollY > timelineTop + box.offsetTop - windowHeight + box.offsetHeight) {
      box.children[2].classList.add("show");
    }
  })

}

/* Start Gallery */
let galleryImages = document.querySelectorAll(".our-gallery .gallery .image");
galleryImages.forEach((img) => {
  img.addEventListener("click", (ev) => {
    let overlay = document.createElement("div"),
      divImage = document.createElement("div"),
      img = document.createElement("img"),
      close = document.createElement("i");
    imgTitle = document.createElement("span");

    overlay.className = "overlay";
    divImage.className = "image-div";
    img.src = ev.target.src;
    close.className = "fa-solid fa-rectangle-xmark close";

    imgTitle.append(ev.target.alt);
    divImage.appendChild(close);
    divImage.appendChild(imgTitle);
    divImage.appendChild(img);
    document.body.prepend(overlay);
    document.body.prepend(divImage);
  })
})
/* End Gallery */

/* Start Timeline */
let readMoreTime = document.querySelectorAll(".timeline .boxe .read-more");
let paragraphe = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta at ullam ducimus possimus neque sunt dolor recusandae inventore ipsa illum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta at ullam ducimus possimus neque sunt dolor recusandae inventore ipsa illum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta at ullam ducimus possimus neque sunt dolor recusandae inventore ipsa illum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta at ullam ducimus possimus neque sunt dolor recusandae inventore ipsa illum.  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta at ullam ducimus possimus neque sunt dolor recusandae inventore ipsa illum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta at ullam ducimus possimus neque sunt dolor recusandae inventore ipsa illum."

readMoreTime.forEach((spanRead) => {
  spanRead.addEventListener("click", (e) => {
    let title = e.target.parentElement.children[0].innerHTML,
      time = e.target.parentElement.dataset.year;
    readMore(paragraphe, title, time)
  })
})
/* End Timeline */


function readMore(paragraphe, title, time) {

  let overlay = document.createElement("div"),
    divInfo = document.createElement("div"),
    spanClose = document.createElement("i"),
    header = document.createElement("h3"),
    timeline = document.createElement("span"),
    textP = document.createElement("p");
  txt = document.createTextNode(paragraphe);

  overlay.className = "overlay";
  divInfo.className = "div-info";
  spanClose.className = "fa-solid fa-rectangle-xmark close";
  timeline.className = "yearTimeline";

  textP.appendChild(txt);
  header.append(title);
  divInfo.appendChild(spanClose);
  divInfo.appendChild(header);
  timeline.append(time);
  divInfo.appendChild(timeline);
  divInfo.appendChild(textP);

  document.body.prepend(divInfo);
  document.body.prepend(overlay);
}

// Handle Active State
function handleActive(ev) {

  ev.target.parentElement.querySelectorAll(".active").forEach((el) => el.classList.remove("active"));

  ev.target.classList.add("active");
}
