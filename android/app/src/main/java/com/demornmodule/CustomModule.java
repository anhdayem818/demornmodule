package com.demornmodule;

import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class CustomModule extends ReactContextBaseJavaModule {
    private static  ReactApplicationContext reactContext;
    CustomModule(ReactApplicationContext context){
        super(context);
        this.reactContext = context;
    }
    
    @ReactMethod
    public void show(){
        Toast.makeText(reactContext, "Hi Guy.", Toast.LENGTH_SHORT).show();
    }

    @NonNull
    @Override
    public String getName() {
        return "CustomModule";
    }
}
