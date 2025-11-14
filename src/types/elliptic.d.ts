declare module 'elliptic' {
  export class ec {
    constructor(curve: string);
    keyFromPrivate(key: string, enc: string): any;
    keyFromPublic(key: string, enc: string): any;
  }
}
