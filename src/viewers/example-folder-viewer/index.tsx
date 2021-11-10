import { FolderViewerProps, useTailwindCdn } from "@githubnext/utils";

export function Viewer(props: FolderViewerProps) {
  useTailwindCdn();

  return (
    <div className="max-w-sm">
      <p>This is the folder content.</p>
      <ul className="divide-y">
        {props.tree.map((item, index) => (
          <li className="text-sm py-2" key={index}>
            {item.path}
          </li>
        ))}
      </ul>
    </div>
  );
}
