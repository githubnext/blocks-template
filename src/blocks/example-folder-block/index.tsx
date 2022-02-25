import { FolderBlockProps } from "@githubnext/utils";

export default function (props: FolderBlockProps) {
  return (
    <div className="Box m-4">
      <div className="Box-header">
        <h3 className="Box-title">This is the folder content.</h3>
      </div>
      <div className="Box-body">
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
      </div>
    </div>
  );
}
