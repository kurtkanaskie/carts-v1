# carts-v1

Demonstrates use of Key Value Map (KVM) as the persitent store for carts.

The solution uses the "messageid" from the original POST /carts as the unique identifier for the cart as stored in the KVM named "carts". Subsequent calls use this as the "cartId". 

A mock backend is used to simulate pricing and placing the order, all other API calls use the KVM.