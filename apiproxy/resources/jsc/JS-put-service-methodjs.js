var cart = JSON.parse(context.getVariable("cart"));
var req = JSON.parse(context.getVariable("request.content"));
var time = context.getVariable("system.time");

cart.Cart.UpdatedAt = time;
cart.Order.ServiceMethod = req.ServiceMethod;
context.setVariable("cart",JSON.stringify(cart));