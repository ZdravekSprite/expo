import MapView, { Marker } from 'react-native-maps';

export const MyMapView = ({
  style = {},
  provider = 'google', //'google' | null
  region = {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
  },
  camera = {
    center: {
      latitude: 0,
      longitude: 0,
    },
    pitch: 0,
    heading: 0,
    altitude: 0, //iOS MapKit
    zoom: 0, //Google Maps
  },
  mapPadding = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  paddingAdjustmentBehavior = 'never', //'always' | 'automatic' | 'never' (GoogleMaps in iOS)
  liteMode = false, //Android
  mapType = 'standard', //'standard' | 'none'(Google Maps) | 'satellite' | 'hybrid' | 'terrain' | 'mutedStandard'(iOS 11.0+)
  customMapStyle = [
    {
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative",
      "stylers": [
        {
          "visibility": "on"
        }
      ]
    },
    {
      "featureType": "landscape",
      "stylers": [
        {
          "visibility": "on"
        }
      ]
    },
    {
      "featureType": "poi",
      "stylers": [
        {
          "visibility": "on"
        }
      ]
    },
    {
      "featureType": "road",
      "stylers": [
        {
          "visibility": "on"
        }
      ]
    },
    {
      "featureType": "transit",
      "stylers": [
        {
          "visibility": "on"
        }
      ]
    },
    {
      "featureType": "water",
      "stylers": [
        {
          "visibility": "on"
        }
      ]
    }
  ],
  userInterfaceStyle = 'light', //'light' | 'dark' (MapKit)
  showsUserLocation = true,
  userLocationPriority = 'high', //'balanced'|'high'|'low'|'passive' (Android)
  onUserLocationChange = () => { },
  onLongPress = () => { },
  onDragEnd = () => { },
  markers = [],
  ...props
}) => {
  return (
    <MapView
      style={style}
      //provider='google'
      region={region}
      //initialRegion={region}
      //camera={camera}
      //initialCamera={camera}
      //mapPadding={mapPadding}
      //paddingAdjustmentBehavior={paddingAdjustmentBehavior}
      //liteMode={liteMode}
      mapType={mapType}
      //customMapStyle={customMapStyle}
      //userInterfaceStyle={userInterfaceStyle}
      //showsUserLocation={showsUserLocation}
      userLocationPriority={userLocationPriority}

      showsUserLocation={true}
      followUserLocation={true}
      userLocationUpdateInterval={0}
      onUserLocationChange={(e) => onUserLocationChange(e)}
      onLongPress={(e) => onLongPress(e)}
    >
      {markers.map((marker, index) => (
        <Marker
          key={index}
          coordinate={marker.latlng}
          title={marker.title}
          description={marker.description}
          draggable
          onDragEnd={(e) => onDragEnd(e, index)}
          onCalloutPress={e => console.log('press', e.nativeEvent, index)}
        />
      ))}
    </MapView>
  );
}