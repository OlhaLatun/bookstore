declare module 'yamljs' {
    const YAML: {
        load(path: string): any;
        parse(yaml: string): any;
        stringify(
            value: unknown,
            inline?: number,
            spaces?: number
        ): string;
    };

    export default YAML;
}