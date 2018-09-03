//NAV
var isActive = false;

$('.js-menu').on('click', function() {
	if (isActive) {
		$(this).removeClass('active');
		$('body').removeClass('menu-open');
	} else {
		$(this).addClass('active');
		$('body').addClass('menu-open');
	}

	isActive = !isActive;
});


//OPENING ANIMATION
var swamp = new TimelineMax();
swamp.from('#croc', 1, {ease: "Back.easeOut", y: 10, opacity: 0.5});

var x = new TimelineMax();
x.from('.x', 1, {transformOrigin:"50% 50%", ease:"Elastic.easeOut", scale:2});



/* Testing out Jake Archibald's path drawing technique
https://jakearchibald.com/2013/animated-line-drawing-svg/

var path = document.querySelector('.trails');
var length = path.getTotalLength();
// Clear any previous transition
path.style.transition = path.style.WebkitTransition =
  'none';
// Set up the starting positions
path.style.strokeDasharray = length + ' ' + length;
path.style.strokeDashoffset = length;
// Trigger a layout so styles are calculated & the browser
// picks up the starting position before animating
path.getBoundingClientRect();
// Define our transition
path.style.transition = path.style.WebkitTransition =
  'stroke-dashoffset 2s ease-in-out';
// Go!
path.style.strokeDashoffset = '0';
*/


//KEY LOCATION REPEAT
var shipRepeat = new TimelineMax({repeat:-1, yoyo:true, repeatDelay:0.05});
shipRepeat.add('start', 0)
.fromTo('.ship', 1, { rotation:-3, transformOrigin: "50% 50%"}, {rotation:3, transformOrigin: "50% 50%"}, 'start');

/*
var chestRepeat = new TimelineMax({repeat:-1, yoyo:true, repeatDelay:1});
chestRepeat.to('.chest-inside', 1, {ease: "Back.easeOut", scaleY: 1.3, transformOrigin: "50% 50%"}, 0);
*/

var flagRepeat = new TimelineMax({repeat:-1, yoyo:true});
flagRepeat.add('start', 0)
.to('.flag-wave', 1, {scaleY:0.95, scaleX:1.05}, 'start');

var krakenRepeat = new TimelineMax();
krakenRepeat.to('.tentacle-right', 1, {rotation:3, transformOrigin: "50% 100%", repeat:-1, yoyo:true}, 0)
.to('.tentacle-left', 1, {rotation:-3, transformOrigin: "50% 100%", repeat:-1, yoyo:true}, 0)
.to('#kraken-head', 3, {transformOrigin: "50% 65%", scaleY: 0.8}, 0);



//KEY LOCATION HOVERS
//Add fontWeight: "700i" / whatever to make new text italic

  var shipHover = new TimelineMax({paused: true});
  shipHover.add('start', 0)
  shipHover.to('.ship', 0.5, {transformOrigin: "50% 50%", ease: "Back.easeOut", scale:1.1}, 'start')
  .to('.ship-highlight', 0.5, {fill:"#6ad4eb", stroke:"#6ad4eb"}, 'start')
  .to('#about-text', 0.5, {text:"Come Sailing", fill: "#6ad4eb"}, 'start');

  $("#about-box").hover(function(){
    shipHover.play();
  },function(){
    shipHover.reverse();
  })

  var chestHover = new TimelineMax({paused: true});
  chestHover.add('start', 0)
  .to('#chest', 0.5, {transformOrigin: "50% 50%", ease: "Back.easeOut", scale:1.1}, 'start')      
  .to('.chest-highlight', 0.5, {fill:"#6ad4eb", stroke:"#6ad4eb"}, 'start')
  .to('#chest-stoke', 0.5, {stroke: "#6ad4eb"}, 'start')
  .to('.chest-inside', 0.5, {ease: "Back.easeOut", scaleY: 1.3, transformOrigin: "50% 50%"}, 0)
  .to('#work-text', 0.5, {text:"Peek Inside", fill: "#6ad4eb"}, 'start');

  $("#work-box").hover(function(){
    chestHover.play();
  },function(){
    chestHover.reverse();
  })

  var flagHover = new TimelineMax({paused: true});
  flagHover.add('start', 0)
  .to('#flag', 0.5, {transformOrigin: "50% 50%", ease: "Back.easeOut", scale:1.1}, 'start')    
  .to('.flag-highlight', 0.5, {fill:"#6ad4eb", stroke:"#6ad4eb"}, 'start')
  .to('#cv-text', 0.5, {text:"Pirate for Hire", fill: "#6ad4eb"}, 'start');

  $("#cv-box").hover(function(){
    flagHover.play();
  },function(){
    flagHover.reverse();
  })

  var krakenHover = new TimelineMax({paused: true});
  krakenHover.add('start', 0)
  .to('#kraken', 0.5, {transformOrigin: "50% 50%", ease: "Back.easeOut", scale:1.1}, 'start')  
  .to('.kraken-highlight', 0.5, {fill:"#6ad4eb"}, 'start')
  .to('#kraken-head', 0.5, {transformOrigin: "50% 65%", scaleY: 1}, 'start')   
  .to('#blog-text', 0.5, {text:"Here Be Monsters", fill: "#000"}, 'start');

  $("#blog-box").hover(function(){
    krakenHover.play();
  },function(){
    krakenHover.reverse();
  })

  var xHover = new TimelineMax({paused: true});
  xHover.add('start', 0)
  xHover.to('.x', 0.5, {transformOrigin:"50% 50%", ease: "Back.easeOut", scale:1.1}, 'start')
  .to('#contact-text', 0.5, {text:"X Marks the Spot", fill: "#6ad4eb"}, 'start');

  $("#contact-box").hover(function(){
    xHover.play();
  },function(){
    xHover.reverse();
  })


  //LINK HOVERS
  //Link symbols:  ⇒ ⇛ ⇢ ↦
  var project1Hover = new TimelineMax({paused:true});
  project1Hover.to('.project1-link', 0.75, {transformOrigin:"50% 50%", ease: "Back.easeOut", scale: 1.25, opacity:1}, 0)
  .to('#project1-text', 0.5, {text:"Atomic Chef eLearning ↦"}, 0);
 
  $("#stop1").hover(function(){
    project1Hover.play();
    },function(){
    project1Hover.reverse();
  })

  var project2Hover = new TimelineMax({paused:true});
  project2Hover.to('.project2-link', 0.75, {transformOrigin:"50% 50%", ease: "Back.easeOut", scale: 1.25, opacity:1}, 0)
  .to('#project2-text', 0.5, {text:"Reveal the Takahe ↦"}, 0);
 
  $("#stop4").hover(function(){
    project2Hover.play();
    },function(){
    project2Hover.reverse();
  })

  var project3Hover = new TimelineMax({paused:true});
  project3Hover.to('.project3-link', 0.75, {transformOrigin:"50% 50%", ease: "Back.easeOut", scale: 1.25, opacity:1}, 0)
  .to('#project3-text', 0.5, {text:"Happy Days App ↦"}, 0);
 
  $("#stop8").hover(function(){
    project3Hover.play();
    },function(){
    project3Hover.reverse();
  })


  var logbookHover = new TimelineMax({paused:true});
  logbookHover.to('.blog-link', 0.75, {transformOrigin:"50% 50%", ease: "Back.easeOut", scale: 1.25, opacity:1}, 0)
  .to('#logbook-text', 0.5, {text:"Captain's Log ↦"}, 0);
 
  $("#stop9").hover(function(){
    logbookHover.play();
    },function(){
      logbookHover.reverse();
  })


  //MINOR LOCATION HOVERS
  var swampHoverIn = new TimelineMax({paused:true});
  swampHoverIn.to('#croc', 0.6, {ease: "Back.easeIn", y: 10, opacity: 0.8}, 0)
  .to('#swamp-text', 0.75, {text:"Swamps of Code"}, 0);
  
  $("#stop2").hover(function(){
      swampHoverIn.play();
    },function(){
      swampHoverIn.reverse();
  })

  var spyglassHover = new TimelineMax({paused:true});
  spyglassHover.to('#spyglass', 0.5, {ease: "Back.easeIn", transformOrigin: "50% 50%", rotation: -220}, 0)
  .to('#spyglass-text1', 0.5, {text:"Current project..."}, 0)
  .to('#spyglass-text2', 0.5, {text:"The Side Project Project"});
  
  
  $("#stop3").hover(function(){
      spyglassHover.play();
    },function(){
      spyglassHover.reverse();
  })

  var skeletonHover = new TimelineMax({paused:true});
  skeletonHover.to('#skeleton-sword', 0.25, {transformOrigin: "50% 100%", scaleY:0.8}, 0)
  .to('#skeleton-text', 0.75, {text:"Problem Assassin"}, 0);
  
  $("#stop5").hover(function(){
    skeletonHover.play();
    },function(){
    skeletonHover.reverse();
  })

  var caveHover = new TimelineMax({paused:true});
  //caveHover.to('#cave-eyes', 0.25, {ease:"Back.easeIn", transformOrigin: "50% 50%", scale:1.2}, 0)  
  caveHover.to('#cave-eyes', 0.2, {ease:"Back.easeOut", transformOrigin: "50% 50%", scaleY:0, repeat:2, yoyo:true})
  .to('#cave-eyes', 0.2, {ease:"Back.easeOut", transformOrigin: "50% 50%", scaleY:1})  
  .to('#cave-text', 0.75, {text:"Creative Monster"}, 0);
  
  $("#stop6").hover(function(){
    caveHover.play();
    },function(){
    caveHover.reverse();
  })

  var bottleHover = new TimelineMax({paused:true});
  bottleHover.to('#bottled-ship', 0.5, {rotation:-3, x:-4, scaleX:1.05, repeat:2, yoyo:true, transformOrigin: "50% 50%"}, 0)
  .to('#bottle-text', 0.75, {text:"Side Projects Brewing"}, 0);
  
  $("#stop7").hover(function(){
    bottleHover.play();
    },function(){
      bottleHover.reverse();
  })

  //logbook

  var palmHover = new TimelineMax({paused:true});
  palmHover.from('#palm1', 0.2, {rotation: -5, transformOrigin:"50% 100%", repeat:3, yoyo:true, ease:"Bounce.easeIn"}, 0)
  .from('#palm2', 0.2, {rotation: 5, transformOrigin:"50% 100%", repeat:3, yoyo:true, ease:"Bounce.easeIn"}, '+0.05')
  .from('#palm3', 0.15, {rotation: -3, transformOrigin:"50% 100%", repeat:3, yoyo:true, ease:"Bounce.easeIn"}, '+0.025')
  .to('#palm-text', 0.75, {text:"Beware: Illustration Jungle"}, 0);
  
  $("#stop10").hover(function(){
    palmHover.play();
    },function(){
      palmHover.reverse();
  })