# Q&A
-----
How long did you spend on your solution?
 - I didn't have any previous knowledge about Angular so I spent several days learning about it and developing my solution.
 
How do you compile and run your solution?
 - I use Visual Studio 2019 to compile and run my solution. No need to execute 'ng serve' at all. I started from a .Net+Angular template provided by VS2019.
 
What assumptions did you make when implementing your solution?
 - Product identifiers are always integer values, so they can be used as index in some part of the code.
 
Why did you pick the design that you did?
 - In order to improve efficiency shopping cart should be managed by client application, that is, each client should manage it's own shopping cart with it's own list of products. Only when performing the check-out process, the server should check the cart in order to ensure there is enough stock of each product in cart to proceed. However, the product list should be managed in the server side.


Completed User Stories 1 & 2


# Missing features/improvements
-------------------------------
* Implement the shopping cart as a list of pairs (identifier, quantity) in order to not duplicate products information. In this scenario cart component should retrieve product details from product list.
* Use a common component for product details and reuse it in product-list and cart components.
* Implement Unit tests.


# User Story 3: Not implemented (not enough time)
-------------------------------
Implement Checkout component: Add a new controller (or add functionality to existing one) in order to validate the content of the shopping cart, so there is enough stock of every product in the cart, and then discount these quantities from stocks in product list.

# User Story 4
--------------
In order to guarantee the performance:
* Delegate in client side the managing of shopping cart, so the client application only makes requests to server when loading products info and when proceeding with check-out.
* Build a distributed system, replicate databases.
