//Add Your img
let formFile = document.querySelector("#formFile");
formFile.addEventListener("change", function () {
    let file = this.files[0];
    let reader = new FileReader();
    reader.onload = function (e) {
        let cvImg = document.querySelector(".cv-img");
        let img = document.createElement("img");
        img.src = e.target.result;
        img.classList.add('img-fluid');
        cvImg.innerHTML = "";
        cvImg.append(img);

    }
    reader.readAsDataURL(file);
})
// Add values of inputs in cv paper
let yourName = document.querySelector(".full-name");
let yourAddress = document.querySelector(".address");
let dateInput = document.querySelector(".date-input");
let yourInfo = document.querySelector(".your-info");
let qualifications = document.querySelector(".qualifications");
let certificates = document.querySelector(".certificates");

let cvName = document.querySelector(".cv-name")
let cvAddress = document.querySelector(".cv-address");
let cvBirthday = document.querySelector(".cv-birthday");
let cvInfo = document.querySelector(".cv-your-info");
let cvQualifications = document.querySelector(".cv-qualifications");
let cvCertificates = document.querySelector(".cv-certificates");


yourName.addEventListener("keyup", function () {
    cvName.textContent = yourName.value;
})
yourAddress.addEventListener("keyup", function () {
    cvAddress.textContent = yourAddress.value;
})
dateInput.addEventListener("change", function () {
    cvBirthday.textContent = "Birthday Date: " + dateInput.value;
})
yourInfo.addEventListener("keyup", function () {
    cvInfo.textContent = "Info About Me: " + yourInfo.value;
})

let searchInput = document.querySelector(".search-input");
let showQual = document.querySelector(".show-qual");

searchInput.addEventListener("focus", function () {
    let qualList = ["AAAA", "BBBB", "CC", "DDDDDD", "EEE"];
    let existingSpans = showQual.querySelectorAll("span");
    searchInput.style.width="120px"
    if (existingSpans.length === 0) {
        qualList.forEach((element, index) => {
            let spanQual = document.createElement("span");
            spanQual.className = "span-qual";
            spanQual.innerHTML = qualList[index];
            showQual.appendChild(spanQual);
            spanQual.addEventListener("click", function () {
                searchInput.value = ""
                let spanResultQual = document.createElement("span");
                spanResultQual.className = "span-result-qual";
                spanResultQual.innerHTML = this.textContent;
                qualifications.insertBefore(spanResultQual, searchInput)
                let cvQualDiv = document.createElement("div");
                cvQualifications.appendChild(cvQualDiv)
                cvQualDiv.textContent=this.textContent
                let delIcon = document.createElement("i")
                delIcon.classList.add('ri-close-fill');
                spanResultQual.appendChild(delIcon)
                delIcon.addEventListener("click", function () {
                    spanResultQual.remove()
                    cvQualDiv.remove()
                })
            });
            
            searchInput.addEventListener("input", function () {
                let filter = searchInput.value.toLowerCase();
                let existingSpans = document.querySelectorAll(".span-qual")
                existingSpans.forEach((e) => {
                    let item = e.innerText.toLowerCase();
                    if (!item.includes(filter)) {
                        e.style.display = "none";
                    } else {
                        e.style.display = "block";
                    }
                });
                
            });
        });
    }
})
// searchInput.addEventListener("blur",function(){
//     showQual.style.display="none"
// })

certificates.addEventListener("keyup", function () {
    cvCertificates.textContent = "certificates: " + certificates.value;
});

//change font family
let cvTitle = document.querySelector(".cv-title");

let fontFamily = document.querySelector("#font-family");
fontFamily.addEventListener("change", function () {
    cvTitle.style.fontFamily = fontFamily.value;
});
//change font size
let fontSize = document.querySelector("#font-size");
fontSize.addEventListener("change", function () {
    cvTitle.style.fontSize = fontSize.value + "px";
});
//change color
let colors = ["#7bb3fe", "#69d099", "#fdca79", "#f67b6b", "#e27ffe", "#70726f"];

let fColor = document.querySelectorAll(".fc");
fColor.forEach((element, index) => {
    element.style.backgroundColor = colors[index];
    element.addEventListener("click", function () {
        cvTitle.style.color = colors[index];
    });
});
let fontColorCustom = document.querySelector("#font-color-custom");
fontColorCustom.addEventListener("change", function () {
    cvTitle.style.color = fontColorCustom.value;
})
//change bgColor
let bgColor = document.querySelectorAll(".bg-color");
bgColor.forEach((element, index) => {
    element.style.backgroundColor = colors[index];
    element.addEventListener("click", function () {
        cvTitle.style.backgroundColor = colors[index];
    });
});
let bgColorCustom = document.querySelector("#background-color-custom");
bgColorCustom.addEventListener("change", function () {
    cvTitle.style.backgroundColor = bgColorCustom.value;
})
//Alignments
let leftBtn = document.querySelector(".left-btn");
leftBtn.onclick = function () {
    cvTitle.style.textAlign = "left"
}
let centerBtn = document.querySelector(".center-btn");
centerBtn.onclick = function () {
    cvTitle.style.textAlign = "center"
}
let rightBtn = document.querySelector(".right-btn");
rightBtn.onclick = function () {
    cvTitle.style.textAlign = "right"
}

//Padding
let paddingTop = document.querySelector(".padding-top");
let paddingBottom = document.querySelector(".padding-bottom");
let paddingLeft = document.querySelector(".padding-left");
let paddingRight = document.querySelector(".padding-right");

paddingTop.addEventListener("click", function () {
    cvTitle.style.paddingTop = paddingTop.value + "px";
})
paddingBottom.addEventListener("click", function () {
    cvTitle.style.paddingBottom = paddingBottom.value + "px";
})
paddingLeft.addEventListener("click", function () {
    cvTitle.style.paddingLeft = paddingLeft.value + "px";
})
paddingRight.addEventListener("click", function () {
    cvTitle.style.paddingRight = paddingRight.value + "px";
})

//edit button
// let editButton = document.querySelector(".edit-button");
// let accordionCollapse = document.querySelector(".main-titles")
// editButton.addEventListener("click",function(){
//     if (accordionCollapse.classList.contains('collapse')) {
//         accordionCollapse.classList.add('show');
//     } else {
//         accordionCollapse.classList.remove('show');
//     }
// })