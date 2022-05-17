import { FolderBlockProps } from "@githubnext/blocks";
import { Box } from "@primer/react";

export default function (props: FolderBlockProps) {
  return (
    <Box p={4}>
      <Box
        borderColor="border.default"
        borderWidth={1}
        borderStyle="solid"
        borderRadius={6}
        overflow="hidden"
      >
        <Box
          bg="canvas.subtle"
          p={3}
          borderBottomWidth={1}
          borderBottomStyle="solid"
          borderColor="border.default"
        >
          This is the folder content.
        </Box>
        <Box p={4}>
          <table style={{ textAlign: "left" }}>
            <thead>
              <tr>
                <th className="p-1">Path</th>
                <th className="p-1">Size</th>
                <th className="p-1">Type</th>
              </tr>
            </thead>
            <tbody>
              {props.tree.map((item, index) => (
                <tr key={index}>
                  <td className="p-1">{item.path}</td>
                  <td className="p-1">{item.size}</td>
                  <td className="p-1">{item.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
      </Box>
    </Box>
  );
}