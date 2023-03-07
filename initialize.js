


Reveal.initialize({
    hash: true,
    width: 960,
    height: 700,
    center:true,

    // Learn about plugins: https://revealjs.com/plugins/
    plugins: [ RevealMarkdown, RevealHighlight, RevealNotes ],
    dependencies: [
        {src: 'plugin/external/external.js', condition: function() {return !!document.querySelector( '[data-external],[data-external-replace]' );
            }},
            { src: 'plugin/reveal-svg-fragment/reveal-svg-fragment.js', condition: function() { return !!document.querySelector( '[data-svg-fragment]' ); }
        }]
    
});

Reveal.addEventListener('traitsSlide', function(){
TweenMax.staggerFrom('#list li', 0.5, {delay:1, scale:0, alpha:0, ease:'Back.easeOut'}, 0.25);
});


Reveal.addEventListener('boles', function(){
    TweenMax.fromTo(['.st1','.st5'], .5, { attr: {cy: 40}}, {attr: {cy: 20 },repeat:-1, yoyo:true, yoyoEase:'power2.in'}).delay(.6);
},false);

Reveal.addEventListener('cover3', function(){

//TweenMax.from('g[inkscape\\:label="capa01"]', 2, {opacity:0, repeat: -1, yoyo:true});
TweenMax.to('#seed',2, {y:30, repeat:-1, yoyo:false, repeatDelay:4, opacity:0});

TweenLite.to("#path3394", 2, {rotation:-30, transformOrigin:"left top", yoyo:true, repeatDelay:2, repeat:-1});
TweenLite.to("#path6334", 2, {rotation:-20, transformOrigin:"left top", yoyo:true, repeatDelay:1, repeat:-1});


var tl = gsap.timeline({delay:.5, repeat: 0, repeatDelay: 0});
tl.staggerFrom(
  ["#test1",
      "#test2",
      "#test3",
    "#tierra1",
    "#tierra2",
    "#tierra3",
      "#arbre1",
      "#arbre2",
      "#nube1",
      "#nube2",
      "#nube3",
      "#regador",
      "#semillero",
      "#hojalimon",
      "#recolectora",
      "#palero",
      "#rubia",
      ".got",
      "#carretillero",
      "#pala",
      
    ],
    1,
    {
      opacity: 0,
      scale: 0.5,
      transformOrigin: "center center",
      ease: Elastic.easeOut.config(1, 0.5)
    },
    0.1
  );
  tl.to(".got", {opacity: 0, repeat:-1, yoyo: true,stagger: function(index,target,list){return index*.1}});
  tl.from('#carretillero',{duration: 5, x: -100, ease: "steps(15)",repeat:-1, repeatDelay:4});
  gsap.to(["#nube1","#nube2","#nube3"],{ strokeDashoffset: -200, repeat: -1, ease: "steps(1)", duration:1});
},false);




Reveal.addEventListener('intro',function(){
  var tl = gsap.timeline({repeat: 0, repeatDelay: 1});
  tl.from('h3',{opacity:0, x: -1000, duration: 1});
tl.from('h2',{opacity:0, y: -1000, duration: 1})
  tl.from(['svg'],1,{
    stagger: { 
    each: 0.1,
    from: "left",
    grid: "auto",
    ease: 'Back.easeOut',
  },  scale:0, alpha:0});
 
})

Reveal.addEventListener('cover4',function(){
  var tl1 = gsap.timeline({repeat: 0, repeatDelay: 1});

  tl1.from('blockquote',2,{opacity:0});
  tl1.from('p',2,{opacity:0})
})

Reveal.addEventListener('projecte',function(){
  var tl2=gsap.timeline();
  tl2.from('img',{x:-1000})
  tl2.to('img',2,{opacity:1});
  tl2.from('h3',1.5,{x:-1000});
  tl2.from('h2',1.5,{x:2000},"<");
})

Reveal.addEventListener('evidencies', function(){
gsap.from('li',1,{
delay:1,
x:-2000,
ease:"elastic.out(1, 0.3)",
repeat:0,
stagger:.85
});
gsap.from('h3',1,{
  scale:1.5,
  ease: "Bounce.easeOut",
  delay:1
})
});

Reveal.addEventListener('perque',function(){
  var tlpq=gsap.timeline({repeat: 0, repeatDelay: 1});
  tlpq.from('p',1,{
  delay:.5,
  y:-2000,
  ease:"Back.easeOut.config(1.7)",
  repeat:0,
  stagger:.85
});
tlpq.from('img',1,{
  delay:1,
  css:{opacity:0, scale:1.5},
  stagger:0.85
},"<");



var tlBallBounce=new gsap.timeline({repeat: -1})

tlBallBounce.
      to("#crist",1.4,{y:'-=10', ease: Sine.easeInOut}).
      to('#crist',1.7,{y:'+=10', ease: Sine.easeInOut});

      var tlBallBounce2=new gsap.timeline({repeat: -1})

      tlBallBounce2.
            to("#mans",1.9,{y:'+=10', ease: Sine.easeInOut}).
            to('#mans',1.5,{y:'-=10', ease: Sine.easeInOut});    
      
            var tlBallBounce3=new gsap.timeline({repeat: -1, yoyo:true})

      tlBallBounce3.
                  to("#rellevant",1.9,{y:'-=12', ease: Sine.easeInOut}).
                  to('#rellevant',1.5,{y:'+=14', ease: Sine.easeInOut});
    
        var svg = $('#rellevant');
                  var rotation=0;
                  
                  (function Rotation() {
                    rotation = rotation + 90 ;
                    TweenMax.to(svg,0.5,{rotation:rotation,delay:0.8,onComplete:Rotation});
                  }());
    
                 

   });
