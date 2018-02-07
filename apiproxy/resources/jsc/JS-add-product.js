var cart = JSON.parse(context.getVariable("cart"));
var product = JSON.parse(context.getVariable("request.content"));
var time = context.getVariable("system.time");

cart.Cart.UpdatedAt = time;
if( cart.Order.Products === undefined ) {
    cart.Order.Products = [];
}
cart.Order.Products.push( product );
context.setVariable("cart",JSON.stringify(cart));