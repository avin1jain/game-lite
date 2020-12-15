class Level1 {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('submit');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.count=1 ;
      this.question= createElement('h3');
      this.option1= createElement('h4');
      this.option2= createElement('h4');
      this.option3= createElement('h4');
      this.option4= createElement('h4');
      this.button2= createButton('next');
      this.input2 = createInput("choose option")
      this.answer=[];
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("Quiz Master");
      this.title.position(displayWidth/2 - 50, 0);
  
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
   
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        this.greeting.html("Hello " + this.input.value())
        gameState=1;
        this.greeting.position(displayWidth/2 - 70, displayHeight/6);
      });
     
  
  
  
  
    }
    showquestion(){
    if(this.count==1){
    this.question.html('Q1)What are the common symptoms of COVID-19? ')
    this.question.position(50,displayHeight/2-50)
    this.option1.html('A) A new and continuous cough')
    this.option1.position(100,displayHeight/2+50);
    this.option2.html('B) Fever')
    this.option2.position(displayWidth/2,displayHeight/2+50);
    this.option3.html('C) Tiredness')
    this.option3.position(100,displayHeight/2+150);
    this.option4.html('D) All of the above *')
    this.option4.position(displayWidth/2,displayHeight/2+150);

    }else if(this.count==2){
      this.question.html('Q2)Can you always tell if someone has COVID-19? ')
      this.question.position(50,displayHeight/2-50)
      this.option1.html('A) No – not everyone with COVID-19 has symptoms*')
      this.option1.position(100,displayHeight/2+50);
      this.option2.html('B) Yes – it will be obvious, a person with COVID-19 coughs a lot')
      this.option2.position(displayWidth/2,displayHeight/2+50);
      this.option3.html('C) Yes – you can tell just by where a person comes from, their race and ethnicity')
      this.option3.position(100,displayHeight/2+150);
      this.option4.html('D) All of the above *')
      this.option4.position(displayWidth/2,displayHeight/2+150);
  
      }
   this.button2.position(displayWidth-100, displayHeight-100)
   
   this.input2.position(displayWidth/2-50,displayHeight-200)

   this.button2.mousePressed(()=>{
   this.answer.push(this.input2.value());
   console.log(this.answer);
   this.count++;
   this.input2.html('');
  })
    } 
  }
  