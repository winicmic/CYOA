
let begin = function(){

  document.getElementById("bruh").innerHTML = "<p>Welcome to summer camp. You're name is Ben Hadfield, and this is the summer before you enter 8th grade. You have been to camp once before, last year, and it was an experience you'll never forget. You are coming again this year in the hope of seeing friends, creating new memories, and most importantly, having fun. What adventures await you, you have yet to see. Hopefully this year will prove to be just as fun as last, but what happens here at camp could also be more than you bargained for...</p><h6><input type='button' value='Start your first day at summer camp!' onclick='regret()'></h6>";

}

let regret = function(){

document.getElementById("bruh").innerHTML = "<p>You arouse from your nap as you as the car begins to vibrate. You look out the window, and as you expect, you have made it to a gravel road. It's only a few more minutes now until you reach the gates of Camp Livingston, the summer camp you will be spending the next four weeks at.</p><p> \"Almost there now,\" says your dad from the front seat. \"Make sure you behave yourself,\" he jokingly adds. </p><p>\"I will,\" you say.</p><p>\"Good. And don't forget to write\"</p><p>Finally, you pull into the gates, and in front of a small building. The car stops, and you and your dad get out. You gather all your belongings, say goodbye to your father, and  begin to walk to the main office. On your way there, you spot a friend from last year, and decide to say hi.</p><h6><input type='button' value='Next' onclick='pain()'></h6>"

}

let pain = function(){

document.getElementById("bruh").innerHTML = "<p>\"Yo, Harry!\" you say as you walk towards him.</p><p>Harry was a pretty chill guy, who got along with most people. He was in your cabin last year, but you didn’t talk to him much. It’s not that you didn’t like him, but you just would have rather talked with your other friends. You still say hi to him now though, just because it’s been so long since you last talked.</p><p>\"Hey, Ben, how’s it been?\" asked Harry.</p><br><h4><input type='radio' name='why' id='good'><label for='good'><h7>\"I’ve been doing pretty good.\"</h7></label><br><input type='radio' name='why' id='better'><label for='better'><h7>\"It could have been better.\"</h7></label><br><input type='button' value='Select' onclick='legoStarwars()'></h4>"



}

let legoStarwars = function(){

 if(good.checked){
 document.getElementById("bruh").innerHTML = "<p>\"Good, I’ve been doing alright myself,\ says Harry. \"Do you know what cabin you’re in yet?\"</p><p>\"I haven’t checked yet,\" you say.\"I’ll go over there now. I’ll tell you when I get back.\"</p><p>\"Alright,\" Harry says back.</p><br><p>You go over to the camp office. It’s an air-conditioned building with glass doors. When you enter, there is a desk immediately in front of you, with a young woman sitting behind it.</p><p>\"Do you need to know what cabin you’re in?\" she says.</p><p>\"Yes.\"</p><p>\"Name?\"</p><h4><input type='radio' name='llname' id='givhad'><label for='givhad'><h7>\"Ben Hadfield\"</h7></label><br><input type='radio' name='llname' id='remme'><label for='remme'><h7>\"Don't you remember me from last year?\"</h7></label><br><input type='button' value='Select' onclick='legoIndianajones()'></h4>"
}else if(better.checked){
  document.getElementById("bruh").innerHTML = "<p>\"Okay,\" says Harry. \"That’s too bad I guess. Anyway, have you gone over to the office yet to check in?\"</p><p>\"Not yet,\" you say. \"I guess I’ll head over there now.\"</p><br><p>You go over to the camp office. It’s an air-conditioned building with glass doors. When you enter, there is a desk immediately in front of you, with a young woman sitting behind it.</p><p>\"Hey, I remember you!\" she says sweetly and genuinely. \"You’re Ben, right?\"</p><p>\"Yep, that’s me.\"</p><p>\"And your last name is...,\" she says, as she flips through a packet of papers.</p><h4><input type='radio' name='lname' id='hadf'><label for='hadf'><h7>\"Hadfield\"</h7></label><br><input type='radio' name='lname' id='waitp'><label for='waitp'><h7>Wait</h7></label><br><input type='button' value='Select' onclick='legoBatman()'></h4>"
}

}

let legoIndianajones = function(){

if(givhad.checked){
document.getElementById("bruh").innerHTML = "<p>\"Let’s see…\" says the woman. \"You have been assigned to… Jaffa! You’re cabin-mates are Daniel, Ryan, Harry, Ethan, and Hunter.\"</p><p>\"Nice,\" you say.</p><p>\"Your counselors are Alex, Trevor, and Jonathan.\"</p><p>\"Cool.\"</p><h6><input type='button' value='Next' onclick='legoIndianajonesextend()'></h6>"
}else if(remme.checked){
document.getElementById("bruh").innerHTML = "<p>\"Yes I remember you, but it’s been a while,\" says the woman. \"You’re… Ben, right?\"</p><p>\"That’s me.\"</p><p>\"Sorry, remind me of your last name?\"</p><p>\"It's Hadfield.\"</p><p>\"Thanks,\" she says, somewhat annoyedly.</p><p>\"Let’s see…\" says the woman. \"You have been assigned to… Jaffa! You’re cabin-mates are Daniel, Ryan, Harry, Ethan, and Hunter.\"</p><p>\"Nice,\" you say.</p><p>\"Your counselors are Alex, Trevor, and Jonathan.\"</p><p>\"Cool.\"</p><h6><input type='button' value='Next' onclick='legoIndianajonesextend()'></h6>"
}
}

let legoIndianajonesextend = function(){
  document.getElementById("bruh").innerHTML = "<p>As you walk back to Harry, you see that he is talking with Ryan and Daniel.</p><p>\"Hey Harry, I’m in Jaffa with you guys!”\" you shout to them.</p><p>\"I know,\" Harry says. \"We were talking about going ahead to the cabin instead of waiting for everyone else. Want to come with us?\"</p><br><h4><h7><input type='radio' name='aslk' id='stayback'><label for='stayback'><h7>Stay back</h7></label><br><input type='radio' name='aslk' id='comewith'><label for='comewith'><h7>Go with them</h7></label><br><input type='button' value='Select'></h4>"
}


let legoBatman = function(){
  if(hadf.checked){
    document.getElementById("bruh").innerHTML = "<p>\"Thanks,\" she says. \"Your cabin this year is… Jaffa. Your cabin-mates are Daniel, Ryan, Harry, Ethan, and Hunter. Your counselors are Alex, Trevor, and Jonathan.\"</p><p>\"Thanks,\" you say, and begin to walk back.</p><br><h6><input type='button' value='Next' onclick='legoBatmanextend()'></h6>"
  }else if(waitp.checked){
    document.getElementById("bruh").innerHTML = "<p>\"...uhh,\" she says, still flipping through the packet, desperately trying to remember.</p><p>\"Hadfield,\" you eventually say, out of pity.</p><p>\"Right! Sorry about that,\" she says as she flips to your name in the packet. \"Your cabin-mates are Daniel, Ryan, Harry, Ethan, and Hunter. And your counselors are Alex, Trevor, and Jonathan.\"</p><p>\"Thank you,\" you say, and walk out the door.</p><br><h6><input type='button' value='Next' onclick='legoBatmanextend()'></h6>"
  }
}

let legoBatmanextend = function(){
  document.getElementById("bruh").innerHTML = "<p>You walk back to Harry, and you see that he is talking to Ryan and Daniel. Ryan and Daniel were your cabin-mates last year, and they hang around each other a lot. You are pretty cool with them, but you typically have talked to Daniel more than Ryan.</p><p>\"Hey, there's Ben!\" yells Daniel.</p><p>\"Yo.\"</p><p>\"Hey Ben,\" says Harry. \"We heard you were in our cabin again, so we were going to head over there while we wait for Hunter and Ethan. Are you coming with us?\"</p><h4><input type='radio' name='yeetus' id='staba'><label for='staba'><h7>Stay back</h7></label><br><input type='radio' name='yeetus' id='comwo'><label for='comwo'><h7>Go with them</h7></label><br><input type='button' value='Select'></h4>"
}