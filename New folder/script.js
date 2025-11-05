const artist = {
  name: "Angel",
  title: "Digital Artist",
  skills: ["Character Design", "Pixel Art","Concept Art", "Traditional Art"]
};

let thankYouMsg = document.getElementById("thankYouMsg");
const skillsList = document.getElementById("skillsList");

const { name, title, skills } = artist;

skills.forEach((skill) => {
  const li = document.createElement("li");
  li.textContent = skill;
  skillsList.appendChild(li);
});

const displayMessage = (userName) => {
  return `Thank you, ${userName}! Your message has been received. 🎨`;
};

const addSkills = (...newSkills) => {
  artist.skills = [...artist.skills, ...newSkills];
  console.log("Updated Skills:", artist.skills);
};

addSkills("Illustration", "Traditional Art", "Pixel Art");

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const userName = document.getElementById("name").value;
  thankYouMsg.textContent = displayMessage(userName);

  e.target.reset();
});
