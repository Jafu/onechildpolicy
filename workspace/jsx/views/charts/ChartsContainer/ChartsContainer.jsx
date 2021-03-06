/** @jsx React.DOM */

define([
	'views/charts/Chart/Chart'
], function(Chart) {
	'use strict';

	var ChartsContainer = function() {
		var that = {};
		var my = {};

		that.render = function() {
			var chartList = this.props.charts.map(function(chart, index) {
				return (
					<Chart {...chart} />
				);
			});
			return (
				<div className="charts-container">
					{chartList}
				</div>
			);
		};

		return React.createClass(that);
	};

	return new ChartsContainer();
});
