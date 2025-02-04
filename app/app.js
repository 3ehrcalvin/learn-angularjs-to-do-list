const myApp = angular.module("myApp", [])

myApp.controller("AppController", ($scope) => {
    $scope.title = "To Do List"

    $scope.inputList = {
        id: 0,
        text: ""
    }
    
    $scope.list = [
        {
            id: 1,
            text: "Do Homework",
            done: true,
        },
        {
            id: 2,
            text: "Do Chores",
            done: false,
        },
        {
            id: 3,
            text: "Sleep",
            done: false,
        },
    ]

    $scope.toggleList = (data) => {
        const selectedDataIndex = $scope.list.indexOf(data)
        $scope.list[selectedDataIndex].done = !$scope.list[selectedDataIndex].done 
    }

    $scope.selectUpdateData = (data) => {
        $scope.inputList.id = data.id
        $scope.inputList.text = data.text
    }

    $scope.removeList = (data) => {
        const removedData = $scope.list.indexOf(data)
        $scope.list.splice(removedData, 1)
    }

    $scope.submitNewList = () => {
        if($scope.inputList.id && $scope.inputList.id > 0) {
            const existedDataIndex = $scope.list.findIndex(d => d.id === $scope.inputList.id)
            $scope.list[existedDataIndex].text = $scope.inputList.text
        } else {
            const newIndex = $scope.list[$scope.list.length-1].id + 1
            $scope.list.push({
                id: newIndex,
                text: $scope.inputList.text,
                done: false,
            })
        }

        $scope.inputList.text = ""
        $scope.inputList.id = 0
    }
})