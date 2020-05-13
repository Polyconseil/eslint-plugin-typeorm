"use strict";

module.exports = {
  rules: {
    "no-double-where-query": {
      meta: {
        type: "problem",
        docs: {
          description: "Detects uses of chained where().where()",
        },
        fixable: null,
      },

      create: function (context) {
        return {
          MemberExpression: (astNode) => {
            if (astNode.property.name === "where") {
              if (
                astNode.object.type === "CallExpression" &&
                astNode.object.callee.type === "MemberExpression" &&
                astNode.object.callee.property.name === "where" // where().where()
              ) {
                context.report({
                  node: astNode.object.callee,
                  message:
                    "Don't use where().where(), use where().andWhere()/where().orWhere() instead.",
                });
              }
            }
          },
        };
      },
    },
  },
};
