import React from "react";
import ReactDOMServer from "react-dom/server";

class RenderToString extends React.Component{
    constructor(props) {
        super(props);
      }
      render() {
        return <div>Warren</div>
      }

}

ReactDOMServer.renderToString(<RenderToString />);

export default RenderToString