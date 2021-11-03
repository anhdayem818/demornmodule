package com.demornmodule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

public class HeartbeatModule extends ReactContextBaseJavaModule {
  
  public static final String REACT_CLASS = "Heartbeat";
  private static ReactApplicationContext reactContext;

  HeartbeatModule(ReactApplicationContext context) {
    super(context);
    this.reactContext = context;
  }

  @Override
  public String getName() {
    return REACT_CLASS;
  }

  @ReactMethod
  public void startService() {
    // Starting the heartbeat service
    this.reactContext.startService(new Intent(this.reactContext, HeartbeatService.class));
  }
}