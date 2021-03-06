
/* global APP */

APP.model.victories = (function() {
	'use strict';

	return {
		currentVictory: 0,
		currentMove: -1,
		victory: [],
		data: [],

		isNextMove: function() {
			return this.currentMove >= this.victory.length - 1 ? false : true;
		},

		getNextVictory: function(callback) {
			console.log('>>> getNextVictory');
			var that = this;
			var request = $.ajax({
				url: APP.keys.SERVER_URL,
				// data: options,
				dataType: 'json',
				type: 'GET',
			});
			request.done(function(data) {
				// console.log('addData');
				that.victory = data;
				that.currentMove = -1;
				callback();
			});
			request.fail(function(jqXHR, status) {
				console.log('ajax get failed; ' + status);
				that.getNextVictoryOriginal();
				callback();
			});
			console.log('<<< getNextVictory');
		},
		getNextVictoryOriginal: function() {
			this.currentVictory = this.randomIntBetween(0, this.data.length - 1);
			this.victory = JSON.parse(JSON.stringify(this.data[this.currentVictory]));
			this.currentMove = -1;
		},

		getNextMove: function() {
			this.currentMove++;
			return this.victory[this.currentMove];
		},

		randomIntBetween: function(min, max) {
			return Math.round(Math.random() * (max - min) + min);
		},

		init: function() {
			this.data[0] = [
				{ status: 'OK', from: { row: 1, column: 3 }, via: { row: 2, column: 3 }, to: { row: 3, column: 3 }, type: 3 },
				{ status: 'OK', from: { row: 2, column: 1 }, via: { row: 2, column: 2 }, to: { row: 2, column: 3 }, type: 2 },
				{ status: 'OK', from: { row: 0, column: 2 }, via: { row: 1, column: 2 }, to: { row: 2, column: 2 }, type: 3 },
				{ status: 'OK', from: { row: 0, column: 4 }, via: { row: 0, column: 3 }, to: { row: 0, column: 2 }, type: 4 },
				{ status: 'OK', from: { row: 2, column: 3 }, via: { row: 2, column: 2 }, to: { row: 2, column: 1 }, type: 4 },
				{ status: 'OK', from: { row: 2, column: 0 }, via: { row: 2, column: 1 }, to: { row: 2, column: 2 }, type: 2 },
				{ status: 'OK', from: { row: 2, column: 4 }, via: { row: 1, column: 4 }, to: { row: 0, column: 4 }, type: 1 },
				{ status: 'OK', from: { row: 2, column: 6 }, via: { row: 2, column: 5 }, to: { row: 2, column: 4 }, type: 4 },
				{ status: 'OK', from: { row: 3, column: 2 }, via: { row: 2, column: 2 }, to: { row: 1, column: 2 }, type: 1 },
				{ status: 'OK', from: { row: 0, column: 2 }, via: { row: 1, column: 2 }, to: { row: 2, column: 2 }, type: 3 },
				{ status: 'OK', from: { row: 3, column: 0 }, via: { row: 3, column: 1 }, to: { row: 3, column: 2 }, type: 2 },
				{ status: 'OK', from: { row: 3, column: 2 }, via: { row: 2, column: 2 }, to: { row: 1, column: 2 }, type: 1 },
				{ status: 'OK', from: { row: 3, column: 4 }, via: { row: 2, column: 4 }, to: { row: 1, column: 4 }, type: 1 },
				{ status: 'OK', from: { row: 0, column: 4 }, via: { row: 1, column: 4 }, to: { row: 2, column: 4 }, type: 3 },
				{ status: 'OK', from: { row: 3, column: 6 }, via: { row: 3, column: 5 }, to: { row: 3, column: 4 }, type: 4 },
				{ status: 'OK', from: { row: 3, column: 4 }, via: { row: 2, column: 4 }, to: { row: 1, column: 4 }, type: 1 },
				{ status: 'OK', from: { row: 5, column: 4 }, via: { row: 4, column: 4 }, to: { row: 3, column: 4 }, type: 1 },
				{ status: 'OK', from: { row: 4, column: 6 }, via: { row: 4, column: 5 }, to: { row: 4, column: 4 }, type: 4 },
				{ status: 'OK', from: { row: 4, column: 4 }, via: { row: 3, column: 4 }, to: { row: 2, column: 4 }, type: 1 },
				{ status: 'OK', from: { row: 1, column: 4 }, via: { row: 2, column: 4 }, to: { row: 3, column: 4 }, type: 3 },
				{ status: 'OK', from: { row: 3, column: 4 }, via: { row: 3, column: 3 }, to: { row: 3, column: 2 }, type: 4 },
				{ status: 'OK', from: { row: 4, column: 2 }, via: { row: 3, column: 2 }, to: { row: 2, column: 2 }, type: 1 },
				{ status: 'OK', from: { row: 1, column: 2 }, via: { row: 2, column: 2 }, to: { row: 3, column: 2 }, type: 3 },
				{ status: 'OK', from: { row: 4, column: 0 }, via: { row: 4, column: 1 }, to: { row: 4, column: 2 }, type: 2 },
				{ status: 'OK', from: { row: 4, column: 3 }, via: { row: 4, column: 2 }, to: { row: 4, column: 1 }, type: 4 },
				{ status: 'OK', from: { row: 6, column: 2 }, via: { row: 5, column: 2 }, to: { row: 4, column: 2 }, type: 1 },
				{ status: 'OK', from: { row: 3, column: 2 }, via: { row: 4, column: 2 }, to: { row: 5, column: 2 }, type: 3 },
				{ status: 'OK', from: { row: 6, column: 4 }, via: { row: 6, column: 3 }, to: { row: 6, column: 2 }, type: 4 },
				{ status: 'OK', from: { row: 6, column: 2 }, via: { row: 5, column: 2 }, to: { row: 4, column: 2 }, type: 1 },
				{ status: 'OK', from: { row: 4, column: 1 }, via: { row: 4, column: 2 }, to: { row: 4, column: 3 }, type: 2 },
				{ status: 'OK', from: { row: 5, column: 3 }, via: { row: 4, column: 3 }, to: { row: 3, column: 3 }, type: 1 },
			];
			this.data[1] = [
				{ status: 'OK', from: { row: 1, column: 3 }, via: { row: 2, column: 3 }, to: { row: 3, column: 3 }, type: 3 },
				{ status: 'OK', from: { row: 2, column: 1 }, via: { row: 2, column: 2 }, to: { row: 2, column: 3 }, type: 2 },
				{ status: 'OK', from: { row: 0, column: 2 }, via: { row: 1, column: 2 }, to: { row: 2, column: 2 }, type: 3 },
				{ status: 'OK', from: { row: 0, column: 4 }, via: { row: 0, column: 3 }, to: { row: 0, column: 2 }, type: 4 },
				{ status: 'OK', from: { row: 2, column: 3 }, via: { row: 2, column: 2 }, to: { row: 2, column: 1 }, type: 4 },
				{ status: 'OK', from: { row: 2, column: 0 }, via: { row: 2, column: 1 }, to: { row: 2, column: 2 }, type: 2 },
				{ status: 'OK', from: { row: 2, column: 4 }, via: { row: 1, column: 4 }, to: { row: 0, column: 4 }, type: 1 },
				{ status: 'OK', from: { row: 2, column: 6 }, via: { row: 2, column: 5 }, to: { row: 2, column: 4 }, type: 4 },
				{ status: 'OK', from: { row: 3, column: 2 }, via: { row: 2, column: 2 }, to: { row: 1, column: 2 }, type: 1 },
				{ status: 'OK', from: { row: 0, column: 2 }, via: { row: 1, column: 2 }, to: { row: 2, column: 2 }, type: 3 },
				{ status: 'OK', from: { row: 3, column: 0 }, via: { row: 3, column: 1 }, to: { row: 3, column: 2 }, type: 2 },
				{ status: 'OK', from: { row: 3, column: 2 }, via: { row: 2, column: 2 }, to: { row: 1, column: 2 }, type: 1 },
				{ status: 'OK', from: { row: 3, column: 4 }, via: { row: 2, column: 4 }, to: { row: 1, column: 4 }, type: 1 },
				{ status: 'OK', from: { row: 0, column: 4 }, via: { row: 1, column: 4 }, to: { row: 2, column: 4 }, type: 3 },
				{ status: 'OK', from: { row: 3, column: 6 }, via: { row: 3, column: 5 }, to: { row: 3, column: 4 }, type: 4 },
				{ status: 'OK', from: { row: 3, column: 4 }, via: { row: 2, column: 4 }, to: { row: 1, column: 4 }, type: 1 },
				{ status: 'OK', from: { row: 5, column: 4 }, via: { row: 4, column: 4 }, to: { row: 3, column: 4 }, type: 1 },
				{ status: 'OK', from: { row: 4, column: 6 }, via: { row: 4, column: 5 }, to: { row: 4, column: 4 }, type: 4 },
				{ status: 'OK', from: { row: 4, column: 4 }, via: { row: 3, column: 4 }, to: { row: 2, column: 4 }, type: 1 },
				{ status: 'OK', from: { row: 1, column: 4 }, via: { row: 2, column: 4 }, to: { row: 3, column: 4 }, type: 3 },
				{ status: 'OK', from: { row: 3, column: 4 }, via: { row: 3, column: 3 }, to: { row: 3, column: 2 }, type: 4 },
				{ status: 'OK', from: { row: 4, column: 2 }, via: { row: 3, column: 2 }, to: { row: 2, column: 2 }, type: 1 },
				{ status: 'OK', from: { row: 1, column: 2 }, via: { row: 2, column: 2 }, to: { row: 3, column: 2 }, type: 3 },
				{ status: 'OK', from: { row: 4, column: 0 }, via: { row: 4, column: 1 }, to: { row: 4, column: 2 }, type: 2 },
				{ status: 'OK', from: { row: 4, column: 3 }, via: { row: 4, column: 2 }, to: { row: 4, column: 1 }, type: 4 },
				{ status: 'OK', from: { row: 6, column: 2 }, via: { row: 5, column: 2 }, to: { row: 4, column: 2 }, type: 1 },
				{ status: 'OK', from: { row: 6, column: 4 }, via: { row: 6, column: 3 }, to: { row: 6, column: 2 }, type: 4 },
				{ status: 'OK', from: { row: 3, column: 2 }, via: { row: 4, column: 2 }, to: { row: 5, column: 2 }, type: 3 },
				{ status: 'OK', from: { row: 6, column: 2 }, via: { row: 5, column: 2 }, to: { row: 4, column: 2 }, type: 1 },
				{ status: 'OK', from: { row: 4, column: 1 }, via: { row: 4, column: 2 }, to: { row: 4, column: 3 }, type: 2 },
				{ status: 'OK', from: { row: 5, column: 3 }, via: { row: 4, column: 3 }, to: { row: 3, column: 3 }, type: 1 },
			];
			this.data[2] = [
				{ status: 'OK', from: { row: 1, column: 3 }, via: { row: 2, column: 3 }, to: { row: 3, column: 3 }, type: 3 },
				{ status: 'OK', from: { row: 2, column: 1 }, via: { row: 2, column: 2 }, to: { row: 2, column: 3 }, type: 2 },
				{ status: 'OK', from: { row: 0, column: 2 }, via: { row: 1, column: 2 }, to: { row: 2, column: 2 }, type: 3 },
				{ status: 'OK', from: { row: 0, column: 4 }, via: { row: 0, column: 3 }, to: { row: 0, column: 2 }, type: 4 },
				{ status: 'OK', from: { row: 2, column: 3 }, via: { row: 2, column: 2 }, to: { row: 2, column: 1 }, type: 4 },
				{ status: 'OK', from: { row: 2, column: 0 }, via: { row: 2, column: 1 }, to: { row: 2, column: 2 }, type: 2 },
				{ status: 'OK', from: { row: 2, column: 5 }, via: { row: 2, column: 4 }, to: { row: 2, column: 3 }, type: 4 },
				{ status: 'OK', from: { row: 2, column: 3 }, via: { row: 2, column: 2 }, to: { row: 2, column: 1 }, type: 4 },
				{ status: 'OK', from: { row: 4, column: 4 }, via: { row: 3, column: 4 }, to: { row: 2, column: 4 }, type: 1 },
				{ status: 'OK', from: { row: 1, column: 4 }, via: { row: 2, column: 4 }, to: { row: 3, column: 4 }, type: 3 },
				{ status: 'OK', from: { row: 4, column: 0 }, via: { row: 3, column: 0 }, to: { row: 2, column: 0 }, type: 1 },
				{ status: 'OK', from: { row: 4, column: 6 }, via: { row: 4, column: 5 }, to: { row: 4, column: 4 }, type: 4 },
				{ status: 'OK', from: { row: 2, column: 6 }, via: { row: 3, column: 6 }, to: { row: 4, column: 6 }, type: 3 },
				{ status: 'OK', from: { row: 4, column: 4 }, via: { row: 3, column: 4 }, to: { row: 2, column: 4 }, type: 1 },
				{ status: 'OK', from: { row: 6, column: 4 }, via: { row: 5, column: 4 }, to: { row: 4, column: 4 }, type: 1 },
				{ status: 'OK', from: { row: 4, column: 3 }, via: { row: 4, column: 4 }, to: { row: 4, column: 5 }, type: 2 },
				{ status: 'OK', from: { row: 4, column: 6 }, via: { row: 4, column: 5 }, to: { row: 4, column: 4 }, type: 4 },
				{ status: 'OK', from: { row: 6, column: 3 }, via: { row: 5, column: 3 }, to: { row: 4, column: 3 }, type: 1 },
				{ status: 'OK', from: { row: 4, column: 3 }, via: { row: 4, column: 4 }, to: { row: 4, column: 5 }, type: 2 },
				{ status: 'OK', from: { row: 4, column: 5 }, via: { row: 3, column: 5 }, to: { row: 2, column: 5 }, type: 1 },
				{ status: 'OK', from: { row: 2, column: 5 }, via: { row: 2, column: 4 }, to: { row: 2, column: 3 }, type: 4 },
				{ status: 'OK', from: { row: 3, column: 3 }, via: { row: 2, column: 3 }, to: { row: 1, column: 3 }, type: 1 },
				{ status: 'OK', from: { row: 2, column: 0 }, via: { row: 2, column: 1 }, to: { row: 2, column: 2 }, type: 2 },
				{ status: 'OK', from: { row: 3, column: 2 }, via: { row: 2, column: 2 }, to: { row: 1, column: 2 }, type: 1 },
				{ status: 'OK', from: { row: 0, column: 2 }, via: { row: 1, column: 2 }, to: { row: 2, column: 2 }, type: 3 },
				{ status: 'OK', from: { row: 4, column: 1 }, via: { row: 4, column: 2 }, to: { row: 4, column: 3 }, type: 2 },
				{ status: 'OK', from: { row: 6, column: 2 }, via: { row: 5, column: 2 }, to: { row: 4, column: 2 }, type: 1 },
				{ status: 'OK', from: { row: 4, column: 3 }, via: { row: 4, column: 2 }, to: { row: 4, column: 1 }, type: 4 },
				{ status: 'OK', from: { row: 4, column: 1 }, via: { row: 3, column: 1 }, to: { row: 2, column: 1 }, type: 1 },
				{ status: 'OK', from: { row: 2, column: 1 }, via: { row: 2, column: 2 }, to: { row: 2, column: 3 }, type: 2 },
				{ status: 'OK', from: { row: 1, column: 3 }, via: { row: 2, column: 3 }, to: { row: 3, column: 3 }, type: 3 },
			];
			this.data[3] = [
				{ status: 'OK', from: { row: 1, column: 3 }, via: { row: 2, column: 3 }, to: { row: 3, column: 3 }, type: 3 },
				{ status: 'OK', from: { row: 2, column: 1 }, via: { row: 2, column: 2 }, to: { row: 2, column: 3 }, type: 2 },
				{ status: 'OK', from: { row: 0, column: 2 }, via: { row: 1, column: 2 }, to: { row: 2, column: 2 }, type: 3 },
				{ status: 'OK', from: { row: 0, column: 4 }, via: { row: 0, column: 3 }, to: { row: 0, column: 2 }, type: 4 },
				{ status: 'OK', from: { row: 2, column: 3 }, via: { row: 2, column: 2 }, to: { row: 2, column: 1 }, type: 4 },
				{ status: 'OK', from: { row: 2, column: 0 }, via: { row: 2, column: 1 }, to: { row: 2, column: 2 }, type: 2 },
				{ status: 'OK', from: { row: 2, column: 5 }, via: { row: 2, column: 4 }, to: { row: 2, column: 3 }, type: 4 },
				{ status: 'OK', from: { row: 2, column: 3 }, via: { row: 2, column: 2 }, to: { row: 2, column: 1 }, type: 4 },
				{ status: 'OK', from: { row: 4, column: 4 }, via: { row: 3, column: 4 }, to: { row: 2, column: 4 }, type: 1 },
				{ status: 'OK', from: { row: 1, column: 4 }, via: { row: 2, column: 4 }, to: { row: 3, column: 4 }, type: 3 },
				{ status: 'OK', from: { row: 4, column: 0 }, via: { row: 3, column: 0 }, to: { row: 2, column: 0 }, type: 1 },
				{ status: 'OK', from: { row: 4, column: 6 }, via: { row: 4, column: 5 }, to: { row: 4, column: 4 }, type: 4 },
				{ status: 'OK', from: { row: 2, column: 6 }, via: { row: 3, column: 6 }, to: { row: 4, column: 6 }, type: 3 },
				{ status: 'OK', from: { row: 2, column: 0 }, via: { row: 2, column: 1 }, to: { row: 2, column: 2 }, type: 2 },
				{ status: 'OK', from: { row: 4, column: 4 }, via: { row: 3, column: 4 }, to: { row: 2, column: 4 }, type: 1 },
				{ status: 'OK', from: { row: 3, column: 2 }, via: { row: 2, column: 2 }, to: { row: 1, column: 2 }, type: 1 },
				{ status: 'OK', from: { row: 6, column: 4 }, via: { row: 5, column: 4 }, to: { row: 4, column: 4 }, type: 1 },
				{ status: 'OK', from: { row: 4, column: 3 }, via: { row: 4, column: 4 }, to: { row: 4, column: 5 }, type: 2 },
				{ status: 'OK', from: { row: 4, column: 6 }, via: { row: 4, column: 5 }, to: { row: 4, column: 4 }, type: 4 },
				{ status: 'OK', from: { row: 0, column: 2 }, via: { row: 1, column: 2 }, to: { row: 2, column: 2 }, type: 3 },
				{ status: 'OK', from: { row: 6, column: 2 }, via: { row: 6, column: 3 }, to: { row: 6, column: 4 }, type: 2 },
				{ status: 'OK', from: { row: 4, column: 1 }, via: { row: 3, column: 1 }, to: { row: 2, column: 1 }, type: 1 },
				{ status: 'OK', from: { row: 5, column: 2 }, via: { row: 4, column: 2 }, to: { row: 3, column: 2 }, type: 1 },
				{ status: 'OK', from: { row: 3, column: 2 }, via: { row: 3, column: 3 }, to: { row: 3, column: 4 }, type: 2 },
				{ status: 'OK', from: { row: 3, column: 4 }, via: { row: 4, column: 4 }, to: { row: 5, column: 4 }, type: 3 },
				{ status: 'OK', from: { row: 2, column: 1 }, via: { row: 2, column: 2 }, to: { row: 2, column: 3 }, type: 2 },
				{ status: 'OK', from: { row: 2, column: 3 }, via: { row: 2, column: 4 }, to: { row: 2, column: 5 }, type: 2 },
				{ status: 'OK', from: { row: 2, column: 5 }, via: { row: 3, column: 5 }, to: { row: 4, column: 5 }, type: 3 },
				{ status: 'OK', from: { row: 6, column: 4 }, via: { row: 5, column: 4 }, to: { row: 4, column: 4 }, type: 1 },
				{ status: 'OK', from: { row: 4, column: 5 }, via: { row: 4, column: 4 }, to: { row: 4, column: 3 }, type: 4 },
				{ status: 'OK', from: { row: 5, column: 3 }, via: { row: 4, column: 3 }, to: { row: 3, column: 3 }, type: 1 },
			];
			this.data[4] = [
				{ status: 'OK', from: { row: 1, column: 3 }, via: { row: 2, column: 3 }, to: { row: 3, column: 3 }, type: 3 },
				{ status: 'OK', from: { row: 2, column: 1 }, via: { row: 2, column: 2 }, to: { row: 2, column: 3 }, type: 2 },
				{ status: 'OK', from: { row: 0, column: 2 }, via: { row: 1, column: 2 }, to: { row: 2, column: 2 }, type: 3 },
				{ status: 'OK', from: { row: 0, column: 4 }, via: { row: 0, column: 3 }, to: { row: 0, column: 2 }, type: 4 },
				{ status: 'OK', from: { row: 2, column: 3 }, via: { row: 2, column: 2 }, to: { row: 2, column: 1 }, type: 4 },
				{ status: 'OK', from: { row: 2, column: 0 }, via: { row: 2, column: 1 }, to: { row: 2, column: 2 }, type: 2 },
				{ status: 'OK', from: { row: 2, column: 5 }, via: { row: 2, column: 4 }, to: { row: 2, column: 3 }, type: 4 },
				{ status: 'OK', from: { row: 2, column: 3 }, via: { row: 2, column: 2 }, to: { row: 2, column: 1 }, type: 4 },
				{ status: 'OK', from: { row: 4, column: 4 }, via: { row: 3, column: 4 }, to: { row: 2, column: 4 }, type: 1 },
				{ status: 'OK', from: { row: 1, column: 4 }, via: { row: 2, column: 4 }, to: { row: 3, column: 4 }, type: 3 },
				{ status: 'OK', from: { row: 4, column: 0 }, via: { row: 3, column: 0 }, to: { row: 2, column: 0 }, type: 1 },
				{ status: 'OK', from: { row: 4, column: 6 }, via: { row: 4, column: 5 }, to: { row: 4, column: 4 }, type: 4 },
				{ status: 'OK', from: { row: 2, column: 0 }, via: { row: 2, column: 1 }, to: { row: 2, column: 2 }, type: 2 },
				{ status: 'OK', from: { row: 2, column: 6 }, via: { row: 3, column: 6 }, to: { row: 4, column: 6 }, type: 3 },
				{ status: 'OK', from: { row: 4, column: 4 }, via: { row: 3, column: 4 }, to: { row: 2, column: 4 }, type: 1 },
				{ status: 'OK', from: { row: 6, column: 4 }, via: { row: 5, column: 4 }, to: { row: 4, column: 4 }, type: 1 },
				{ status: 'OK', from: { row: 4, column: 3 }, via: { row: 4, column: 4 }, to: { row: 4, column: 5 }, type: 2 },
				{ status: 'OK', from: { row: 4, column: 6 }, via: { row: 4, column: 5 }, to: { row: 4, column: 4 }, type: 4 },
				{ status: 'OK', from: { row: 6, column: 2 }, via: { row: 6, column: 3 }, to: { row: 6, column: 4 }, type: 2 },
				{ status: 'OK', from: { row: 3, column: 2 }, via: { row: 2, column: 2 }, to: { row: 1, column: 2 }, type: 1 },
				{ status: 'OK', from: { row: 0, column: 2 }, via: { row: 1, column: 2 }, to: { row: 2, column: 2 }, type: 3 },
				{ status: 'OK', from: { row: 4, column: 1 }, via: { row: 3, column: 1 }, to: { row: 2, column: 1 }, type: 1 },
				{ status: 'OK', from: { row: 5, column: 2 }, via: { row: 4, column: 2 }, to: { row: 3, column: 2 }, type: 1 },
				{ status: 'OK', from: { row: 3, column: 2 }, via: { row: 3, column: 3 }, to: { row: 3, column: 4 }, type: 2 },
				{ status: 'OK', from: { row: 3, column: 4 }, via: { row: 4, column: 4 }, to: { row: 5, column: 4 }, type: 3 },
				{ status: 'OK', from: { row: 6, column: 4 }, via: { row: 5, column: 4 }, to: { row: 4, column: 4 }, type: 1 },
				{ status: 'OK', from: { row: 2, column: 1 }, via: { row: 2, column: 2 }, to: { row: 2, column: 3 }, type: 2 },
				{ status: 'OK', from: { row: 2, column: 3 }, via: { row: 2, column: 4 }, to: { row: 2, column: 5 }, type: 2 },
				{ status: 'OK', from: { row: 2, column: 5 }, via: { row: 3, column: 5 }, to: { row: 4, column: 5 }, type: 3 },
				{ status: 'OK', from: { row: 4, column: 5 }, via: { row: 4, column: 4 }, to: { row: 4, column: 3 }, type: 4 },
				{ status: 'OK', from: { row: 5, column: 3 }, via: { row: 4, column: 3 }, to: { row: 3, column: 3 }, type: 1 },
			];
		},
	};
})();
