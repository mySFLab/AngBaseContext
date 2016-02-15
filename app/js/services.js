'use strict';

/* Services */
mainMod.factory('phonesFactory', ["$http","$q",
    function($http, $q) {
        var factory =  {
            phones: [],
            getPosts: function() {

                // ==== Instanciation d'une promesse pour le traitement asynchrone. ====
                var defered = $q.defer();
                $http.get('phones/phones.json').then(function(data) {
                    // --- On save les données dans la factory pour limiter les calls futures ---
                    factory.phones = data;
                    defered.resolve(factory.phones);
                }, function(){
                    defered.reject('Probleme de connexion au WS');
                });

                return defered.promise;
            },
            getPost: function(id) {
                console.log('id demande : '+ id);
                console.log(factory.phones);
                var toutlesposts = factory.getPosts();
                // --- Gestion des données une fois la promesses + data faites ---
                toutlesposts.then(function(data) {
                    console.log('success');
                    console.log(data)});
                var phoneFinded = {};
                angular.forEach(factory.phones, function(phone, key) {
                    if (id == phone.id) {
                        phoneFinded = phone;
                    }
                });
                return phoneFinded;
            }
        };

        return factory;
    }
])

