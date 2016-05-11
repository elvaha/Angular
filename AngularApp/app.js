
(function(){
	"use strict";

	angular
      .module("shop", [])
      .controller("shopController", shopController);
  
    function shopController($scope, shopService) {
        
        $scope.cart = {};   
        
      shopService.getData().then(function(data){
        $scope.products = data;  
      });
      
      $scope.viewProduct = function(product){
          $scope.selectedProduct = product.title;
          console.log(product);
      }
      
      $scope.buyProduct = function(){
          //console.log(this.product);
          //console.log($scope.cart);
          
          var product = this.product; 
          var cartObject = $scope.cart[product.id];
          
          if(!cartObject){
              $scope.cart[product.id] = {
                  "product" : this.product,
                  "items" : 1
              }
              console.log("First time");
          }
          else {
              cartObject.items++;
          }
      }
          
      $scope.deleteFromCart = function(){
          
          console.log(this.item);
          var productId = this.cartItem.product.id;
          
          var cartObject = $scope.cart[productId];
              
          if(cartObject.items > 1){
            cartObject.items--;
          }
          else{
            delete $scope.cart[productId];
          }
      }
    }

})();