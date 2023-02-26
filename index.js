const navLinks = document.querySelectorAll(".nav-link");
const planetName = document.getElementById("planet-name");
const planetInfo = document.getElementById("planet-info");
const source = document.getElementById("source");
const rotationTime = document.getElementById("rotation-time");
const revolutionTime = document.getElementById("revolution-time");
const radius = document.getElementById("radius");
const avgTemp = document.getElementById("avg-temp");
const planetImg = document.getElementById("planet-img");
const buttons = document.querySelectorAll(".btn");
const overviewBtn = document.getElementById("overview-btn");
const structureBtn = document.getElementById("structure-btn");
const geologyBtn = document.getElementById("geology-btn");
const imgOverlay = document.getElementById("img-overlay");

document.addEventListener("DOMContentLoaded", function() {
  fetch("data.json")
    .then(response => response.json())
    .then(data => {
      const mercury = data[0];
      const venus = data[1].name;
      const earth = data[2].name;
      const mars = data[3].name;
      const jupiter = data[4].name;
      const saturn = data[5].name;
      const uranus = data[6].name;
      const neptune = data[7].name;

      planetName.textContent = mercury.name;
      planetInfo.textContent = mercury.overview.content;
      source.innerHTML = `Source: <a href="${mercury.overview.source}" target="_blank">Wikipedia</a>`;
      rotationTime.textContent = mercury.rotation;
      revolutionTime.textContent = mercury.revolution;
      radius.textContent = mercury.radius;
      avgTemp.textContent = mercury.temperature;
      buttons[0].classList.add("mercury");
      planetImg.src = mercury.images.planet;

      overviewBtn.addEventListener("click", function() {
            planetInfo.textContent = mercury.overview.content;
            source.innerHTML = `Source: <a href="${mercury.overview.source}" target="_blank">Wikipedia &rarr;</a>`;
            buttons[0].classList.add("mercury");
            buttons[1].classList.remove("mercury");
            buttons[2].classList.remove("mercury");
            planetImg.src = mercury.images.planet;
            imgOverlay.src = "";
        })

        structureBtn.addEventListener("click", function() {
                planetInfo.textContent = mercury.structure.content;
                source.innerHTML = `Source: <a href="${mercury.structure.source}" target="_blank">Wikipedia &rarr;</a>`;
                buttons[0].classList.remove("mercury");
                buttons[1].classList.add("mercury");
                buttons[2].classList.remove("mercury");
                planetImg.src = mercury.images.internal;
                imgOverlay.src = "";
    });

        geologyBtn.addEventListener("click", function() {
                planetInfo.textContent = mercury.geology.content;
                source.innerHTML = `Source: <a href="${mercury.geology.source}" target="_blank">Wikipedia &rarr;</a>`;
                buttons[0].classList.remove("mercury");
                buttons[1].classList.remove("mercury");
                buttons[2].classList.add("mercury");
                planetImg.src = mercury.images.planet;
                imgOverlay.src = mercury.images.geology;
    });

    navLinks.forEach((link, index) => {
            link.addEventListener("click", function() {
                imgOverlay.src = "";
                planetName.textContent = data[index].name;
                planetInfo.textContent = data[index].overview.content;
                source.innerHTML = `Source: <a href="${data[index].overview.source}" target="_blank">Wikipedia &rarr;</a>`;
                rotationTime.textContent = data[index].rotation;
                revolutionTime.textContent = data[index].revolution;
                radius.textContent = data[index].radius;
                avgTemp.textContent = data[index].temperature;
                planetImg.src = data[index].images.planet;
                buttons[0].classList.add(data[index].name.toLowerCase());

                overviewBtn.addEventListener("click", function() {
                    planetInfo.textContent = data[index].overview.content;
                    source.innerHTML = `Source: <a href="${data[index].overview.source}" target="_blank">Wikipedia &rarr;</a>`;
                    buttons[0].classList.add(`${data[index].name.toLowerCase()}`);
                    buttons[1].classList.remove(`${data[index].name.toLowerCase()}`);
                    buttons[2].classList.remove(`${data[index].name.toLowerCase()}`);
                    planetImg.src = data[index].images.planet;
                    imgOverlay.src = "";
                })

                structureBtn.addEventListener("click", function() {
                    planetInfo.textContent = data[index].structure.content;
                    source.innerHTML = `Source: <a href="${data[index].structure.source}" target="_blank">Wikipedia &rarr;</a>`;
                    buttons[0].classList.remove(`${data[index].name.toLowerCase()}`);
                    buttons[1].classList.add(`${data[index].name.toLowerCase()}`);
                    buttons[2].classList.remove(`${data[index].name.toLowerCase()}`);
                    planetImg.src = data[index].images.internal;
                    imgOverlay.src = "";
                })

                geologyBtn.addEventListener("click", function() {
                    planetInfo.textContent = data[index].geology.content;
                    source.innerHTML = `Source: <a href="${data[index].geology.source}" target="_blank">Wikipedia &rarr;</a>`;
                    buttons[0].classList.remove(`${data[index].name.toLowerCase()}`);
                    buttons[1].classList.remove(`${data[index].name.toLowerCase()}`);
                    buttons[2].classList.add(`${data[index].name.toLowerCase()}`);
                    planetImg.src = data[index].images.planet;
                    imgOverlay.src = data[index].images.geology;
    });
        })
        })
    })
    .catch(error => {
      console.log(error);
    });
});
