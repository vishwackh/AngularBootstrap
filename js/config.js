app.config(function($stateProvider, $urlRouterProvider,$locationProvider){
   
    $urlRouterProvider.otherwise("/home");
  
    $stateProvider
      .state('home', {
          url: "/home",
          templateUrl: "views/home.html",
          controller: 'homeCtrl',
          ncyBreadcrumb: {
            label: 'Home'
          }  
      })      
      .state('datagrid', {
          url: "/datagrid",
          templateUrl: "views/datagrid.html",
          controller: 'datagridCtrl',
          ncyBreadcrumb: {
            label: 'Datagrid'
          }
      })
      
      .state('treeviewer', {
            url: "/treeviewer",
            templateUrl: "views/treeviewer.html",
            controller: 'treeviewerCtrl',
            ncyBreadcrumb: {
            label: 'Treeviewer'
          }
        })
    
    .state('form', {
            url: "/form",
            templateUrl: "views/form.html",
            controller: 'formCtrl',
            ncyBreadcrumb: {
            label: 'Form'
          }
        })
    
    .state('wizard', {
            url: "/wizard",
            templateUrl: "views/wizard.html",
            controller: 'wizardCtrl',
            ncyBreadcrumb: {
            label: 'Wizard'
          }
        })
    
    .state('iframe', {
            url: "/iframe",
            templateUrl: "views/iframe.html",
            controller: 'iframeCtrl',
            ncyBreadcrumb: {
            label: 'Iframe'
          }
        })
    
    .state('tab', {
            url: "/tab",
            templateUrl: "views/tab.html",
            controller: 'tabCtrl',
            ncyBreadcrumb: {
            label: 'Tab'
          }
        })
    
    .state('breadcrumb', {
            url: "/breadcrumb",
            templateUrl: "views/bread-crumb.html",
            controller: 'breadcrumbCtrl',
            ncyBreadcrumb: {
            label: 'Breadcrumb'
          }
        })  
    
    .state('combo', {
            url: "/combo",
            templateUrl: "views/combo.html",
            controller: 'comboCtrl',
            ncyBreadcrumb: {
            label: 'Combo'
          }
        })
    
    .state('pagination', {
            url: "/pagination",
            templateUrl: "views/pagination.html",
            controller: 'paginationCtrl',
            ncyBreadcrumb: {
            label: 'Datagrid'
          }
        })
    
    .state('ngtable', {
            url: "/ngtable",
            templateUrl: "views/ngtable.html",
            controller: 'ngtableCtrl',
            ncyBreadcrumb: {
            label: 'Ngtable'
          }
        })    

    .state('carousel', {
            url: "/carousel",
            views: {
                '': { templateUrl: 'views/carousel.html' },
                    "viewA@carousel": {
                    templateUrl: "views/carousel1.html",
          controller: 'carouselCtrl1'
                     },
                    "viewB@carousel": {
                    templateUrl: "views/carousel2.html",
          controller: 'carouselCtrl2'
                     }           
              },
            ncyBreadcrumb: {
            label: 'Carousel'
          } 
        })
    
    
    .state('snippets', {
            url: "/snippets",
            templateUrl: "views/snippets.html",
            controller: 'snippetCtrl',
            ncyBreadcrumb: {
            label: 'Snippets'
          }
        })
    .state('breadcrumb1', {
            url: "/breadcrumb1",
            templateUrl: "views/breadcrumb/breadcrumb1.html",
            ncyBreadcrumb: {
            label: 'Breadcrumb1'
          }
        })
    .state('breadcrumb2', {
            url: "/breadcrumb2",
            templateUrl: "views/breadcrumb/breadcrumb2.html",
            ncyBreadcrumb: {
            label: 'breadcrumb2'
          }
        }); 
    
  }).run(function($rootScope, $state) {
      $rootScope.$state = $state;

  });