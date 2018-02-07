var cart = JSON.parse(context.getVariable("cart"));
var cust = JSON.parse(context.getVariable("request.content"));
var time = context.getVariable("system.time");

cart.Cart.UpdatedAt = time;
for( var p in cust ) {
    cart.Order[p] = cust[p];
}
context.setVariable("cart",JSON.stringify(cart));