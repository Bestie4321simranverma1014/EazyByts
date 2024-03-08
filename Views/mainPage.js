var sendMassageButton = document.querySelector("#send-button");
var sendMassagebox = document.querySelector("#massage-text");
var chatFragment = document.createDocumentFragment();

var owner = "Simran";

var chatDetails = [];

document.querySelector("#userName").innerHTML =
  "Hi, " + localStorage.getItem("email");

class chatDetailsValues {
  id;
  content;
  owner;
  constructor(id, content, owner) {
    this.id = id;
    this.content = content;
    this.owner = owner;
  }
}

var createChatBubbles = () => {
  chatDetails.forEach((elem) => {
    if (elem.owner == owner) {
      const chatBubble = document.createElement("div");
      chatBubble.classList.add("massages");
      chatBubble.id = `massage-right`;
      chatBubble.textContent = elem.content;
      chatFragment.appendChild(chatBubble);
    } else {
      const chatBubble = document.createElement("div");
      chatBubble.classList.add("massages");
      chatBubble.id = `massage-left`;
      chatBubble.textContent = elem.content;
      chatFragment.appendChild(chatBubble);
    }
    document.querySelector("#massage-history").appendChild(chatFragment);
  });
};

var addNewMassage = (input) => {};

sendMassageButton.addEventListener("click", () => {
  if (sendMassagebox.value != null || sendMassagebox.value != "") {
    const index = chatDetails.length;
    chatDetails[index] = new chatDetailsValues(
      index,
      sendMassagebox.value,
      owner
    );
    if (chatDetails[index].owner == owner) {
      const chatBubble = document.createElement("div");
      chatBubble.classList.add("massages");
      chatBubble.id = `massage-right`;
      chatBubble.textContent = sendMassagebox.value;
      chatFragment.appendChild(chatBubble);
    } else {
      const chatBubble = document.createElement("div");
      chatBubble.classList.add("massages");
      chatBubble.id = `massage-left`;
      chatBubble.textContent = sendMassagebox.value;
      chatFragment.appendChild(chatBubble);
    }
    sendMassagebox.value = "";
    document.querySelector("#massage-history").appendChild(chatFragment);
  }
});

// createChatBubbles();
