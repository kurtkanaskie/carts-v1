var cart = JSON.parse(context.getVariable("cart"));
var productId = context.getVariable("productId");

if( cart.Order.Products !== undefined ) {
    for( var i=0; i<cart.Order.Products.length; i++ ) {
        if( cart.Order.Products[i].ID == productId ) {
            cart.Product = cart.Order.Products[i];
        }
    }
    delete cart.Order;
}
context.setVariable("cart", JSON.stringify(cart));