//Clearing the content after a button is pressed
function clearContent() {
    document.getElementById("img").textContent = "";
    document.body.style.backgroundColor = "white";
    document.getElementById("p1").textContent = "";
    document.getElementById("p2").textContent = "";
    document.getElementById("p3").textContent = "";
}

/*Inserts the content for the topic "happy" */
function insertHappyCode() {
    document.getElementById("img").src = "Happy.png";
    document.getElementById("p1").style.padding = "100px 10px 100px 10px";
    document.getElementById("p1").textContent += "I'm thanking you, GOD, from a full heart, I'm writing the book on your wonders. I'm whistling, laughing, and jumping for joy; I'm singing your song, High God. (Psalms 9:1-2 MSG)";
    document.getElementById("p1").style.backgroundColor = "#eeebe6";

    document.getElementById("p2").style.padding = "100px 10px 100px 10px";
    document.getElementById("p2").textContent += "Celebrate God all day, every day. I mean, revel in him! Make it clear as you can to all you meet that you're on their side, working with them and not against them. " +
    "Help them see that the Master is about to arrive. He could show up any minute! (Phil. 4:4 MSG)";
    ScrollReveal().reveal('.p2');
    
    document.getElementById("p3").style.padding = "100px 10px 100px 10px";
    document.getElementById("p3").textContent += "A cheerful heart brings a smile to your face; a sad heart makes it hard to get through the day. (Proverbs 15:13 MSG)";
    document.getElementById("p3").style.backgroundColor = "#eeebe6";
    ScrollReveal().reveal('.p3');
}

/*Inserts the content for the topic "sad" */
function insertSadCode() {
    document.getElementById("img").src = "Sad.png";
    document.getElementById("p1").style.padding = "100px 10px 100px 10px";
    document.getElementById("p1").textContent += "Is anyone crying for help? GOD is listening, ready to rescue you. (Psalm 34:17 MSG)";
    document.getElementById("p1").style.backgroundColor = "#eeebe6";
    
    document.getElementById("p2").style.padding = "100px 10px 100px 10px";
    document.getElementById("p2").textContent += "No test or temptation that comes your way is beyond the course of what others have had to face. All you need to remember is that God will never let you down;" + 
    " he'll never let you be pushed past your limit; he'll always be there to help you come through it. (1 Cor. 10:13 MSG)";
    ScrollReveal().reveal('.p2');

    document.getElementById("p3").style.padding = "100px 10px 100px 10px";
    document.getElementById("p3").textContent += "Cast your burden on the Lord, and he will sustain you; he will never permit the righteous to be moved. (Psalms 55:22 ESV)";
    document.getElementById("p3").style.backgroundColor = "#eeebe6";
    ScrollReveal().reveal('.p3');
}

/*Inserts the content for the topic "angry" */
function insertAngryCode() {
    document.getElementById("img").src = "Angry.png";
    document.getElementById("p1").style.padding = "100px 10px 100px 10px";
    document.getElementById("p1").textContent += "Post this at all the intersections, dear friends: Lead with your ears, follow up with your tongue, and let anger straggle along in the rear." +
    " God’s righteousness doesn’t grow from human anger. So throw all spoiled virtue and cancerous evil in the garbage. In simple humility, let our gardener, God, landscape you with the Word, making a salvation-garden of your life. (James 1:19-21 MSG)";
    document.getElementById("p1").style.backgroundColor = "#eeebe6";
    
    document.getElementById("p2").style.padding = "100px 10px 100px 10px";
    document.getElementById("p2").textContent += "Make a clean break with all cutting, backbiting, profane talk. Be gentle with one another, sensitive. Forgive one another as quickly and thoroughly as God in Christ forgave you. (Ephesians 4:31-32 MSG)";
    ScrollReveal().reveal('.p2');

    document.getElementById("p3").style.padding = "100px 10px 100px 10px";
    document.getElementById("p3").textContent += "Love is patient and kind; love does not envy or boast; it is not arrogant or rude. It does not insist on its own way; it is not irritable or resentful; (1 Cor. 13:4 ESV)";
    document.getElementById("p3").style.backgroundColor = "#eeebe6";
    ScrollReveal().reveal('.p3');
}

/*Inserts the content for the topic "worried" */
function insertWorriedCode() 
{
    document.getElementById("img").src = "Worried.png";
    document.getElementById("p1").style.padding = "100px 10px 100px 10px";
    document.getElementById("p1").textContent += "Be strong. Take courage. Don’t be intimidated. Don’t give them a second thought because God, your God, is striding ahead of you. He’s right there with you. He won’t let you down; he won’t leave you. (Deut. 31:6 MSG)";
    document.getElementById("p1").style.backgroundColor = "#eeebe6";
    
    document.getElementById("p2").style.padding = "100px 10px 100px 10px";
    document.getElementById("p2").textContent += "So be content with who you are, and don’t put on airs. God’s strong hand is on you; he’ll promote you at the right time. Live carefree before God; he is most careful with you. (1 Peter 5:6-7 MSG)";
    ScrollReveal().reveal('.p2');
    
    document.getElementById("p3").style.padding = "100px 10px 100px 10px";
    document.getElementById("p3").textContent += "For God gave us a spirit not of fear but of power and love and self-control. (2 Tim. 1:7 ESV)";
    document.getElementById("p3").style.backgroundColor = "#eeebe6";
    ScrollReveal().reveal('.p3');
}