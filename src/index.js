import { declare } from "@babel/helper-plugin-utils";

module.exports = declare((api, options) => {
  api.assertVersion(7)

  return {
    name: "babel-plugin-show-prop",

    visitor: {
      JSXElement(path) {
        const openingElement = path.node.openingElement
        const showAttributeIndex = openingElement.attributes.findIndex(
          (attr) => attr.name && attr.name.name === "show"
        )

        if (showAttributeIndex === -1) {
          return
        }

        const showAttribute = openingElement.attributes[showAttributeIndex]
        const showValue =
                showAttribute.value.type === "JSXExpressionContainer"
                  ? showAttribute.value.expression
                  : showAttribute.value

        // Remove the 'show' prop
        openingElement.attributes.splice(showAttributeIndex, 1)

        const conditionalExpression = api.types.conditionalExpression(
          showValue,
          path.node,
          api.types.nullLiteral()
        )

        path.replaceWith(conditionalExpression)
      }
    }
  }
})
