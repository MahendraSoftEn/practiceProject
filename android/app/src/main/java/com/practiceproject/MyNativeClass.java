package com.practiceproject;
import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import javax.annotation.Nonnull;
import javax.annotation.Nullable;

public class MyNativeClass extends ReactContextBaseJavaModule {

    public MyNativeClass(@Nullable  ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Nonnull
    @Override
    public String getName() {
        return "MyNativeModule";
    }

    @ReactMethod
    public void showToast(String name, Callback callback) {

        try {
            String message="hello words Native Code "+name;
            callback.invoke(null,message);

        }
        catch (Exception e){
          callback.invoke(e,null);
        }

    }

    @ReactMethod
    public String getPalindrome(int number,Callback callback){
        String result="";
        try{
             int temp=number;
             int reverse=0;

             while(number>0){

                 int rim=number%10;
                 reverse=reverse*10+rim;
                 number=number/10;
             }
             if(temp==reverse){
                 result="Yes";
             }else {
                 result="NO";
             }
            callback.invoke(null,result);
        }
        catch (Exception e){
            callback.invoke(null,e);
        }
          return result;
    }
}





