to create the user login flow 1. need to create proper folder structure
->src
->controllers
->userController.js
->routes
->userRoutes.js
->model  
 ->userModel.js

        2. create the userModel in userModel.js using mongoose
        3.create the proper controllers
            ->signUpUser
            ->loginUser
        4. use best practise :
            using the try catch block - very important
            verify from req.body whether you have proper data or not

--> So far what we have cleared 1. Basic CRUD ops. on Both Product side and the user side
i. Creating the record product/user
ii. update the record product/user
iii. delete the record product/user
iv. read the record --> get a specific record product/user || get all records products/users

I-> AMAZON software -- Ecommerce application -->> Backend structure could look like:
i-> Product: -> CRUD |:|
-> if a user is logged in, --
how can you find out whether a user is logged in or not : token -- based -- authentication  


 then only we can show him the product :
-> if the user is logged in then only we he can create the product :

ii -> User -> CRUD |:|
-> user 001 -> SIgn Up
he sign up success:
useer 001 -> Check will trigger and it will throw an error





/// You  have to check the token on these routes :

    -> create a product -> check token -> decrypt that token -> takee out the user id -> from that ID find the user  -> if user exist with that ID -> proceed with the create product -> throw error that user not found
    -> get of a product  -> const {token} = req.query -> decrypt that token -> takee out the user id -> from that ID find the user  -> if user exist with that ID -> proceed with the get products -> throw error that user not found
     -> update of a product  -> const {token} = req.query -> decrypt that token -> takee out the user id -> from that ID find the user  -> if user exist with that ID -> proceed with the update  products -> throw error that user not found

