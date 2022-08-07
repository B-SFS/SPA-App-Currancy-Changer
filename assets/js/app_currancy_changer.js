/*
 first of all you are designing the app using pure java script so you will create a lot of
 elements so that it is not efficient to create the element code for each element 
 remember we need to apply the dry (don't repeat your self) method and spa(single page application)
 so you should create an object and put in it the same code in the creating element for each element
 and use new keyword to create elements
*/

let country = 'USD'
const api = `https://v6.exchangerate-api.com/v6/84b872f48765eff63fb4e483/latest/${country}`
fetch(api)
    .then(res => res.json())
    .then(data => {
        DataObject = data.conversion_rates;
        document.querySelector('.spinner').style.display = 'none';
        document.querySelector('#app').style.display = 'block';
        startApp();

    }

    )//end fetch api 

function startApp() {

    // selector
    const selector = new appElement('select');

    // end selector

    const app = document.querySelector('#app');
    app.classList = 'container';
    const navBar = new appElement('div');
    navBar.classListFunction('d-flex justify-content-between')
    app.appendChild(navBar.e);
    // title
    const title = new appElement('h1')
    title.text("Currancy Exchange Rate App")
    // end title

    // end of the looping on the api data object

    // appened children
    navBar.appendingChildren(title.e)
    navBar.appendingChildren(selector.e)
    // end append children
    // adding hr
    let hr = new appElement('hr')
    app.appendChild(hr.e);
    // end adding hr

    // creating ul
    const ul = new appElement('ul');
    app.appendChild(ul.e)
    ul.classListFunction('listTall')
    // end creating ul
    // creating div
    const div = new appElement('div');
    app.appendChild(div.e);
    div.appendingChildren(ul.e)
    div.classListFunction('tall')
    // end creating div 
    // looping on the api data object 
    for (const key in DataObject) {
        //option
        let option = new appElement('option') //<option></option>
        option.e.setAttribute('value', key)//<option value = 'usd'></option>
        option.text(key);//<option value = 'usd'>usd</option>
        selector.appendingChildren(option.e)
        //end option
        // creating li
        let li = document.createElement('li')
        li.innerHTML = `
                    <strong>${key} </strong> : ${DataObject[key]}
                    `
        // li.text(`<strong></strong>: ${DataObject[key]}`)
        ul.appendingChildren(li);
        // end creating li
    }
    //end looping
 
    selector.e.addEventListener('change', e => {
        document.querySelector('.listTall').remove();
        country = e.target.value
        const api = `https://v6.exchangerate-api.com/v6/84b872f48765eff63fb4e483/latest/${country}`
       fetch(api)
            .then(res => res.json())
            .then(data => {
                DataObject = data.conversion_rates;
                        //  creating ul
                        const ul = new appElement('ul');
                        ul.classListFunction('listTall')
                        app.appendChild(ul.e)
                        div.appendingChildren(ul.e)
                    //  end creating ul
                 for (const key in DataObject) {
            
                    // creating li
                    let li = document.createElement('li')
                    li.innerHTML = `
                                <strong>${key} </strong> : ${DataObject[key]}
                                `
                    // li.text(`<strong></strong>: ${DataObject[key]}`)
                    ul.appendingChildren(li);
                    // end creating li
                }
            }
        
            )
    
     })

}


