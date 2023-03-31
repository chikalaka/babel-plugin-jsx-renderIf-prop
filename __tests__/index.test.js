const { transform } = require("@babel/core");
const plugin = require("../src");

describe("babel-plugin-jsx-renderif-prop", () => {
  const transformCode = (code) =>
    transform(code, {
      plugins: [plugin],
      presets: ["@babel/preset-react"],
      configFile: false,
    }).code.trim();

  test("Conditional rendering with renderIf", () => {
    const input = `
      const MyComponent = () => (
        <div>
          <div renderIf={firstCondition} {...divProps} />
          <CustomComponent  {...customComponentProps} renderIf={secondCondition} />
          <span aProp={true} renderIf={false} bProp={false}>hello world</span>
        </div>
      );
    `;

    const expectedOutput = `
      const MyComponent = () => (
        <div>
          {(firstCondition ? <div {...divProps} /> : null)}
          {(secondCondition ? <CustomComponent {...customComponentProps} /> : null)}
          {false ? <span aProp={true} bProp={false}>hello world</span> : null}
        </div>
      );
    `;

    expect(transformCode(input)).toBe(transformCode(expectedOutput));
  });

  test("Rendering without renderIf", () => {
    const input = `
      const MyComponent = () => (
        <div>
          <div {...divProps} />
          <CustomComponent {...customComponentProps} />
        </div>
      );
    `;

    const expectedOutput = `
      const MyComponent = () => (
        <div>
          <div {...divProps} />
          <CustomComponent {...customComponentProps} />
        </div>
      );
    `;

    expect(transformCode(input)).toBe(transformCode(expectedOutput));
  });
});

