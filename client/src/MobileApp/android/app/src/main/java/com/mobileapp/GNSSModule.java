
// package com.mobileapp;

// import android.location.GnssMeasurementsEvent;
// import android.location.GnssNavigationMessage;
// import android.location.GnssStatus;
// import android.location.Location;
// import android.location.LocationListener;
// import android.location.OnNmeaMessageListener;
// import android.os.Bundle;

// import com.facebook.react.bridge.NativeModule;
// import com.facebook.react.bridge.ReactApplicationContext;
// import com.facebook.react.bridge.ReactContext;
// import com.facebook.react.bridge.ReactContextBaseJavaModule;
// import com.facebook.react.bridge.ReactMethod;
// import com.facebook.react.bridge.Callback;
// import com.facebook.react.bridge.Promise;

// import java.util.Map;
// import java.util.HashMap;

// public interface GnssListener {

//     /** @see LocationListener#onProviderEnabled(String) */
//     void onProviderEnabled(String provider);
//     /** @see LocationListener#onProviderDisabled(String) */
//     void onProviderDisabled(String provider);
//     /** @see LocationListener#onLocationChanged(Location) */
//     void onLocationChanged(Location location);
//     /** @see LocationListener#onStatusChanged(String, int, Bundle) */
//     void onLocationStatusChanged(String provider, int status, Bundle extras);
//     /**
//      * @see GnssMeasurementsEvent.Callback#
//      *     onGnssMeasurementsReceived(GnssMeasurementsEvent)
//      */
//     void onGnssMeasurementsReceived(GnssMeasurementsEvent event);
//     /** @see GnssMeasurementsEvent.Callback#onStatusChanged(int) */
//     void onGnssMeasurementsStatusChanged(int status);
//     /** @see GnssNavigationMessage.Callback# onGnssNavigationMessageReceived(GnssNavigationMessage) */
//     void onGnssNavigationMessageReceived(GnssNavigationMessage event);
//     /** @see GnssNavigationMessage.Callback#onStatusChanged(int) */
//     void onGnssNavigationMessageStatusChanged(int status);
//     /** @see GnssStatus.Callback#onSatelliteStatusChanged(GnssStatus) */
//     void onGnssStatusChanged(GnssStatus gnssStatus);
//     /** Called when the listener is registered to listen to GNSS events */
//     void onListenerRegistration(String listener, boolean result);
//     /** @see OnNmeaMessageListener#onNmeaMessage(String, long) */
//     void onNmeaReceived(long l, String s);
//     void onTTFFReceived(long l);
//   }

// public class GNSSModule extends ReactContextBaseJavaModule implements GnssListener {

//   private static final String DURATION_SHORT_KEY = "SHORT";
//   private static final String DURATION_LONG_KEY = "LONG";

//   public GNSSModule(ReactApplicationContext reactContext) {
//     super(reactContext);
//   }

//   @Override
//   public String getName() {
//     return "GNSS";
//   }

//   @Override
//   public Map<String, Object> getConstants() {
//     final Map<String, Object> constants = new HashMap<>();
//     return constants;
//   }
// }