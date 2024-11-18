// global.d.ts
declare module '*.css' {
    import { CSSProperties } from 'react';
    const content: CSSProperties;
    export default content;
}

declare module '*.scss' {
    const content: string;
    export default content;
}
