class TabLink {
    constructor(element) { 
      this.element = element;
      
      //STEP ONE: GET ALL DATA-TAB *tab-link also had data-tab attributes. it's referencing the links variable*
      this.data = this.element.dataset.tab; //this.data is holding everything with the data attribute data-tab
      //STEP TWO: SET UP THE MATCHING CARDS *.tabs-item holds our card. looks for matching card to tab
      this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);  //we are selecting items with the .tabs-item class and the data-tab  attribute and this.itemElement is holding it
      //STEP THREE: CREATES NEW VARIABLE WITH MATCHING TAB AND CARDS
      this.tabItem = new TabItem(this.itemElement); 
      
      // Add a click event listener on this instance, calling the select method on click
          this.element.addEventListener('click', () => this.select())  //add event listener to every element
    };
  
    select() {
      // Get all of the elements with the tabs-link class
      const links = document.querySelectorAll('.tabs-link'); //selecting all .tabs-link classes and holding it in links
  
      // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
      Array.from(links).forEach(link => link.classList.remove('tabs-link-selected')); //turn those classes into an array so that we can have access to the forEach method. 
                                                                                                      //once we have access to forEach we will iterate through each class and add classList.remove
      // Add a class named "tabs-link-selected" to this link
      this.element.classList.add('tabs-link-selected'); //whatever element is selected we're adding the tabs-link-selected class
      
      // Call the select method on the item associated with this link
        this.tabItem.select();
    }
  }
  
  class TabItem {
    constructor(element) {
      this.element = element;
    }
  
    select() {
      const tItems = document.querySelectorAll('.tabs-item')// Select all ".tabs-item" elements from the DOM
      Array.from(tItems).forEach(tItem => tItem.classList.remove('tabs-item-selected'))// Remove the class "tabs-item-selected" from each element
      this.element.classList.add('tabs-item-selected')// Add a class named "tabs-item-selected" to this element 
    }
  }
  
  
//Step One: GET REFERENCES
  let links = document.querySelectorAll('.tabs-link');
  //CREATE NEW CLASS CALLED TABLINK
  links = Array.from(links).map(link => new TabLink(link))