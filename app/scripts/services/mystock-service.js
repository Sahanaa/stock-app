'use strict';

/**
 * @ngdoc service
 * @name stockAppApp.MyStockService
 * @description
 * # MyStockService
 * Service in the stockAppApp.
 */
angular.module('stockAppApp')
  .service('MyStockService', function MyStockService() {
	 // AngularJS will instantiate a singleton by calling "new" on this function

	 // Augment Stocks with additional helper functions
		var StockModel = {
		save: function () {
		var mystock = findById(this.listId);
		mystock.recalculate();
		saveModel();
		}
		};

        // Augment mystocks with additional helper functions
		var MyStockModel = {
		addStock: function (stock) {
		var existingStock = _.find(this.stocks, function (s) {
		return s.company.symbol === stock.company.symbol;
		});
		if (existingStock) {
		existingStock.shares += stock.shares;
		} else {
		_.extend(stock, StockModel);
		this.stocks.push(stock);
		}
		this.recalculate();
		saveModel();
		},
		removeStock: function (stock) {
		_.remove(this.stocks, function (s) {
		return s.company.symbol === stock.company.symbol;
		});
		this.recalculate();
		saveModel();
		},
		recalculate: function () {
		var calcs = _.reduce(this.stocks, function (calcs, stock) {
		calcs.shares += stock.shares;
		calcs.marketValue += stock.marketValue;
		calcs.dayChange += stock.dayChange;
				return calcs;
		}, { shares: 0, marketValue: 0, dayChange: 0 });
		this.shares = calcs.shares;
		this.marketValue = calcs.marketValue;
		this.dayChange = calcs.dayChange;
		}
		};


			 //  Helper: Load mystocks from localStorage
   var loadModel = function () {
		var model = {
			mystocks: localStorage['StockApp.mystocks'] ?
			JSON.parse(localStorage['StockApp.mystocks']) : [],
			nextId: localStorage['StockApp.nextId'] ?
			parseInt(localStorage['StockApp.nextId']) : 0
			};
			_.each(model.mystocks, function (mystock) {
			_.extend(mystock, MyStockModel);
			_.each(mystock.stocks, function (stock) {
			_.extend(stock, StockModel);
			});
			});
			return model;
			};
	//  Helper: Save mystocks to localStorage
		var saveModel = function () {
			localStorage['StockApp.mystocks'] = JSON.stringify(Model.mystocks);
			localStorage['StockApp.nextId'] = Model.nextId;
			};
	//  Helper: Use lodash to find a mystock with given ID
	   var findById = function (listId) {
			return _.find(Model.mystocks, function (mystock) {
			return mystock.id === parseInt(listId);
			});
			};
	//  Return all mystocks or find by given ID
			this.query = function (listId) {
			if (listId) {
			return findById(listId);
			} else {
			return Model.mystocks;
			}
			};
	//  Save new mystock to mystocks model
			this.save = function (mystock) {
			mystock.id = Model.nextId++;
            mystock.stocks = [];
			_.extend(mystock, MyStockModel);
			Model.mystocks.push(mystock);
			saveModel();
			};
	//  Remove given mystock from mystocks model
			this.remove = function (mystock) {
			_.remove(Model.mystocks, function (list) {
			return list.id === mystock.id;
			});
			saveModel();
			};
	//  Initialize model for singleton service
		var Model = loadModel();
			  });
