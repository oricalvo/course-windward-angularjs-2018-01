class CounterCtrl {
    constructor() {
        this.counter = 0;
    }

    inc() {
        ++this.counter;
    }

    dec() {
        --this.counter;
    }
}

appModule.component("appCounter", {
    controller: CounterCtrl,
    template: `<div>
        <button>Reset</button>
        <button ng-click="$ctrl.dec()">Dec</button>
        <span>{{$ctrl.counter}}</span>
        <button ng-click="$ctrl.inc()">Inc</button>
    </div>`
});