module.exports = function () {
    console.log('a function in file foo');
};

<div class="form-group" data-ng-repeat="choice in choices">
        <label for="choice" ng-show="showChoiceLabel(choice)">Choices</label>
        <button ng-show="showAddChoice(choice)" ng-click="addNewChoice()">Add Choice</button>
        <button ng-click="removeNewChoice()">Remove Choice</button>
        <input type="text" ng-modal="{{choice.name}}" name="" placeholder="Enter a restaurant name" value="{{choice.id}}">
      </div>
