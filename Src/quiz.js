//for question-bank
 const qstbank = [
    {
        question:'which of these CSS properties allows you to add a shadow to letters?',
        option:['','','',''],
        answer:'text-shadow'
    },
     {
        question:'which of these CSS properties allows you to add a shadows to letters?',
        option:['a:consulted','a:visited','a:focus','a:hover'],
        answer:'a:visited'
    },
    {
        question:'which of these CSS rulles allows yuo to change the appearance of previously visited link?',
        option:['tr','table','ine','td'],
        answer:'tr',
    },
    {
        question:'which of these tags represents a row in a table?',
        option:['get','action','post','submit'],
        answer:'post'
    },
    {
        question:'what is the most recommended form submission method that allows you to submit the most data?',
        option:['input','form','textarea','select'],
        answer:'input'
    },
    {
        question:'quelle balise permet aussi bien inserer des cases a crocher,des champs de texte monolignes et des selecteurs de date?',
        option:['@media','screensize','handheld','responsive'],
        answer:'@media'
    },

    {
        question:'Inside which HTML element do we put the javascript ?',
        option:['<js>>','<script>','<scripting>','<javascript>'],
        answer:'<script>'
    },
    {
        question:'which of the following proposition is a valid variable declaration and initialization in javascript ?',
        option:['{}braces','[]square brackets','()parentheses','none of these list'],
        answer:'()parentheses'
    },
    {
        question:'we declare an array in javascript such as a list of elements,separated by comma between...?',
        option:['header','navigation','main','nav'],
        answer:'nav'
    },
    {
        question:'which HTML5 tag should be use for groups of navigation links?',
        option:['var','const','variable','let'],
        answer:'const'
    }
 ];
 //function for dispalaing the question and answers
  var i=1;
  var score=0;
  var backtext =document.getElementById('backtext');
    var btnnext = document.getElementById('nextbtn');
                    btnnext.addEventListener('click',(display)=>{
                        display.preventDefault();
                    if (i!=qstbank.length){
                    let qst = document.getElementById('questionplace');
                    qst.innerText= qstbank[i].question;
                    
                    var bt1 =document.getElementById('btn1');
                    var bt2 =document.getElementById('btn2');
                    var bt3 =document.getElementById('btn3');
                    var bt4 =document.getElementById('btn4');

                    bt1.innerText = qstbank[i ].option[0];
                    bt2.innerText = qstbank[i].option[1];
                    bt3.innerText = qstbank[i].option[2];
                    bt4.innerText = qstbank[i].option[3];
                    
                   document.getElementById('referenceqst').innerText=((i+1) + "/10");
                   i+=1;
                   nextbtn.style.display='none';
                   nbclick=0;
                   backtext.innerText='';
                    }
                
                 else {
                    btnnext.style.display='none';
                    backtext.innerText=("you finished your quiz!");
                    document.getElementById('score').innerText= ("score:" + score);
                     
                }
                
            });          

         //function to calculate the score
         var nbclick=0;
            function calscore(btncliked){
             nbclick +=1;
             if(nbclick <= 1){
              var backtext = document.getElementById('backtext');
               if((btncliked)==(qstbank[i-1].answer )){
                   score+=1;
                   backtext.innerText=("well!,good answer ^_^");
                   backtext.style.fontStyle='italic';
                   backtext.style.fontFamily='Courie New';

            }
               else
                backtext.innerText=("incorect answer *_*");
                backtext.style.fontStyle='italic';
                backtext.style.fontFamily='Courie New';
                backtext.style.color='red';
        }
        else{
            var backtext =document.getElementById('backtext');
            backtext.innerText=("you have choosen an answer");
            backtext.style.color='red';
           }
           nextbtn.style.display='block';
           nextbtn.style.width='80px';
           nextbtn.style.margin='auto';
           nextbtn.style.borderradius='8px';
         }