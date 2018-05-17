

function Item (name, price, img_source){
    this.name = name;
    this.price = price;
    this.img_source = img_source
}



let shop = [
    new Item('grapes', '3.99', 'img/grapes.png'),
    new Item('bananas', '2.99', 'img/banana.png'),
    new Item('cake', '3.99', 'img/cake.png'),
    new Item('fries', '3.99', 'img/fries.png'),
    new Item('lemon', '3.99', 'img/lemon.png'),
    new Item('steak', '3.99', 'img/steak.png'),
];

let cart = [];

function item_create(test_item){
     $('<div>')
    .addClass('product')
    .attr('id', test_item.name)
    .append('<img src="' + test_item.img_source + '">')
    .prependTo($('.products'))
}

function item_create_cart(test_item){
    $('<div>')
   .addClass('product')
   .attr('id', test_item.name)
   .append('<img src="' + test_item.img_source + '">')
   .prependTo($('.cart'))
}

function update_shop(id){
    $('#'+id).remove();
}

function move_to_cart(){
    $('#cart').empty();
    for (let i=0; i<cart.length; i++){
        item_create_cart(cart[i]);
    }

}

for (let i=0; i<shop.length; i++){
    item_create(shop[i]);
}



//  for (let i=0; i<shop.length; i++){
//      item_create(shop[i]);
//  }

$('.product').click(function(){
    let test = $(this).attr('id');

    for (let i=0; i<shop.length; i++){
        if(test == shop[i].name){
            cart.push(shop[i]);
            shop.splice(i, 1)
        }
    }
     update_shop(test);
     move_to_cart();

     
  
 })










