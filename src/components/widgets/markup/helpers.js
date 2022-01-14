import isEqual from 'lodash/isEqual';

export const parser = new DOMParser();

export const scan = ({
  node,
  input = { parent: node, reviewed: false, text: '' },
  limit,
}) => {
  const parse = (stack, child) => {
    const { nodeType, nodeValue } = child;
    const remaining = Math.max(limit - stack.text.length, 0);
    const clear = () => {
      child.remove();

      return stack;
    };
    const review = () => {
      const revision = nodeValue.substring(0, remaining);
      const reviewed = !isEqual(nodeValue.length, revision.length);
      const text = reviewed ? `${revision.trim()}...` : nodeValue;

      child.replaceWith(document.createTextNode(text));

      return Object.assign(stack, {
        reviewed: stack.reviewed || reviewed,
        text: stack.text.concat(text),
      });
    };

    switch (true) {
      case !remaining:
        return clear();
      case isEqual(nodeType, 1):
        return scan({ input: stack, node: child, limit });
      case isEqual(nodeType, 3):
        return review();
      default:
        return stack;
    }
  };

  return Array.from(node.childNodes).reduce(parse, input);
};
