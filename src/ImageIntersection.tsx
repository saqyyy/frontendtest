import { useEffect } from 'react';

let listenerCallbacks = new WeakMap();

let observer: any;

function handleIntersections(entries: {
    target: object; isIntersecting: boolean;
    intersectionRatio: number;
}[]) {
    entries.forEach((entry: { target: object; isIntersecting: boolean; intersectionRatio: number; }) => {
        if (listenerCallbacks.has(entry.target)) {
            let cb = listenerCallbacks.get(entry.target);

            if (entry.isIntersecting || entry.intersectionRatio > 0) {
                observer.unobserve(entry.target);
                listenerCallbacks.delete(entry.target);
                cb();
            }
        }
    });
}

function getIntersectionObserver() {
    if (observer === undefined) {
        observer = new IntersectionObserver(handleIntersections, {
            rootMargin: '100px',
            threshold: 0.9 as number,
        });
    }
    return observer;
}

export function useIntersection(elem: any, callback: () => void) {
    useEffect(() => {
        let target = elem.current;
        let observer = getIntersectionObserver();
        listenerCallbacks.set(target, callback);
        observer.observe(target);

        return () => {
            listenerCallbacks.delete(target);
            observer.unobserve(target);
        };
    }, [elem, callback]);
}