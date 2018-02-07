var cart = JSON.parse(context.getVariable("cart"));
var productId = context.getVariable("productId");
var product = JSON.parse(context.getVariable("request.content"));
var time = context.getVariable("system.time");

cart.Cart.UpdatedAt = time;
if( cart.Order.Products !== undefined ) {
    for( var i=0; i<cart.Order.Products.length; i++ ) {
        if( cart.Order.Products[i].ID == productId ) {
            cart.Order.Products.splice(i,1);
            cart.Order.Products.push( product );
        }
    }
}
context.setVariable("cart", JSON.stringify(cart));