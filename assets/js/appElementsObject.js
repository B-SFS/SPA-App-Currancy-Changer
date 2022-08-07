/**
 * Object to create new elements so the developers can add those elements to another elements
 */
function appElement(tag) {
    this.e = document.createElement(tag);
    this.text = (text) => {
        this.e.textContent = text;
    }
    
    this.classListFunction = str =>{
        this.e.classList = str;
    }

    this.appendingChildren = content =>{
    //  if(typeof content == 'object')
    //  {
    //     content.forEach(element => {
    //             this.e.appendChild(element)
    //         });
    //  }
    //  else{
    //     this.e.appendChild(content)
    //  }
    this.e.appendChild(content)
    }
}


