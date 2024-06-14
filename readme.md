to create the user login flow 
        1. need to create proper folder structure
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
