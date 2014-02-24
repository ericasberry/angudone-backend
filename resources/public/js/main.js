"use strict";

// controller referenced by ng-controller in home.html
// nothing special about the function itself; so you can test it like any other function
//function FirstController($scope) {
//    $scope.firstname = "Eric";
//}

// global namespace = attached to window object

// one problem with above example is if you minify, variable name gets changed; not a problem
// in below example because it's a quoted string

var app = angular.module("todosApp", ['ngRoute'] );

app.config(function($routeProvider) {
    // if user is going to /, map that to our fragment in /views/todos.html
    $routeProvider
        .when("/", {
            templateUrl: "/views/todos.html"
        }).otherwise( {
            redirectTo: "/"
        });
})

app.controller("FirstController", [
    "$scope",  // dependencies
    function (s) {
        var todos = [
            { txt: "Learn Angular", "done":1393268850133},
            { txt: "Teach Angular"},
            { txt: "Profit"}
        ];
        s.todos = todos;

        s.markDone = function(checked, todo) {
            if(checked) {
                todo.done = new Date().getTime();
            } else {
                delete todo.done;
            }
        }

        s.addTodo = function(newTodoObject) {
            todos.push({
                txt: newTodoObject.newTodo
            })
            newTodoObject.newTodo = ''
        }
    }
]);