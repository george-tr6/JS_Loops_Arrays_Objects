var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];
var search;

function print(message) {
  document.write( '<p>' + message + '</p>');
}

while (true) {
  search = prompt("Search for a product. Type 'search' to show all lists and 'quit' to exit ")
  search = search.toLowerCase();  
  if (search === 'quit'){
      break;
    }else if (search === 'list'){
      print (inStock.join(','));
    }else {
      if( inStock.indexOf(search) > -1 ) {
        print('Yes, we have ' + search + ' in the store.');
      }else {
        print(search + ' is not is stock.');
      }
    }

}