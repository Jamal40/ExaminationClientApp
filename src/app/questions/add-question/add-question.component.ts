import { Component, ElementRef, OnInit, ViewChild, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  @ViewChild("body") bodyInput: ElementRef;
  codedText="";
  chainingText = "";
  choosenColor = "";
  resultBody : string ='';

  constructor() { }

  ngOnInit(): void {
  }

  makeItBold(){
    this.convertToCoded("**");
  }
  makeItItalic(){
    this.convertToCoded("*");
  }
  makeItColored(){
    this.convertToCoded("*color*")
  }
  insertImage(){
  }
  insertCode(){
  }

  submit(){
    this.convertToMarkup("strong", "**");
    this.convertToMarkup("span", "*color*", `color:${this.choosenColor}!important;`)
    this.convertToMarkup("i", "*");

  }

  getSelectedText(){
    var start = this.bodyInput.nativeElement.selectionStart;
    var end = this.bodyInput.nativeElement.selectionEnd;
    var selectedText = this.bodyInput.nativeElement.value.substring(start, end);
    return {
        start:start, 
        end: end
    }
  }

  convertToCoded(delimiter:string){
    let selectedTextIndices = this.getSelectedText();
    let currentText = this.bodyInput.nativeElement.value;
    let textBefore = currentText.substring(0,selectedTextIndices.start);
    let selectedText = `${delimiter}${currentText.substring(selectedTextIndices.start, selectedTextIndices.end)}${delimiter}`;
    let textAfter =  currentText.substring(selectedTextIndices.end, currentText.length);
    
    let resutlText = textBefore.concat(selectedText, textAfter);
    console.log(resutlText);

    this.bodyInput.nativeElement.value = resutlText;
  }

  convertToMarkup (markupName:string, delimiter:string, style=""){
    let resutlText = this.chainingText || this.bodyInput.nativeElement.value;
    let dividedResult = resutlText.split(delimiter);
    let newResult = "";
    for (let i = 0; i < dividedResult.length; i++){
        if(i%2!=0){
            newResult += `<${markupName} style="${style}">${dividedResult[i]}</${markupName}>`;
        }
        else{
            newResult += dividedResult[i];
        }
    }

    newResult = !newResult.includes("pre")? `<pre style="">${newResult}</pre>`: newResult;
    console.log(newResult);

    resutlText = newResult;

    this.chainingText = resutlText;
}

fill(){
  this.codedText = "You must be stupid I told you before don't kill him";
}

}
