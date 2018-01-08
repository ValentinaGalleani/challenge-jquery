/*parte 1*/
$(document).ready( function(){
	$('#back').remove(); //con .remove eliminamos el icono flecha.

//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
renderHighlightedRecipes(recipesArray);

});

/*parte 2*/
	//agregando texto nuevas recetas
	$('#recetas').html(function printNews(){
		$('#recetas').text('NUEVAS RECETAS')
});

/*parte 3*/
/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	for (var i = 0; i < recipesArray.length; i++) {
		if(recipesArray[i].highlighted == true){
			renderRecipe(recipesArray[i]);
		};
	};
};

/*parte 4*/
/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/

/*En esta funcion agregamos la lista de imágenes al 
*div list-recipes de nuestro html, desde jquery
*/
function renderRecipe(recipe) {
  	$('.list-recipes').append('<a class="item-recipe" href="#">' +
						'<span class="attribution">' +
    				'<span class="title-recipe">' + recipe.title + '</span>' +
    				'<span class="metadata-recipe">' +
      			'<span class="author-recipe">' + recipe.source.name + '</span>'+
      			'<span class="bookmarks-recipe">' +
        		'<span class="icon-bookmark">' +
        		'</span>' +
      			'</span>' +
    				'</span>' +
  					'</span>' +
						'<img src="img/recipes/640x480/' + recipe.name + '.jpg" />' + 
						'</a>');
  		console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}



