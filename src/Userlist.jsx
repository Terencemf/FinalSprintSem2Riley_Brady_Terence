// import React from 'react'

// const users = [
//     {
//       fName: "Riley",
//       lName: "Lodge",
//       uName: "Meaningull12",
//       status: "Online",
//     },
//     {
//       fName: "Brady",
//       lName: "Stringer",
//       uName: "Newfiebull",
//       status: "Online",
//     },
//     {
//       fName: "Terrance",
//       lName: "Martin-Ferraro",
//       uName: "Smurfthrower",
//       status: "Online",
//     },
//     {
//       fName: "Travis",
//       lName: "Scott",
//       uName: "Tscott42",
//       status: "Offline",
//     },
//     {
//       fName: "Caitlyn",
//       lName: "Jenner",
//       uName: "caitdawg",
//       status: "Offline",
//     },
//     {
//       fName: "Peter",
//       lName: "Parker",
//       uName: "Spiderman",
//       status: "Online",
//     },
//     {
//       fName: "Tony",
//       lName: "Stark",
//       uName: "Ironman",
//       status: "Online",
//     },
//     {
//       fName: "kayne",
//       lName: "west",
//       uName: "ye",
//       status: "Offline",
//     },
//     {
//       fName: "Chris",
//       lName: "Armstrong",
//       uName: "CaptainAmerica",
//       status: "Offline",
//     },
//   ];

// const box = document.getElementById("box");

// function createFriends() {
//   for (i = 0; i < users.length; i++) {
//       const div = document.createElement("div");
//       div.style.paddingTop = "30px";
//       div.style.paddingBottom = "30px";
//       div.id = users[i].status
//       const span = document.createElement("span");
//       span.innerText = users[i].status;
//       const btn = document.createElement("button");
//       btn.style.display = "flex";
//       btn.style.width = "90%";
//       btn.style.height = "100px";
//       btn.style.backgroundColor = "gray";
//       btn.style.fontSize = "25px";
//       btn.style.color = "blue";
//       btn.style.display = "flex";
//       btn.style.height = "100px";
//       btn.style.alignItems = "center";
//       btn.style.justifyContent = "center";
//       btn.style.flexDirection = "column"
//       btn.style.margin = "auto";
//       btn.style.border = "2px solid blue";
//       btn.innerText += users[i].uName;
//       btn.append(span)
//       div.append(btn)
//       box.append(div);
//       box.style.backgroundColor = "white"
//   }
// }
  

// //   if (users[i].status == "Online") {
// //     div.style.display = "block";
// //   } else {
// //     div.style.display = "none";
// //   }
// // }