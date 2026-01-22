const users = [
  {
    name: "Shreeya Oberoi",
    pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
    bio: "silent chaos in a loud world | not for everyone",
    color: "rgba(209, 222, 20, 0.63)",
    remove: "rgba(0,0,0,0)",
  },
  {
    name: "Amish Mehta",
    pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
    bio: "main character energy | coffee > everything",
    color: "rgba(222, 128, 20, 0.69)",
    remove: "rgba(0,0,0,0)",
  },
  {
    name: "Ishita Jain",
    pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg",
    bio: "walking through dreams in doc martens | late night thinker",
    color: "rgba(44, 222, 20, 0.66)",
    remove: "rgba(0,0,0,0)",
  },
  {
    name: "Ojin Oklawa",
    pic: "https://i.pinimg.com/736x/01/be/94/01be94b0b5bf03a50b5d6c4bfec78063.jpg",
    bio: "too glam to give a damn | filter free soul",
    color: "rgba(175, 20, 222, 0.66)",
    remove: "rgba(0,0,0,0)",
  },
  {
    name: "Diya Bansal",
    pic: "https://i.pinimg.com/736x/74/b0/67/74b067e6c5ece09d99f68c42c5f6754e.jpg",
    bio: "a little chaos, a lot of art | just vibes",
    color: "rgba(31, 147, 13, 0.66)",
    remove: "rgba(0,0,0,0)",
  },
  {
    name: "Tanay Rawat",
    pic: "https://i.pinimg.com/1200x/56/19/74/561974ae1fb66cb2cb219a6a37174677.jpg",
    bio: "don't text, just vibe | soft heart, sharp mind",
    color: "rgba(222, 205, 20, 0.66)",
    remove: "rgba(0,0,0,0)",
  },
  {
    name: "Mohit Chhabra",
    pic: "https://i.pinimg.com/736x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg",
    bio: "aesthetic overload | living in lowercase",
    color: "rgba(222, 138, 20, 0.66)",
    remove: "rgba(0,0,0,0)",
  },
];

function showUsers(arr) {
  const container = document.querySelector(".cards");
  if (!container) return;

  arr.forEach((user) => {
    // card
    const card = document.createElement("div");
    card.classList.add("card");

    card.addEventListener("mouseenter", () => {
      container.classList.add("dimmed");
      card.style.boxShadow = `0 20px 60px ${user.color}`;
      card.style.transform = "scale(1.08) translateY(-8px)";
      card.style.transition = "all 0.3s ease-in-out";
    });
    card.addEventListener("mouseleave", () => {
      container.classList.remove("dimmed");
      card.style.transform = "scale(1) translateY(0)";
      card.style.transition = "all 0.3s ease-in-out";
      card.style.boxShadow = `0 0px 0px ${user.remove}`;
    });

    // image
    const img = document.createElement("img");
    img.src = user.pic;
    img.alt = user.name;
    img.classList.add("bg-img");

    // blurred layer
    const blurredLayer = document.createElement("div");
    blurredLayer.style.backgroundImage = `url(${user.pic})`;
    blurredLayer.classList.add("blurred-layer");

    // content
    const content = document.createElement("div");
    content.classList.add("content");

    const heading = document.createElement("h3");
    heading.textContent = user.name;

    const para = document.createElement("p");
    para.textContent = user.bio;

    content.appendChild(heading);
    content.appendChild(para);

    card.appendChild(img);
    card.appendChild(blurredLayer);
    card.appendChild(content);

    container.appendChild(card);
  });
}

// initial render
showUsers(users);

// search
const inp = document.querySelector("#search-box");
if (inp) {
  inp.addEventListener("input", function () {
    const term = inp.value.trim().toLowerCase();
    const cardContainer = document.querySelector(".cards");
    if (!cardContainer) return;

    // reset
    cardContainer.innerHTML = "";

    if (term === "") {
      showUsers(users);
      return;
    }

    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(term)
    );

    if (filtered.length === 0) {
      const msg = document.createElement("p");
      msg.textContent = "No user found";
      msg.style.color = "#ddd";
      msg.style.fontSize = "14px";
      cardContainer.appendChild(msg);
    } else {
      showUsers(filtered);
    }
  });
}
