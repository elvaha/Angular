(function () {
    "use strict";

    angular
        .module("shop")
        .factory("shopService", shopService);

    function shopService($http) {

        var getData = function () {
            return $http.get("/data/products.json")
                .then(function (response) {
                    return response.data;
                });
        };
        return {
            getData: getData
        };

    }

}());