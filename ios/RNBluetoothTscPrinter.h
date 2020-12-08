//
//  RNBluetoothTscPrinter.h
//  RNBluetoothEscposPrinter
//
//  Created by januslo on 2018/10/1.
//  Copyright © 2018年 Facebook. All rights reserved.
//
#ifndef RNBluetoothTscPrinter_h
#define RNBluetoothTscPrinter_h

#import <React/RCTBridgeModule.h>
#import "RNBluetoothManager.h"
@interface RNBluetoothTscPrinter : NSObject <RCTBridgeModule,WriteDataToBleDelegate>

@end

#endif /* RNBluetoothTscPrinter_h */
