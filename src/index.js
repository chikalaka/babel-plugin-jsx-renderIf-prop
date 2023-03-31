const { declare } = require("@babel/helper-plugin-utils");

module.exports = declare((api, options) => {
  api.assertVersion(7)

  const PROP_NAME = "renderIf";

  return {
    name: "babel-plugin-jsx-renderif-prop",

    visitor: {
      JSXElement(path) {
        const openingElement = path.node.openingElement
        const attributeIndex = openingElement.attributes.findIndex(
          (attr) => attr.name && attr.name.name === PROP_NAME
        )

        if (attributeIndex === -1) {
          return
        }

        const attribute = openingElement.attributes[attributeIndex]
        const value =
                attribute.value.type === "JSXExpressionContainer"
                  ? attribute.value.expression
                  : attribute.value

        // Remove the prop
        openingElement.attributes.splice(attributeIndex, 1)

        const conditionalExpression = api.types.conditionalExpression(
          value,
          path.node,
          api.types.nullLiteral()
        )

        path.replaceWith(conditionalExpression)
      }
    }
  }
})
