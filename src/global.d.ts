declare module '*.css' {
    type IClassNames = {
        [className: string]: string;
    };

    const classNames: IClassNames;
    export = classNames;
}

declare type Branded<T, U extends string> = T & { Brand: U };
