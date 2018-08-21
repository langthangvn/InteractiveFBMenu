'use strict';
var app = angular.module('myApp', []);
app.config(['$locationProvider', function ($locationProvider) {
    // In order to get the query string from the
    // $location object, it must be in HTML5 mode.
    $locationProvider.html5Mode(true);
}]);
app.run(function ($rootScope) {
    $rootScope.ImgVersion = '1.32';
});
app.controller('myCtrl', function ($scope, $rootScope, $window) {
    $scope.ImgVersion = $rootScope.ImgVersion;

  
});

app.controller('ItemPage', function ($scope, $rootScope, $location) {
    $scope.ImgVersion = $rootScope.ImgVersion;

    var menuName = $location.search().menuName;
    var parentMenu = $location.search().parentMenu;
    $scope.parentURL = $location.search().parentURL + ".html?menuName=" + parentMenu;
  //  alert(menuName);
    $scope.ItemHeaderImgList = [
      { menuName: 'Chefs', HeaderImageName: '/images/title_chefs.png' },
      { menuName: 'Salad', HeaderImageName: '/images/title_appetizer.png' },
      { menuName: 'Starter', HeaderImageName: '/images/title_appetizer.png' },
      { menuName: 'Soup', HeaderImageName: '/images/title_Appetizer_soup.png' },
      { menuName: 'BBQ', HeaderImageName: '/images/title_BBQStoneGrill.png' },
      { menuName: 'LiveSeafood', HeaderImageName: '/images/title_seafood_LiveSeafood.png' },
      { menuName: 'LiveFish', HeaderImageName: '/images/title_Seafood_LiveFish.png' },
      { menuName: 'Seafood', HeaderImageName: '/images/title_seafood.png' },
    { menuName: 'Beef', HeaderImageName: '/images/title_Meat.png' },
    { menuName: 'Pork', HeaderImageName: '/images/title_Meat.png' },
    { menuName: 'Poultry', HeaderImageName: '/images/title_meat_poultry.png' },
    { menuName: 'SeasonVegetable', HeaderImageName: '/images/title_SeasonalVegetable.png' },
    { menuName: 'Vegetarian', HeaderImageName: '/images/title_SeasonalVegetable.png' },
    { menuName: 'Starch', HeaderImageName: '/images/title_sidedished_strach.png' },
    { menuName: 'Desert', HeaderImageName: '/images/title_dessert.png' },




    ]
    $scope.ItemList = [
        { menuName: 'Chefs', imageName: '/images/item_images/chef-1.png', sort_id: 1 },
        { menuName: 'Chefs', imageName: '/images/item_images/chef-2.png' , sort_id: 2 },
          { menuName: 'Chefs', imageName: '/images/item_images/chef-3.png' , sort_id: 3 },

        { menuName: 'Salad', imageName: '/images/item_images/appetizer-salad.png', sort_id: 1 },

     

        { menuName: 'Starter', imageName: '/images/item_images/appetizer-starter-1.png', sort_id: 1 },
        { menuName: 'Starter', imageName: '/images/item_images/appetizer-starter-2.png', sort_id: 2 },
         { menuName: 'Starter', imageName: '/images/item_images/appetizer-starter-3.png', sort_id: 3 },

        { menuName: 'Soup', imageName: '/images/item_images/appetizer-soup-1.png', sort_id: 1 },
         { menuName: 'Soup', imageName: '/images/item_images/appetizer-soup-2.png', sort_id: 2 },
           { menuName: 'Soup', imageName: '/images/item_images/appetizer-soup-3.png', sort_id: 3 },

        { menuName: 'BBQ', imageName: '/images/item_images/BBQ-1.png', sort_id: 1 },
        { menuName: 'BBQ', imageName: '/images/item_images/BBQ-2.png', sort_id: 2 },
          { menuName: 'BBQ', imageName: '/images/item_images/BBQ-3.png', sort_id: 2 },

         { menuName: 'LiveSeafood', imageName: '/images/item_images/seafood-live-seafood.png', sort_id: 1 },

      

          { menuName: 'LiveFish', imageName: '/images/item_images/seafood-livefish.png', sort_id: 1 },

            { menuName: 'Seafood', imageName: '/images/item_images/seafood-seafood-1.png', sort_id: 1 },
              { menuName: 'Seafood', imageName: '/images/item_images/seafood-seafood-2.png', sort_id: 2 },
                 { menuName: 'Seafood', imageName: '/images/item_images/seafood-seafood-3.png', sort_id: 3 },

          { menuName: 'Beef', imageName: '/images/item_images/Meat-Beef-1.png', sort_id: 1 },
          { menuName: 'Beef', imageName: '/images/item_images/Meat-Beef-2.png', sort_id: 2 },

          { menuName: 'Pork', imageName: '/images/item_images/Meat-Pork-1.png', sort_id: 1 },
          { menuName: 'Pork', imageName: '/images/item_images/Meat-Pork-2.png', sort_id: 2 },

           { menuName: 'Poultry', imageName: '/images/item_images/Meat-poutry-1.png', sort_id: 1 },
          { menuName: 'Poultry', imageName: '/images/item_images/Meat-poutry-2.png', sort_id: 2 },


        { menuName: 'SeasonVegetable', imageName: '/images/item_images/SideDished-vegetable-1.png', sort_id: 1 },
        { menuName: 'SeasonVegetable', imageName: '/images/item_images/SideDished-vegetable-2.png', sort_id: 2 },
        { menuName: 'SeasonVegetable', imageName: '/images/item_images/SideDished-vegetable-3.png', sort_id: 3 },

         { menuName: 'Vegetarian', imageName: '/images/item_images/SideDished-vegetarian-1.png', sort_id: 1 },
        { menuName: 'Vegetarian', imageName: '/images/item_images/SideDished-vegetarian-2.png', sort_id: 2 },

        { menuName: 'Starch', imageName: '/images/item_images/SideDished-strach-1.png', sort_id: 1 },
        { menuName: 'Starch', imageName: '/images/item_images/SideDished-strach-2.png', sort_id: 2 },

          { menuName: 'Desert', imageName: '/images/item_images/dessert-1.png', sort_id: 1 },
         { menuName: 'Desert', imageName: '/images/item_images/dessert-2.png', sort_id: 2 },
          { menuName: 'Desert', imageName: '/images/item_images/dessert-3.png', sort_id: 3 },

    ]
    $scope.ImageList = [];
    for (var i = 0; i < $scope.ItemList.length; i++) {
        var item = $scope.ItemList[i];
      
        if (item.menuName == menuName) {
            // push it into the Array if it does!
            item.imageName = item.imageName + "?v=" + $scope.ImgVersion;
            $scope.ImageList.push(item);

        }
    }
    $scope.ItemHeaderImg = "";
    for (var i = 0; i < $scope.ItemHeaderImgList.length; i++) {
        var item = $scope.ItemHeaderImgList[i];

        if (item.menuName == menuName) {
            // push it into the Array if it does!
            $scope.ItemHeaderImg = item.HeaderImageName;

        }
    }

  //  alert($scope.ImageList.length);

});

app.controller('SubMenuPage', function ($scope, $rootScope, $location) {
    $scope.ImgVersion = $rootScope.ImgVersion;

    var menuName = $location.search().menuName;
    //  alert(menuName);
    $scope.SubMenuHeaderTileImgList = [
      { menuName: 'Appetizer', HeaderImageName: '/images/title_appetizer.png' },
      { menuName: 'Seafood', HeaderImageName: '/images/title_seafood.png' },
      { menuName: 'Meat', HeaderImageName: '/images/title_Meat.png' },
      { menuName: 'SideDish', HeaderImageName: '/images/title_sidedished_strach.png' },
  
    ]
    $scope.SubMenuList = [
        { menuName: 'Appetizer', SubMenuName: 'Salad', SubMenuImageName: '/images/menu_appetizer_salad.png', sort_id: 1 },
        { menuName: 'Appetizer', SubMenuName: 'Starter', SubMenuImageName: '/images/menu_appetizer_starter.png', sort_id: 2 },
          { menuName: 'Appetizer', SubMenuName: 'Soup', SubMenuImageName: '/images/menu_appetizer_soup.png', sort_id: 3 },

        { menuName: 'Seafood', SubMenuName: 'LiveSeafood', SubMenuImageName: '/images/menu_seafood_LiveSeafood.png', sort_id: 1 },
        { menuName: 'Seafood', SubMenuName: 'LiveFish', SubMenuImageName: '/images/menu_seafood_LiveFish.png', sort_id: 2 },
         { menuName: 'Seafood', SubMenuName: 'Seafood', SubMenuImageName: '/images/menu_seafood.png', sort_id: 3 },

          { menuName: 'Meat', SubMenuName: 'Beef', SubMenuImageName: '/images/menu_meat_beef.png', sort_id: 1 },
        { menuName: 'Meat', SubMenuName: 'Pork', SubMenuImageName: '/images/menu_meat_pork.png', sort_id: 2 },
         { menuName: 'Meat', SubMenuName: 'Poultry', SubMenuImageName: '/images/menu_meat_poultry.png', sort_id: 3 },

              { menuName: 'SideDish', SubMenuName: 'SeasonVegetable', SubMenuImageName: '/images/menu_sidedished_vegetable.png', sort_id: 1 },
        { menuName: 'SideDish', SubMenuName: 'Vegetarian', SubMenuImageName: '/images/menu_sidedished_vegetarian.png', sort_id: 2 },
         { menuName: 'SideDish', SubMenuName: 'Starch', SubMenuImageName: '/images/menu_sidedished_strach.png', sort_id: 3 },
       
    ]
    $scope.SubMenu = [];
    for (var i = 0; i < $scope.SubMenuList.length; i++) {
        var item = $scope.SubMenuList[i];

        if (item.menuName == menuName) {
            // push it into the Array if it does!
            $scope.SubMenu.push(item);

        }
    }
    $scope.SubMenuHeaderImg = "";
    for (var i = 0; i < $scope.SubMenuHeaderTileImgList.length; i++) {
        var item = $scope.SubMenuHeaderTileImgList[i];

        if (item.menuName == menuName) {
            // push it into the Array if it does!
            $scope.SubMenuHeaderImg = item.HeaderImageName;

        }
    }

    //  alert($scope.ImageList.length);

});