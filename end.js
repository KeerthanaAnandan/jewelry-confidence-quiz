let  first = sessionStorage.getItem("first");
let  second = sessionStorage.getItem("second");
let third = sessionStorage.getItem("third");
let thing = sessionStorage.getItem("Mwoyeyo");

document.querySelector(".firsthide").style.display = "none";
document.querySelector(".secondhide").style.display = "none";
document.querySelector(".thirdhide").style.display = "none";
document.querySelector(".fourthhide").style.display = "none";
document.querySelector(".fifthhide").style.display = "none";


let optiono = ["Rings" ,  "Earrings" , "Necklace" , "Bracelets",    "Anklets"]


if (thing == optiono[0]) {
  document.querySelector(".firsthide").style.display = "block";
  console.log("hana")
}

if (thing == optiono[1]) {
  document.querySelector(".secondhide").style.display = "block";
  console.log("tul")
}

if (thing == optiono[2]) {
  document.querySelector(".thirdhide").style.display = "block";
  console.log("set")
}

if (thing == optiono[3]) {
  document.querySelector(".fourthhide").style.display = "block";
  console.log("net")
}

if (thing == optiono[4]) {
  document.querySelector(".fifthhide").style.display = "block";
  console.log("yesot")
}



let mess;
let typo;
//first
if (
   first >  second &&
   first > third 
  
) {
 // typo = "Confident Person";
  mess = [
   "Your results shows that you are confident and fearless person. Keep up the good work. However, it is essential to maintain the confidence level which will allow you to fully express yourself.",
   "One of the simplest ways to maintain your confidence is by wearing the jewelry that makes you unique and special. Here is how jewelry can improve your confidence:",
                  "Jewelry are the form of communication. How we look is a story we are telling the world. It can be hard to feel confident if you don’t know what message you’re sending to the rest of the world. Choose jewelry that expresses your message. If you wear something shining, you’ll instantly feel more shining, bright and happier! ",
        "Look at the sparkle jewelry collection we have for you, which will instantly complement your wardrobe.",
    "Do not put on jewelry simply because it completes your outfit or you have the money. Instead, you should wear something that is a true expression of who you are. The jewelry should be able to reflect your inner beauty while at the same time embracing your unique personality. It is only through this action that you can feel confident about yourself when interacting with people around you.",
  ];
 // document.querySelector(".firsthide").style.display = "block";
}

// second
else if (
   second >  first &&
   second > third 
  
) {
  //typo = "Confidence level : neutral ";
  mess = [
"Your results shows that you are confident but needs some improvement and not confident enough to achieve your desires. You are doing really great and you are one step away from expressing your true self.",    
"One of the simplest ways to improve your confidence is by wearing the jewelry that makes you unique and special. Here is  how jewelry can improve your confidence:",
               "Jewelry are the form of communication. How we look is a story we are telling the world. It can be hard to feel confident if you don’t know what message you’re sending to the rest of the world. Choose jewelry that expresses your message. If you wear something shining, you’ll instantly feel more shining, bright and happier! ",
      "Look at the sparkle jewelry collection we have for you, which will instantly complement your wardrobe.",
      "Do not put on jewelry simply because it completes your outfit or you have the money. Instead, you should wear something that is a true expression of who you are. The jewelry should be able to reflect your inner beauty while at the same time embracing your unique personality. It is only through this action that you can feel confident about yourself when interacting with people around you.",
  
  ]; 
 // document.querySelector(".secondhide").style.display = "block";
}
//third
else if (
  third >  second &&
  third >  first 
 
) {
  //typo = "Low confidence level";
  mess = [
    "  Your results shows that you have low self-esteem. Don’t be disappointed, it’s never too late to start your healing process.",
    "One of the simplest ways to improve your confidence is by wearing the jewelry that makes you unique and special. Here is how jewelry can improve your confidence:",
     "Jewelry are the form of communication. How we look is a story we are telling the world. It can be hard to feel confident if you don’t know what message you’re sending to the rest of the world. Choose jewelry that expresses your message. If you wear something shining, you’ll instantly feel more shining, bright and happier! ",
    "Look at the sparkle jewelry collection we have for you, which will instantly complement your wardrobe.",
    
  ];
 // document.querySelector(".thirdhide").style.display = "block"; 
}


//first === second
else if (
  first ==  second &&
  first >  third 
  
) {
 // typo = "Confident Person";
 mess = [
  "Your results shows that you are confident and fearless person. Keep up the good work. However, it is essential to maintain the confidence level which will allow you to fully express yourself.",
  "One of the simplest ways to maintain your confidence is by wearing the jewelry that makes you unique and special. Here is how jewelry can improve your confidence:",
                 "Jewelry are the form of communication. How we look is a story we are telling the world. It can be hard to feel confident if you don’t know what message you’re sending to the rest of the world. Choose jewelry that expresses your message. If you wear something shining, you’ll instantly feel more shining, bright and happier! ",
       "Look at the sparkle jewelry collection we have for you, which will instantly complement your wardrobe.",
   "Do not put on jewelry simply because it completes your outfit or you have the money. Instead, you should wear something that is a true expression of who you are. The jewelry should be able to reflect your inner beauty while at the same time embracing your unique personality. It is only through this action that you can feel confident about yourself when interacting with people around you.",
 ];
  
}

//SECOND == THIRD
else if (
  second ==  third &&
  second >  first 
 
) {
  //typo = "Low confidence level";
  mess = [
    "  Your results shows that you have low self-esteem. Don’t be disappointed, it’s never too late to start your healing process.",
    "One of the simplest ways to improve your confidence is by wearing the jewelry that makes you unique and special. Here is how jewelry can improve your confidence:",
     "Jewelry are the form of communication. How we look is a story we are telling the world. It can be hard to feel confident if you don’t know what message you’re sending to the rest of the world. Choose jewelry that expresses your message. If you wear something shining, you’ll instantly feel more shining, bright and happier! ",
    "Look at the sparkle jewelry collection we have for you, which will instantly complement your wardrobe.",
    
  ];
 // document.querySelector(".thirdhide").style.display = "block";
  
 
  
}
//third == first
else if (
  third ==  first &&
  third >  second 

) {
   //typo = "Confidence level : neutral ";
   mess = [
    "Your results shows that you are confident but needs some improvement and not confident enough to achieve your desires. You are doing really great and you are one step away from expressing your true self.",    
    "One of the simplest ways to improve your confidence is by wearing the jewelry that makes you unique and special. Here is  how jewelry can improve your confidence:",
                   "Jewelry are the form of communication. How we look is a story we are telling the world. It can be hard to feel confident if you don’t know what message you’re sending to the rest of the world. Choose jewelry that expresses your message. If you wear something shining, you’ll instantly feel more shining, bright and happier! ",
          "Look at the sparkle jewelry collection we have for you, which will instantly complement your wardrobe.",
          "Do not put on jewelry simply because it completes your outfit or you have the money. Instead, you should wear something that is a true expression of who you are. The jewelry should be able to reflect your inner beauty while at the same time embracing your unique personality. It is only through this action that you can feel confident about yourself when interacting with people around you.",
      
      ];
 // document.querySelector(".thirdhide").style.display = "block";
  
}

 

  

   


else{
  {
   //typo = "Confidence level : neutral ";
   mess = [
    "Your results shows that you are confident but needs some improvement and not confident enough to achieve your desires. You are doing really great and you are one step away from expressing your true self.",    
    "One of the simplest ways to improve your confidence is by wearing the jewelry that makes you unique and special. Here is  how jewelry can improve your confidence:",
                   "Jewelry are the form of communication. How we look is a story we are telling the world. It can be hard to feel confident if you don’t know what message you’re sending to the rest of the world. Choose jewelry that expresses your message. If you wear something shining, you’ll instantly feel more shining, bright and happier! ",
          "Look at the sparkle jewelry collection we have for you, which will instantly complement your wardrobe.",
          "Do not put on jewelry simply because it completes your outfit or you have the money. Instead, you should wear something that is a true expression of who you are. The jewelry should be able to reflect your inner beauty while at the same time embracing your unique personality. It is only through this action that you can feel confident about yourself when interacting with people around you.",
      
      ];
  }
}




const mao = mess.map((ms) => `<li>` + ms + `</li>`).join("");


//document.querySelector(".msghere").innerHTML = mao;


window.onload = function() {
  what();
  function what(){
    const headmsg = document.querySelector(".headmsg");
   
    headmsg.innerHTML = typo;
   
   const msgme = document.querySelector(".msghere");
  
   msgme.className = "center-item";
  
   msgme.innerHTML = mao;
  
  };
}
//document.querySelector(".usertype").value = typo;

//document.querySelector(".usertype").style.display = "none";
//console.log(document.querySelector(".usertype").value)

//share buttons
/* 

Social Share Links:

WhatsApp:
https://wa.me/?text=[post-title] [post-url]

Facebook:
https://www.facebook.com/sharer.php?u=[post-url]

Twitter:
https://twitter.com/share?url=[post-url]&text=[post-title]

Pinterest:
https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&is_video=[is_video]&description=[post-title]

LinkedIn:
https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]

*/

const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");

const linkedinBtn = document.querySelector(".linkedin-btn");
const whatsappBtn = document.querySelector(".whatsapp-btn");

function init() {
  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI("Checkout what type of communicator I am");
  // let postImg = encodeURI(pinterestImg.src);

  facebookBtn.setAttribute(
    "href",
    `https://www.facebook.com/sharer.php?u=${postUrl}`
  );

  twitterBtn.setAttribute(
    "href",

    `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
  );

  // linkedinBtn.setAttribute(
  // "href",
  //"http://www.linkedin.com/shareArticle?mini=true&amp;url=https://simplesharebuttons.com"
  //`https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
  //);
  linkedinBtn.setAttribute(
    "href",
    `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
  );

  whatsappBtn.setAttribute(
    "href",
    `https://wa.me/?text=${postTitle} ${postUrl}`
  );
}

init();
