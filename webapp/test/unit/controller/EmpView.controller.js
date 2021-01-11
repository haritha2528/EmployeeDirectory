/*global QUnit*/

sap.ui.define([
	"ns/HTML5Module_Emp/controller/EmpView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("EmpView Controller");

	QUnit.test("I should test the EmpView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
