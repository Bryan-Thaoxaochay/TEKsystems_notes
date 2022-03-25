function createChatBox(num) {
  let bodyList = document.getElementsByTagName("body");
  let body = bodyList[0];
  let tags = ["fieldset", "legend", "form", "label", "input", "label", "input", "button", "section", "h3"];
  let createdTags = [];

  for (let i = 0; i < tags.length; i++) {
    let tag = document.createElement(tags[i]);
    createdTags.push(tag);
  }

  for (let j = 0; j < createdTags.length; j++) {
    let tag = createdTags[j]
    let tagName = tag.localName;
    let fieldset, form, section;

    switch (tagName) {
      case "fieldset":
        body.appendChild(tag);
        tag.setAttribute("id", "fieldset-" + num);
        break;
      case "legend":
        fieldset = document.getElementById("fieldset-" + num);
        fieldset.appendChild(tag);
        tag.setAttribute("id", "legend-" + num);
        tag.innerHTML = "Chat Box " + num;
        break;
      case "form":
        fieldset = document.getElementById("fieldset-" + num);
        fieldset.appendChild(tag);
        tag.setAttribute("id", "form-" + num);
        break;
      case "label":
        form = document.getElementById("form-" + num);
        form.appendChild(tag);
        j === 3 ? tag.innerHTML = "Name: " : tag.innerHTML = "Message: "
        break;
      case "input":
        form = document.getElementById("form-" + num);
        form.appendChild(tag);
        j === 4 ? tag.setAttribute("class", "input-name") : tag.setAttribute("class", "input-message");
        break;
      case "button":
        form = document.getElementById("form-" + num);
        form.appendChild(tag);
        tag.innerHTML = "Send Message"
        tag.setAttribute("type", "submit");
        break;
      case "section":
        fieldset = document.getElementById("fieldset-" + num);
        fieldset.appendChild(tag);
        tag.setAttribute("id", "section-" + num);
        break;
      case "h3":
        section = document.getElementById("section-" + num);
        section.appendChild(tag);
        tag.innerHTML = "Messages"
        break;
    }
  }
}

function sendMessage(event) {
  let sections = document.getElementsByTagName("section");
  console.log(sections);

  for (let i = 0; i < sections.length; i++) {
    let h4 = document.createElement("h4");
    let p = document.createElement("p");
    // let section = document.getElementById("section" + i);
    let inputName = document.getElementsByClassName("input-name");
    let inputMessage = document.getElementsByClassName("input-message");

    // sections[i].appendChild(h4);
    // sections[i].appendChild(p);

    // for (let j = 0; j < inputName.length; j++) {
    //   if (inputName[j].value !== "") {
    //     let messageName = inputName[j].value;
    //     let message = inputMessage[j].value;

    //     h4.innerHTML = messageName;
    //     p.innerHTML = message;
    //   }
    // }
  }
  event.preventDefault();
}

createChatBox(1);
createChatBox(2);

let form1 = document.getElementById("form-1");
let form2 = document.getElementById("form-2");
form1.addEventListener("submit", sendMessage);
form2.addEventListener("submit", sendMessage);
