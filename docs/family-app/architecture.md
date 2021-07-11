---
sidebar_position: 2
---

# Repository Architecture

The repository is architectured as followed.

```.
|_ android - Contains all the Android files
|_ ios - Contains all the iOS files
|_ assets - Contains all the assets (images, logos, fonts, etc)
|_ lib - Contains the project files
	|_ init - Contains the functions to init the application: firebase + orientation
	|_ models - Contains Models and Services files
		. Service files to run firebase firestore operations
		|_ models - Models the different data structures
	|_ redux
		.state - Defines the Structure of the Redux State
		.store - Contains the Redux Store definition
		.reducers - Contains the Redux Reducers functions
		.actions - Contains the Redux Actions objects
		|_ middlewares - Contains the custom middlewares to run asynchrone methods with redux
	|_ routes - Contains files of route generations and transitions
	|_ screens - Contains the screens of the application
	.app - Defines the Application Containers including Redux and a Theme
	.constants - Defines the constants for all the application
	.main - Initializes the application and defines a guarded zone to catch all errors
```

The other directories should **not** be touched, as there are files required by the Flutter Engine, Firebase Hosting and gradle.

Now we know how the repository is architectured and we know where each new file should be, we will launch the project.