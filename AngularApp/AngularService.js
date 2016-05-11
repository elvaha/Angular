(function(){
   "use strict";
    
    angular
        .module("shop")
        .factory("shopService", shopService);
    
    function shopService($http){
        
        function getData(){
            return $http.get('/data/products.json').then(
                function(response){
                    return response.data;
                });
        }
        return {
            getData : getData
        };
    }     
});