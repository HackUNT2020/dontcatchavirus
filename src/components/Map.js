import React from "react"
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends React.Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    onMapClick() {

    }
    render() {
        const heatMapData = {
            positions: [
                { latitude: 34.7123, longitude: 28.4 },
                { lat: 34.768, lng: 28.4 },
                { lat: 34.745, lng: 28.4 },
                { lat: 34.7432, lng: 28.4 }
            ],
            options: {
                radius: 20,
                opacity: 0.6
            }
        };
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '55vh', width: '85%', marginLeft: '10%' , marginTop: '5%'}}>
                <GoogleMapReact
                    ref={(el) => this._googleMap = el}
                    bootstrapURLKeys={{ key: 'AIzaSyBVS7EHVMk5HGMnVXBCks7Xbu_aJvZXDbs' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    heatmapLibrary={true}
                    heatmap={heatMapData}
                    onClick={this.onMapClick.bind(this)}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                    // text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map