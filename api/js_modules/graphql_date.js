const { GraphQLScalarType } = require('graphql'); // Scalars allow transformations of data due to limitations of JSON,using Strings.
const { Kind } = require('graphql/language');

// Library allows for type checking of graphql data objects.
const GraphQLDate = new GraphQLScalarType({
  name: 'GraphQLDate',
  description: 'A Date() type in GraphQL as a scalar.',
  serialize(value) {
    return value.toISOString();
  },
  parseValue(value) {
    const dateValue = new Date(value);
    return isNaN(dateValue) ? undefined : dateValue;
    // return new Date(value);
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      const dateValue = new Date(ast.value);
      return isNaN(dateValue) ? undefined : dateValue;
      // return new Date(ast.value);
    } return undefined;
  },
});


module.export = GraphQLDate;