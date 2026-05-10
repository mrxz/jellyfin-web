export class LazyLoader {
    constructor(options) {
        this.options = options;
    }

    createObserver() {
        const callback = this.options.callback;

        const intersectionObserverEntry = {
            isIntersecting: false,
            target: null
        };

        // Use no-op stub that simply considers all elements to intersect
        this.observer = {
            observe: (element) => {
                intersectionObserverEntry.isIntersecting = true;
                intersectionObserverEntry.target = element;
                callback(intersectionObserverEntry, this.observer);
            },
            unobserve: () => {
                // No-op
            },
            disconnect: () => {
                // No-op
            }
        };
    }

    addElements(elements) {
        let observer = this.observer;

        if (!observer) {
            this.createObserver();
            observer = this.observer;
        }

        Array.from(elements).forEach(element => {
            observer.observe(element);
        });
    }

    destroyObserver() {
        const observer = this.observer;

        if (observer) {
            observer.disconnect();
            this.observer = null;
        }
    }

    destroy() {
        this.destroyObserver();
        this.options = null;
    }
}

function unveilElements(elements, root, callback) {
    if (!elements.length) {
        return;
    }
    const lazyLoader = new LazyLoader({
        callback: callback
    });
    lazyLoader.addElements(elements);
}

export function lazyChildren(elem, callback) {
    unveilElements(elem.getElementsByClassName('lazy'), elem, callback);
}

export default {
    LazyLoader: LazyLoader,
    lazyChildren: lazyChildren
};
