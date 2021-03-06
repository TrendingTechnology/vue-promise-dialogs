import { RegularComponent } from '@/types';

interface OptionalValueWrapper<T> {
    value?: T;
}

interface PromiseDialogsWrapper {
    add<P, R>(component: RegularComponent, params: P): Promise<R>;
}

export const promiseDialogsWrapper: OptionalValueWrapper<PromiseDialogsWrapper> = {};
