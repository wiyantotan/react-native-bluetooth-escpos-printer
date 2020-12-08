import { NativeModules } from 'react-native';

type BluetoothEscposPrinterType = {
  setWidth(width: number): void;
  printerInit(): Promise<any>;
  printerLeftSpace(sp: number): Promise<any>;
  printerUnderLine(sp: number): Promise<any>;
  printTextWithCmd(headerCmd: string, bodyText: string, footerCmd: string, encoding: string) : Promise<any>;
  printImageWithCmd(headerCmd: string, base64Img: string, footerCmd: string) : Promise<any>;
  printCmd(cmdString: string, initalValue: Array<number>) :  Promise<any>;
  printText(text: string, options: object): Promise<any>;
  rotate(rotate: number): Promise<any>;
  printerAlign(align: number): Promise<any>;
  printColumn(
    columnWidths: Array<number>,
    columnAligns: Array<number>,
    columnTexts: Array<string>,
    options: object
  ): Promise<any>;
  setBlob(sp: number): Promise<any>;
  printPic(base64encodeStr: string, options: object): Promise<any>;
  printQRCode(
    content: string,
    size: number,
    correctionLevel: number
  ): Promise<any>;
  printBarCode(
    str: string,
    type: number,
    nWidth: number,
    nHeight: number,
    nHriFontType: number,
    nHriFontPosition: number
  ): Promise<any>;
  DIRECTION: object;
  DENSITY: object;
};

const { BluetoothEscposPrinter } = NativeModules;

export default BluetoothEscposPrinter as BluetoothEscposPrinterType;
