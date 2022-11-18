import "./index.css";

if (window === window.top) {
  window.location.href = `https://blocks.githubnext.com/githubnext/blocks-tutorial?devServer=${encodeURIComponent(
    window.location.href
  )}`;
} else {
  let entry;
  let setBlockProps;
  let props = {};

  const onMessage = (event: MessageEvent) => {
    const { data } = event;
    if (data.type === "setProps") {
      props = { ...props, ...data.props.props };
      if (props.block && entry !== props.block.entry) {
        entry = props.block.entry;
        const imports = import.meta.glob("../blocks/**");
        const importPath = "../" + props.block.entry;
        const importContent = imports[importPath];
        importContent().then((content) => {
          setBlockProps = content.default;
          setBlockProps(props);
        });
      }
      if (setBlockProps) setBlockProps(props);
    }
  };
  addEventListener("message", onMessage);

  window.top?.postMessage(
    {
      type: "loaded",
      hash: window.location.hash,
    },
    "*"
  );
}

/*
TODO
- [x] strip out React stuff
- [ ] hook up rest of message passing API
- [ ] handle code bundles
- [ ] hot reload block code in dev
  - turns out this works via HMR and the Vite React plugin
  - so this works out of the box as long as the plugin is enabled
  - the whole block module is reloaded, currently `createRoot` is called every time
*/
