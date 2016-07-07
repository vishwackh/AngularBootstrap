
app.controller('datagridCtrl',function($scope,$http,$filter, $log,$interval){
	// an example grid config
	 // $scope.dateOfBirth = new Date();

            $scope.gridConfig = {
                options: {
                    showDeleteButton: true,
                    showEditButton: true,
                    editRequested: function (row) { console.log('edit request:', row); },
                    rowDeleted: function (row) { console.log('deleted:', row); },
                    cellFocused: function (row, column) { console.log('focused:', row, column); },
                    rowSelected: function (row) { console.log('selected:', row); },
                    //orderBy: 'age',
                    //reverseOrder: false,
                    editable: true, // true is the default - set here manually to true to make it easier to bind to in the demo html
                    disabled: false,
                    perRowEditModeEnabled: true,
                    allowMultiSelect: true,
                    pageSize: 5,
                    pageNum: 0,
                    dynamicColumns: true,
                    columns: [
                        {
                            field: 'name',
                            // no inputType -> default is text
                            getUrl: function(row) { return '#/' + row.age; },
                            required: true
                        },
                        {
                            field: 'age',
                            inputType: 'number'
                        },
                        {
                            field: 'sex',
                            inputType: 'select',
                            options: [{ value: 0, title: 'Male'}, { value: 1, title: 'Female'}],
                            formatter: function(item) { return item.title; },
                            select: function(item) { return item.value; }
                        },
                        {
                            field: 'food',
                            title: 'Favorite Lunch',
                            inputType: 'text',
                            disabled: true
                        },
                        {
                            field: 'dateOfBirth',
                            title: 'Date of Birth',
                            inputType: 'date',
                            formatter: function (value) { return $filter('date')(value, 'MM/dd/yyyy'); }
                        },
                        {
                            field: 'approved',
                            title: 'Approved?',
                            inputType: 'checkbox'
                        }
                    ]
                },
                getData: function () { return $scope.data; }
            };
            
            $scope.metaGridConfig = {
                options: {
                    editable: true,
                    columns: [
                        {
                            field: 'field',
                            required: true
                        },
                        {
                            field: 'title'
                        },
                        {
                            field: 'inputType',
                            inputType: 'select',
                            options: ['text', 'number', 'select', 'checkbox', 'date']
                        },
                        {
                            field: 'dateFormat',
                            inputType: 'text'
                        },
                        {
                            field: 'required',
                            inputType: 'checkbox'
                        },
                        {
                            field: 'disabled',
                            inputType: 'checkbox'
                        }
                    ]
                },
                getData: function () { return $scope.gridConfig.options.columns; }
            };

            $scope.data = [ { name: 'Jooka', age: 1, sex: 0, food: 'Cookies', dateOfBirth: '1989-07-30T18:30:00.000Z', approved: false },
                            { name: 'Schmo', age: 100, sex: 1, food: 'Steak', dateOfBirth: '1989-07-30T18:30:00.000Z', approved: true },
                            { name: 'Sparky', age: 43, food: 'Cereal', dateOfBirth: '1989-07-30T18:30:00.000Z', approved: false }
                          ];
            
            $scope.data = repeat($scope.data, 30);
            
            // an empty grid: same options, no data.
            $scope.emptyData = [];
            $scope.gridConfigEmpty = { options: $scope.gridConfig.options, getData: function () { return $scope.emptyData; } };

            // utility stuff
            $scope.movePage = function (offset) {
                $scope.gridConfig.options.pageNum += offset;
                $scope.gridConfig.options.pageNum = Math.max(0, $scope.gridConfig.options.pageNum);
            };
            
            $scope.filterDeleted = function (rows) {
                // TODO: Exteremly inefficient...
                var filtered = rows.filter(function (row) { return !row.$deleted; });
                rows.splice(0, rows.length);
                angular.forEach(filtered, function (item) {
                    rows.push(item);
                });
            };

            $scope.pretty = function (obj) {
                var filteredObj = angular.copy(obj);
                angular.forEach(filteredObj, function (val, name) {
                    if (name[0] === '$') {
                        delete filteredObj[name];
                    }
                });
                return JSON.stringify(filteredObj, undefined, '    ');
            };

            $scope.addRow = function () {
                var data = $scope.gridConfig.getData();
                data.push(
                    {
                        $added: true,
                        $editable: true
                    }
                );
                $scope.gridConfig.options.pageNum = Math.floor(data.length / $scope.gridConfig.options.pageSize);
            };

          $("#target-table").datagrid({
              editable:true,
              onBoot: function(e){
                         },
              onCommit: function(e) {
                alert("Commiting '"+e.$editor.val()+"'...")
              },
              onClean: function(e) {
                alert("Clean triggered!")
              }
          });
          $scope.simpleGridData=[{name:'abc',age:12,email:'abc@gmail.com'}]

          $scope.models = {
      changeInfo: [],
      searchText: '',
      selectedCars: [
        {
          id: 1,
          name: 'Audi A4',
          modelYear: 2009,
          price: 34000
        }
      ],
      carsForSale: [
        {
          id: 1,
          name: 'Audi A4',
          modelYear: 2009,
          price: 34000
        },
        {
          id: 2,
          name: 'BMW 328i',
          modelYear: 2012,
          price: 39000
        },
        {
          id: 3,
          name: 'Audi A6',
          modelYear: 2012,
          price: 44000
        },
        {
          id: 4,
          name: 'Audi S8',
          modelYear: 2014,
          price: 100000
        },
        {
          id: 5,
          name: 'Audi A4',
          modelYear: 2009,
          price: 34000
        },
        {
          id: 6,
          name: 'BMW 328i',
          modelYear: 2012,
          price: 39000
        },
        {
          id: 7,
          name: 'Audi A6',
          modelYear: 2012,
          price: 44000
        },
        {
          id: 8,
          name: 'Audi S8',
          modelYear: 2014,
          price: 100000
        },
        {
          id: 9,
          name: 'Audi A6',
          modelYear: 2012,
          price: 44000
        },
        {
          id: 10,
          name: 'Audi S8',
          modelYear: 2014,
          price: 100000
        },
        {
          id: 11,
          name: 'Audi A6',
          modelYear: 2012,
          price: 44000
        },
        {
          id: 12,
          name: 'Audi S8',
          modelYear: 2014,
          price: 100000
        }
      ],
      state: {
        sortKey: 'name',
        sortDirection: 'DEC'
      }
    };

    $scope.carsTableColumnDefinition = [
      {
        columnHeaderDisplayName: 'Model',
        displayProperty: 'name',
        sortKey: 'name',
        columnSearchProperty: 'name',
        visible: true
      },
      {
        columnHeaderTemplate: '<span><i class="glyphicon glyphicon-calendar"></i> Model Year</span>',
        template: '<strong>{{ item.modelYear }}</strong>',
        sortKey: 'modelYear',
        width: '12em',
        columnSearchProperty: 'modelYear'
      },
      {
        columnHeaderTemplate: '<span><i class="glyphicon glyphicon-usd"></i> Price</span>',
        displayProperty: 'price',
        cellFilter: 'currency',
        sortKey: 'price',
        width: '9em',
        columnSearchProperty: 'price'
      },
      {
        columnHeaderDisplayName: 'Buy',
        templateUrl: 'src/tablelite/docs/buyCell.html',
        width: '4em'
      }
    ];

    $scope.onDragChange = function(o, n, data) {
      $scope.models.changeInfo.push({
        startPosition: o,
        endPosition: n,
        data: data
      });
    };

    $scope.onStateChange = function(state) {
      alert(JSON.stringify(state));
    };

    // ========== ui handlers ========== //
    $scope.buyCar = function (car) {
      alert(car.name);
    };

    $scope.rowExpanded = function (car) {
      alert(car.name + ' row expanded');
    };

    $scope.checkRowSelected = function (item, index) {
      var found = false;
      $scope.models.selectedCars.forEach(function (selectedItem) {
        if (item.id === selectedItem.id) {
          found = true;
        }
      });
      return found ? 'info row-' + index : 'row-' + index;
    };

      //ui grid 
        $scope.gridOptions = {
    exporterMenuCsv: false,
    enableGridMenu: true,
    gridMenuTitleFilter: fakeI18n,
    columnDefs: [
      { name: 'name' },
      { name: 'gender', enableHiding: false },
      { name: 'company' }
    ],
    gridMenuCustomItems: [
      {
        title: 'Rotate Grid',
        action: function ($event) {
          this.grid.element.toggleClass('rotated');
        },
        order: 210
      }
    ],
    onRegisterApi: function( gridApi ){
      $scope.gridApi = gridApi;

      // interval of zero just to allow the directive to have initialized
      $interval( function() {
        gridApi.core.addToGridMenu( gridApi.grid, [{ title: 'Dynamic item', order: 100}]);
      }, 0, 1);

      gridApi.core.on.columnVisibilityChanged( $scope, function( changedColumn ){
        $scope.columnChanged = { name: changedColumn.colDef.name, visible: changedColumn.colDef.visible };
      });
    }
  };
  var fakeI18n = function( title ){
    var deferred = $q.defer();
    $interval( function() {
      deferred.resolve( 'col: ' + title );
    }, 1000, 1);
    return deferred.promise;
  };
    $scope.gridOptions.data = [
    {
        "name": "Ethel Price",
        "gender": "female",
        "company": "Enersol"
    },
    {
        "name": "Claudine Neal",
        "gender": "female",
        "company": "Sealoud"
    },
    {
        "name": "Beryl Rice",
        "gender": "female",
        "company": "Velity"
    },
    {
        "name": "Wilder Gonzales",
        "gender": "male",
        "company": "Geekko"
    },
    {
        "name": "Georgina Schultz",
        "gender": "female",
        "company": "Suretech"
    },
    {
        "name": "Carroll Buchanan",
        "gender": "male",
        "company": "Ecosys"
    },
    {
        "name": "Valarie Atkinson",
        "gender": "female",
        "company": "Hopeli"
    },
    {
        "name": "Schroeder Mathews",
        "gender": "male",
        "company": "Polarium"
    },
    {
        "name": "Lynda Mendoza",
        "gender": "female",
        "company": "Dogspa"
    },
    {
        "name": "Sarah Massey",
        "gender": "female",
        "company": "Bisba"
    },
    {
        "name": "Robles Boyle",
        "gender": "male",
        "company": "Comtract"
    },
    {
        "name": "Evans Hickman",
        "gender": "male",
        "company": "Parleynet"
    },
    {
        "name": "Dawson Barber",
        "gender": "male",
        "company": "Dymi"
    },
    {
        "name": "Bruce Strong",
        "gender": "male",
        "company": "Xyqag"
    },
    {
        "name": "Nellie Whitfield",
        "gender": "female",
        "company": "Exospace"
    }
];

 $scope.myItems = [{name: "Moroni", age: 50},
                     {name: "Tiancum", age: 43},
                     {name: "Jacob", age: 27},
                     {name: "Nephi", age: 29},
                     {name: "Enos", age: 99}];
});
