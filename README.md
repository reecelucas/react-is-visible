# react-is-visible

## Example Usage

```jsx
<IsVisible>
  {({ isVisible, elementRef }) => (
    <div ref={elementRef}>
      I'm {isVisible ? 'visible!' : 'not visible!'}
    </div>
  )}
</IsVisible>
```


## Props


| Prop  | Type  | Default  | Description
| ------- | ----- | -------- | ------------
| `root`      | String   | `null` | `id` of the `root` container. Defaults to the browser viewport if not specified. (see Intersection Observer API [docs](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) for details).
| `rootMargin`    | String   | `'0px 0px 0px 0px'` | Margin around the root container. Can have values similar to the CSS margin property. E.g. `"10px 20px 30px 40px"`. If the `rootId` is specified the values can be percentages. (see Intersection Observer API [docs](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) for details).
| `threshold`     | Number   | `0` | A single number which indicates at what percentage of the elements visibility the observer's callback should be executed. E.g. If you want to detect when visibility passes the 50% mark (half of the element is visible within the root element), you can use a value of `0.5`. (see Intersection Observer API [docs](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) for details).
| `once`     | Boolean   | false | When set to true, observation stops once the element has entered the viewport.
| `isVisible`     | Boolean   | false | True when the element being observed enters the viewport.
| `children`     | Function   |  | `(RenderPropArgs) => React.ReactNode`

```TypeScript
interface RenderPropArgs {
  isVisible: boolean;
  elementRef: React.RefObject<any>;
}
```

## License

Licensed under the MIT License, Copyright © 2019 Reece Lucas.

See [LICENSE](./LICENSE) for more information.
