import fs from 'node:fs';
const dimensions = JSON.parse(fs.readFileSync(new URL('../data/image-dimensions.json', import.meta.url), 'utf8'));
export default function imageDimensions() {
  return tree => { let count = 0; function visit(node) { if(node.type === 'element' && node.tagName === 'img') { const size = dimensions[node.properties.src]; if(size) {node.properties.width=size.width;node.properties.height=size.height;} node.properties.loading=count++ === 0 ? 'eager' : 'lazy';node.properties.decoding='async'; } if(node.children) node.children.forEach(visit); } visit(tree); };
}
