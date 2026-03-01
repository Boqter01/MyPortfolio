// types/custom.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    'spline-viewer': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        url: string;
        loading?: 'eager' | 'lazy';
        [key: string]: any;
      },
      HTMLElement
    >;
  }
}