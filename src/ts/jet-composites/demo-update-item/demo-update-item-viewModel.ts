"use strict";

import * as ko from "knockout";
import componentStrings = require("ojL10n!./resources/nls/demo-update-item-strings");
import Context = require("ojs/ojcontext");
import Composite = require("ojs/ojcomposite");
import "ojs/ojknockout";
import * as ResponsiveUtils from "ojs/ojresponsiveutils";
import "ojs/ojresponsiveutils"
import * as ResponsiveKnockoutUtils from "ojs/ojresponsiveknockoututils";
import "ojs/ojresponsiveknockoututils"
import "ojs/ojformlayout"
import "ojs/ojinputtext"
import "ojs/ojprogress-circle";
import "ojs/ojknockout";

export default class ViewModel implements Composite.ViewModel<Composite.PropertiesType> {
    busyResolve: (() => void);
    composite: Element;
    messageText: ko.Observable<string>;
    properties: Composite.PropertiesType;
    res: { [key: string]: string };
    isSmall
    labelEdge
    val = "form-one"
    id
    loader: ko.Observable<boolean> = ko.observable(true)
    constructor(context: Composite.ViewModelContext<Composite.PropertiesType>) {




        //At the start of your viewModel constructor
        const elementContext: Context = Context.getContext(context.element);
        const busyContext: Context.BusyContext = elementContext.getBusyContext();
        const options = { "description": "Web Component Startup - Waiting for data" };
        this.busyResolve = busyContext.addBusyState(options);

        this.composite = context.element;

        //Example observable
        this.messageText = ko.observable("Hello from demo-update-item web component");
        this.properties = context.properties;
        this.res = componentStrings["demo-update-item"];

        // Example for parsing context properties
        // if (context.properties.name) {
        //     parse the context properties here
        // }

        //Once all startup and async activities have finished, relocate if there are any async activities
        this.busyResolve();
    }

    //Lifecycle methods - implement if necessary 

    activated(context: Composite.ViewModelContext<Composite.PropertiesType>): Promise<any> | void {

    };

    async connected(context: Composite.ViewModelContext<Composite.PropertiesType>): Promise<void> {
        console.log('connected component')
        var self = this;
        // For Form Layout
        self.isSmall = ResponsiveKnockoutUtils.createMediaQueryObservable(
            ResponsiveUtils.getFrameworkQuery(ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY));
        // For small screens: labels on top
        // For medium or bigger: labels inline
        self.labelEdge = ko.computed(function () {
            return self.isSmall() ? "top" : "start";
        }, self);

        this.id = ko.observable("Hello")
        self.loader(false)
    };




    bindingsApplied(context: Composite.ViewModelContext<Composite.PropertiesType>): void {

    };

    propertyChanged(context: Composite.PropertyChangedContext<Composite.PropertiesType>): void {

    };

    disconnected(element: Element): void {

    };
};