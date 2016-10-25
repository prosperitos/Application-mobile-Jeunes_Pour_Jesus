app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

   .state('homepage', {
    url: '/',
    cache: false,
    templateUrl: 'js/view/index.html', 
    controller: 'ComponentsCtrl'
  })
    .state('Accueil', {
    url: '/home',
    cache: false,
    templateUrl: 'js/view/home.html'
  })

    .state('categories', {
    url: '/categories',
    cache: false,
    templateUrl: 'js/view/categorie.html'
  });

  $urlRouterProvider.otherwise('/');

});
