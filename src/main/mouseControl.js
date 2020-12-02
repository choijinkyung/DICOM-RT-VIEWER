import React from "react";
import {MapInteractionCSS} from "react-map-interaction";
/**
 * Controlled
 * @class
 * @description
 * Performs CT Image, DOSE, and RT STRUCTURE simultaneously with Zoom in, out, and pan.
 * @author Choi jin kyung
 */
class Controlled extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: {
                scale: 1,
                translation: {x: 0, y: 0}
            }
        };
    }

    render() {
        const {scale, translation} = this.state;

        return (
            <MapInteractionCSS
                value={this.state.value}
                onChange={(value) => this.setState({value})}
            >
                <div id="dicomImage" className="viewportElement"
                     ref={input => {
                         this.element = input;
                     }}>
                    <canvas id="myCanvas" className={"canvas"} width={512} height={512}/>
                </div>
            </MapInteractionCSS>
        );
    }
}

export default Controlled
