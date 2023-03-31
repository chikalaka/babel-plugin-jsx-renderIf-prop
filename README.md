# babel-plugin-jsx-renderif-prop
A Babel plugin that adds a renderIf prop to JSX elements for conditionally rendering components in React.

## Installation
```sh
npm install --save-dev babel-plugin-jsx-renderif-prop
```
Or
```sh
yarn add --dev babel-plugin-jsx-renderif-prop
```

## Usage
Add the plugin to your Babel configuration:
```json
{
  "plugins": ["jsx-renderif-prop"]
}
```

## Example
With babel-plugin-jsx-renderif-prop, you can conditionally render components using the renderIf prop:
```jsx
const MyComponent = () => (
  <div>
    <div renderIf={firstCondition} {...divProps} />
    <CustomComponent renderIf={secondCondition} {...customComponentProps} />
  </div>
);
```
This will be transformed into:
```jsx
const MyComponent = () => (
  <div>
    {firstCondition ? <div {...divProps} /> : null}
    {secondCondition ? <CustomComponent {...customComponentProps} /> : null}
  </div>
);
```